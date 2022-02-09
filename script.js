//  let title = prompt("Как называется ваш проект?")
//  let screens = prompt("Какие типы экранов нужно разработать?")
//  let screenPrice = prompt("Сколько будет стоить данная работа?")
//  let adaptive = prompt("Нужен ли адаптив на сайте?")
//  let service1 = prompt("Какой дополнительный тип услуги нужен?")
//  let servicePrice1 = prompt("Сколько это будет стоить?")
//  let service2 = prompt("Какой дополнительный тип услуги нужен?")
//  let servicePrice2 = +prompt("Сколько это будет стоить?")
//  let rollback = 10
//  let fullPrice = screenPrice + servicePrice1 + servicePrice2
//  let servicePercentPrice = fullPrice - (fullPrice * (rollback / 100))


//  if (fullPrice>= 30000) {
//      console.log("Даём скидку в 10%");
//  } else if (fullPrice >= 15000 && fullPrice <30000) {
//      console.log("Даём скидку в 5%");
//  } else if (fullPrice >= 0 && fullPrice <15000) {
//      console.log("Скидка не предусмотрена");
//  } else {
//      console.log("Что-то пошло не так");
//  }

//  console.log(servicePercentPrice);

//  console.log("Стоимость вёрстки экранов " + screenPrice + " рублей");



// let game = function() {
//     let num = prompt("Загадайте число от 1 до 6");
 
//     let rand = Math.floor(Math.random() * 6) + 1;
   
//     console.log(rand);
//     document.getElementById('out').innerHTML = "Поздравляем!";
//     if (num>6) {
//         alert("От 1 до 6");
//         game();
//     } else  if (num == rand) {
//         alert("Вы выиграли!");
//     } else {
//         alert("Вам выпало число " + rand + " , Вы проиграли!");
//         game();
//     }
   
   
// }

// let btn = document.querySelector('#btn')
// btn.addEventListener('click', () => {
//     game();
// })


let game = function() {
    let balance = 100
   

    let gameIn = () => {
        let num = prompt("Загадайте число от 1 до 6");
        let bet = prompt("Ваш баланс: " + balance + " монет. Введите сумму ставки");
        let rand = Math.floor(Math.random() * 6) + 1;
        


        if (bet<=balance) {
            if (num>6) {
                alert("Выберете число от 1 до 6");
                gameIn();
            } else  if (num == rand) {
                let win = bet * 6 + balance
                balance = win 
                alert("Вы выиграли! Ваш баланс: " + balance);
                gameIn();
            } else {
                alert("Вам выпало число " + rand + " , Вы проиграли!");
                balance = balance - bet
                if (balance != 0) {
                    gameIn();
                } else
                alert("У вас не осталось монет :(")
                btn.innerHTML = "Играть заново"
                // let plus = prompt("Сколько монет пополнить?")
                // balance = plus
                // gameIn();
            }

           
        } else {
            alert("У вас недостаточно средств.")
            gameIn();
        }

       
    }

    
   
    gameIn()
}

let btn = document.querySelector('#btn')
btn.addEventListener('click', () => {
    game();
})

