const express = require("express");
const app = express();
const port = 5000;

app.use(express.json()); // Middleware to parse JSON requests

app.get("/api/message", (req, res) => {
  res.setHeader("Content-Type", "application/json"); // Set the content type
  res.json({ message: "Hello, MERN Stack!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
