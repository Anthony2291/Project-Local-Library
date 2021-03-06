const {findAuthorById} = require("./helpers")


function findBookById(books, id) {
  let result = books.find((book) => book.id === id);
  return result;
}

function partitionBooksByBorrowedStatus(books) {
  let borrowed = books.filter((book) => book.borrows[0].returned === false);
  let returned = books.filter((book) => book.borrows[0].returned === true);
  return [borrowed, returned];
}

function getBorrowersForBook(book, accounts) {
  let result = book.borrows
  .slice(0, 10)
  .map((borrow) => {
    let account = findAuthorById(accounts, borrow.id);
    return {
      ...borrow,
      ...account,
    };
  });
  return result
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
