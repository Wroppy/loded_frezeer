const mongoose = require("mongoose");

const connection = {};

const connectToDb = async () => {
  try {
    // Check if we have a connection to the database
    if (connection.isConnected) {
      return;
    }

    // Connects to db if not already connected
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
};

export default connectToDb;
