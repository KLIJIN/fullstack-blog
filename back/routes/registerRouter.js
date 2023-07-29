import express from "express";
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';
const registerRouter = express.Router();
import UserModel from '../models/user.js'

registerRouter.route("/")
  .post(async (req, res) => {
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
  });

export default registerRouter;