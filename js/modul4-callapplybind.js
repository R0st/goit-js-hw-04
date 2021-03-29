'use strict';

//call apply 
const showThis = function () {
    console.log('showThis -> this', this);
};

// showThis();

const objA = {
    a: 5,
    b: 10,
};
// showThis.call(objA, 10, 20, 30);        //принудительно вызывают ф, передают аргументы
// showThis.apply(objA, [10, 20, 30]);

const changeColor = function (color) {
    console.log('changeColor -> this', this);
    this.color = color;
};

const hat = {
    color: 'black',
};
changeColor.call(hat, 'orange');
console.log(hat);

const sweater = {
    color: 'green',
};
//на практике не применяется

// bind делает копию ф с привязанным контекстом к этому обьекту, привязка
console.log('---bind---');
const changeHatColor = changeColor.bind(hat);
changeHatColor();

//bind
const counter = {
    value: 0,
    increment(value) {
        console.log('increment -> this', this);
        this.value += value;
    },
    dicrement(value) {
        console.log('dicrement -> this', this);
        this.value -= value;
    },
};

const updateCounter = function (value, operation) {
    operation(value);
};

updateCounter(10, counter.increment.bind(counter));
updateCounter(5, counter.dicrement.bind(counter));
