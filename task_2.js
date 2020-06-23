

const total = 100;
const ordered = 50;

if (total > ordered) {
    console.log('Замовлення оформлено, з вами зв\'яжеться менеджер')
} else if (total < ordered) {
    console.log('На складі недостатньо товарів!');
}   else {
    console.log('error');
}