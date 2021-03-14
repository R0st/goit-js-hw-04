'use strict';

//Функция обратного вызова (callback)
//--ф может принимать другие ф как параметр
//--ф которая передается другой ф как аргумент назыв. "ф обратного вызова(callback)" 
//--ф которая принимает другую ф как параметр или возвращает ф как результат своей работы 
//назыв "ф высшего порядка"
//функция обьявляет какие то параметры и аргументы передает
const fnA = function (message, callback) {      //callback-имя переменной
    console.log(message);
    callback(100);     //это вызов ф
}    //Ф это просто значение
const fnB = function (number) {
    console.log('это лог при вызове fnB', number);
}
fnA('azaza', fnB);  //аргумент ф fnA fnB принимает ф fnB и записывается в параметр callback ф fnA
                    //в ф fnA при ее вызове в параметре callback лежит ссылка на ф fnB

console.log('next example-2');

const doMath = function (a, b, callback2) {
    const result = callback2(a, b);
    console.log(result);
}
const add = function (x, y) {
    return x + y;
};
const sub = function (x, y) {
    return x - y;
};

doMath(2, 3,add);
doMath(10, 8, sub);
//запись в параметр,вызов, передача аргументов и вызов оригинальной ф-то что мы делаем
console.log('переделываем в инлайн функцию (анонимную)');
//можно переделать в инлайн ф

const doMath2 = function (a, b, callback2) {
    const result = callback2(a, b);
    console.log(result);
}

doMath2(2, 3,function (x, y) {
    return x + y;
});
doMath2(10, 8, function (x, y) {
    return x - y;
});

console.log('next example-3');
//отложенный вызов: регистрация событий
console.log('---отложенный вызов: регистрация событий---');
const buttonRef = document.querySelector('.js-button');     //можем получить ссыkку на элемент нашего html
console.dir(buttonRef);     //это js обьект с кучей свойств  и методов

const handleBtnClick = function () {                //ананомная встроеная функция
    console.log('Клик по кнопке', + Date.now());
};
buttonRef.addEventListener('click', handleBtnClick);    //добавить слушателя события
//1-ый аргумент-события на котором нужно выполнить кусок кода-это строка 'click'
//а 2-ым передай ф(кусочек кода) который будет выполняться каждый раз когда происходит это события
//и в роли callback выступает  handleBtnClick
//вызывается эта ф когда то потом по событию и ээто все лишь ссылка на тело а вызывается где-то под капотом


//Отложенный вызов http-запрос
console.log('---Отложенный вызов http-запрос---');
    //работа с бекэндом
            
    
//отложенный вызов - геолокация пользователя
console.log('---отложенный вызов - геолокация пользователя---')
const onGetPositionSuccess = function (position) {
    console.log('это вызов onGetPositionSuccess');
    console.log(position);  //дай свое положения и я вызову ф когда отработаю
};

const onGetPositionError = function (error) {
    console.log('это вызов onGetPositionError');
    console.log(error);     //это вызов ф
}

window.navigator.geolocation.getCurrentPosition(onGetPositionSuccess, onGetPositionError);
//getCurrentPosition имеет ф succeess(обязательный) и error(необяз)


//отложенный вызов - интервалы
console.log('---отложенный вызов - интервалы---');
const callback3 = function () {
    console.log('Через 3сек внутри колбека в таймауте');
}

console.log('в коде перед таймаутом');
setTimeout(callback3, 2000);   //счетчик, через сколько запустить ф, 1-ое наш колбек, 2 через сколько миллисекунд,
//регистрирует и пошел таймер а код выполняется дальше
console.log('в коде после таймаута');
