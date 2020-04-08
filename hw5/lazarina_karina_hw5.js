//task1
// //-  Створити функцію конструктор для об'єкту який описує теги
// // Властивості
// //  -назва тегу
// //  - опис його дій
// //  - масив з атрибутами (2-3 атрибути максимум)
// //  Кожен атрибут описати як окремий який буде містити
// //  -назву атрибуту
// //  -опис дії атрибуту
// //  інформацію брати з htmlbook.ru
// //
// //  Таким чином описати теги
// //  -a
// //  -div
// //  -h1
// //  -span
// //  -input
// //  -form
// //  -option
// //  -select
//
// function TagConstructor(tag, action, attrs) {
//     this.tag = tag;
//     this.action = action;
//     this.attrs = attrs;
//
// }
//
// let TagA = new TagConstructor('a','Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок',[
//     {title: 'href', action: 'Задает адрес документа, на который следует перейти'},
//     {title: 'rel',action: 'Отношения между ссылаемым и текущим документами'}]);
// console.log(TagA);
//
// let TagDiv = new TagConstructor('div','Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого',[
//     {title: 'align', action: 'Задает выравнивание содержимого тега <div>'},
//     {title: 'title',action: 'Добавляет всплывающую подсказку к содержимому'}]);
// console.log(TagDiv);
//
// let TagH1 = new TagConstructor('h1','тег <h1> представляет собой наиболее важный заголовок первого уровня',[
//     {title: 'align', action: 'Определяет выравнивание заголовка'}]);
// console.log(TagH1);
//
// let TagSpan = new TagConstructor('span','Тег <span> предназначен для определения строчных элементов документа',[
//     {title: 'class', action: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением'},
//     {title: 'title',action: 'Добавляет всплывающую подсказку к содержимому'}]);
// console.log(TagSpan);
//
// let TagInput = new TagConstructor('input','позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем',[
//     {title: 'align', action: 'Задает выравнивание содержимого'},
//     {title: 'form',action: 'Связывает поле с формой по её идентификатору'}]);
// console.log(TagInput);
//
// let TagForm = new TagConstructor('form','Тег <form> устанавливает форму на веб-странице',[
//     {title: 'action', action: 'Адрес программы или документа, который обрабатывает данные формы'},
//     {title: 'enctype',action: 'Способ кодирования данных формы'}]);
// console.log(TagForm);
//
// let TagOPtion = new TagConstructor('option','Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>',[
//     {title: 'selected', action: 'Заранее устанавливает определенный пункт списка выделенным'},
//     {title: 'value',action: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов'}]);
// console.log(TagOPtion);
//
// let TagSelect = new TagConstructor('select','Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка',[
//     {title: 'name', action: 'Имя элемента для отправки на сервер или обращения через скрипты'},
//     {title: 'form',action: 'Связывает список с формой'}]);
// console.log(TagSelect);

//task2
// //-  Створити класс  для об'єкту який описує теги
// // Властивості
// //  -назва тегу
// //  - опис його дій
// //  - масив з атрибутами (2-3 атрибути максимум)
// //  Кожен атрибут описати як окремий який буде містити
// //  -назву атрибуту
// //  -опис дії атрибуту
// //  інформацію брати з htmlbook.ru
// //
// //  Таким чином описати теги
// //  -a
// //  -div
// //  -h1
// //  -span
// //  -input
// //  -form
// //  -option
// //  -select
//
// class Tag {
//     constructor(tag, action, attrs) {
//         this.tag = tag;
//         this.action = action;
//         this.attrs = attrs;
//     }
//
// }
// let TagA = new Tag('a','Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок',[
//     {title: 'href', action: 'Задает адрес документа, на который следует перейти'},
//     {title: 'rel',action: 'Отношения между ссылаемым и текущим документами'}]);
// console.log(TagA);
//
// let TagDiv = new Tag('div','Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого',[
//     {title: 'align', action: 'Задает выравнивание содержимого тега <div>'},
//     {title: 'title',action: 'Добавляет всплывающую подсказку к содержимому'}]);
// console.log(TagDiv);
//
// let TagH1 = new Tag('h1','тег <h1> представляет собой наиболее важный заголовок первого уровня',[
//     {title: 'align', action: 'Определяет выравнивание заголовка'}]);
// console.log(TagH1);
//
// let TagSpan = new Tag('span','Тег <span> предназначен для определения строчных элементов документа',[
//     {title: 'class', action: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением'},
//     {title: 'title',action: 'Добавляет всплывающую подсказку к содержимому'}]);
// console.log(TagSpan);
//
// let TagInput = new Tag('input','позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем',[
//     {title: 'align', action: 'Задает выравнивание содержимого'},
//     {title: 'form',action: 'Связывает поле с формой по её идентификатору'}]);
// console.log(TagInput);
//
// let TagForm = new Tag('form','Тег <form> устанавливает форму на веб-странице',[
//     {title: 'action', action: 'Адрес программы или документа, который обрабатывает данные формы'},
//     {title: 'enctype',action: 'Способ кодирования данных формы'}]);
// console.log(TagForm);
//
// let TagOPtion = new Tag('option','Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>',[
//     {title: 'selected', action: 'Заранее устанавливает определенный пункт списка выделенным'},
//     {title: 'value',action: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов'}]);
// console.log(TagOPtion);
//
// let TagSelect = new Tag('select','Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка',[
//     {title: 'name', action: 'Имя элемента для отправки на сервер или обращения через скрипты'},
//     {title: 'form',action: 'Связывает список с формой'}]);
// console.log(TagSelect);

//task3
// //- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// // -- info () - яка виводить всю інформацію про автомобіль
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
// class Car {
//     constructor(model, producer, year, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//     }
//
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     info(){
//         console.log(`model = ${this.model}`);
//         console.log(`producer = ${this.producer}`);
//         console.log(`year = ${this.year}`);
//         console.log(`maxSpeed = ${this.maxSpeed}`);
//         console.log(`engineCapacity = ${this.engineCapacity}`);
//     }//можно ли вывести это каким-то циклом? Прообовала через itin не получилось
//
//     increaseMaxSpeed (newSpeed){
//         this.maxSpeed += newSpeed;
//         console.log(`maxSpeed = ${this.maxSpeed}`);
//     }
//
//     changeYear(newValue){
//         this.year = newValue
//         console.log(`year = ${this.year}`);
//     }
//
//     addDriver(driver) {
//         this.driver = driver;
//     }
//
//
//
// }
//  let car = new Car('bmw','Germany', 2017,200,50);
// car.drive();
// console.log('__________________________');
// car.info();
// console.log('__________________________');
// car.increaseMaxSpeed(20);
// console.log('__________________________');
// car.info();
// console.log('__________________________');
// car.changeYear(2007);
// console.log('__________________________');
// car.info()
// console.log('__________________________');
// car.addDriver({name:'Vasya', age:35});
// console.log(car);

//task4
// //- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// // -- info () - яка виводить всю інформацію про автомобіль
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
// function Car(model, producer, year, maxSpeed, engineCapacity){
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     this.info = function(){
//         console.log(`model = ${this.model}`);
//         console.log(`producer = ${this.producer}`);
//         console.log(`year = ${this.year}`);
//         console.log(`maxSpeed = ${this.maxSpeed}`);
//         console.log(`engineCapacity = ${this.engineCapacity}`);
//     }//можно ли вывести это каким-то циклом? Прообовала через itin не получилось
//
//     this.increaseMaxSpeed = function(newSpeed){
//         this.maxSpeed += newSpeed;
//         console.log(`maxSpeed = ${this.maxSpeed}`);
//     }
//
//     this.changeYear = function(newValue){
//         this.year = newValue
//         console.log(`year = ${this.year}`);
//     }
//
//     this.addDriver = function(driver) {
//         this.driver = driver;
//     }
//
//
//
// }
//  let car = new Car('bmw','Germany', 2017,200,50);
// car.drive();
// console.log('__________________________');
// car.info();
// console.log('__________________________');
// car.increaseMaxSpeed(20);
// console.log('__________________________');
// car.info();
// console.log('__________________________');
// car.changeYear(2007);
// console.log('__________________________');
// car.info()
// console.log('__________________________');
// car.addDriver({name:'Vasya', age:35});
// console.log(car);

//task5
//-створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
//
// class Cinderella {
//     constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
//
// }
// class Prince {
//     constructor(name, age, shoe) {
//         this.name = name;
//         this.age = age;
//         this.shoe = shoe;
//     }
// }
// let arrOfCinderellas = [
//     new Cinderella('Katya', 54, 37),
//     new Cinderella('Ricka',29,40),
//     new Cinderella('Yulia', 33,39),
//     new Cinderella('Hanna',45,38),
//     new Cinderella('Lera', 18,35),
//     new Cinderella('Lena',15,38),
//     new Cinderella('Kris',33,33),
//     new Cinderella('Tina',57,41),
//     new Cinderella('Luda', 56,34),
//     new Cinderella('Olya',19,35)
// ]
//
// let prince = new Prince('Petya',30,33);
//
// for (const cinderella of arrOfCinderellas) {
//     if (cinderella.size === prince.shoe){
//         console.log(`${cinderella.name} should be with ${prince.name}!`)
//     }
// }

//task6
//-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

class Cinderella {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }

}
function Prince(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;

        this.searchCinderella = function(array){
        for (const cinderella of array) {
            if (cinderella.size === prince.shoe){
                console.log(`${cinderella.name} should be with ${prince.name}!`)
            }
        }
    }
}
let arrOfCinderellas = [
    new Cinderella('Katya', 54, 37),
    new Cinderella('Ricka',29,40),
    new Cinderella('Yulia', 33,39),
    new Cinderella('Hanna',45,38),
    new Cinderella('Lera', 18,35),
    new Cinderella('Lena',15,38),
    new Cinderella('Kris',33,33),
    new Cinderella('Tina',57,41),
    new Cinderella('Luda', 56,34),
    new Cinderella('Olya',19,35)
]

let prince = new Prince('Petya',30,33);

prince.searchCinderella(arrOfCinderellas);