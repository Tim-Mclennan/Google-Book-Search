import fetchBooks from "./JS/fetchBooks.js";

const searchBtn = document.querySelector('.main__container__search__btn');
const searchInput = document.querySelector('.main__container__search__bar');

searchBtn.addEventListener("click", async () => {
    const searchTerm = (searchInput.value);

    if (searchTerm === "") {
        alert("No search Term detected.")
    }

    const searchList = await fetchBooks(searchTerm);
    console.log(searchList);
    

});

