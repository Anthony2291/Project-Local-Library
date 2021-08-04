function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let result = books.filter((book) => book.borrows[0].returned == false
)
return result.length
}

function getMostCommonGenres(books) {
let result = books.reduce((acc, book) => {
  const genre = book.genre
  if(acc[genre]) { 
  acc[genre]++
  } else {
    acc[genre] = 1
  }
  return acc
},{})
return Object.keys(result)
.map(genre => {
  return {
    name : genre,
    count : result[genre]
  }
})
.sort((a, b) => b.count - a.count)
.slice(0, 5)
}

function getMostPopularBooks(books) {
  let result = books.reduce((acc, book) => {
    const genre = book.title
    if(acc[genre]) { 
    acc[genre]++
    } else {
      acc[genre] = book.borrows.length
    }
    return acc
  },{})
  return Object.keys(result)
  .map(genre => {
    return {
      name : genre,
      count : result[genre]
    }
  })
  .sort((a, b) => b.count - a.count)
  .slice(0, 5)
}

function getMostPopularAuthors(books, authors) {
  let result = books.reduce((acc, book) => {
    let author = authors.find(a => a.id == book.authorId)
    author = author.name.first + " " + author.name.last
    if(acc[author]) { 
    acc[author]+= book.borrows.length
    } else {
      acc[author] = book.borrows.length
    }
    return acc
  },{})
  return Object.keys(result)
  .map(author => {
    return {
      name : author,
      count : result[author]
    }
  })
  .sort((a, b) => b.count - a.count)
  .slice(0, 5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
