const express = require("express");

const app = express();
const PORT = 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.get("/books", async (req, res) => {
  try {
    res.status(200).json({ message: "Books are returned" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/books/:id", async (req, res) => {
  const { id } = req.params;
  try {
    res.status(200).json({ message: `specific book is return with id ${id}` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/books", async (req, res) => {
  const { name, description } = req.body;
  try {
    res.status(201).json({
      message: `Book is created! Name: ${name}, Description: ${description}`,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.delete("/books/:id", async (req, res) => {
  const { id } = req.params;
  try {
    res.status(200).json({ message: `specific book is deleted with id ${id}` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.put("/books/:id", async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    res.status(200).json({
      message: `Book was updated with id ${id}! Name: ${name}, Description: ${description}`,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
