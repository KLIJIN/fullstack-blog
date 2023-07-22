import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';
import { registerValidator } from "./validations/auth.js"
import UserModel from './models/user.js'

mongoose.connect('mongodb+srv://admin:3KvKcAQmY2VGI4FJ@cluster0.9l3gh.mongodb.net/blog?retryWrites=true&w=majority')
  .then(() => {
    console.log('Выполнено подключение к БД');
  })
  .catch((err) => {
    console.log(err)
  })

const app = express();
app.use(express.json()); // чтение body запросов


app.get('/', (req, res) => {
  res.send('Hello word')
})


app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  // генерируем токен для возвращения клиенту
  const token = jwt.sign({
    email,
    fullName: 'Вася ИВАНОВ',
  }, "secret123")
  console.log(req.body)
  res.json({
    success: true,
    token
  })
})

app.post('/auth/register', registerValidator, async (req, res) => {
  try {
    const { body: { email, fullName, avatarUrl, password } } = req;
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array())
    }

    // шифрование пароля
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const doc = new UserModel({
      email: email,
      fullName: fullName,
      avatarUrl: avatarUrl,
      passwordHash,
    })

    // сохраняем юзера в БД
    const user = await doc.save();

    // создаем signIn token
    const token = jwt.sign({ _id: user._id }, 'secret123', { expiresIn: '30d' })

    res.json({ ...user._doc, token })
  } catch (err) {
    console.error(err)
    res.json({
      message: err
    })


  }
})

app.listen(8000, () => {
  console.log('Сервер запущен')
})