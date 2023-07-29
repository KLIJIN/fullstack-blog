import express from 'express';
import mongoose from 'mongoose';
import { registerValidator } from "./validations/auth.js"
import { checkAuth } from './utils/checkAuth.js'

import { loginRouter, registerRouter, authRouter } from "./routes/index.js";


mongoose.connect('mongodb+srv://admin:3KvKcAQmY2VGI4FJ@cluster0.9l3gh.mongodb.net/blog?retryWrites=true&w=majority')
  .then(() => {
    console.log('Выполнено подключение к БД');
  })
  .catch((err) => {
    console.log(err)
  });

const app = express();
app.use(express.json()); // чтение body запросов
export const sekretKey = 'secret123';

app.get('/', (req, res) => {
  res.send('Hello word')
})

// авторизация нового пользователя
app.use('/auth/login', loginRouter);

// регистрация нового пользователя
app.use('/auth/register', registerValidator, registerRouter);

// получение справочной информации о пользователе, с middlware
app.use('/auth/me', checkAuth, authRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log('Сервер запущен');
});