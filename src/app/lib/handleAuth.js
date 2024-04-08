import connectToDb from "./connectToDb";
const { User } = require("./models");
import { hashPassword, comparePassword, get8CharString } from "@/app/lib/utils";

// Returns a list of all users in the database
export const getUsers = async () => {
  await connectToDb();
  const users = await Tenants.find();
  return users;
};

// Adds a user to the database given their name, email, and password
export const createUser = async (name, email, password) => {
  await connectToDb();

  try {
    // Hash the password before storing it in the database
    password = await hashPassword(password);
    const id = get8CharString();

    const newUser = new User({ name, email, password, userId: id });
    const user = await User.create(newUser);

    return { success: true, id };
  } catch (error) {
    return { success: false, error };
  }
};

export const isAuthValid = async (email, password) => {
  try {
    await connectToDb();

    // Checks that the email exists, and the password matches
    const user = await User.findOne({ email });
    if (!user) {
      return { success: false, error: "User not found" };
    }

    // Compares the hashed password with the stored password
    const isValid = await comparePassword(password, user.password);

    if (!isValid) {
      return { success: false, error: "Password is incorrect" };
    }

    return { success: true, user: { name: user.name, id: user.userId } };
  } catch (e) {
    return { success: false, error: "Error occurred in the server" };
  }
};
