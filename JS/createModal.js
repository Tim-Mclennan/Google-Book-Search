// Opens a modal box when user clicks on 'see more' grid:

 function createModal () {
    const gridCard = document.querySelectorAll(".results__section__grid--card");
    const dialog = document.querySelectorAll(".dialog");

    let gridCardArr = [...gridCard];
    let dialogArr = [...dialog];

    gridCardArr.forEach(function(el, i) {
        el.addEventListener("click", () => {
            console.log("This see more exists");
            dialogArr[i].showModal();
        }) 
    });
 };

 export default createModal;


