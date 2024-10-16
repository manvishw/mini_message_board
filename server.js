// Defining Express
const express = require("express");
// Initializing Express
const server = express();
//Initializing PORT
const PORT = process.env.PORT || 2002;
server.set("view engine", "ejs");
server.use(express.urlencoded({ extended: false }));

function getDate() {
  return (
    new Date().getDate() +
    "/" +
    (new Date().getMonth() + 1) +
    "/" +
    new Date().getFullYear()
  );
}

// Messages Data
let messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: getDate(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: getDate(),
  },
];

server.get("/", (req, res) => {
  res.render("index", { messages });
});

server.get("/new", (req, res) => {
  res.render("form");
});
server.post("/new", (req, res) => {
  try {
    const pushData = {
      text: req.body.message,
      user: req.body.author_name,
      added: getDate(),
    };
    messages.push(pushData);
  } catch (error) {
    console.log(error);
  }

  res.render("form");
});

server.get("/clear", (req, res) => {
  messages = [];
  res.send("Successfully Clear");
});

server.listen(PORT, () => {
  console.log("Sucessfully running on port: ", PORT);
});
