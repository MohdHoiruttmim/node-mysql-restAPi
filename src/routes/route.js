const express = require('express');
const {
  getBooks,
  getBookById,
  deleteBookById,
  createNewBooklist,
  updateBooklistById,
} = require('../controllers/controller');

const router = express.Router();

router.get('/books', getBooks);
router.get('/books/:id', getBookById);
router.post('/books', createNewBooklist);
router.patch('/books/:id', updateBooklistById);
router.delete('/books/:id', deleteBookById);

module.exports = router;
