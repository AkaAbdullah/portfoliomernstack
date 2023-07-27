const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 8000;
const dbConnect = require("./config/dbConn");

dbConnect();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.listen(port, () => console.log(`server started on port ${port}`));
