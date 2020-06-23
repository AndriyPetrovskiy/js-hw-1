
let total = 0;

while(true) {
    let input = prompt('Entrer your number');

    if (input === null) {
        break;
    }

    input = Number(input);
    total =+ input;
}

console.log(`Sum ${total}`);