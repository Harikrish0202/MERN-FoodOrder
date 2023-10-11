const dotenv = require("dotenv");
dotenv.config({ path: "/config.env" });
const mongoose = require("mongoose");

const app = require("./app");

mongoose
  .connect(
    "mongodb+srv://harikrishnan08902:4iBW5iW13NJtk6Ev@cluster0.phjgvfc.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((con) => {
    console.log(
      `MongoDB Database connected with HOST : ${con.connection.host}`
    );
  });

const server = app.listen(4000, () => {
  console.log(`Server started on PORT : 4000 in development mode.`);
});
