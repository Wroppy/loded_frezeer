import connectToDb from "./connectToDb";
const { User } = require("./models");

export const getUsers = async () => {
  await connectToDb();
  const users = await User.find();
  return users;
};

