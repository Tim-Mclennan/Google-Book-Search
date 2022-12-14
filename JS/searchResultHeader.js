function searchResultHeader(search) {
    const header = document.querySelector(".results__section__header--tag");

    header.innerText = `Results for "${search}"...`;
};

export default searchResultHeader;

