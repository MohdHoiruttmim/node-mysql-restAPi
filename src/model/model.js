const { Sequelize } = require('sequelize');
const connect = require('../config/config');

const { DataTypes } = Sequelize;

// const Book = connect.define('books', {
//     title: DataTypes.STRING,
//     author: DataTypes.STRING,
//     year: DataTypes.INTEGER,
// }, {
//     freezTableName: true,
// });

const Book = connect.define('testbooks', {
  title: DataTypes.STRING,
  author: DataTypes.STRING,
  isComplete: DataTypes.BOOLEAN,
  year: DataTypes.INTEGER,
}, {
  timestamps: false, // for don't use createdAt and updatedAt coloumn
  freezTableName: true,
});

// check the exist table name already or not, if not then create
// (async() => {
//     await connect.sync();
// })();
// or
connect.sync()
  .then(() => {
    console.log('syncronize was successful');
  });

module.exports = Book;
