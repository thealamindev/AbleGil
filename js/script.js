let filter_btn = document.querySelectorAll(".filterable_btn button");
let filter_card = document.querySelectorAll(".filterable_cards .card");
// console.log(filter_btn, filter_card);
 
let filterCard = e => {
    document.querySelector(".active").classList.remove("active")
    e.target.classList.add("active")

   filter_card.forEach(card => {
    card.classList.add("hide")
    if (card.dataset.name === e.target.dataset.name || e.target.dataset.name==="all") {
        card.classList.remove("hide")

    }
   })
}


filter_btn.forEach((button) => addEventListener("click", filterCard));