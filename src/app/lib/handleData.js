import connectToDb from "./connectToDb";
const { User } = require("./models");
import { hashPassword } from "@/app/lib/utils";

// Returns a list of all users in the database
export const getUsers = async () => {
  await connectToDb();
  const users = await User.find();
  return users;
};

// Adds a user to the database given their name, email, and password
export const createUser = async (name, email, password) => {
  await connectToDb();

  try {
    // Hash the password before storing it in the database
    password = await hashPassword(password);

    const newUser = new User({ name, email, password });
    const user = await User.create(newUser);

    return { success: true, user };
    
  } catch (error) {
    return { success: false, error };
  }
};
