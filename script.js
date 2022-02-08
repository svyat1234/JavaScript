const book = document.querySelectorAll('.book')
const title = document.querySelectorAll('a')
const background = document.querySelector('body')
const adv = document.querySelector('.adv')
const list = document.querySelectorAll('ul')
const item = document.querySelectorAll('li')
const newElem = document.createElement('li')

// Восстановить порядок книг.
book[0].before(book[1])
book[2].before(book[4])
book[2].before(book[3])
book[2].before(book[5])

// Заменить картинку заднего фона на другую из папки image
background.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)'


// Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
title[4].textContent = 'Книга 3. this и Прототипы Объектов'

// Удалить рекламу со страницы
adv.remove();


// Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)
list[0].append(item[3])
list[0].append(item[6])
list[0].append(item[8])
list[0].append(item[4])
list[0].append(item[5])
list[0].append(item[9])
list[0].append(item[10])

list[5].append(item[55])
list[5].append(item[49])
list[5].append(item[50])
list[5].append(item[48])
list[5].append(item[52])
list[5].append(item[53])
list[5].append(item[51])
list[5].append(item[54])
list[5].append(item[56])


// в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
newElem.textContent = 'Глава 8: За пределами ES6'
item[26].before(newElem)



