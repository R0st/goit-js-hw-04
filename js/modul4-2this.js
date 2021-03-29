'use strict';

console.log('[] === []: ', [] === []);
console.log('function() {} === function() {}: ', function () { } === function () { });

const fnA = function () {
    console.log('hello');
};

const fnB = fnA;
console.log('fnB===fnA: ', fnB === fnA);
/*Контекст (this)
    -Где и как была обьявлена фугкция НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ на контекст
    -Контекст определяется В МОМЕНТ ВЫЗОВА ФУНКЦИИ, если он ен привязан явно
*/

// Как метод обьекта. В контексте обьекта
const user = {
    tag: 'Mango',
    showTag() {
        console.log('showTag -> this', this);
    },
};
user.showTag();

//Вызов без контекста 
    //-в строгом режиме = undefined
    //-не в строгом режиме = window
const foo = function () {
    console.log('foo -> this', this);
};
foo();

/**Как метод обьекта, но обьявлена внешняя ф
 * В контексте обьекта
 */

const showTag2 = function () {
    console.log('showThag2 -> this', this);
    console.log('showTag2 -> this.tag', this.tag);
};

// showTag2();
const user2 = {
    tag: 'Mango',
};
user2.showUserTag2 = showTag2;  //showUserTag2 -это свойтво обьекта на которое записана ссылка на оригинальную ф
console.log('user2', user2);

user2.showUserTag2();

//Вызов без контекста, но обьявлена как метод обьекта
console.log('---next---');
const user3 = {
    tag3: 'Mango',
    showTag3() {
        console.log('showTag3 -> this', this);
        console.log('showTag3 -> this.tag3', this.tag3);
    },
};

user3.showTag3();
const outerShowTag3 = user3.showTag3;

// outerShowTag3();     //не находит эту ф

//Контекст в callback ф
console.log('---Контекст в callback ф---');
const user4 = {
    tag4: 'Apple',
    showTag4() {
        console.log('showTag4 -> this', this);
        console.log('showTag4 -> this.tag4', this.tag4);
    },
};
const invokeAction = function (action) {
    console.log(action);
    action();       //ссылкается по факту сюда и вызыв undefined потомк что это просто ссылка а не вызов ф и не зависит от user4
    //вызов не в контексте какого-то обьекта
};
// invokeAction(user4.showTag4);

//при передачи методов обьектов как callback'ов контекст не сохраняется  
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

// updateCounter(10, counter.increment);    //undefined
// updateCounter(5, counter.dicrement);     //undefined



