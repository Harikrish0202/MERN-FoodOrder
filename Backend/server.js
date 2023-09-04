const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const app = require("./app");
dotenv.config({ path: "/config.env" });

app.use(cors());
mongoose
  .connect(
    "mongodb+srv://harikrishnan08902:4iBW5iW13NJtk6Ev@cluster0.phjgvfc.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((con) => {
    console.log(
      `MongoDB Database connected with HOST : ${con.connection.host}`
    );
  });

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server started on PORT : ${PORT} in development mode.`);
});
