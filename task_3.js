let message = prompt('');

const ADMIN_PASSWORD = 'jqueryismyjam';

if (ADMIN_PASSWORD === message) {
    console.log('Wellcome');
    alert('Wellcome');
} else if (message === null) {
    console.log('Скасовано користувачем!');
    alert('Скасовано користувачем!');
} else if (ADMIN_PASSWORD !== message) {
    console.log('Доступ заборонений, невірний пароль!');
    alert('Доступ заборонений, невірний пароль!');
};