const btn = document.querySelectorAll('.button')
const block = document.querySelectorAll('.card-block')
const red = document.querySelectorAll('.red')
const green = document.querySelectorAll('.green')
const blue = document.querySelectorAll('.blue')

console.log(btn);
console.log(block);

btn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        block[i].style.backgroundColor = "red"
    })
})


red.forEach((red, i) => {
    red.addEventListener('click', () => {
        block[i].style.backgroundColor = "red"
    })
})  
green.forEach((green, i) => {
    green.addEventListener('click', () => {
        block[i].style.backgroundColor = "green"
    })
})  
blue.forEach((blue, i) => {
    blue.addEventListener('click', () => {
        block[i].style.backgroundColor = "blue"
    })
})  