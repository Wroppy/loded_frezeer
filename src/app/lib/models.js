const mongoose = require("mongoose");

// Model for a user: Has name, email and a password
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: false,
    min: 3,
    max: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    min: 6,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  id: {
    type: String,
    required: true,
  },
});
const User = mongoose.models.User || mongoose.model("User", userSchema);

// Flat:
const flatSchema = new mongoose.Schema({
  tenants: {
    type: [String], // Array of user IDs
    required: true,
  },
  joinId: {
    type: String,
    required: true,
  },
  chores: [
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      userCreated: {
        type: String, // User ID
        required: true,
      },
      schedule: [String], // String of user IDS
    },
  ],
  shoppingList: [
    {
      Name: {
        type: String,
        required: true,
      },
      Description: {
        type: String,
      },
      Quantity: {
        type: Number,
        required: true,
      },
      userCreated: {
        type: String, // User ID
        required: true,
      },
      split: [
        {
          user: {
            type: String, // User ID
            required: true,
          },
          amount: {
            type: Number,
            required: true,
          },
        },
      ],
    },
  ],
});

const Flat = mongoose.models.Flat || mongoose.model("Flat", flatSchema);

module.exports = { User, Flat };
