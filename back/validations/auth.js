
import { body } from 'express-validator'

export const registerValidator = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Неверный формат пароля').isLength({ min: 5 }),
  body('fullName', 'Имя должно быть строкой и длиннее 3 символов').isLength({ min: 3 }),
  body('avatarUrl', "УРЛ должен быть ссылкой").optional().isURL(),
];
