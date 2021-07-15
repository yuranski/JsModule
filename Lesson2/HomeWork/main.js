// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let num = [1,2,3];
let str = ['4','5','6'];
let bul = [1,2,3,'4','5','6',true,false,true,false,true];
console.log(num);
console.log(str);
console.log(bul);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let empt = [];
let ex = 0;
while (ex < 10) {
    empt.push(ex++);
}
console.log(empt);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < empt.length; i++) {
    document.write(`<div><p>Hello</p></div>`);
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < empt.length; i++) {
    document.write(`<div><p>Hello ${empt[i]+1}</p></div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
ex = 0;
while (ex < 20) {
    document.write(`<div><h1>Hello</h1></div>`);
    ex++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
ex = 0;
while (ex < 20) {
    document.write(`<div><h1>Hello ${ex +1}</h1></div>`);
    ex++;
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let empt2 = [1,2,3,4,5,6,7,8,9,10];
for (const number of empt2) {
    console.log(number);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let empt3 = ['1','2','3','4','5','6','7','8','9','10'];
for (const number of empt3) {
    console.log(number);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let bul2 = [1,2,3,'4','5','6',true,false,true,false,true];
for (const number of bul2) {
    console.log(number);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let bul3 = [1,2,3,'4','5','6',true,false,true,false,true];
for (const number of bul3) {
    if(number === true) {
        console.log(number);
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (const number of bul3) {
    if(typeof number === 'number') {
        console.log(number);
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (const number of bul3) {
    if(typeof number === 'string') {
        console.log(number);
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
for (let i = 0; i < bul3.length; i++) {
    console.log(bul3[i]);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
ex = 10;
for (let i = 1; i < ex; i++) {
    document.write(`<div>${i}</div>`);
    console.log(i);
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
ex = 100;
for (let i = 1; i < ex; i++) {
    document.write(`<div>${i}</div>`);
    console.log(i);
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
ex = 100;
for (let i = 1; i < ex; i++) {
    document.write(`<div>${i++}</div>`);
    console.log(i);
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
ex = 100;
for (let i = 0; i < ex; i++) {
    if(i % 2)
    {
        document.write(`<div>${i + 1}</div>`);
        console.log(i + 1);
    }
}
console.log('-----------------------------------------')

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
ex = 100;
for (let i = 1; i < ex; i++) {
    if(i % 2)
    {
        document.write(`<div>${i}</div>`);
        console.log(i);
    }
}

// Дано 2 масиви з рівною кількістю об'єктів.
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масиви
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

citiesWithId.sort(function (a, b) {
    if (a.user_id > b.user_id) {return 1;}
    if (a.user_id < b.user_id) {return -1;}
    return 0;
});

let usersWithCities = [];

for (let i = 0; i < usersWithId.length; i++) {
    usersWithCities[i] = usersWithId[i];
    usersWithCities[i].adress = citiesWithId[i];
}

console.log(usersWithCities);