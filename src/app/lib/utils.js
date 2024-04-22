import jwt from 'jsonwebtoken';

export const jwtSign = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET);
};

export const jwtVerify = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
