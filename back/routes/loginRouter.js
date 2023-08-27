import express from "express";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import UserModel from '../models/user.js';
import { sekretKey } from '../server.js';

const loginRouter = express.Router();

loginRouter
  .post('/', async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await UserModel.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'Пользователь или пароль не верны' });
      }

      const isValidPass = await bcrypt.compare(password, user._doc.passwordHash);
      console.log('isValidPass', isValidPass);
      if (!isValidPass) {
        return res.status(404).json({ message: 'Пользователь или пароль не верны' });
      }

      // создаем signIn token
      const token = jwt.sign({ _id: user._id }, sekretKey, { expiresIn: '30d' });
      
      const { passwordHash, ...userData } = user._doc;
      res.json({ userData, token })
    } catch (err) {
      console.error(err)
      res.status(500).json({
        message: "Не удалось авторизоваться"
      });
    }
  });

export default loginRouter;