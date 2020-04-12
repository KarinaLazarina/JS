//task1
// //- создать массив с 20 числами.
// let arr = [5,0,8,9,67,-9,54,-32,9,60,10,54,9,57,43,13,0,99,10,55];
//
// // -- при помощи метода sort отсортировать массив.
// let sort = arr.sort();
// console.log(sort);
//
// // -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// let reverseSort = arr.sort((a, b)=>b-a);
// console.log(reverseSort);
//
// // -- при помощи filter получить числа кратные 3
// let filter3 = arr.filter(value => {
//     if (value%3 === 0){
//         return true;
//     }
// });
// console.log(filter3);
//
// // -- при помощи filter получить числа кратные 10
// let filter10 = arr.filter(value => {
//     if (value%10 === 0){
//         return true;
//     }
// });
// console.log(filter10);
//
// // -- перебрать (проитерировать) массив при помощи foreach()
// arr.forEach(value => console.log(value));
//
// // -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let map = arr.map(value => value*3);
// console.log(map);

//task2
// //- создать массив со словами на 15-20 элементов.
// let arr = ['hello','world','hi','owu','user','hjk','oiu','ertyk','gh','asd','rrr','uj','kl','khg','ll','iuyt']
//
// // -- отсортировать его по алфавиту в восходящем порядке.
// let sort = arr.sort();
// console.log(sort);
//
// // -- отсортировать его по алфавиту  в нисходящем порядке.
// let reverseSort = arr.sort((a,b) => {
//     if (a>b){
//         return -1;
//     }
//     else {
//         return 1;
//     }
// });
// console.log(reverseSort);
//
// // -- отфильтровать слова длиной менее 4х символов
// let filter = arr.filter(value => {
//     if (value.length < 4){
//         return true;
//     }
// });
// console.log(filter);
//
// // -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let map = arr.map(value => value += '!');
// console.log(map);

//task3
// //Все робити через функції масивів (foreach, map ...тд)
// // Дан масив :
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
//     ];
// // - відсортувати його за  віком (зростання , а потім окремо спадання)
// users.sort((user1, user2) => user1.age - user2.age);
// console.log(users);
//
// users.sort((user1, user2) => user2.age - user1.age);
// console.log(users);
//
// // - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// users.sort((user1, user2) => user1.name.length - user2.name.length);
// console.log(users);
//
// users.sort((user1, user2) => user2.name.length - user1.name.length);
// console.log(users);
////почему если раскомментировать все 4 сортировки одновремено, то во всех случаях выводится одно и тоже?Я же вроде отсортировала и сразу вывела, а мпотом уже сортирую дальше
//
// // - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
//
// let clone = JSON.parse(JSON.stringify(users))
// let usersWithId = clone.map((value, index)=> {
//     value.id = index+1;
//     return value
//
// });
// console.log(usersWithId);
// console.log(users);
//
// // - відсортувати його за індентифікатором
// usersWithId.sort((user1, user2) => user2.id - user1.id);
// console.log(usersWithId);

//task4
// //-- наисать функцию калькулятора с 2мя числами и колбеком
// function calculator(a,b,action) {
//     console.log(action(a, b));;
// }
//
// calculator(2,3,(a,b)=> a+b );
// calculator(2,9,(a,b)=> a*b );
// calculator(2,3,(a,b)=> a-b );
//
// // -- наисать функцию калькулятора с 3мя числами и колбеком
// function calc(a, b, c, action) {
//     console.log(action(a, b, c));
// }
//
// calc(3,8,2,(a,b,c) => a+c*b);

//task5
// let cars = [
//     {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//     {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume: 3,power: 400},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
//     ];
// // Відфільтрувати масив за наступними крітеріями :
// // - двигун більше 3х літрів
// let filter = cars.filter(value => {
//     if (value.volume >= 3){
//         return true
//     }
// });
// console.log(filter);
// // - двигун = 2л
// let filter1 = cars.filter(value => {
//     if (value.volume === 2){
//         return true
//     }
// });
// console.log(filter1);
//
// // - виробник мерс
// let filter2 = cars.filter(value => {
//     if (value.producer === 'mercedes'){
//         return true
//     }
// });
// console.log(filter2);
//
// // - двигун більше 3х літрів + виробник мерседес
// let filter3 = cars.filter(value => {
//     if (value.producer === 'mercedes' && value.volume >= 3){
//         return true
//     }
// });
// console.log(filter3);
//
// // - двигун більше 3х літрів + виробник субару
// let filter4 = cars.filter(value => {
//     if (value.producer === 'subaru' && value.volume >= 3){
//         return true
//     }
// });
// console.log(filter4);
//
// // - сили більше ніж 300
// let filter5 = cars.filter(value => {
//     if (value.power >= 300){
//         return true
//     }
// });
// console.log(filter5);
//
// // - сили більше ніж 300 + виробник субару
// let filter6 = cars.filter(value => {
//     if (value.producer === 'subaru' && value.power >= 300){
//         return true
//     }
// });
// console.log(filter6);
//
// // - мотор серіі ej
// let filter7 = cars.filter(value => {
//     if (value.engine.startsWith('ej')){
//         return true
//     }
// });
// console.log(filter7);
//
// // - сили більше ніж 300 + виробник субару + мотор серіі ej
// let filter8 = cars.filter(value => {
//     if (value.producer === 'subaru' && value.power >= 300 && value.engine.startsWith('ej')){
//         return true
//     }
// });
// console.log(filter8);
//
// // - двигун меньше 3х літрів + виробник мерседес
// let filter9 = cars.filter(value => {
//     if (value.producer === 'mercedes' && value.volume >= 3){
//         return true
//     }
// });
// console.log(filter9);
//
// // - двигун більше 2л + сили більше 250
// let filter10 = cars.filter(value => {
//     if (value.power > 250 && value.volume >= 2){
//         return true
//     }
// });
// console.log(filter10);
//
// // - сили більше 250  + виробник бмв
// let filter11 = cars.filter(value => {
//     if (value.producer === 'bmw' && value.power > 250){
//         return true
//     }
// });
// console.log(filter11);

//task6
// // взять слдующий массив
// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
// // -- отсортировать его по id пользователей
// usersWithAddress.sort((us1, us2) => us1.id - us2.id);
// console.log(usersWithAddress);
//
// // -- отсортировать его по id пользователей в обратном опрядке
// usersWithAddress.sort((us1, us2) => us2.id - us1.id);
// console.log(usersWithAddress);
//
// // -- отсортировать его по возрасту пользователей
// usersWithAddress.sort((us1, us2) => us1.age - us2.age);
// console.log(usersWithAddress);
//
// // -- отсортировать его по возрасту пользователей в обратном порядке
// usersWithAddress.sort((us1, us2) => us2.age - us1.age);
// console.log(usersWithAddress);
//
// // -- отсортировать его по имени пользователей
// usersWithAddress.sort((us1, us2) => {
//     if (us1.name < us2.name){
//         return -1
//     }
//     else {
//         return 1
//     }
// });
// console.log(usersWithAddress);
//
// // -- отсортировать его по имени пользователей в обратном порядке
// usersWithAddress.sort((us1, us2) => {
//     if (us1.name > us2.name){
//         return -1
//     }
//     else {
//         return 1
//     }
// });
// console.log(usersWithAddress);
//
// // -- отсортировать его по названию улицы  в алфавитном порядке
// usersWithAddress.sort((us1, us2) => {
//     if (us1.address.street > us2.address.street){
//         return -1
//     }
//     else {
//         return 1
//     }
// });
// console.log(usersWithAddress);
//
// // -- отсортировать его по номеру дома по возрастанию
// usersWithAddress.sort((us1, us2) => us1.address.number - us2.address.number);
// console.log(usersWithAddress);
//
// // -- отфильтровать (оставить) тех кто младше 30
// let filter = usersWithAddress.filter(value => {
//     if (value.age < 30){
//         return true
//     }
// });
// console.log(filter);
//
// // -- отфильтровать (оставить) тех у кого отрицательный статус
// let filter1 = usersWithAddress.filter(value => {
//     if (value.status === false){
//         return true
//     }
// });
// console.log(filter1);
//
// // -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// let filter2 = usersWithAddress.filter(value => {
//     if (value.status === false && value.age < 30){
//         return true
//     }
// });
// console.log(filter2);
//
// // -- отфильтровать (оставить) тех у кого номер дома четный
// let filter3 = usersWithAddress.filter(value => {
//     if (value.address.number%2 === 0){
//         return true
//     }
// });
// console.log(filter3);

//task7
// //Створити обєкт автомобіля з полями:
// // Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// // Власник автомобіля теж має бути обєкт, у якого є поля
// // Імя, вік, стаж водіння.
// // Створити не менше 7 та не більше 20 машинок.
// // Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// // На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// // Для початку вкладіть всі наші створені автомобілі в масив cars.
// class Driver {
//     constructor(name, age, exp) {
//         this.name = name;
//         this.age = age;
//         this.exp = exp;
//     }
//
// }
//
// class Car {
//     constructor(marka, power, nameOfOwner, ageOfOwner, expOfOwner, price, year) {
//         this.marka = marka;
//         this.power = power;
//         this.owner = new Driver(nameOfOwner, ageOfOwner, expOfOwner);
//         this.price = price;
//         this.year = year;
//
//     }
// }
//
// let cars = [
//     new Car('bmw',200,'vasya',45,20,7000,2010),
//     new Car('bmw',300,'petya',65,30,10000,2014),
//     new Car('bmw',400,'kolya',26,4,20000,2018),
//     new Car('honda',150,'masha',35,10,15000,2017),
//     new Car('honda',270,'vitya',18,0,10000,2011),
//     new Car('lada',100,'vasya',55,3,3000,2001),
//     new Car('lada',200,'misha',30,25,7500,2018),
// ]
//
// console.log(cars);
//
// // Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// for (let i = 0; i < cars.length; i+=2) {
//     const car = cars[i];
//     car.power += car.power / 10;
//     car.price += car.price / 100 * 5;
//
// }
// console.log(cars);
//
// // Після того зробити перевірку досвіду ВСІХ наших водіїв.
// // Якщо досвід водія менший за 5 років, але його вік більший за 25,
// // то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// for (const car of cars) {
//         if (car.owner.exp < 5){
//             if (car.owner.age > 25){
//                 car.owner.exp++;
//             }
//         }
// }
//
// // Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
// let sum = 0;
// for (const car of cars) {
//     sum += car.price;
// }
// console.log(sum);

//task8
// //Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// // Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// // Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
// //
// // Пример:
// // Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// // 1. Key = 1
// // Answer: MinIndex = 0, MaxIndex = 0.
// // 2. Key = 4
// // Answer: MinIndex = 3, MaxIndex = 6.
//
// let arr = [1, 2, 2, 4, 4, 4, 6, 7, 7, 9, 9];
//
// function index(a) {
//     let indexOf = arr.indexOf(a);
//     let lastIndexOf = arr.lastIndexOf(a);
//
//     console.log(`Min Index = ${indexOf}, Max Index = ${lastIndexOf}`);
// }
//
// index(4);
// index(5);



