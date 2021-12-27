 let title = prompt("Как называется ваш проект?")
 let screens = prompt("Какие типы экранов нужно разработать?")
 let screenPrice = prompt("Сколько будет стоить данная работа?")
 let adaptive = prompt("Нужен ли адаптив на сайте?")
 let service1 = prompt("Какой дополнительный тип услуги нужен?")
 let servicePrice1 = prompt("Сколько это будет стоить?")
 let service2 = prompt("Какой дополнительный тип услуги нужен?")
 let servicePrice2 = +prompt("Сколько это будет стоить?")
 let rollback = 10
 let fullPrice = screenPrice + servicePrice1 + servicePrice2
 let servicePercentPrice = fullPrice - (fullPrice * (rollback / 100))


 if (fullPrice>= 30000) {
     console.log("Даём скидку в 10%");
 } else if (fullPrice >= 15000 && fullPrice <30000) {
     console.log("Даём скидку в 5%");
 } else if (fullPrice >= 0 && fullPrice <15000) {
     console.log("Скидка не предусмотрена");
 } else {
     console.log("Что-то пошло не так");
 }

 console.log(servicePercentPrice);

 console.log("Стоимость вёрстки экранов " + screenPrice + " рублей");