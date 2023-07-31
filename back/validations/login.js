
import { body } from 'express-validator'

export const loginValidator = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Неверный формат пароля').isLength({ min: 5 }),
];
