const jwt = require('jsonwebtoken');
const { PrismaClient } = require('../prisma/generated/user/index.js');

const SECRET_KEY = process.env.SECRET_KEY;
const userPrisma = new PrismaClient();

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, async (err, user) => {
    if (err) return res.sendStatus(403);

    const dbUser = await userPrisma.user.findUnique({
      where: { id: user.userId }
    });

    if (!dbUser) return res.sendStatus(403);

    req.user = dbUser;
    next();
  });
};

module.exports = authenticateToken;
