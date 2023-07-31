import jwt from 'jsonwebtoken';
import { sekretKey } from '../server.js';


export const checkAuth = async (req, res, next) => {
  const token = await (req.headers.authorization || '').replace('Bearer ', '');
  console.log(token);
  if (!token) {
    return res.status(403).json({
      error: 'укажите токен',
    })
  }
  try {
    const decoded = await jwt.verify(token, sekretKey);
    console.log(decoded);

    // добавление в req нового поля
    req.userId = decoded._id;

    next();
  } catch (e) {
    console.log(e);
    return res.status(403).json({
      error: 'Ошибка авторизации',
    })
  }
};
