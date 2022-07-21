const Book = require('../model/model');

const getBooks = async (req, res) => {
  const response = await Book.findAll();
  if (response !== null) {
    return res.status(200).json(response);
  }
  return res.status(404).json({ message: 'not found' });
};

const getBookById = async (req, res) => {
  const response = await Book.findOne(
    { where: { id: req.params.id } },
  );
  if (response !== null) {
    // console.log(response);
    return res.status(200).json(response);
  }
  return res.status(404).json({ message: 'book not found' });
};

const deleteBookById = async (req, res) => {
  const response = await Book.destroy(
    { where: { id: req.params.id } },
  );
  if (response == 1) {
    return res.status(200).json({ message: 'book has been deleted' });
  }
  return res.status(404).json({ message: 'book not found' });
};

const createNewBooklist = async (req, res) => {
  const { title, author, year } = req.body;
  const response = await Book.create({
    title,
    author,
    year,
  });
  if (response !== null) {
    return res.status(201).json({ message: 'book added' });
  }
  return res.status(400).json({ message: 'cannot add booklist' });
};

const updateBooklistById = async (req, res) => {
  const { title, author, year } = req.body;
  const response = await Book.findOne(
    { where: { id: req.params.id } },
  );

};

module.exports = {
  getBooks,
  getBookById,
  deleteBookById,
  createNewBooklist,
  updateBooklistById,
};