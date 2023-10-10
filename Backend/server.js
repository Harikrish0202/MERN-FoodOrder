const dotenv = require("dotenv");
dotenv.config({ path: "/config.env" });
const mongoose = require("mongoose");

const app = require("./app");

mongoose
  .connect(
    "mongodb+srv://arumugaselvam23052003:wEPSMqGtoBsq6UYI@cluster0.a393mkw.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((con) => {
    console.log(
      `MongoDB Database connected with HOST : ${con.connection.host}`
    );
  });

const server = app.listen(4000, () => {
  console.log(`Server started on PORT : 4000 in development mode.`);
});

// // wEPSMqGtoBsq6UYI;

// const express = require("express");
// const cors = require("cors");
// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get("/api/data", (req, res) => {
//   const data = { message: "Hello from the server!" };
//   res.json(data);
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
