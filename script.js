let title = prompt('Как называется ваш проект?');
let screens  = prompt('Какие типы экранов нужно разработать ?' , 'Простые, Сложные, Интерактивные')
let screenPrice  = +prompt('Сколько будет стоить данная работа?')
let servicePrice1 = +prompt('Сколько это будет стоить?')
let servicePrice2 = +prompt('Сколько это будет стоить?')
let rollback = 10
let fullPrice = screenPrice + servicePrice1 + servicePrice2

function getRollbackMessage() {
    if ( fullPrice >= 30000) {
        return "Даем скидку в 10%"
    } else if (fullPrice >= 15000 && fullPrice < 30000) {
        return "Даем скидку в 5%"
    } else if (fullPrice >=0 && fullPrice < 15000) {
        return "Скидка не предусмотрена"
    } else {
        return "Скидка не предусмотрена"
    }
}

console.log(getRollbackMessage(fullPrice))