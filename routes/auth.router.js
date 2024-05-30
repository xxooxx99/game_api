const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('../prisma/generated/user/index.js'); // 수정된 경로 확인
const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY;
const userPrisma = new PrismaClient();

// 회원가입
router.post('/register', async (req, res) => {
  try {
    const { username, password, confirmPassword, name } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: '비밀번호가 일치하지 않습니다' });
    }

    const existingUser = await userPrisma.user.findUnique({
      where: { username }
    });

    if (existingUser) {
      return res.status(400).json({ error: '이미 존재하는 이름입니다' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await userPrisma.user.create({
      data: {
        username,
        password: hashedPassword,
        name,
      }
    });

    res.status(201).json({
      id: newUser.id,
      username: newUser.username,
      name: newUser.name,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// 로그인
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await userPrisma.user.findUnique({
      where: { username }
    });

    if (!user) {
      return res.status(404).json({ error: '해당 유저를 찾을 수 없습니다' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ error: '비밀번호가 틀립니다' });
    }

    const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1h' });

    res.json({ token });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
