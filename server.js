// Defining Express
const express = require("express");

// Initializing Express
const server = express();

//Initializing PORT
const PORT = process.env.PORT || 2002;

// Getting Routes
const homeRouter = require("./routes/home");

server.set("view engine", "ejs");
server.use(homeRouter);

server.listen(PORT, () => {
  console.log("Sucessfully running on port: ", PORT);
});
