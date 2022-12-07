function noResultHeader(search) {
    const header = document.querySelector(".results__section__header--tag");

    header.innerText = `There are no results for "${search}"!`;
}

export default noResultHeader;