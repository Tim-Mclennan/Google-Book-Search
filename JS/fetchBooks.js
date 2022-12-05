import bookResults from "./bookResults.js";

const fetchBooks = async (userTitleSearch) => {
    const bookResponse = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${userTitleSearch}`);
    const info = await bookResponse.json();

    console.log("This is an example of a volume: ", info.items[0].volumeInfo);

    return bookResults(info);
};


export default fetchBooks;