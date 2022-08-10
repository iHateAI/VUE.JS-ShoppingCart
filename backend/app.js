//모듈 불러오기
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

const app = express();

//라우터 불러오기
const homeRouter = require('./src/routes/home');
const authRouter = require('./src/routes/auth');
const productsRouter = require('./src/routes/products');

dotenv.config();
// const passportConfig = require('./src/passport');

// passportConfig();
app.set('port', process.env.PORT);

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);
// app.use(passport.initialize());
// app.use(passport.session());

//라우터 연결
app.use('/api', homeRouter);
app.use('/api/auth', authRouter);
app.use('/api/products', productsRouter);

app.listen(app.get('port'), () => {
  console.log(`http://localhost:${app.get('port')}`);
});
