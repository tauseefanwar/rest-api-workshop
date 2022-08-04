const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.static("public"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.info(`running on ${PORT}`));
