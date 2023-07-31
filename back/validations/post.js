
import { body } from 'express-validator'


export const postValidator = [
  body('title', 'Необходим заголовок статьи').isLength({ min: 3 }),
  body('text', 'Необходим текст статьи').isLength({ min: 10 }),
  body('tags', 'Неверный формат тэгов').optional().isString(),
  body('imageUrl', 'Неверное изображение').optional().isString(),
]

