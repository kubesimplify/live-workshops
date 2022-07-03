const express = require("express");
const app = express();
const { resolve } = require("path");
const port = process.env.PORT || 3000;

// ------------ Imports & necessary things here ------------

// Setting up the static folder:
app.use(express.static(resolve(__dirname, "./client")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  const path = resolve(process.env.STATIC_DIR + "/index.html");
  res.sendFile(path);
});

// Server listening:
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
