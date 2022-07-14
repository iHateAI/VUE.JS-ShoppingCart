const express = require('express');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

app.set('port', process.env.PORT);

app.get('/', (req, res) => {
  res.send('연결됐다고');
});

app.listen(app.get('port'), () => {
  console.log(`http://localhost:${app.get('port')}`);
});
