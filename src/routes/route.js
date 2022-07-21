const express = require('express');
const {
  getBooks,
  getBookById,
  deleteBookById,
  createNewBooklist,
} = require('../controllers/controller');

const router = express.Router();

router.get('/books', getBooks);
router.get('/books/:id', getBookById);
router.post('/books', createNewBooklist);
router.delete('/books/:id', deleteBookById);

module.exports = router;
