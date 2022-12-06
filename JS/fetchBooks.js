// import bookResults from "./bookResults.js";
import createGrid from "./createGrid.js";

const fetchBooks = async (userTitleSearch) => {
    const bookResponse = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${userTitleSearch}`);
    const info = await bookResponse.json();

    console.log("This is the first example of a volume: ", info.items[0].volumeInfo);

    return createGrid(info);
};


export default fetchBooks;