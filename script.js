// 1
let title = "JavaScript"
let screens = "Простые, Сложные, Интерактивные"
let screenPrice = 689
let rollback = 1
let fullPrice = 150000000
let adaptive = true


// 2
console.log(typeof title, fullPrice, adaptive);
console.log(screens.length);
console.log( "Стоимость верстки экранов " + screenPrice + " рублей");
console.log("Стоимость разработки сайта " + fullPrice + " гривен");

screens = screens.toLocaleLowerCase();
screens = screens.split(" ");
console.log(screens);

console.log(fullPrice * (rollback/100));