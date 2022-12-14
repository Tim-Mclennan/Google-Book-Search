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
                </div>
            </div>
        </div>
        <dialog class="dialog">
        <div class="dialog__content">
            <div class="dialog__content__header">
                <h1 class="dialog__content__header--title">${book.volumeInfo.title}</h1>
                <button class="dialog__content__header--btn"><i class='bx bx-x'></i></button>
            </div>
            <img class="dialog__content__img" src="${book.volumeInfo.imageLinks === undefined ? " " : book.volumeInfo.imageLinks.thumbnail}" alt="Book Cover")>
                <div class="dialog__content__info"
                    <h2 class="dialog__content__info--authors"><strong>Author(s):</strong> <br>${book.volumeInfo.authors}<br><br></h2>
                    <p class="dialog__content__info--desc"><strong>Description:</strong> <br>${book.volumeInfo.description}<br><br></p>
                    <p class="dialog__content__info--pub"><strong>Publisher:</strong> <br>${book.volumeInfo.publisher}<br><br></p>
                    <p class="dialog__content__info--date"><strong>Release Date:</strong> <br>${book.volumeInfo.publishedDate}<br><br></p>
                    <p class="dialog__content__info--genre"><strong>Genre:</strong> <br>${book.volumeInfo.categories}<br><br></p>
                    <p class="dialog__content__info--pages"><strong>Pages:</strong> <br>${book.volumeInfo.pageCount}<br></p>
                </div>
            </div>
        </dialog>`;
    });
    document.querySelector(".results__section__grid").innerHTML=cardInfo;
}

export default createGrid;