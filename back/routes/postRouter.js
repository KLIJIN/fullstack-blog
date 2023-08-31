import express from "express";
import PostModel from "../models/post.js";
import { postValidator } from "../validations/post.js";
import { checkAuth } from "../utils/checkAuth.js";

const postRouter = express.Router();

postRouter
  // получение всех статей
  .get("/", async (req, res) => {
    try {
      // получение всех статей
      const postList = await PostModel.find()
        .populate({ path: "user", select: ["fullName", "avatarUrl"] })
        .exec();
      res.json(postList);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Не получить посты"
      });
    }
  })

  // создание статьи
  .post("/", checkAuth, postValidator, async (req, res) => {
    const { title, text, imageUrl, tags } = req.body;

    try {
      // создаем документ
      const doc = new PostModel({
        title,
        text,
        tags,
        imageUrl,
        user: req.userId // req.userId тут берется из checkAuth который его из токена в хедере расковыривает
      });
      const post = await doc.save();
      res.send(post);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Не удалось создать пост"
      });
    }
  })
  // Удаление одной статьи
  .delete("/:id", checkAuth, async (req, res) => {
    const postId = req.params.id;
    try {
      const filter = { _id: postId };

      const doc = await PostModel.findOneAndDelete(filter);
      if (!doc) {
        return res.status(404).json({
          message: "Статья не найдена"
        });
      }
      res.json({
        succes: true
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Не удалось удалить статью"
      });
    }
  })
  // Редактирование одной статьи
  .patch("/:id", checkAuth, postValidator, async (req, res) => {
    const postId = req.params.id;
    const { title, text, imageUrl, tags } = req.body;

    try {
      const filter = { _id: postId };
      const update = {
        title,
        text,
        imageUrl,
        user: req.userId,
        tags
      };
      const doc = await PostModel.updateOne(filter, update);

      if (!doc) {
        return res.status(404).json({
          message: "Статья не найдена"
        });
      }

      res.json({
        succes: true
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Не удалось обновить статью"
      });
    }
  })
  // получение всех тегов
  .get("/tags", async (req, res) => {
    try {
      const postList = await PostModel.find().limit(5).exec();
      const tags = await postList
        .map((post) => post.tags)
        .flat()
        .slice(0, 5);
      return res.json(tags);
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Не получить посты"
      });
    }
  })
  // получение одной статьи
  .get("/:id", async (req, res) => {
    const postId = req.params.id;
    try {
      const filter = { _id: postId };
      const update = { $inc: { viewsCount: 1 } };

      const doc = await PostModel.findOneAndUpdate(filter, update, {
        returnDocument: "after"
      });

      const post = await PostModel.findOne(filter)
        .populate({ path: "user", select: ["fullName", "avatarUrl"] })
        .exec();
      const { user } = post;
      if (!doc) {
        return res.status(404).json({
          message: "Статья не найдена"
        });
      }
      res.json({ doc, user });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Не удалось получить статью"
      });
    }
  });

export default postRouter;
