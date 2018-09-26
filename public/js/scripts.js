
let menuAppetizersButton = document.querySelector('.menuAppetizersButton');
let menuEntreesButton = document.querySelector('.menuEntreesButton');
let menuDessertsButton = document.querySelector('.menuDessertsButton');

let menuAppetizers = document.querySelector('.menuAppetizers')
let menuEntrees = document.querySelector('.menuEntrees');
let menuDesserts = document.querySelector('.menuDesserts');

menuAppetizersButton.addEventListener("click", ()=>{
    //remove other classes, fade in
    menuAppetizers.classList.remove('displayNone')
    menuDesserts.classList.add('displayNone')
    menuEntrees.classList.add('displayNone')
    //remove fadein from other classes, add fade in to selected
    menuAppetizers.classList.add('fadeIn')
    menuDesserts.classList.remove('fadeIn')
    menuEntrees.classList.remove('fadeIn')
})
menuEntreesButton.addEventListener("click", ()=>{
    menuAppetizers.classList.add('displayNone')
    menuDesserts.classList.add('displayNone')
    menuEntrees.classList.remove('displayNone')

    menuAppetizers.classList.remove('fadeIn')
    menuDesserts.classList.remove('fadeIn')
    menuEntrees.classList.add('fadeIn')
})
menuDessertsButton.addEventListener('click', ()=>{
    menuAppetizers.classList.add('displayNone')
    menuDesserts.classList.remove('displayNone')
    menuEntrees.classList.add('displayNone')

    menuAppetizers.classList.remove('fadeIn')
    menuDesserts.classList.add('fadeIn')
    menuEntrees.classList.remove('fadeIn')
})