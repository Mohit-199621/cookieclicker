require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./database");
const { updateCounter } = require("./jobs");

const app = express();
app.use(cors());
app.use(express.json());

connectDB(); // Connect to MongoDB

app.post("/click", async (req, res) => {
    const { userId } = req.body;
    const result = await updateCounter(userId);
    res.json(result);
});

app.listen(5000, () => console.log("Server running on port 5000"));
