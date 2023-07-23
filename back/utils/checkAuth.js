import jwt from 'jsonwebtoken';



export const checkAuth = (req, res, next) => {
  const token = req.headers.autorization;
  console.log('token', token);
}