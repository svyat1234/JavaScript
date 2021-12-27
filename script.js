function getAllServicePrices() {
    return servicePrice1 + servicePrice2;;
}

const getFullPrice = function () {
    return screenPrice + allServicePrices;
}

const getTitle = function() {
    return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase()
}

const getServicePercentPrices = function() {
    return fullPrice - (fullPrice * (rollback / 100))
}

allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
servicePercentPrice  = getServicePercentPrices()
title = getTitle()

console.log(screens.length);
console.log(servicePercentPrice);