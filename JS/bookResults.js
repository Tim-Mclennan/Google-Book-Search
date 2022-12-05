//  This module will have a function that will pbtain the properties image, author, title and description of each book result.

function bookResults(infoArr) {
    let bookInfo = infoArr.items.map((book) => {
        let bookTitle = (book.volumeInfo.title);
        let bookAuthors = (book.volumeInfo.authors.join(", "));
        let bookDes = (book.volumeInfo.description);
        let bookImg = (book.volumeInfo.imageLinks.thumbnail);
        let bookRecord = [bookImg, bookTitle, bookAuthors, bookDes];
        return bookRecord;
    });
    return bookInfo;
};


export default bookResults;