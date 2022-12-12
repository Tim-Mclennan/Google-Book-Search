import fetchBooks from "./JS/fetchBooks.js";
import searchResultHeader from "./JS/searchResultHeader.js";
import showModal from "./JS/showModal.js";

const searchBtn = document.querySelector('.main__container__search__btn');
const searchInput = document.querySelector('.main__container__search__bar');
const searchBar = document.querySelector("#searchBar");

// will trigger a search function below when user clicks the 'enter' key:
searchBar.addEventListener("keyup", event => {
    if (event.key !== "Enter") return;
        event.preventDefault();
        searchBtn.click();
});

// will trigger a Fetch API search when user clicks on search button:
searchBtn.addEventListener("click", async () => {
    const searchTerm = (searchInput.value);

    if (searchTerm === "") {
        alert("No search Term detected.")
    }
    
    searchResultHeader(searchTerm);
    await fetchBooks(searchTerm);

// Opens a modal box when user clicks on 'see more' grid:
    showModal();

    
});




