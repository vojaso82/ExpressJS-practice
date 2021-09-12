const express = require("express");
require("dotenv").config();

const app = express();

//Middleware setup
app.use(express.json());




app.use("/", require("./routes.js"));

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))