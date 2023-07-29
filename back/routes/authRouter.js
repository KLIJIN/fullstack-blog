import express from "express";
const authRouter = express.Router();
import UserModel from '../models/user.js'

authRouter.route("/")
  .post(async (req, res) => {
    const { userId } = req;
    try {
      const user = await UserModel.findById(userId);
      const { passwordHash, ...userData } = user._doc;
      res.json(userData);
    } catch (err) {
      console.error(err);
      res.status(404).json({
        message: "пользователь не найден"
      });
    }
  });

export default authRouter;
