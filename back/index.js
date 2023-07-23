import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';
import { registerValidator } from "./validations/auth.js"
import UserModel from './models/user.js'
import { checkAuth } from './utils/checkAuth.js'

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

// авторизация нового пользователя
app.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;
  try {

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Пользователь или пароль не верны' });
    }

    const isValidPass = await bcrypt.compare(password, user._doc.passwordHash);
    console.log(isValidPass);
    if (!isValidPass) {
      return res.status(404).json({ message: 'Пользователь или пароль не верны' });
    }

    // создаем signIn token
    const token = jwt.sign({ _id: user._id }, 'secret123', { expiresIn: '30d' })
    const { passwordHash, ...userData } = user._doc;
    res.json({ userData, token })
  } catch (err) {
    console.error(err)
    res.status(500).json({
      message: "Не удалось авторизоваться"
    });
  }
})

// регистрация нового пользователя
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
    res.status(500).json({
      message: err
    });
  }
})


// получение справочной информации о пользователе
app.get('/auth/me', () => {

  try {

  } catch (err) {

  }
})

app.listen(8000, () => {
  console.log('Сервер запущен')
})