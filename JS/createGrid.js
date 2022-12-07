function createGrid(booksArr) {
    
    let cardInfo = "";
    booksArr.items.map((book) => {
        cardInfo += 
        `<div class="results__section__grid--card">
            <img class="results__section__grid--card--img" src="${book.volumeInfo.imageLinks === undefined ? " " : book.volumeInfo.imageLinks.thumbnail}" alt="Book Cover Unavailable")>
            <div class="results__section__grid--card--info">
                <h3 class="results__section__grid--card--info--title">${book.volumeInfo.title}</h3>
                <p class="results__section__grid--card--info--authors">Author(s): ${book.volumeInfo.authors}</p>
                <br>
                <p class="results__section__grid--card--info--des">${book.volumeInfo.description}</p>
            </div>
            <div class="results__section__grid--card--overlay">
                <div class="results__section__grid--card--overlay--content">
                    <p class="results__section__grid--card--overlay--content--btn">See More</p>
                </div>
            </div>
        </div>`;
    });
    document.querySelector(".results__section__grid").innerHTML=cardInfo;
}

export default createGrid;