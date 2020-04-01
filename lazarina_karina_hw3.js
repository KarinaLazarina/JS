//task1
// //- создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// let obj1 = {
//     name: 'Polina',
//     age: 12,
//     husbahd: false
// }
// let obj2 = {
//     key: 'hjkl',
//     login: 'somebody@gmail.com',
//     pin: 5678
// }
// let obj3 = {
//     title: 'milk',
//     age: 1,
//     status: false
// }
// let obj4 = {
//     label: 'Hyundai',
//     year: 2015,
//     mileage: false
// }
// let obj5 = {
//     type: 'text',
//     size: 345,
//     security: true
// }
//
//
// // - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let obj6 = {
//     name: ['Katya', 'Masha'],
//     age: 32,
//     husbahd: {
//         name: 'Petya',
//         age: 25
//     }
// }
// let obj7 = {
//     key: 'hjkl',
//     login: 'somebody@gmail.com',
//     pin: [5678, 4321],
//     username: {
//         name: 'Sveta',
//         surname: 'Votina'
//     }
// }
// let obj8 = {
//     title: 'milk',
//     status: false,
//     prices: [56, 49.9, 60],
//     properties: {
//         color: 'white'
//     }
// }
// let obj9 = {
//     label: 'Hyundai',
//     year: 2015,
//     mileage: false,
//     models: ['sonata', 'tucson', 'elantra']
// }
// let obj10 = {
//     type: 'text',
//     size: 345,
//     security: true,
//     owner: {
//         name: 'Petya',
//         skills: ['C', 'C#', 'java']
//     }
// }
//
// // - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// for (const objKey in obj1) {
//     console.log(objKey);
// }
// console.log('____________');
// for (const objKey in obj2) {
//     console.log(objKey);
// }
// console.log('____________');
// for (const objKey in obj3) {
//     console.log(objKey);
// }
// console.log('____________');
// for (const objKey in obj4) {
//     console.log(objKey);
// }
// console.log('____________');
// for (const objKey in obj5) {
//     console.log(objKey);
// }
// console.log('____________');
// for (const objKey in obj6) {
//     console.log(objKey);
// }
// console.log('____________');
// for (const objKey in obj7) {
//     console.log(objKey);
// }
// console.log('____________');
// for (const objKey in obj8) {
//     console.log(objKey);
// }
// console.log('____________');
// for (const objKey in obj9) {
//     console.log(objKey);
// }
// console.log('____________');
// for (const objKey in obj10) {
//     console.log(objKey);
// }
// console.log('____________');
//
// // - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// console.log(Object.keys(obj1));
// console.log(Object.keys(obj2));
// console.log(Object.keys(obj3));
// console.log(Object.keys(obj4));
// console.log(Object.keys(obj5));
// console.log(Object.keys(obj6));
// console.log(Object.keys(obj7));
// console.log(Object.keys(obj8));
// console.log(Object.keys(obj9));
// console.log(Object.keys(obj10));

//task2
// // - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
// let cars = [
//     {model: 'bmw', year: 2014, power: 45, color: 'white'},
//     {model: 'hyuhdai', year: 2017, power: 35, color: 'grey'},
//     {model: 'mercedes', year: 2001, power: 56, color: 'blue'},
//     {model: 'lada', year: 2010, power: 41, color: 'black'},
//     {model: 'cherry', year: 2004, power: 35, color: 'gold'},
//     {model: 'honda', year: 2000, power: 49, color: 'pink'},
//     {model: 'skoda', year: 2018, power: 50, color: 'white'},
//     {model: 'bmw', year: 2017, power: 85, color: 'black'},
//     {model: 'lexus', year: 2017, power: 45, color: 'grey'},
//     {model: 'volvo', year: 2010, power: 43, color: 'white'},
// ]

//task3
// // - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// let cities = [
//     {title: 'Kiev', population: 2.8, country: 'Ukraine', region: 'center'},
//     {title: 'Odessa', population: 1.2, country: 'Ukraine', region: 'south'},
//     {title: 'Lviv', population: 0.8, country: 'Ukraine', region: 'west'},
// ]

//task4
// // - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// let cars1 = [
//     {model: 'bmw', year: 2014, power: 45, color: 'white', driver:{name: 'Petya', age: 45, sex: 'male', experience: 10}},
//     {model: 'hyuhdai', year: 2017, power: 35, color: 'grey', driver:{name: 'Yura', age: 25, sex: 'male', experience: 4}},
//     {model: 'mercedes', year: 2001, power: 56, color: 'blue', driver:{name: 'Vasya', age: 65, sex: 'male', experience: 16}},
//     {model: 'lada', year: 2010, power: 41, color: 'black', driver:{name: 'Katya', age: 78, sex: 'female', experience: 8}},
//     {model: 'cherry', year: 2004, power: 35, color: 'gold', driver:{name: 'Lena', age: 65, sex: 'female', experience: 12}},
//     {model: 'honda', year: 2000, power: 49, color: 'pink', driver:{name: 'Petya', age: 24, sex: 'male', experience: 5}},
//     {model: 'skoda', year: 2018, power: 50, color: 'white', driver:{name: 'Vitya', age: 19, sex: 'male', experience: 1}},
//     {model: 'bmw', year: 2017, power: 85, color: 'black', driver:{name: 'Pasha', age: 46, sex: 'male', experience: 20}},
//     {model: 'lexus', year: 2017, power: 45, color: 'grey', driver:{name: 'Masha', age: 55, sex: 'female', experience: 25}},
//     {model: 'volvo', year: 2010, power: 43, color: 'white', driver:{name: 'Kolya', age: 45, sex: 'male', experience: 7}},
// ]

//task5
// let cars = [
//     {model: 'bmw', year: 2014, power: 45, color: 'white'},
//     {model: 'hyuhdai', year: 2017, power: 35, color: 'grey'},
//     {model: 'mercedes', year: 2001, power: 56, color: 'blue'},
//     {model: 'lada', year: 2010, power: 41, color: 'black'},
//     {model: 'cherry', year: 2004, power: 35, color: 'gold'},
//     {model: 'honda', year: 2000, power: 49, color: 'pink'},
//     {model: 'skoda', year: 2018, power: 50, color: 'white'},
//     {model: 'bmw', year: 2017, power: 85, color: 'black'},
//     {model: 'lexus', year: 2017, power: 45, color: 'grey'},
//     {model: 'volvo', year: 2010, power: 43, color: 'white'},
// ]
//
// let cities = [
//     {title: 'Kiev', population: 2.8, country: 'Ukraine', region: 'center'},
//     {title: 'Odessa', population: 1.2, country: 'Ukraine', region: 'south'},
//     {title: 'Lviv', population: 0.8, country: 'Ukraine', region: 'west'},
// ]
//
// let cars1 = [
//     {model: 'bmw', year: 2014, power: 45, color: 'white', driver:{name: 'Petya', age: 45, sex: 'male', experience: 10}},
//     {model: 'hyuhdai', year: 2017, power: 35, color: 'grey', driver:{name: 'Yura', age: 25, sex: 'male', experience: 4}},
//     {model: 'mercedes', year: 2001, power: 56, color: 'blue', driver:{name: 'Vasya', age: 65, sex: 'male', experience: 16}},
//     {model: 'lada', year: 2010, power: 41, color: 'black', driver:{name: 'Katya', age: 78, sex: 'female', experience: 8}},
//     {model: 'cherry', year: 2004, power: 35, color: 'gold', driver:{name: 'Lena', age: 65, sex: 'female', experience: 12}},
//     {model: 'honda', year: 2000, power: 49, color: 'pink', driver:{name: 'Petya', age: 24, sex: 'male', experience: 5}},
//     {model: 'skoda', year: 2018, power: 50, color: 'white', driver:{name: 'Vitya', age: 19, sex: 'male', experience: 1}},
//     {model: 'bmw', year: 2017, power: 85, color: 'black', driver:{name: 'Pasha', age: 46, sex: 'male', experience: 20}},
//     {model: 'lexus', year: 2017, power: 45, color: 'grey', driver:{name: 'Masha', age: 55, sex: 'female', experience: 25}},
//     {model: 'volvo', year: 2010, power: 43, color: 'white', driver:{name: 'Kolya', age: 45, sex: 'male', experience: 7}},
// ]
// // - проитерировать каждый массив из задания 5,6,7 при помощи while.
// let i = 0;
// while (i<cars.length){
//     console.log(cars[i]);
//     i++;
// }
// i = 0;
// console.log('-----------');
// while (i<cars1.length){
//     console.log(cars1[i]);
//     i++;
// }
// i = 0;
// console.log('-----------');
// while (i<cities.length){
//     console.log(cities[i]);
//     i++;
// }
//
// // - проитерировать каждый массив из задания 5,6,7 при помощи for .
// for (let j = 0; j < cars1.length; j++) {
//     console.log(cars1[j]);;
// }
// for (let j = 0; j < cars.length; j++) {
//     console.log(cars[j]);;
// }
// for (let j = 0; j < cities.length; j++) {
//     console.log(cities[j]);;
// }
//
// // - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// for (const cars1Element of cars1) {
//     console.log(cars1Element);
// }
// for (const carsElement of cars) {
//     console.log(carsElement);
// }
// for (const citiesElement of cities) {
//     console.log(citiesElement);
// }

//task6
// //- взять объекты из задания 1 и превратить каждый в json.
// let obj1 = {
//     name: 'Polina',
//     age: 12,
//     husbahd: false
// }
// let obj2 = {
//     key: 'hjkl',
//     login: 'somebody@gmail.com',
//     pin: 5678
// }
// let obj3 = {
//     title: 'milk',
//     age: 1,
//     status: false
// }
// let obj4 = {
//     label: 'Hyundai',
//     year: 2015,
//     mileage: false
// }
// let obj5 = {
//     type: 'text',
//     size: 345,
//     security: true
// }
// let jsonObject1 = JSON.stringify(obj1);
// let jsonObject2 = JSON.stringify(obj2);
// let jsonObject3 = JSON.stringify(obj3);
// let jsonObject4 = JSON.stringify(obj4);
// let jsonObject5 = JSON.stringify(obj5);
// // - взять json из задания 11 и превратить их обратно в объекты.
// JSON.parse(jsonObject1);
// JSON.parse(jsonObject2);
// JSON.parse(jsonObject3);
// JSON.parse(jsonObject4);
// JSON.parse(jsonObject5);

//task7
// let cars = [
//     {model: 'bmw', year: 2014, power: 45, color: 'white'},
//     {model: 'hyuhdai', year: 2017, power: 35, color: 'grey'},
//     {model: 'mercedes', year: 2001, power: 56, color: 'blue'},
//     {model: 'lada', year: 2010, power: 41, color: 'black'},
//     {model: 'cherry', year: 2004, power: 35, color: 'gold'},
//     {model: 'honda', year: 2000, power: 49, color: 'pink'},
//     {model: 'skoda', year: 2018, power: 50, color: 'white'},
//     {model: 'bmw', year: 2017, power: 85, color: 'black'},
//     {model: 'lexus', year: 2017, power: 45, color: 'grey'},
//     {model: 'volvo', year: 2010, power: 43, color: 'white'},
// ]
// let cities = [
//     {title: 'Kiev', population: 2.8, country: 'Ukraine', region: 'center'},
//     {title: 'Odessa', population: 1.2, country: 'Ukraine', region: 'south'},
//     {title: 'Lviv', population: 0.8, country: 'Ukraine', region: 'west'},
// ]
// let cars1 = [
//     {model: 'bmw', year: 2014, power: 45, color: 'white', driver:{name: 'Petya', age: 45, sex: 'male', experience: 10}},
//     {model: 'hyuhdai', year: 2017, power: 35, color: 'grey', driver:{name: 'Yura', age: 25, sex: 'male', experience: 4}},
//     {model: 'mercedes', year: 2001, power: 56, color: 'blue', driver:{name: 'Vasya', age: 65, sex: 'male', experience: 16}},
//     {model: 'lada', year: 2010, power: 41, color: 'black', driver:{name: 'Katya', age: 78, sex: 'female', experience: 8}},
//     {model: 'cherry', year: 2004, power: 35, color: 'gold', driver:{name: 'Lena', age: 65, sex: 'female', experience: 12}},
//     {model: 'honda', year: 2000, power: 49, color: 'pink', driver:{name: 'Petya', age: 24, sex: 'male', experience: 5}},
//     {model: 'skoda', year: 2018, power: 50, color: 'white', driver:{name: 'Vitya', age: 19, sex: 'male', experience: 1}},
//     {model: 'bmw', year: 2017, power: 85, color: 'black', driver:{name: 'Pasha', age: 46, sex: 'male', experience: 20}},
//     {model: 'lexus', year: 2017, power: 45, color: 'grey', driver:{name: 'Masha', age: 55, sex: 'female', experience: 25}},
//     {model: 'volvo', year: 2010, power: 43, color: 'white', driver:{name: 'Kolya', age: 45, sex: 'male', experience: 7}},
// ]
// // - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// for (let i = 0; i < cars.length; i++) {
//     JSON.stringify(cars[i]);
// }
// // - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// for (let i = 0; i < cities.length; i++) {
//     JSON.stringify(cities[i]);
// }
// // - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let copy = [];
// for (let i = 0; i < cars1.length; i++) {
//     copy[i] = JSON.stringify(cars1[i]);
// }
// console.log(copy);

//task8
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// let user1 = {
//     name: 'vasya',
//     age: 66,
//     skills: ['js', 'html', 'C']
// };
// let user2 = {
//     name: 'masha',
//     age: 26,
//     skills: ['js', 'C++', 'java']
// };
// let user3 = {
//     name: 'kolya',
//     age: 33,
//     skills: ['java', 'html', 'C', 'java']
// };
// let arrOfUsers  = [user1, user2, user3];
// for (let i = 0; i < arrOfUsers.length; i++) {
//     console.log(arrOfUsers[i]);
//     for (const userKey in arrOfUsers[i]) {
//         if (userKey === 'skills'){
//             //console.log(arrOfUsers[i][userKey]);
//             for (const userElement of arrOfUsers[i][userKey]) {
//                 console.log(userElement);
//             }
//         }
//     }
// }

//task9
// // - Создать массив пользователей.
// // У каждого пользователя обязательно должено быть поле skills которое является массивом.
// // Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills.
// // Скопировать все skills всех пользователей в отедльный массив
// let user1 = {
//     name: 'vasya',
//     age: 66,
//     skills: ['js', 'html', 'C']
// };
// let user2 = {
//     name: 'masha',
//     age: 26,
//     skills: ['js', 'C++', 'java']
// };
// let user3 = {
//     name: 'kolya',
//     age: 33,
//     skills: ['java', 'html', 'C', 'java']
// };
// let skills = [];
// let counter = 0;
// let arrOfUsers  = [user1, user2, user3];
// for (let i = 0; i < arrOfUsers.length; i++) {
//     console.log(arrOfUsers[i]);
//     for (const userKey in arrOfUsers[i]) {
//         if (userKey === 'skills'){
//             //console.log(arrOfUsers[i][userKey]);
//             for (const userElement of arrOfUsers[i][userKey]) {
//                 console.log(userElement);
//                 skills[counter] = userElement;
//                 counter++;
//             }
//         }
//     }
// }
// console.log(skills);

//task10
// За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [
//     {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//     {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
//     ];
// let key = 'skills'
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);;
//     for (let j = 0; j < users[i][key].length; j++) {
//         console.log(users[i][key][j]);
//     }
// }

//task11
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
// //- З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let address = [];
// for (let i = 0; i < users.length; i++) {
//     for (const addressKey in users[i]) {
//         if (addressKey === 'address'){
//             address[i] = users[i][addressKey];
//         }
//     }
//
// }
// console.log(address);
// //- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// // for (let i = 0; i < users.length; i++) {
// //     let htmlDivElement = document.createElement('div');
// //     htmlDivElement.innerHTML = `
// //             name = ${users[i].name}<br>
// //             age = ${users[i].age}<br>
// //             status = ${users[i].status}<br>
// //             address = `
// //     for (const addressKey in users[i].address) {
// //     htmlDivElement.innerHTML+= `${users[i]['address'][addressKey]}   `
// //     }
// //     document.body.appendChild(htmlDivElement)
// // }
//
// //- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// // for (let i = 0; i < users.length; i++) {
// //     let htmlDivElement = document.createElement('div');
// //     for (const htmlDivElementKey in users[i]) {
// //             let block = document.createElement('div');
// //
// //         if (htmlDivElementKey === 'address'){
// //             block.innerHTML = `${htmlDivElementKey} = `
// //             for (const addressKey in users[i].address) {
// //                 block.innerHTML+= `${users[i]['address'][addressKey]}   `
// //             }
// //         }
// //         else {
// //             block.innerHTML = `${htmlDivElementKey} = ${users[i][htmlDivElementKey]}`;
// //         }
// //
// //         htmlDivElement.appendChild(block);
// //     }
// //     document.body.appendChild(htmlDivElement)
// // }
//
// //- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// // for (let i = 0; i < users.length; i++) {
// //     let htmlDivElement = document.createElement('div');
// //     for (const htmlDivElementKey in users[i]) {
// //             let block = document.createElement('div');
// //
// //         if (htmlDivElementKey === 'address'){
// //             block.innerHTML = `${htmlDivElementKey} = `
// //             for (const addressKey in users[i].address) {
// //                 let innerBlock = document.createElement('div');
// //                 innerBlock.innerHTML = `${users[i]['address'][addressKey]}`;
// //                 innerBlock.style.marginLeft = '10px';
// //                 block.appendChild(innerBlock);
// //             }
// //         }
// //         else {
// //             block.innerHTML = `${htmlDivElementKey} = ${users[i][htmlDivElementKey]}`;
// //         }
// //
// //         htmlDivElement.appendChild(block);
// //     }
// //     document.body.appendChild(htmlDivElement)
// // }

//task12
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
// let result = [];
// for (let i = 0; i < usersWithId.length; i++) {
//     for (let j = 0; citiesWithId.length; j++) {
//         if(usersWithId[i].id === citiesWithId[j].user_id){
//             result[i] = usersWithId[i];
//             result[i].address = citiesWithId[j];
//             break;
//         }
//     }
// }
// console.log(result);

//task13
// //- створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// let elementById = document.getElementById('block');
// console.log(elementById.innerText);
//
// let elementsByClassName = document.getElementsByClassName('target');
// console.log(elementsByClassName[0].innerText);
//
// let elementsByTagName = document.getElementsByTagName('div');
// console.log(elementsByTagName[0].innerText);
//
// //- змінити цей текст використовуючи селектори id, class,  tag
// elementsByTagName[0].innerText = 'ghjkdl';
// elementsByClassName[0].innerText = 'ghgfdsdfgh';
// elementById.innerText = 'gttttt';
//
// //- змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// elementById.style.width = '50px';
// elementsByClassName[0].style.height = '500px';
// elementsByTagName[0].style.width = '100px';

//task14
// //- за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// let htmlTableElement = document.createElement('table');
// let htmlTableRowElement = document.createElement('tr');
// for (let i = 0; i < 3; i++) {
//     let htmlTableDataCellElement = document.createElement('td');
//     htmlTableRowElement.appendChild(htmlTableDataCellElement);
// }
// htmlTableElement.appendChild(htmlTableRowElement);
// document.body.appendChild(htmlTableElement);

//task15
// //- за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// let htmlTableElement = document.createElement('table');
// for (let i = 0; i <10; i++) {
//     let htmlTableRowElement = document.createElement('tr');
//     for (let i = 0; i < 3; i++) {
//         let htmlTableDataCellElement = document.createElement('td');
//         htmlTableRowElement.appendChild(htmlTableDataCellElement);
//     }
//     htmlTableElement.appendChild(htmlTableRowElement);
// }
//
// document.body.appendChild(htmlTableElement);

//task16
// //- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// let htmlTableElement = document.createElement('table');
// for (let i = 0; i <10; i++) {
//     let htmlTableRowElement = document.createElement('tr');
//     for (let i = 0; i < 5; i++) {
//         let htmlTableDataCellElement = document.createElement('td');
//         htmlTableRowElement.appendChild(htmlTableDataCellElement);
//     }
//     htmlTableElement.appendChild(htmlTableRowElement);
// }
//
// document.body.appendChild(htmlTableElement);

//task17
// //- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
// let n = +prompt("Enter n: ");
// let m = +prompt("Enter m: ");
//
// let htmlTableElement = document.createElement('table');
// for (let i = 0; i < n; i++) {
//     let htmlTableRowElement = document.createElement('tr');
//     for (let i = 0; i < m; i++) {
//         let htmlTableDataCellElement = document.createElement('td');
//         htmlTableRowElement.appendChild(htmlTableDataCellElement);
//     }
//     htmlTableElement.appendChild(htmlTableRowElement);
// }
//
// document.body.appendChild(htmlTableElement);
