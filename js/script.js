'use strict'

const title = document.getElementsByTagName('h1')[0]
const buttonPlus = document.querySelector('.screen-btn')
const otherItemsPercent = document.querySelectorAll('.other-items.percent')
const otherItemsNumber = document.querySelectorAll('.other-items.number')
const body = document.querySelector('body')

const inputRange = document.querySelector('.rollback input')
const inputRangeValue = document.querySelector('.rollback .range-value')

const startBtn = document.getElementsByClassName('handler_btn')[0]
const resetBtn = document.getElementsByClassName('handler_btn')[1]

const total = document.getElementsByClassName('total-input')[0]
const totalCount = document.getElementsByClassName('total-input')[1]
const totalCountOther = document.getElementsByClassName('total-input')[2]
const fullTotalCount = document.getElementsByClassName('total-input')[3]
const totalCountRollback = document.getElementsByClassName('total-input')[4]

let screenCount = document.querySelector('.main-controls__input input').value

let screens = document.querySelectorAll('.screen')

const screenOption = document.querySelector('select')

const rollback =  function() {inputRangeValue.textContent = inputRange.value + " %"}
inputRange.addEventListener('input', rollback)



const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 0,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  serviePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  init: function () {
    appData.addTitle()
    startBtn.addEventListener('click', () => {
        if (screenOption.value == 0 || screenCount.value == 0) {
            alert('Ошибка! Заполните расчёт по типу экрана.')
        } else {
            appData.start()
            
        }
    }) 

    buttonPlus.addEventListener('click', appData.addScreenBlock)
  },
  addTitle: function () {
    document.title = title.textContent
  },
  start: function () {
      appData.addScreens()
      appData.addServices()

      appData.addPrice()
    // appData.getServicePercentPrices()
    
    // appData.logger()
    appData.showResult()
  },
  
  showResult: function () {
    total.value = appData.screenPrice
    totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber
    fullTotalCount.value = appData.fullPrice 
    totalCountRollback.value = appData.fullPrice + (appData.fullPrice/100 * inputRange.value)
    totalCount.value = screenCount
  },
  addScreens: function () {
    screens = document.querySelectorAll('.screen')

    screens.forEach(function (screen, index){
        const select = screen.querySelector('select')
        const input = screen.querySelector('input')
        const selectName = select.options[select.selectedIndex].textContent

        appData.screens.push({
            id: index,
            name: selectName, 
            price: +select.value * +input.value
        })
    })

    console.log(appData.screens);
  },
  addServices: function () {
    otherItemsPercent.forEach(function (item) {
        const check = item.querySelector('input[type=checkbox]')
        const label = item.querySelector('label')
        const input = item.querySelector('input[type=text]')

        if (check.checked) {
            appData.servicesPercent[label.textContent] = +input.value
        }   
    })

    otherItemsNumber.forEach(function (item) {
        const check = item.querySelector('input[type=checkbox]')
        const label = item.querySelector('label')
        const input = item.querySelector('input[type=text]')

        if (check.checked) {
            appData.servicesNumber[label.textContent] = +input.value
        }
        
    })
  },
  addScreenBlock: function () {
      const cloneScreen = screens[0].cloneNode(true)

      screens[screens.length - 1].after(cloneScreen)
  },
  addPrice: function () {
    appData.serviePercentPrice =  appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
    screens = document.querySelectorAll('.screen')
    let screenCounts = document.querySelectorAll('.main-controls__input input')
    screenCounts.forEach(item => {
        screenCount += item
    })
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price
    }
    console.log(screenCount);

    for(let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key]
    }

    for(let key in appData.servicesPercent) {
        appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100)
      }


    appData.fullPrice =  +appData.screenPrice + appData.servicePricesPercent + appData.servicePricesNumber  
  },


  logger: function () {
    console.log("allServicePrices", appData.allServicePrices);

    console.log(appData.getRollbackMessage(appData.fullPrice));
    console.log("title",typeof appData.title);
    console.log("screenPrice",typeof appData.screenPrice);
    console.log("adaptive",typeof appData.adaptive);

    console.log("screens.length",appData.screens.length);
    console.log("screens",appData.screens);
    console.log("serviePercentPrice",appData.serviePercentPrice);

    console.log("Стоимость верстки экранов " + appData.screenPrice + " гривен и Стоимость разработки сайта " + appData.fullPrice + " гривен.");
    console.log(" ");
    console.log("↓ Свойства и методы appData ↓");
    console.log(" ");
    for (let key in appData) {
      console.log( "Ключ: " + key + " Значение: " + appData[key] );
    }
  }
}
appData.init()










// const title = document.getElementsByTagName('h1')[0]
// const buttonPlus = document.querySelector('.screen-btn')
// const otherItemsPercent = document.querySelectorAll('.other-items.percent')
// const titlotherItemsNumber = document.querySelectorAll('.other-items.number')

// const inputRage = document.querySelector('.rollback input')
// const inputRageValue = document.querySelector('.rollback .range-value')

// const startBtn = document.getElementsByClassName('handler_btn')[0]
// const resetBtn = document.getElementsByClassName('handler_btn')[1]

// const total = document.getElementsByClassName('total-input')[0]
// const totalCount = document.getElementsByClassName('total-input')[1]
// const totalCountOther = document.getElementsByClassName('total-input')[2]
// const fullTotalCount = document.getElementsByClassName('total-input')[3]
// const totalCountRollback = document.getElementsByClassName('total-input')[4]

// let screens = document.querySelectorAll('.screen') 

// const appData = {
//     title: '',
//     screens: [],
//     screenPrice: 0,
//     adaptive: true,
//     rollback: 10,
//     allServicePrices: 0,
//     fullPrice: 0,
//     serviePercentPrice: 0,
//     services: {},
//     init:function () {
//         appData.addTitle()

//         startBtn.addEventListener('click', appData.start)
//     },
//     addTitle: function() {
//         document.title = title.textContent
//     },
//     start: function () {
//         appData.addScreens()
//     //   appData.asking()
//     //   appData.addPrice()
//     //   appData.getFullPrice()
//     //   appData.getServicePercentPrices()
//     //   appData.getTitle()
      
//     //   appData.logger()
//     },
//     isNumber: function (num) {
//       return !isNaN(parseFloat(num)) && isFinite(num)
//     },
//     addScreens: function () {
//         screens.forEach(function(screen, index) {
//             const select = screen.querySelector('select')
//             const input = screen.querySelector('input')
//             const selectName = select.options[select.selectedIndex].textContent

//             appData.screens.push({
//                 id: index,
//                 name: selectName, 
//                 price: +select.value * +input.value
//             })
//         })

//         console.log(appData.screens);
//     },
//     asking: function () {
//       appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки')
      
//       for (let i = 0; i < 2; i++) {
//         let name =  prompt('Какие типы экранов нужно разработать?')
//         let price = 0
  
//         do {
//           price = prompt('Сколько будет стоить данная работа?')
//         } while (!appData.isNumber(price))
  
//         appData.screens.push({id: i, name: name, price: price})
//       }
  
//       for (let i = 0; i < 2; i++) {
//         let name = prompt('Какой дополнительный тип услуги нужен?')
//         let price = 0
        
//         do {
//           price = prompt('Сколько это будет стоить?');
//         } while (!appData.isNumber(price))
  
//         appData.services[name] = +price
//       }
      
//       appData.adaptive = confirm('Нужен ли адаптив на сайте?');
//     },
//     addPrice: function () {
//       for (let screen of appData.screens) {
//         appData.screenPrice += +screen.price
//       }
  
//       for(let key in appData.services) {
//         appData.allServicePrices += appData.services[key]
//       }
//     },
//     getFullPrice: function () {
//       appData.fullPrice =  +appData.screenPrice + appData.allServicePrices
//     },
//     getServicePercentPrices: function () {
//       appData.serviePercentPrice =  appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
//     },
//     getTitle: function () {
//       appData.title =  appData.title.trim()[0].toUpperCase() + appData.title.trim().substring(1).toLowerCase()
//     },
//     getRollbackMessage: function(price) {
//       if (price >= 30000) {
//         return "Даем скидку в 10%"
//       } else if (price >= 15000 && price < 30000) {
//         return "Даем скидку в 5%"
//       } else if (price >= 0 && price < 15000) {
//         return "Скидка не предусмотрена"
//       } else {
//         return "Что-то пошло не так"
//       }
//     },
//     logger: function () {
//       console.log(appData.fullPrice);
//       console.log(appData.serviePercentPrice);
//       console.log(appData.screens);
//     }
//   }
  
//   appData.init()