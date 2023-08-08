import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let TodayList = []; // Global list keeps track of all current toDo's
let WorkList = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public/")); // Sets up the location of our css files

app.listen(port, () => {
  console.log(`Server running on port number: ${port}`);
});

app.get("/", (req, res) => {
  TodayList.length > 0
    ? res.render("index.ejs", { newToDoEntry: TodayList })
    : res.render("index.ejs");
});

app.post("/newEntry", (req, res) => {
  const toDoEntry = `${req.body["todo"]}`; // User entry
  TodayList.push(toDoEntry); // Append new toDo item to global TodayList

  res.render("index.ejs", { newToDoEntry: TodayList });
  console.log("All went well!");
});

app.get("/work", (req, res) => {
  WorkList.length > 0 ? res.render("work.ejs", {newToDoEntry: WorkList}) : res.render("work.ejs");
});

app.post("/newWorkEntry", (req, res) => {
  const workEntry = `${req.body["todo"]}`;
  WorkList.push(workEntry);

  res.render("work.ejs", { newToDoEntry: WorkList });
});
