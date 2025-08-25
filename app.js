const express = require("express");
const router = require("./routes/contact");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", router);



const PORT = process.env.PORT || 9000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(() => {
  console.log(`Database is connected successfully.`);
  app.listen(PORT, () => {
    console.log(`App server is listening to port: ${PORT}`);
  });
}).catch(error => {
    console.log(`Database connction failed`, error)
})
