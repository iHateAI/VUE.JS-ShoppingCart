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
const cartsRouter = require('./src/routes/carts');

const passportConfig = require('./src/passport');
dotenv.config();
passportConfig();

app.set('port', process.env.PORT);

// middlewares
app.use(morgan('dev'));
app.use(cors({ origin: 'http://localhost:8080', credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('coocookie'));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: 'coocookie',
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

//라우터 연결
app.use('/api', homeRouter); 
app.use('/api/auth', authRouter);
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

// 에러 처리
app.use((err, req, res, next) => {
  console.log(err);
});

app.listen(app.get('port'), () => {
  console.log(`http://localhost:${app.get('port')}`);
});
