//task1
// //- є сторінка rules.html. Контентом сторінки є заголовки та параграфи.
// // Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// // створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li),
// // який буде змістом того, що знаходиться на сторінці.
// // Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
//
// let elementById = document.getElementById('content');
// let htmluListElement = document.createElement('ul');
// let h2 = document.getElementsByTagName("h2");
// for (let i = 0; i < h2.length; i++) {
//     let htmlliElement = document.createElement('li');
//     htmlliElement.innerText = h2[i].innerText;
//     htmluListElement.appendChild(htmlliElement);
// }
// elementById.appendChild(htmluListElement);

//task2
// //-Є масив котрий характеризує правила.
// // Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// // При цому в блоці, номер правила записати в свій блок,
// // текст правила записати в свій окремий блок.
// // Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];
//
// let htmlDivElement = document.createElement('div');
// htmlDivElement.id = 'wrap';
// for (const rule of rules) {
//     let div = document.createElement('div');
//     div.id = `rules`;
//
//     let htmlHeadingElement = document.createElement('h2');
//     htmlHeadingElement.innerText = rule.title;
//     div.appendChild(htmlHeadingElement);
//
//     let htmlParagraphElement = document.createElement('p');
//     htmlParagraphElement.innerText = rule.body;
//     div.appendChild(htmlParagraphElement);
//
//     htmlDivElement.appendChild(div);
// }
// document.body.appendChild(htmlDivElement);

//task3
// //*** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users.
// // За допомогою document.createElement вивести їх в браузер.
// // Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
//
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(users => users.json())
//     .then(usersJson =>{
//         console.log(usersJson);
//         let div = document.createElement('div');
//         for (const usersJsonElement of usersJson) {
//             let userdiv = document.createElement('div');
//             userdiv.style.margin = '10px';
//             for (const usersJsonElementKey in usersJsonElement) {
//                 let keyblock = document.createElement('div');
//                 if (usersJsonElementKey === 'address' || usersJsonElementKey === 'company'){
//                     keyblock.innerHTML = `${usersJsonElementKey}: `;
//                     for (const argumentsKey in usersJsonElement[usersJsonElementKey]) {
//                         let key = document.createElement('div');
//                         if (argumentsKey === 'geo'){
//                             key.innerHTML = `${usersJsonElement[usersJsonElementKey][argumentsKey]['lat']} -- ${usersJsonElement[usersJsonElementKey][argumentsKey]['lng']}`
//                         }
//                         else{
//                             key.innerHTML = `${usersJsonElement[usersJsonElementKey][argumentsKey]}`
//                         }
//                         key.style.marginLeft = '40px';
//                         keyblock.appendChild(key);
//                     }
//                 }
//                 else {
//                     keyblock.innerHTML = `${usersJsonElementKey} = ${usersJsonElement[usersJsonElementKey]}`
//                 }
//                 userdiv.appendChild(keyblock);
//             }
//
//             div.appendChild(userdiv);
//         }
//
//         document.body.appendChild(div);
//     })