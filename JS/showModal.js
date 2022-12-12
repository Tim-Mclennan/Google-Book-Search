// Opens a modal box when user clicks on 'see more' grid:

 function showModal () {
    const gridCard = document.querySelectorAll(".results__section__grid--card");
    const dialog = document.querySelectorAll(".dialog");

    let gridCardArr = [...gridCard];
    let dialogArr = [...dialog];

    gridCardArr.forEach(function(el, i) {
        el.addEventListener("click", () => {
            dialogArr[i].showModal();
        }) 
    });

    window.onclick = function(event) {
        if (event.target == dialog) {
          dialog.style.display = "none";
        }
      };
 };

 export default showModal;


