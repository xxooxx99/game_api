const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const characterRoutes = require('./routes/characters.router.js');
const itemRoutes = require('./routes/items.router.js');
const authRoutes = require('./routes/auth.router.js');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Game Item Simulator가 정상적으로 실행되었습니다!');
});

app.use('/api', characterRoutes);
app.use('/api', itemRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
