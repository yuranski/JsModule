// - створити функцію яка приймає масив та виводить його
let mass = function (yourMass) {
    console.log(yourMass)
}
let myMass = [1, 2, 3, 4];
mass(myMass);


// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let minNum = function (num1, num2, num3) {
    if (num1 < num2) {
        if (num1 < num3) {
            console.log(num1)
        }
    }
    if (num2 < num3) {
        if (num2 < num1) {
            console.log(num2)
        }
    }
    if (num3 < num2) {
        if (num3 < num1) {
            console.log(num3)
        }
    }
}
minNum(11, 22, 33);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let maxNum = function (num1, num2, num3) {
    if (num1 > num2) {
        if (num1 > num3) {
            console.log(num1)
        }
    }
    if (num2 > num3) {
        if (num2 > num1) {
            console.log(num2)
        }
    }
    if (num3 > num2) {
        if (num3 > num1) {
            console.log(num3)
        }
    }
}
maxNum(11, 22, 33)


// - створити функцію яка повертає найбільше число з масиву
let a1 = [0, 1, 2, 3, 42, 1, 2, 3, 5, 6, 7, 10, 1, 2, 3];

let maxNumMass = function (yourMass) {
    let a = 0;
    for (let yourMass1 of yourMass) {
        if (a < yourMass1) {
            a = yourMass1;
        }
    }
    return a;
}
console.log(maxNumMass(a1));


// - створити функцію яка повертає найменьше число з масиву
let minNumMass = function (yourMass) {
    //Some bad code)))
    let a = 99999999;
    for (let yourMass1 of yourMass) {
        if (a > yourMass1) {
            a = yourMass1;
        }
    }
    return a;
}
console.log(minNumMass(a1));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let example = [1, 2, 10];
let sumMass = function (yourMass) {
    let result = 0;
    for (let i = 0; i < yourMass.length; i++) {
        result += yourMass[i];
    }
    return result;
}
console.log(sumMass(example));


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let ex2 = [55, 45];
let arithmeticMean = function (yourMass) {
    let result = 0;
    for (let i = 0; i < yourMass.length; i++) {
        result += yourMass[i];
    }
    return result / 2;
}
console.log(arithmeticMean(ex2));


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//     Для виведення використати попередню функцію.
let ex3 = [];
let addMasRandom = function () {
    ex3.push(Math.round(Math.random() * 100));
}
addMasRandom();
console.log(ex3);


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
let ex4 = [
    {name: 'Dima', age: 13}, {model: 'Camry'},
    {name: 'Kolya', age: 14}, {model: 'WavPack'},
    {name: 'Olya', age: 15}, {model: 'BMW'},
    {name: 'Igor', age: 16}, {model: 'Volkswagen'},
];

let keyMas = function (arr) {
    let m1 = [];
    let i = 0;
    for (const ex4Element of arr) {
        for (const ex4ElementElement in ex4Element) {
            m1 += ex4ElementElement + ', ';
        }
        if (i === 1) {
            return m1;
        }
        i++;
    }
}
console.log(keyMas(ex4));


//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]


//Код херня... сильно не ругайтесь
let keyEll = function (arr) {
    let m1 = [];
    let i = 0;
    for (const ex4Element of arr) {
        if(i === 0) {
            m1 += ex4Element.name + ', ';
            m1 += ex4Element.age + ', ';
            i++;
        }
        else if(i === 1) {
            m1 += ex4Element.model + ', '
            i=0
        }
    }
    return m1;
}
console.log(keyEll(ex4));


//     - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
let aa = [1,2,3,4];
let bb = [2,3,4,5];
let result = function (a,b){
    let cc = [];
    for (let i = 0; i < a.length && i < b.length; i++) {
        cc += a[i] + b[i] + ' ';
    }
    return cc;
}
console.log(result(aa, bb));


// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
let someMas = ['a', 'b', 'c'];
let q = someMas.length;
for (let i = 0; i < q; i++) {
    someMas.push(i+1);
}
console.log(someMas);


// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
let someMas1 = [1, 2, 3];
let reversMas = function (yourMass){
    let pop = [];
    let ex = yourMass.length;
    for (let i = 0; i < ex; i++) {
        pop += yourMass.pop() + ' ';
    }
    return pop;
}
console.log(reversMas(someMas1));


// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
let someMas2 = [1, 2, 3];
let addSomeNum = function (yourMas) {
    let ex = yourMas.length;
    for (let i = 0; i < ex; i++) {
        //ахахахах сорі))))
        yourMas.push(i+4);
    }
    return yourMas;
}
console.log(addSomeNum(someMas2));


// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
let someMas3 = [1, 2, 3];
someMas3.unshift(6);
someMas3.unshift(5);
someMas3.unshift(4);
console.log(someMas3);


// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
let someMas4 = [1, 2, 3, 4, 5];
someMas4.splice(0,3)
console.log(someMas4);


// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
let someMas5 = [1, 2, 3, 4, 5];
someMas5.splice(2,3)
console.log(someMas5);


// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].
let someMas6 = [1, 2, 3, 4, 5];
someMas6.splice(3,2)
someMas6.push(`a`);
someMas6.push(`b`);
someMas6.push(`c`);
console.log(someMas6);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let someMas7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let pairedNumbers = function (someMas)
{
    for (let i = 0; i < someMas.length; i++) {
        if(someMas[i] % 2)
        {
            console.log(someMas[i + 1]);
        }
    }
}
pairedNumbers(someMas7);


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
someMas7 = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];
let newMas = [];
let donorMas = function (donor, mas){
    for (let i = 0; i < donor.length; i++) {
        mas += donor[i] + ' ';
    }
    return mas;
}
newMas = [donorMas(someMas7, newMas)];
console.log(newMas);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let lastEx = [ 'a', 'b', 'c'];
let lastEx2 = '';
for (let i = 0; i < lastEx.length; i++) {
    lastEx2 += lastEx[i];
}
console.log(lastEx2)


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
lastEx = [ 'a', 'b', 'c'];
lastEx2 = '';
let o = 0
while (o < lastEx.length)
{
    lastEx2 += lastEx[o];
    o++;
}
console.log(lastEx2)


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
lastEx = [ 'a', 'b', 'c'];
lastEx2 = '';

for (const lastEx2Element of lastEx) {
    lastEx2 += lastEx2Element;
}
console.log(lastEx2)


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for in зібрати всі букви в слово.
lastEx = [ 'a', 'b', 'c'];
lastEx2 = '';
for (const lastEx2Element in lastEx) {
    lastEx2 += lastEx[lastEx2Element];
}
console.log(lastEx2)



