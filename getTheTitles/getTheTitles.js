const getTheTitles = function(books) {
    const bookTitles = books.map(function(book) {
        return book.title;
    })
    return bookTitles;
};

module.exports = getTheTitles;
