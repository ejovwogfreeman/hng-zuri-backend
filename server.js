const express = require("express");
const { restart } = require("nodemon");
const app = express();

const port = 8000;

app.use(express.json());

app.get("/api", (req, res) => {
  const user = {
    slackUsername: "ejovwogfreeman",
    backend: true,
    age: 23,
    bio: "Hello there, I am Ejovwo Godbless and I am currently learning backend web development at Zuri Internship HNG9",
  };
  res.status(200).send(user);
});

app.post("/api/", (req, res) => {
  let operation_type = String(req.body.operation_type).toLowerCase();
  let x = req.body.x;
  let y = req.body.y;

  let result;

  function calculate() {
    if (operation_type === "addition") {
      result = x + y;
    } else if (operation_type === "subtraction") {
      result = x - y;
    } else if (operation_type === "multiplication") {
      result = x * y;
    } else if (operation_type === "division") {
      result = x / y;
    } else {
      res.json("invalid operation_type");
      return;
    }

    res.status(200).json({
      slackUsername: "ejovwogfreeman",
      operation_type: operation_type,
      result: result,
    });
  }
  calculate();
});

app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
