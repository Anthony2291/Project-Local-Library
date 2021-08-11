function findAuthorById(authors, id) {
    let account = authors.find((author) => author.id == id);
return account
}
module.exports = {
    findAuthorById
}