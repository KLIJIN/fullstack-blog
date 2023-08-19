import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import { registerValidator, loginValidator } from "./validations/index.js";
import { checkAuth, checkValidationErrors } from "./utils/index.js";
import { loginRouter, registerRouter, authRouter, postRouter } from "./routes/index.js";

export const sekretKey = 'secret123';
mongoose.connect('mongodb+srv://admin:3KvKcAQmY2VGI4FJ@cluster0.9l3gh.mongodb.net/blog?retryWrites=true&w=majority')
  .then(() => {
    console.log('Выполнено подключение к БД');
  })
  .catch((err) => {
    console.log(err)
  });

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, 'uploads');
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });



const app = express();
app.use(express.json()); // чтение body запросов
app.use('/uploads', express.static('uploads')); // доступ к статичным файлам

app.get('/', (req, res) => {
  res.send('Hello word')
})

// авторизация пользователя
app.use('/auth/login', loginValidator, checkValidationErrors, loginRouter);

// регистрация нового пользователя
app.use('/auth/register', registerValidator, checkValidationErrors, registerRouter);

// получение справочной информации о пользователе, с middlware
app.use('/auth/me', checkAuth, authRouter);

// управление постами, создание, чтение, редактирование, удаление
app.use('/posts', postRouter);

// загрузка файлов на сервер
app.use('/upload', checkAuth, upload.single('image'), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Сервер запущен. порт ${PORT}`);
});