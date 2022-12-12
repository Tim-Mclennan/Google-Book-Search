// Opens a modal box when user clicks on 'see more' grid:

 function showModal () {
    const gridCard = document.querySelectorAll(".results__section__grid--card");
    const dialog = document.querySelectorAll(".dialog");
    const closeBtn = document.querySelectorAll(".dialog__content__header--btn");

    // converting static node lists into array.
    let gridCardArr = [...gridCard];
    let dialogArr = [...dialog];
    let closeBtnArr = [...closeBtn];

    // opens modal from clicking on card
    gridCardArr.forEach(function(el, i) {
      el.addEventListener("click", () => {
            dialogArr[i].showModal();
        }) 
    });

    // closes modal from close button
    closeBtnArr.forEach((el, i) => {
      el.addEventListener("click", ()=> {
        dialogArr[i].close();
      }) 
    })

 };

 export default showModal;


