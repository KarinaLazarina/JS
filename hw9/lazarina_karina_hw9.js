//cb
// let timeOfSleeping = 5;
// let workIsDone = true;
// let isCooked = false;
// let mood = false;
// let shower = true;
// let taskIsDone = false;
//
// function getUp(timeOfSleeping,cb) {
//     setTimeout(()=>{
//         if (timeOfSleeping > 6){
//             mood = true;
//             cb(null,'Wake up');
//         }else {
//             cb('I need to sleep');
//         }
//     }, 1000)
// }
// function sleep(workIsDone, shower, cb) {
//     setTimeout(()=>{
//         if (workIsDone && shower){
//             timeOfSleeping += 2;
//             workIsDone = false;
//             shower = false;
//             cb(null, 'Sleep');
//         }else if(workIsDone){
//             cb('You need to take a shower');
//         }else {
//             cb('You need to do your work')
//         }
//     }, 2000)
// }
// function cook(cb) {
//     setTimeout(() =>{
//         isCooked = true;
//         cb(null, 'Cooking');
//         }, 2000);
// }
// function eat(isCooked,cb) {
//     setTimeout(()=>{
//         if (isCooked){
//             mood = true;
//             isCooked = false;
//             cb(null, 'Eat');
//         }else {
//             cb('You need to cook');
//         }
//     }, 1000)
// }
// function study(mood,cb) {
//     setTimeout(()=>{
//         if (mood){
//             taskIsDone = true;
//             cb(null, 'Study')
//         }else {
//             cb('First, eat');
//         }
//     }, 3000);
// }
// function work(cb) {
//     workIsDone = true;
//     cb(null, 'Work');
// }
// function relax(workIsDone,taskIsDone,cb) {
//     setTimeout(()=>{
//         if (workIsDone && taskIsDone){
//             cb(null, 'Time to relax!!!');
//         }
//         else {
//             cb('Do your work');
//         }
//     },1000)
// }
// function takeShower(cb) {
//     setTimeout(() =>{
//         shower = true;
//         cb(null, 'Taking Shower');
//     }, 1000);
// }
//
// sleep(workIsDone, shower, (err, action) =>{
//     if (err){
//         console.log(err);
//     }else {
//         console.log(action);
//         getUp(timeOfSleeping, (err,action) =>{
//             if (err){
//                 console.log(err);
//             }else {
//                 console.log(action);
//                 cook((err,action) => {
//                     if (err){
//                         console.log(err);
//                     }else {
//                         console.log(action);
//                         eat(isCooked, (err, action) => {
//                             if (err){
//                                 console.log(err);
//                             }else {
//                                 console.log(action);
//                                 study(mood, (err, action) =>{
//                                     if (err){
//                                         console.log(err);
//                                     }else {
//                                         console.log(action);
//                                         cook((err, action) => {
//                                             if (err){
//                                                 console.log(err);
//                                             }else {
//                                                 console.log(action);
//                                                 eat(isCooked, (err, action) => {
//                                                     if (err){
//                                                         console.log(err);
//                                                     }else {
//                                                         console.log(action);
//                                                         work((err, action) => {
//                                                             if (err){
//                                                                 console.log(err);
//                                                             }else {
//                                                                 console.log(action);
//                                                                 cook((err, action) => {
//                                                                     if (err){
//                                                                         console.log(err);
//                                                                     }else {
//                                                                         console.log(action);
//                                                                         eat(isCooked, (err, action) =>{
//                                                                             if (err){
//                                                                                 console.log(err);
//                                                                             }else {
//                                                                                 console.log(action);
//                                                                                 relax(workIsDone,taskIsDone,(err, action) =>{
//                                                                                     if (err){
//                                                                                         console.log(err);
//                                                                                     }else {
//                                                                                         console.log(action);
//                                                                                         takeShower((err,action)=>{
//                                                                                             if (err){
//                                                                                                 console.log(err);
//                                                                                             }else {
//                                                                                                 console.log(action);
//                                                                                                 sleep(workIsDone,shower,(err, action) =>{
//                                                                                                     if (err){
//                                                                                                         console.log(err);
//                                                                                                     }else {
//                                                                                                         console.log(action);
//                                                                                                         console.log('Repeat tomorrow!')
//                                                                                                     }
//                                                                                                 })
//                                                                                             }
//                                                                                         })
//                                                                                     }
//                                                                                 })
//                                                                             }
//                                                                         })
//                                                                     }
//                                                                 })
//                                                             }
//                                                         })
//                                                     }
//                                                 })
//                                             }
//                                         })
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
//})

//promise
// let timeOfSleeping = 5;
// let workIsDone = true;
// let isCooked = false;
// let mood = false;
// let shower = true;
// let taskIsDone = false;
//
// function getUp(timeOfSleeping) {
//     return new Promise( (resolve, reject) => {
//         setTimeout(()=>{
//             if (timeOfSleeping > 6){
//                 mood = true;
//                 resolve('Wake up');
//             }else {
//                 reject('I need to sleep');
//             }
//         }, 1000)
//     })
// }
// function sleep(workIsDone, shower) {
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             if (workIsDone && shower){
//                 timeOfSleeping += 2;
//                 workIsDone = false;
//                 shower = false;
//                 resolve('Sleep');
//             }else if(workIsDone){
//                 reject('You need to take a shower');
//             }else {
//                 reject('You need to do your work');
//             }
//         }, 2000)
//     })
// }
// function cook() {
//     return new Promise(((resolve) => {
//         setTimeout(() =>{
//             isCooked = true;
//             resolve('Cooking');
//         }, 2000);
//     }))
// }
// function eat(isCooked) {
//     return new Promise(((resolve, reject) => {
//         setTimeout(()=>{
//             if (isCooked){
//                 mood = true;
//                 isCooked = false;
//                 resolve('Eat');
//             }else {
//                 reject('You need to cook');
//             }
//         }, 1000)
//     }))
// }
// function study(mood) {
//    return new Promise(((resolve, reject) => {
//        setTimeout(()=>{
//            if (mood){
//                taskIsDone = true;
//                resolve('Study')
//            }else {
//                reject('First, eat');
//            }
//        }, 3000);
//    }))
// }
// function work() {
//     return new Promise((resolve => {
//         workIsDone = true;
//         resolve('Work');
//     }))
// }
// function relax(workIsDone,taskIsDone) {
//     return new Promise(((resolve, reject) => {
//         setTimeout(()=>{
//             if (workIsDone && taskIsDone){
//                 resolve('Time to relax!!!');
//             }
//             else {
//                 reject('Do your work');
//             }
//         },1000)
//     }))
// }
// function takeShower() {
//    return new Promise(resolve => {
//        setTimeout(() =>{
//            shower = true;
//            resolve('Taking Shower');
//        }, 1000);
//    })
// }
//
// sleep(workIsDone,shower)
//     .then((action)=>{
//         console.log(action);
//
//         return getUp(timeOfSleeping)
//     })
//     .then(action =>{
//         console.log(action);
//
//         return cook()
//     })
//     .then(action => {
//         console.log(action);
//
//         return eat(isCooked);
//     })
//     .then(action => {
//         console.log(action);
//
//         return study(mood)
//     })
//     .then(action => {
//         console.log(action);
//
//         return cook()
//     })
//     .then(action => {
//         console.log(action);
//
//         return eat(isCooked)
//     })
//     .then(action => {
//         console.log(action);
//
//         return work()
//     })
//     .then(action => {
//         console.log(action);
//
//         return cook()
//     })
//     .then(action => {
//         console.log(action);
//
//         return eat(isCooked)
//     })
//     .then(action => {
//         console.log(action);
//
//         return relax(workIsDone,taskIsDone)
//     })
//     .then(action => {
//         console.log(action);
//
//         return takeShower()
//     })
//     .then(action => {
//         console.log(action);
//
//         return sleep(workIsDone, shower)
//     })
//     .then(action => {
//         console.log(action);
//     })
//     .catch((reason => {
//         console.log(reason);
//     }))
//     .finally(()=>{
//         console.log('Repeat tomorrow!')
//     })


