const BtnHamb = document.querySelector(".BtnMenu")
const Menu =  document.querySelector(".Menu")


BtnHamb.addEventListener("click", ()=>{
    Menu.classList.toggle("hide")
})