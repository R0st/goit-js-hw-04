'use strict';

//Округлятор
// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint);
// const withDecimals = Number(floatingPoint.toFixed(2));

// function rounder(places) {
//     return function (num) {
//         return Number(num.toFixed(places));
//     };
// }

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);    //кол-во цифр после запятой  

// rounder2(floatingPoint);
// rounder3(floatingPoint);

// const rounder4 = function (number4, places4) {
//     return Number(number4.toFixed(places4))
// }

// console.log(rounder4(3.4567, 2));
// console.log(rounder4(3.4567, 3));
// console.log(rounder4(5.1234, 2));
// console.log(rounder4(5.1234, 3));

//или можно написать  так, с меньшим кол-вом кода и без потворения
const rounder5 = function (places5) {
    return function (number5) {
        return Number(number5.toFixed(places5));
    };
};

const rounder6 = rounder5(2);
const rounder7 = rounder5(3);

console.log(rounder7(3.4567, 2));
console.log(rounder6(3.4567, 3));
console.log(rounder7(5.1234, 2));
console.log(rounder6(5.1234, 3));


//Приватные данные и ф - скрытие реализации, интерфейс
console.log('---Приватные данные и ф - скрытие реализации, интерфейс---')

const salaryManagerFactory = function (employedName, baseSalary) {
    let salary = baseSalary;    //приватная переменная, можем ее изменять с полмощью специальных методов, напрямую никак

    const changeBy = function (amount) {
        salary += amount;
    };
    return {
        raise(amount) {
            changeBy(amount);
        },
        lower(amount) {
            changeBy(amount);
        },
        current() {
            return `Текущая зарплата ${employedName} - ${salary}`;
        },
    };

};

const myLibFactory = function () {
    let value = 0;
    return {
        add(num) {      //вызываем метод
            value += num;
        },
        getValue() {
            return value;
        },
    };
};

// const myLib = {
//     value123: 0,
//     add(num) {
//         this.value123 += num;
//     },
//     getValue() {
//         return this.value123;
//     }
// };

// myLib.add(5);
// console.log(myLib.getValue);
// console.log(myLib);
const myLib = myLibFactory();
console.dir(myLib.getValue);

console.log(myLib);
myLib.add(10);
console.dir(myLib.getValue);