const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({ 
  name: {
    type: String,
    required: true,
    unique: false,
    min: 3,
    max:20
  },
  email: {
    type: String,
    required: true,
    unique: true,
    min: 6,
    max: 255
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024
  }
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
// Export the model
module.exports = { User };
