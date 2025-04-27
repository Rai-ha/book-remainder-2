const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let books = [];

// Get all books
app.get("/books", (req, res) => {
  res.json(books);
});

// Add a book
app.post("/books", (req, res) => {
  const book = { id: Date.now().toString(), ...req.body };
  books.push(book);
  res.status(201).json(book);
});

// Delete a book
app.delete("/books/:id", (req, res) => {
  books = books.filter((book) => book.id !== req.params.id);
  res.status(204).end();
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
