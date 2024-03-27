import connectToDb from "./connectToDb";
const { User } = require("./models");
import { hashPassword } from "@/app/lib/utils";

export const getUsers = async () => {
  await connectToDb();
  const users = await User.find();
  return users;
};

export const createUser = async (name, email, password) => {
  await connectToDb();

  try {
    password = await hashPassword(password);
    const newUser = new User({ name, email, password });
    const user = await User.create(newUser);
    return { success: true, user };
  } catch (error) {
    return { success: false, error };
  }
};
