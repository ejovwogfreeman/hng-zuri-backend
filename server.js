const express = require("express");
const app = express();

const port = 8000;

app.get("/api", (req, res) => {
  res.send({
    slackUsername: "ejovwogfreeman",
    backend: true,
    age: 23,
    bio: "Hello there, I am Ejovwo Godbless and I am currently learning backend web development at Zuri Internship HNG9",
  });
});

app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
