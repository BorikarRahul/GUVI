const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors")

const app = express();
const PORT = 4000;
app.use(cors());

app.use("/", (req, res) => {
    res.send("Welcome to BigBasket App");
})

mongoose.connect()
    .then(() => {
        console.log("Mongoose is connected");
        app.listen(PORT, () => console.log("Server started on PORT", PORT));
    })
    .catch((error) => {
        console.log("Error", error);
    })