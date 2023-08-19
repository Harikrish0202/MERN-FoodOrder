const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = require("./app");
dotenv.config({ path: "/config.env" });

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

//wEPSMqGtoBsq6UYI
