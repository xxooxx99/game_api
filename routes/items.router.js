const express = require('express');
const authenticateToken = require('../middleware/auth.js');
const { PrismaClient } = require('../prisma/generated/game/index.js');
const gamePrisma = new PrismaClient();
const { PrismaClient: UserPrismaClient } = require('../prisma/generated/user/index.js');
const userPrisma = new UserPrismaClient();


const router = express.Router();

// 아이템 생성 (인증 필요)
router.post('/items', authenticateToken, async (req, res) => {
  try {
    const { item_code, item_name, item_stat } = req.body;
    const newItem = await gamePrisma.item.create({
      data: {
        code: item_code,
        name: item_name,
        stat: item_stat,
        price: req.body.price,
      }
    });
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json(err);
  }
});

// 아이템 수정 (인증 필요)
router.put('/items/:code', authenticateToken, async (req, res) => {
  try {
    const { code } = req.params;
    const { item_name, item_stat } = req.body;
    const updatedItem = await gamePrisma.item.update({
      where: { code: parseInt(code) },
      data: {
        name: item_name,
        stat: item_stat,
      }
    });
    if (!updatedItem) {
      return res.status(404).json({ message: '해당 아이템을 찾지 못했습니다!' });
    }
    res.status(200).json(updatedItem);
  } catch (err) {
    res.status(500).json(err);
  }
});

// 아이템 목록 조회
router.get('/items', async (req, res) => {
  try {
    const items = await gamePrisma.item.findMany({
      select: { code: true, name: true, price: true }
    });
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json(err);
  }
});

// 아이템 상세 조회
router.get('/items/:code', async (req, res) => {
  try {
    const { code } = req.params;
    const item = await gamePrisma.item.findUnique({
      where: { code: parseInt(code) },
      select: { code: true, name: true, stat: true, price: true }
    });
    if (!item) {
      return res.status(404).json({ message: '해당 아이템을 찾지 못했습니다!' });
    }
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json(err);
  }
});

// 아이템 구입 (인증 필요)
router.post('/buy/:characterId', authenticateToken, async (req, res) => {
  try {
    const { characterId } = req.params;
    const items = req.body;

    const character = await userPrisma.character.findUnique({
      where: { id: parseInt(characterId) },
    });

    if (!character) {
      return res.status(404).json({ error: '캐릭터를 찾지 못하였습니다' });
    }

    let totalCost = 0;
    for (const item of items) {
      const dbItem = await gamePrisma.item.findUnique({
        where: { code: item.item_code },
      });
      if (!dbItem) {
        return res.status(404).json({ error: `아이템 코드 : ${item.item_code} 를 찾지 못하였습니다` });
      }
      totalCost += dbItem.price * item.count;
    }

    if (character.money < totalCost) {
      return res.status(400).json({ error: '미네랄이 부족합니다' });
    }

    character.money -= totalCost;
    await userPrisma.character.update({
      where: { id: parseInt(characterId) },
      data: { money: character.money },
    });

    for (const item of items) {
      await userPrisma.inventory.create({
        data: {
          characterId: parseInt(characterId),
          itemId: item.item_code,
          quantity: item.count,
        },
      });
    }

    res.status(200).json({ money: character.money });
  } catch (err) {
    res.status(500).json(err);
  }
});

// 아이템 판매 (인증 필요)
router.post('/sell/:characterId', authenticateToken, async (req, res) => {
  try {
    const { characterId } = req.params;
    const items = req.body;

    const character = await userPrisma.character.findUnique({
      where: { id: parseInt(characterId) },
    });

    if (!character) {
      return res.status(404).json({ error: '캐릭터를 찾지 못하였습니다' });
    }

    let totalGain = 0;
    for (const item of items) {
      const inventoryItem = await userPrisma.inventory.findFirst({
        where: {
          characterId: parseInt(characterId),
          itemId: item.item_code,
        },
      });
      if (!inventoryItem || inventoryItem.quantity < item.count) {
        return res.status(400).json({ error: `아이템 코드: ${item.item_code} 를 보관할 양이 부족합니다` });
      }

      const dbItem = await gamePrisma.item.findUnique({
        where: { code: item.item_code },
      });
      if (!dbItem) {
        return res.status(404).json({ error: `아이템 코드 : ${item.item_code} 를 찾지 못하였습니다` });
      }

      totalGain += (dbItem.price * item.count) * 0.6;

      await userPrisma.inventory.update({
        where: { id: inventoryItem.id },
        data: { quantity: inventoryItem.quantity - item.count },
      });
    }

    character.money += totalGain;
    await userPrisma.character.update({
      where: { id: parseInt(characterId) },
      data: { money: character.money },
    });

    res.status(200).json({ money: character.money });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
