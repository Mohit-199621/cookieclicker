const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    _id: { type: String, required: true },  // Change ObjectId to String
    counter: { type: Number, default: 0 },
    prizes: { type: Number, default: 0 },
});

module.exports = mongoose.model("User", UserSchema);
