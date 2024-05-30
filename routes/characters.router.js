const express = require('express');
const authenticateToken = require('../middleware/auth.js');
const { PrismaClient } = require('../prisma/generated/user/index.js'); // 수정된 경로 확인
const userPrisma = new PrismaClient();

const router = express.Router();

// 캐릭터 생성 (인증 필요)
router.post('/characters', authenticateToken, async (req, res) => {
  try {
    const { name } = req.body;
    const existingCharacter = await userPrisma.character.findUnique({
      where: { name }
    });
    if (existingCharacter) {
      return res.status(400).json({ message: '이미 존재하는 캐릭터 이름입니다!' });
    }
    const newCharacter = await userPrisma.character.create({
      data: {
        name,
        health: 500,
        power: 100,
        money: 10000,
        userId: req.user.id,
      }
    });
    res.status(201).json({ character_id: newCharacter.id });
  } catch (err) {
    res.status(500).json(err);
  }
});

// 캐릭터 인벤토리 조회 (인증 필요)
router.get('/characters/:characterId/inventory', authenticateToken, async (req, res) => {
  try {
    const { characterId } = req.params;
    const inventory = await userPrisma.inventory.findMany({
      where: { characterId: parseInt(characterId) },
      select: { itemId: true, quantity: true },
    });

    const inventoryDetails = await Promise.all(inventory.map(async (inv) => {
      const item = await gamePrisma.item.findUnique({
        where: { code: inv.itemId },
        select: { code: true, name: true },
      });
      return { ...item, quantity: inv.quantity };
    }));

    res.status(200).json(inventoryDetails);
  } catch (err) {
    res.status(500).json(err);
  }
});

// 아이템 장착 (인증 필요)
router.post('/characters/:characterId/equip', authenticateToken, async (req, res) => {
  try {
    const { characterId } = req.params;
    const { item_code } = req.body;

    const character = await userPrisma.character.findUnique({
      where: { id: parseInt(characterId) },
    });

    if (!character) {
      return res.status(404).json({ error: '캐릭터를 찾지 못하였습니다.' });
    }

    const inventoryItem = await userPrisma.inventory.findFirst({
      where: {
        characterId: parseInt(characterId),
        itemId: item_code,
      },
    });

    if (!inventoryItem || inventoryItem.quantity < 1) {
      return res.status(400).json({ error: '인벤토리에 해당 아이템이 존재하지 않습니다.' });
    }

    const item = await gamePrisma.item.findUnique({
      where: { code: item_code },
    });

    if (!item) {
      return res.status(404).json({ error: '아이템을 찾지 못하였습니다' });
    }

    // 장착 처리
    await userPrisma.equippedItem.create({
      data: {
        characterId: parseInt(characterId),
        itemId: item_code,
      },
    });

    character.health += item.stat.health;
    character.power += item.stat.power;

    await userPrisma.character.update({
      where: { id: parseInt(characterId) },
      data: {
        health: character.health,
        power: character.power,
      },
    });

    await userPrisma.inventory.update({
      where: { id: inventoryItem.id },
      data: { quantity: inventoryItem.quantity - 1 },
    });

    res.status(200).json({ health: character.health, power: character.power });
  } catch (err) {
    res.status(500).json(err);
  }
});

// 아이템 탈착 (인증 필요)
router.post('/characters/:characterId/unequip', authenticateToken, async (req, res) => {
  try {
    const { characterId } = req.params;
    const { item_code } = req.body;

    const character = await userPrisma.character.findUnique({
      where: { id: parseInt(characterId) },
    });

    if (!character) {
      return res.status(404).json({ error: '캐릭터를 찾지 못하였습니다' });
    }

    const equippedItem = await userPrisma.equippedItem.findFirst({
      where: {
        characterId: parseInt(characterId),
        itemId: item_code,
      },
    });

    if (!equippedItem) {
      return res.status(400).json({ error: '아이템이 장착되있지 않습니다' });
    }

    const item = await gamePrisma.item.findUnique({
      where: { code: item_code },
    });

    if (!item) {
      return res.status(404).json({ error: '아이템을 찾지 못하였습니다' });
    }

    // 탈착 처리
    await userPrisma.equippedItem.delete({
      where: { id: equippedItem.id },
    });

    character.health -= item.stat.health;
    character.power -= item.stat.power;

    await userPrisma.character.update({
      where: { id: parseInt(characterId) },
      data: {
        health: character.health,
        power: character.power,
      },
    });

    const inventoryItem = await userPrisma.inventory.findFirst({
      where: {
        characterId: parseInt(characterId),
        itemId: item_code,
      },
    });

    if (inventoryItem) {
      await userPrisma.inventory.update({
        where: { id: inventoryItem.id },
        data: { quantity: inventoryItem.quantity + 1 },
      });
    } else {
      await userPrisma.inventory.create({
        data: {
          characterId: parseInt(characterId),
          itemId: item_code,
          quantity: 1,
        },
      });
    }

    res.status(200).json({ health: character.health, power: character.power });
  } catch (err) {
    res.status(500).json(err);
  }
});

// 게임 머니 벌기 (인증 필요)
router.post('/characters/:characterId/earn', authenticateToken, async (req, res) => {
  try {
    const { characterId } = req.params;
    const character = await userPrisma.character.findUnique({
      where: { id: parseInt(characterId) },
    });

    if (!character) {
      return res.status(404).json({ error: '캐릭터를 찾지 못하였습니다' });
    }

    character.money += 100;

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


