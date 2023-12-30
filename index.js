const express = require("express");

const app = express();
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.get("/books", async (req, res) => {
  try {
    res.status(200).json({ message: "users are returned" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
