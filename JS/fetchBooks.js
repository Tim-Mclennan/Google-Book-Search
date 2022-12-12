import createGrid from "./createGrid.js";
import noResultHeader from "./noResultHeader.js";

const fetchBooks = async (userTitleSearch) => {
    const bookResponse = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${userTitleSearch}`);
    const info = await bookResponse.json();
    console.log("This is the first example of a volume: ", info.items[0].volumeInfo);

    noResultHeader(info.items);

    //createGrid function will utilise the API data into an HTML format that is displayed to the user:
    return createGrid(info);
};


export default fetchBooks;