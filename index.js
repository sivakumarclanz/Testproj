const express = require("express");
const cors = require("cors"); //Security applied to an API
const test = require("./routes/test");
const user = require("./routes/user");
const addfields = require("./routes/addproperty");
const passwordReset = require("./routes/passwordReset");
const imagefields = require("./routes/image_upload");
const addtenant = require("./routes/addtenant");
const account = require("./routes/account");
const aggrement = require("./routes/aggrement");
const Rentalaggrement = require("./routes/Rentalagreement");
const fileupload = require("./routes/fileupload");


// const passwordReset = require("./routes/passwordReset");
const compression = require("compression");
const helmet = require("helmet"); //  protect Node. js Express apps from common security threats
const bodyParser = require('body-parser');
const multer =  require('multer');
const path = require('path')


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
app.use("/api", addtenant);
app.use("/api", account);
app.use("/api", aggrement);
app.use("/api", Rentalaggrement);
app.use("/api", fileupload);



process.on("unhandledRejection", (err) => console.log("Error:", err));


app.listen(3000, () => {
    console.log(`Server Started at ${3000}`);
  });
  