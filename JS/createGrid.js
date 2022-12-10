function createGrid(booksArr) {
    
    let cardInfo = "";
    booksArr.items.map((book) => {
        cardInfo += 
        `<div class="results__section__grid--card">
            <img class="results__section__grid--card--img" src="${book.volumeInfo.imageLinks === undefined ? " " : book.volumeInfo.imageLinks.thumbnail}" alt="Book Cover")>
            <div class="results__section__grid--card--info">
                <h3 class="results__section__grid--card--info--title">${book.volumeInfo.title}</h3>
                <p class="results__section__grid--card--info--authors">Author(s): ${book.volumeInfo.authors}</p>
                <br>
                <p class="results__section__grid--card--info--des">${book.volumeInfo.description}</p>
            </div>
            <div class="results__section__grid--card--overlay">
                <div class="results__section__grid--card--overlay--content">
                    <p class="results__section__grid--card--overlay--content--btn">See More</p>
                    <dialog class="dialog">
                        <div class="dialog__content">
                            <img class="dialog__img" src="${book.volumeInfo.imageLinks === undefined ? " " : book.volumeInfo.imageLinks.thumbnail}" alt="Book Cover")>
                            <h1 class="dialog__content__title">${book.volumeInfo.title}</h1>
                            <h3 class="dialog__content__authors">Author(s): ${book.volumeInfo.authors}</h3>
                            <p class="dialog__content__desc"> Description: ${book.volumeInfo.description}</p>
                            <p class="dialog__content__pub"> Publisher: ${book.volumeInfo.publisher}</p>
                            <p class="dialog__content__date"> Release Date: ${book.volumeInfo.publishedDate}</p>
                            <p class="dialog__content__cat"> Genre: ${book.volumeInfo.categories}</p>
                            <p class="dialog__content__pages"> Pages: ${book.volumeInfo.pageCount}</p>
                        </div>;
                    </dialog>

                </div>
            </div>
        </div>`;
    });
    document.querySelector(".results__section__grid").innerHTML=cardInfo;
}

export default createGrid;