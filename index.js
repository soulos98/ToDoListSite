import express from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port number: ${port}`);
});

app.get("/", (req, res) => {
    res.send("Hello Server!");
});
