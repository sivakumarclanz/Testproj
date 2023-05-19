const mongoose = require("mongoose");
const log = require("./helpers/logger");
const mongoString = process.env.DATABASE_URL


mongoose.connect(mongoString); 
const database = mongoose.connection 
  

// database connection
database.on('error', (error) => {
  console.log(error)
})


database.once('connected', () => {
  console.log('Mongoose Database Connected');
})

  // process.on("SIGINT", () => {
  //     mongoose.connection.close(() => {
  //       process.exit(0);}
  // )}
  //   );

