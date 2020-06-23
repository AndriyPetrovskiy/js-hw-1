let credits = 23580;
let pricePerDroid = 3000;

let countDroids = prompt ('How many droiders you want a buy');

let totalPrice = countDroids * pricePerDroid;

let loanBalance = credits - totalPrice;

if (countDroids === null) {
    console.log('error');
}  else if (loanBalance < 0) {
    console.log('Недостатньо коштів на рахунку!');
}   else if (loanBalance) {
    console.log('Ви купили ' + countDroids  + ' дроїдів, на рахунку залишилося ' + loanBalance + ' кредитів.')
};