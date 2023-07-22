import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';


mongoose.connect('mongodb+srv://admin:3KvKcAQmY2VGI4FJ@cluster0.9l3gh.mongodb.net/?retryWrites=true&w=majority')
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

app.listen(8000, () => {
  console.log('Сервер запущен')
})