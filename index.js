const express = require("express");
const cors = require("cors"); //Security applied to an API
const test = require("./routes/test");
const user = require("./routes/user");
const addfields = require("./routes/addproperty");
const passwordReset = require("./routes/passwordReset");
const imagefields = require("./routes/image_upload");
// const passwordReset = require("./routes/passwordReset");
const compression = require("compression");
const helmet = require("helmet"); //  protect Node. js Express apps from common security threats
const { addfield } = require("./models");
const bodyParser = require('body-parser');
const multer =  require('multer');
const path = require('path')
const IMAGE_UPLOAD_DIR = "./public/image"


require("dotenv").config();
require("./initDB")
const app = express();



app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(bodyParser.json());



app.use("/api", test);
app.use("/api", user);
app.use("/api", passwordReset);
app.use("/api", imagefields);
app.use("/api", addfields);



process.on("unhandledRejection", (err) => console.log("Error:", err));


app.listen(3000, () => {
    console.log(`Server Started at ${3000}`);
  });
  