'use strict';

//Стрелочные функции
//обьявление
//явный и неявный возврат
//аргументы
//неявный возврат обьекта
// console.log('---Стрелочные функции---');

// const add = function (a, b, c) {
//     console.log(a, b, c);
//     return a + b + c;
// };

// const addArrow = (a, b, c) => {     //явный возврат
//     return a + b + c;
// };

// const addArrow1 = (a, b, c) => a + b + c;      //неявный возврат
// console.log(add(5, 10, 15));
//В стрелочной ф нет arguments(локальной переменной) и собирается она (...args)через rest

const fnA = function () {
    return {
        a: 5,
    };
};

console.log(fnA());

const arrowFnA = () => ({ arrowA: 55 });
console.log(arrowFnA());
