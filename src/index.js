import express from 'express'

import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import serverRender from './serverRender'

import userRouter from '@/router/users'

export const HOST = 'http://localhost';
export const PORT = 8888;
export const DOMAIN = 'BBS';
export const DB = 'mongodb://localhost:27017/blog';

mongoose.connect(
  DB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) throw err;
    console.log('已连接到数据库。。。');

    const app = express();

    app.use(bodyParser.json());
    app.use(express.static('public'));

    app.use('/api/users', userRouter)

    app.use(serverRender);

    app.listen(PORT, () => [
      console.log(`App listening on ${HOST}:${PORT}`)
    ])
  }
)

