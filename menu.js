const hamburguesa = document.querySelector('.hamburguesa')
const menu = document.querySelector('.menu-navegacion')

console.log(menu)
console.log(hamburguesa)



hamburguesa.addEventListener("click" , ()=>{
    menu.classList.toggle('spread')
})
