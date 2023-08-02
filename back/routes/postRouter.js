import express from "express";
import PostModel from "../models/post.js";
import { postValidator } from "../validations/post.js";
import { checkAuth } from "../utils/checkAuth.js";

const postRouter = express.Router();

postRouter
  // получение всех статей
  .get('/', async (req, res) => {
    try {
      // получение всех статей
      const postList = await PostModel.find();
      // console.log(postList);
      res.json(postList);
    } catch (err) {
      console.error(err)
      res.status(500).json({
        message: "Не получить посты",
      });
    }
  })
  // получение одной статьи
  .get('/:id', async (req, res) => {
    const postId = req.params.id;
    console.log('46 postId', postId);
    try {
      const filter = { _id: postId };
      const update = { $inc: { viewsCount: 1 } };

      const doc = await PostModel.findOneAndUpdate(filter, update, {
        returnDocument: "after",
      });
      console.log('54 doc', doc);
      if (!doc) {
        return res.status(404).json({
          message: 'Статья не найдена',
        });
      }
      res.json(doc);

    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Не удалось получить статью",
      });
    }
  })
  // создание статьи
  .post('/', checkAuth, postValidator, async (req, res) => {
    const { title, text, imageUrl, tags } = req.body;
    console.log(req.body, req.userId);
    try {
      // создаем документ
      const doc = new PostModel({
        title,
        text,
        tags,
        imageUrl,
        user: req.userId,
      });
      const post = await doc.save();
      res.send(post);
    } catch (err) {
      console.error(err)
      res.status(500).json({
        message: "Не удалось создать пост",
      });
    }
  })
  // Удаление одной статьи
  .delete('/:id', checkAuth, async (req, res) => {
    const postId = req.params.id;
    console.log('73 postId', postId);
    try {
      const filter = { _id: postId };

      const doc = await PostModel.findOneAndDelete(filter);
      console.log('78 doc', doc);
      if (!doc) {
        return res.status(404).json({
          message: 'Статья не найдена',
        });
      }
      res.json({
        succes: true,
      });

    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Не удалось удалить статью",
      });
    }
  })
  // Редактирование одной статьи
  .patch('/:id', checkAuth, postValidator, async (req, res) => {
    const postId = req.params.id;
    const { title, text, imageUrl, tags } = req.body;
    console.log('99 postId', postId);

    try {
      const filter = { _id: postId };
      const update = {
        title,
        text,
        imageUrl,
        user: req.userId,
        tags,
      };
      const doc = await PostModel.updateOne(filter, update);
      console.log('111 doc', doc);

      if (!doc) {
        return res.status(404).json({
          message: 'Статья не найдена',
        });
      }

      res.json({
        succes: true,
      });

    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Не удалось обновить статью",
      });
    }
  });

export default postRouter;
