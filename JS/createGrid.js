function createGrid(booksArr) {
    
    let cardInfo = "";
    booksArr.items.map((book) => {
        cardInfo += 
        `<div class="results__section__grid--card">
            <img class="results__section__grid--card--img" src=${book.volumeInfo.imageLinks === undefined ? "" : book.volumeInfo.imageLinks.thumbnail} alt="Book Cover Unavailable")>
            <h3 class="results__section__grid--card--title">${book.volumeInfo.title}</h3>
            <p class="results__section__grid--card--authors">Author(s): ${book.volumeInfo.authors}</p>
            <p class="results__section__grid--card--des">${book.volumeInfo.description}</p>
        </div>`;
    });
    document.querySelector(".results__section__grid").innerHTML=cardInfo;
}

export default createGrid;