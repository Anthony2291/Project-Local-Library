function findAccountById(accounts, id) {
  let result = accounts.find((account) => account.id === id)
  return result 
}

function sortAccountsByLastName(accounts) {
 let result = accounts.sort((a, b) => a.name.last > b.name.last ? 1 : -1)
 return result 
}

function getTotalNumberOfBorrows(account, books) {
 return books.reduce((acc, book) => {
  return acc + book.borrows.filter(borrow => borrow.id == account.id).length
 }, 0)
}

function getBooksPossessedByAccount(account, books, authors) {
 return books.filter((book) => book.borrows[0].id == account.id && book.borrows[0].returned == false) 
 .map(book => {
   book.author = authors.find(author => author.id == book.authorId)
   return book
 })
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
