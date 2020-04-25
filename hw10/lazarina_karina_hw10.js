function userCard(number) {
    let balance = 100;
    let  transactionLimit = 100;
    let history = [];
    let card = {balance: balance, transactionLimit: transactionLimit, historyLogs: history, key: number}

    function putCredits(newBalance) {
        let date = new Date;
        let operation = {
            operationType: "Put credits",
            credits: newBalance,
            operationTime: `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()} `
        }
        history.push(operation);

        return card.balance += newBalance;
    }
    function takeCredits(money) {
        if (card.transactionLimit >= money && card.balance > money){
            let date = new Date;
            let operation = {
                operationType: "Take credits",
                credits: money,
                operationTime: `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()} `
            }
            history.push(operation);

            return card.balance -= money;
        }
        else {
            console.error(`You can't take ${money}!!!`)
        }
    }
    function setTransactionLimit(newLimit) {
        let date = new Date;
        let operation = {
            operationType: "Transaction limit change",
            credits: newLimit,
            operationTime: `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()} `
        }
        history.push(operation);

        return card.transactionLimit = newLimit;
    }
    function transferCredits(countOfCredits, card1) {
        if (card.transactionLimit >= countOfCredits && card.balance > countOfCredits){
            card1.putCredits(countOfCredits - countOfCredits*0.05);
            this.takeCredits(countOfCredits);
        }
        else {
            console.error(`You can't take ${countOfCredits}!!!`)
        }
    }
    function getCardOption() {
        console.log(card);
    }

    return {
        card,
        putCredits,setTransactionLimit,takeCredits,transferCredits,getCardOption
    }
}

class UserAccount{
     constructor(name) {
        this.name = name;
        this.cards = [userCard(0)];
     }
     addCard(){
         //console.log(this.cards.length);
         if (this.cards.length < 3){
            let newCard = userCard(this.cards.length);
            this.cards.push(newCard);
         }else {
             console.error('You cant add card!!')
         }
     }
     getCardByKey(key){
         for (const keyOfCard of this.cards) {
             //console.log(keyOfCard.card.key);
             if (keyOfCard.card.key === key){
               return keyOfCard;
            }
         }
     }
}

let user = new UserAccount('Bob');
user.addCard()
user.addCard()  
let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);  

card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);  

card2.takeCredits(50);

card1.getCardOption();
card2.getCardOption();