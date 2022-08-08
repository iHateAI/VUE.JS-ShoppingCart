//모듈 불러오기
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();

//라우터 불러오기
const homeRouter = require('./src/routes/home');

dotenv.config();

app.set('port', process.env.PORT);

//third-party middlewares
app.use(cors());

//라우터 연결
app.use('/api', homeRouter);

app.listen(app.get('port'), () => {
  console.log(`http://localhost:${app.get('port')}`);
});
