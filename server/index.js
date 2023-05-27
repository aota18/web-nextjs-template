const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer();
const app = express();
const fs = require("fs");
const AWS = require("aws-sdk");
const fetch = require("node-fetch");
const mariadb = require("mariadb");
const cors = require("cors");

const adminRouter = require("./routes/admin");
const paymentRouter = require("./routes/payment");

/* CORS */
app.use(cors());

const port = 5001;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/admin", adminRouter);
app.use("/payment", paymentRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
