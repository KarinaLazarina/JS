//task1
//- Создать произвольный елемент с id = text.
// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let div = document.createElement('div');
// div.setAttribute('id','text');
// div.innerText = 'text';
//
// let button = document.createElement('button');
// button.innerText = 'delete #text';
//
// button.onclick = () => {
//     div.style.display = 'none';
// }
//
//
// document.body.appendChild(div);
// document.body.appendChild(button);

//task2
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let button = document.createElement('button');
// button.innerText = 'delete';
//
// button.onclick = () => {
//     button.style.display = 'none';
// }
//
// document.body.appendChild(button);

//task3
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача
// let formElement = document.createElement('form');
// let inputElement = document.createElement('input');
// let buttonElement = document.createElement('button');
//
// buttonElement.innerText  = 'Send';
// inputElement.value = 'age';
//
// buttonElement.onclick = () => {
//     if (inputElement.value >= 18){
//         alert('Your age is good');
//     } else if(inputElement.value === 'age'){
//         alert('Please enter your age');
//     }
//     else {
//         alert('Your age is not enough to enter');
//     }
// }
//
// formElement.appendChild(inputElement);
// formElement.appendChild(buttonElement);
// document.body.appendChild(formElement);

//task4
// //- Создайте меню, которое раскрывается/сворачивается при клике
// let menu = document.createElement('div');
// menu.innerText = 'menu';
// menu.style.backgroundColor = 'skyblue';
// menu.style.height = '30px';
// let div = document.createElement('div');
//
// menu.onclick = (ev) => {
//     div.innerHTML = '<ol> <li>one</li><li>two</li><li>three</li><li>four</li></ol>';
//     menu.onclick = () => {
//         div.style.display = 'none';
//     }
// }
// //как можно сделать чтоб работало больше 1 раза?
// menu.appendChild(div);
// document.body.appendChild(menu);

//task5
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
// let comments = [
//     {title: 'jkl', body: 'sdfghjk'},
//     {title: 'jlll', body: 'sdfghjk'},
// ];
// let divElement = document.createElement('div');
// for (const comment of comments) {
//     let com = document.createElement('div');
//         let headingElement = document.createElement('h2');
//         headingElement.innerText = comment.title;
//         headingElement.style.display = 'inline-block';
//         com.appendChild(headingElement);
//
//         let body = document.createElement('div');
//         body.innerText = comment.body;
//         body.style.display = 'inline-block';
//         com.appendChild(body);
//
//         let btn = document.createElement('button');
//         btn.innerText = 'button';
//         com.appendChild(btn);
//
//         btn.onclick = () => {
//             body.style.display = 'none';
//         }
//     divElement.appendChild(com);
// }
//
//
// document.body.appendChild(divElement);

//task6
// - створити 2 форми  по 2 інпути в кожній.
// ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// let btn = document.getElementById('btn');
// let form1 = document.forms.form1;
// let form2 = document.forms.form2;
//
// btn.onclick = () => {
//     console.log(form1.name.value);
//     console.log(form1.age.value);
//     console.log(form2.mail.value);
//     console.log(form2.number.value);
// }

//task7
// //- Створити функцію, яка генерує таблицю.
// // Перший аргумент визначає кількість строк.
// // Другий параметр визначає кліькіть ячеєк в кожній строці.
// // Третій параметр визначає елемент в який потрібно таблицю додати.
// let id = document.getElementById('content')
// function createTable(rows,cols,parent) {
//     let table = document.createElement('table');
//     for (let i = 0; i < rows; i++) {
//         let row = document.createElement('tr');
//         for (let j = 0; j < cols; j++) {
//             let col = document.createElement('td');
//             col.innerText = j;
//             //col.style.border = '1px solid red';
//             row.appendChild(col)
//
//         }
//
//         table.appendChild(row);
//     }
//
//     parent.appendChild(table)
// }
// createTable(10,5,id);

//task8
// // - Створити 3 инпута та кнопку.
// // Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// // При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// // (Додатковачастина для завдання)
// let id = document.getElementById('content')
// function createTable(rows,cols,value) {
//     let table = document.createElement('table');
//     for (let i = 0; i < rows; i++) {
//         let row = document.createElement('tr');
//         for (let j = 0; j < cols; j++) {
//             let col = document.createElement('td');
//             col.innerText = value;
//             //col.style.border = '1px solid red';
//             row.appendChild(col)
//         }
//         table.appendChild(row);
//     }
//     return table;
// }
//
// let btn = document.getElementById('btn');
// let form = document.forms.form;
//
// btn.onclick = () => {
//     let table = createTable(form.row.value, form.col.value,form.parent.value);
//     id.appendChild(table);
// }

//task9
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// let listOfPhotos =['https://klike.net/uploads/posts/2018-06/1528720172_1.jpg','https://klike.net/uploads/posts/2018-06/medium/1528720227_2.png','https://klike.net/uploads/posts/2018-06/1528720305_6.jpg'];
//
// id = document.getElementById('content');
//
// let arrow= document.createElement('img');
// arrow.setAttribute('src', 'https://image.flaticon.com/icons/svg/126/126492.svg');
// arrow.style.height='20px';
// id.appendChild(arrow);
//
// let i = 0;
//     let img = document.createElement('img');
//     img.setAttribute('src', listOfPhotos[i]);
//     img.style.height='200px';
//     id.appendChild(img);
//
// let arrowR= document.createElement('img');
// arrowR.setAttribute('src', 'https://image.flaticon.com/icons/svg/126/126490.svg');
// arrowR.style.height='20px';
// id.appendChild(arrowR);
//
// arrow.onclick = () =>{
//     i--;
//     if (i < 0){
//         i=listOfPhotos.length-1;
//     }
//     img.setAttribute('src', listOfPhotos[i]);
// }
// arrowR.onclick = () =>{
//     i++;
//     if (i === listOfPhotos.length){
//         i = 0;
//     }
//     img.setAttribute('src', listOfPhotos[i]);
// }

//task10
//- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
//
// let arrOfBadWords = ['badWord1','badWord2','badWord3','badWord4','badWord5'];
//
// let id = document.getElementById('content');
// let inputElement = document.createElement('input');
// inputElement.setAttribute('type','text');
//
// let btn = document.createElement('button');
// btn.innerText = 'send';
//
// btn.onclick = () => {
//     for (const word of arrOfBadWords) {
//         if(word === inputElement.value){
//             alert('Don*t use bad words!!!');
//             break;
//         }
//     }
// }
//
// id.appendChild(inputElement);
// id.appendChild(btn);

//task11
// // - Сворити масив не цензцрних слів.
// // Сворити інпут текстового типу.
// // Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// // Кинути алерт з попередженням у випадку якщо містить.
// // Перевірку робити при натисканні на кнопку
// let arrOfBadWords = ['badWord1','badWord2','badWord3','badWord4','badWord5'];
//
// let id = document.getElementById('content');
// let inputElement = document.createElement('input');
// inputElement.setAttribute('type','text');
//
// let btn = document.createElement('button');
// btn.innerText = 'send';
//
// btn.onclick = () => {
//     let arr = inputElement.value.split(' ');
//     console.log(arr);
//     for (const word of arrOfBadWords) {
//         for (const element of arr) if (element === word) {
//             alert('Don*t use bad words!!!');
//         }
//     }
// }
//
// id.appendChild(inputElement);
// id.appendChild(btn);

//task12
// //-- создать скрипт, который берет считывает на странице (rules.html) текст
// // и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// // При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
//
// let id = document.getElementById('content');
//
// let h2 = document.getElementsByTagName('h2');
// let ol = document.createElement('ol');
// for (let i = 0; i < h2.length; i++) {
//     const h2Element = h2[i];
//     h2Element.setAttribute('id', i);
//     let li = document.createElement('li');
//         let a = document.createElement('a');
//         a.innerText = h2Element.innerText;
//         a.setAttribute('href', `#${i}`);
//         li.appendChild(a);
//     ol.appendChild(li);
//
// }
// id.appendChild(ol);

//task13
//-- взять массив пользователей
// let usersWithAddress = [
//                 {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//                 {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//                 {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//                 {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//                 {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//                 {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//                 {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//                 {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//                 {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
//             ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива.
// Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
// let result = document.getElementById('checked');
// function allUsers(users) {
//     for (const user of users) {
//         let div = document.createElement('div');
//         div.innerHTML = `${JSON.stringify(user)} <hr>`;
//         result.appendChild(div);
//     }
// }
// allUsers(usersWithAddress);
//
// let cb1 = document.getElementById('cb1');
// // cb1.onclick = () => {
// //     result.innerText = '';
// //     if(cb1.checked){
// //         allUsers(usersWithAddress.filter(value => !(value.status)))
// //     }else {
// //         allUsers(usersWithAddress);
// //     }
// // }
// cb1.addEventListener('click', () => {
//     result.innerText = '';
//     if(cb1.checked){
//         allUsers(usersWithAddress.filter(value => !(value.status)))
//     }else {
//         allUsers(usersWithAddress);
//     }
// })
// let cb2 = document.getElementById('cb2');
// // cb2.onclick = () => {
// //     result.innerText = '';
// //     if(cb2.checked){
// //         allUsers(usersWithAddress.filter(value => {
// //             if (value.age >= 29){
// //                 return true;
// //             }
// //         }))
// //     }else {
// //         allUsers(usersWithAddress);
// //     }
// // }
// cb2.addEventListener('click', () => {
//     result.innerText = '';
//     if(cb2.checked){
//         allUsers(usersWithAddress.filter(value => {
//             if (value.age >= 29){
//                 return true;
//             }
//         }))
//     }else {
//         allUsers(usersWithAddress);
//     }
// })
// let cb3 = document.getElementById('cb3');
// cb3.onclick = () => {
//     result.innerText = '';
//     if(cb3.checked){
//         allUsers(usersWithAddress.filter(value => {
//             if (value.address.city === 'Kyiv'){
//                 return true;
//             }
//         }))
//     }else {
//         allUsers(usersWithAddress);
//     }
// }
//?

//task14
// //*** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
//
// window.onselect = () => {
//     let selection = document.getSelection();
//     console.log(selection.rangeCount.valueOf());
//     console.log(selection);
// }




