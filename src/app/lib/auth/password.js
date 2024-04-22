import bcrypt from "bcryptjs";

export const hashPassword = async (password) => {
  // Hash the password before storing it in the database
  const salt = await bcrypt.genSalt(10);
  let pass = await bcrypt.hash(password, salt);

  return pass;
};

export const comparePassword = async (password, hashedPassword) => {
  // Compares the hashed password with the stored password
  const isValid = await bcrypt.compareSync(password, hashedPassword);
  return isValid;
};

export const get8CharString = () => {
  return Math.random().toString(36).substring(2, 10);
};
