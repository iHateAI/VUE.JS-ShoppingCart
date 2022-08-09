//모듈 불러오기
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();

//라우터 불러오기
const homeRouter = require('./src/routes/home');
const authRouter = require('./src/routes/auth');

dotenv.config();

app.set('port', process.env.PORT);

//third-party middlewares
app.use(cors());

//라우터 연결
app.use('/api', homeRouter);
app.use('/api/auth', authRouter);

app.listen(app.get('port'), () => {
  console.log(`http://localhost:${app.get('port')}`);
});
