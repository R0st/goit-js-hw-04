'use strict';

//Замыкание - возвращаемая ф во время вызова будет иметь доступ ко всем локальным переменным(области видимости)
//родительской ф(той из которой ее вернули)
//Ф может получать другую ф в себя как аргумент а еще может вернуть из себя другую ф
const fnA = function (parameter) {
    const innerVariable = 'значения внутр переменной ф fnA';

    const innerFunction = function () {
        console.log(innerFunction);
        console.log(parameter);
        console.log('Это вызов innerFunction');
    };
    return innerFunction;   //все что неаходится внутри fnA(переменные, параметры-innnerVariable u parameter) будет доступно вне(в fnB)
};

const fnB = fnA();
fnB();  //вызов fnB с параметрами и данными fnA, область видимости fnA это все что лежит внутри нее
console.log(fnB);

console.log('---Задача Поваренок---');
const makeDish = (sheffName, dish) => {
    console.log(`${sheffName} готовит ${dish}`);
}

makeDish('Mango', 'пирожок');
makeDish('Apple', 'яблоко');

makeDish('Poly', 'суп');
makeDish('Poly', 'пирог');

//чтобы не повторять каждый раз имя повара, напишем ф
const makeSheff = function (name) {
    const makeDish = function (dish) {
        console.log(`${name} готовит ${dish}`);
    };
    return makeDish;
};
//одну ф возвращаешь из другой и та, которую возвращаешь получает доступ ко всем переменным

const mango = makeSheff('Mango');
console.dir(mango);

mango('котлеты');
mango('пирожок');

const poly = makeSheff('Poly');
poly('tea');
poly('coffee');

