import * as jwt from "jsonwebtoken";

export const jwtSign = async (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET);
};

export const jwtVerify = async (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
