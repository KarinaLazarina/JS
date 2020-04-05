let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];
let cars = [
    {model: 'bmw', year: 2014, power: 45, color: 'white'},
    {model: 'hyuhdai', year: 2017, power: 35, color: 'grey'},
    {model: 'mercedes', year: 2001, power: 56, color: 'blue'},
    {model: 'lada', year: 2010, power: 41, color: 'black'},
    {model: 'cherry', year: 2004, power: 35, color: 'gold'},
    {model: 'honda', year: 2000, power: 49, color: 'pink'},
    {model: 'skoda', year: 2018, power: 50, color: 'white'},
    {model: 'bmw', year: 2017, power: 85, color: 'black'},
    {model: 'lexus', year: 2017, power: 45, color: 'grey'},
    {model: 'volvo', year: 2010, power: 43, color: 'white'},
];

//task1
// //- створити функцію яка виводить масив
// function log(array) {
//     for (const arrElement of array) {
//         console.log(arrElement);
//     }
// }
//
// let arr = [7,0, 'true', false, {name: 'vasya'}];
// log(arr);

//task2
// // - створити функцію яка заповнює масив рандомними числами та виводить його.
// // Для виведення використати попвередню функцію.
// function log(array) {
//     for (const arrElement of array) {
//         console.log(arrElement);
//     }
// }
// function randomArr() {
//     let arr = [];
//     for (let i = 0; i < 10; i++) {
//         arr[i] = parseInt(Math.random() * 100);
//     }
//     return arr;
// }
// log(randomArr());

//task3
// // - створити функцію яка приймає три числа та виводить та повертає найменьше.
// function min(a, b, c) {
//     if(a<b && a<c){
//         console.log(a);
//         return a;
//     }
//     else if (b<a && b<c){
//         console.log(b);
//         return b;
//     }
//     else{
//         console.log(c);
//         return c;
//     }
// }
// min(5,0,-7);

//task4
// // - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function max(a, b, c) {
//     if(a>b && a>c){
//         console.log(a);
//         return a;
//     }
//     else if (b>a && b>c){
//         console.log(b);
//         return b;
//     }
//     else{
//         console.log(c);
//         return c;
//     }
// }
// max(5,0,-7);

//task5
// // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
//
// function returnMax_logMin() {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const argument of arguments) {
//         if(argument<min){
//             min = argument;
//         }
//         if(argument>max){
//             max = argument;
//         }
//     }
//     console.log(min);
//     return max;
// }
//
// console.log(returnMax_logMin(7, 0, 88, -6, 1000, -77));

//task6
// - створити функцію яка виводить масив
//task1 ??

//task7
// // - створити функцію яка повертає найбільше число з масиву
// function maxInArray(array) {
//     let max = array[0];
//     for (const arr of array) {
//         if(arr>max){
//             max = arr;
//         }
//     }
//     return max;
// }
// console.log(maxInArray([-9, -6, -3, 1, -888]));

//task8
// - створити функцію яка повертає найменьше число з масиву
// function minInArray(array) {
//     let min = array[0];
//     for (const arr of array) {
//         if(arr<min){
//             min = arr;
//         }
//     }
//     return min;
// }
// console.log(minInArray([-9, -6, -3, 1, -888]));

//task9
// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
//  function sumOfElement(array) {
//     let sum = 0;
//      for (const arrayElement of array) {
//          sum += arrayElement;
//      }
//      return sum;
//  }
//
//  let arr = [6,0,2,-2,9];
// console.log(sumOfElement(arr));

//task10
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function sumOfElement(array) {
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum += arrayElement;
//     }
//     return sum;
// }
// function serArefm(array){
//     let seredne = sumOfElement(array)/2;
//     return seredne;
// }
//
// let arr = [6,0,2,-2,9];
// console.log(serArefm(arr));

//task11
// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// function kilkistElements(array) {
//     let i = 0;
//     for (const rule of rules) {
//         if(typeof rule === 'object'){
//             i++;
//         }
//     }
//     return i;
// }
//
// console.log(kilkistElements(rules));

//task12
// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// function kilkistElementsKeys(array) {
//     let i = 0;
//     for (const rule of rules) {
//         if(typeof rule === 'object'){
//             for (const rule1 in rule) {
//                 i++;
//             }
//         }
//     }
//     return i;
// }
//
// console.log(kilkistElementsKeys(rules));

//task13
// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//
// function sumArray(arr1, arr2) {
//     console.log(arr1);
//     console.log(arr2);
//     let resArr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         resArr[i] = arr1[i] + arr2[i];
//     }
//     return resArr;
// }
//
// let arr1 = [4,0,9,7];
// let arr2 = [5,3,-8,0];
// console.log(sumArray(arr1, arr2));

//task14
//- *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// function swap(array, i) {
//     for (const index in array) {
//         if (index == i){
//             let t = array[i];
//             array[i] = array[i +1];
//             array[i+1] = t;
//         }
//     }
//     return array;
// }
//
// let arr = [8,0,7,'hh',true];
// console.log(swap(arr, 3));

//task15
// // - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// // Двожина масиву від 2 до 100
function zeroToEnd(array) {
    for (let i = 0; i<array.length; i++) {
        if (array[i] === 0) {
            array[array.length - 1] = array[i];
            for (let j = i; j < array.length-1; j++) {
                array[j] = array[j + 1];
            }
        }
    }
    return array;
}

let arr = [0,8,0,6,5,0,3,7,0,7,0,0];
console.log(zeroToEnd(arr));

//task16
//- Додає в боді блок з текстом "Hello owu"
// function textToBody() {
//     let htmlDivElement = document.createElement('div');
//     htmlDivElement.innerText = 'Hello owu';
//     document.body.appendChild(htmlDivElement);
// }
//
// textToBody();

//task17
// // - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function textToBody(tag, text) {
//     let htmlDivElement = document.createElement(tag);
//     htmlDivElement.innerText = text;
//     document.body.appendChild(htmlDivElement);
// }
//
// textToBody('p', 'ghjk');
// textToBody('h2','hello')

//task18
// - приймає масив автомобілів (можна взяти з попередніх дз ),
// та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// function carsToBlock(cars, id) {
//     let htmlDivElement = document.createElement('div');
//     htmlDivElement.id = id;
//     for (const car of cars) {
//         for (const carkey in car) {
//             htmlDivElement.innerHTML += `${carkey} = ${car[carkey]}<br>`;
//         }
//         htmlDivElement.innerHTML += '<hr>';
//     }
//     document.body.appendChild(htmlDivElement);
// }
// carsToBlock(cars, 'cars');

//task19
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Всі властивості авто в обному блоці
// function carsToBlock(cars, id) {
//     let htmlDivElement = document.createElement('div');
//     htmlDivElement.id = id;
//     for (const car of cars) {
//         let carBlock = document.createElement('div');
//         for (const carkey in car) {
//             carBlock.innerHTML += `${carkey} = ${car[carkey]}<br>`;
//         }
//         carBlock.innerHTML += '<hr>';
//         htmlDivElement.appendChild(carBlock);
//     }
//     document.body.appendChild(htmlDivElement);
// }
// carsToBlock(cars, 'cars');

//task20
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
// function carsToBlock(cars, id) {
//     let htmlDivElement = document.createElement('div');
//     htmlDivElement.id = id;
//     for (const car of cars) {
//         let carBlock = document.createElement('div');
//         for (const carkey in car) {
//             let carKey = document.createElement('div');
//             carKey.innerHTML += `${carkey} = ${car[carkey]}<br>`;
//             carBlock.appendChild(carKey);
//         }
//         carBlock.innerHTML += '<hr>';
//         htmlDivElement.appendChild(carBlock);
//     }
//     document.body.appendChild(htmlDivElement);
// }
// carsToBlock(cars, 'cars');

//task21
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false},
// ];
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'},
// ];
//
// function join(usersWithId, citiesWithId) {
//     let result = [];
//     for (let i = 0; i < usersWithId.length; i++) {
//         for (let j = 0; citiesWithId.length; j++) {
//             if(usersWithId[i].id === citiesWithId[j].user_id){
//                 result[i] = usersWithId[i];
//                 result[i].address = citiesWithId[j];
//                 break;
//             }
//         }
//     }
//     return result;
// }
//
// console.log(join(usersWithId, citiesWithId));

//task22
function rulesFunction(rules){
    let htmlDivElement = document.createElement('div');
    htmlDivElement.id = 'wrap';
    for (const rule of rules) {
        let div = document.createElement('div');
        div.id = `rules`;

        let htmlHeadingElement = document.createElement('h2');
        htmlHeadingElement.innerText = rule.title;
        div.appendChild(htmlHeadingElement);

        let htmlParagraphElement = document.createElement('p');
        htmlParagraphElement.innerText = rule.body;
        div.appendChild(htmlParagraphElement);

        htmlDivElement.appendChild(div);
    }
    document.body.appendChild(htmlDivElement);
}
rulesFunction(rules);
