import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let lst = []; // Global list keeps track of all current toDo's

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public/")); // Sets up the location of our css files

app.listen(port, () => {
  console.log(`Server running on port number: ${port}`);
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/newEntry", (req, res) => {
    const toDoEntry = `${req.body["todo"]}`; // User entry
    lst.push(toDoEntry) // Append new toDo item to global lst


    res.render("index.ejs", {newToDoEntry: lst});
    console.log("All went well!");
});
