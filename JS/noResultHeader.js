function noResultHeader(search) {
    if (search === undefined || search === 0 ) {
        return document.querySelector(".results__section__header--tag").innerText = `There are no results for "${search}"!`;
    } 
}

export default noResultHeader;