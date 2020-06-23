let country = prompt('Enter your destination');

let destination = country.toUpperCase();

let priceChina = 100;
let priceChili = 250;
let priceAustralia = 170;
let priceIndia = 80;
let priceJamaika = 120;

switch (destination) {
    case "КИТАЙ":
        console.log(`Доставка в ${destination} буде коштувати ${priceChina} кредитів`);
        break;     
        
    case "ЧИЛІ":
        console.log(`Доставка в ${destination} буде коштувати ${priceChili} кредитів`);
        break;

    case "АВСТРАЛІЯ":
        console.log(`Доставка в ${destination} буде коштувати ${priceAustralia} кредитів`);
        break;

    case "ІНДІЯ":
        console.log(`Доставка в ${destination} буде коштувати ${priceIndia} кредитів`);
        break;    
        
    case "ЯМАЙКА":
        console.log(`Доставка в ${destination} буде коштувати ${priceJamaika} кредитів`);
        break;

    default:
        console.log('error');
};

