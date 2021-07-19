// - створити функцію яка обчислює та повертає площу прямокутника висотою
let areaRectangle = function (a, b) {
    return a + b;
}

// - створити функцію яка обчислює та повертає площу кола
let areaCircle = function (r) {
    return 3.1415 * (r * r);
}

// - створити функцію яка обчислює та повертає площу циліндру
let areaCylinder = function (r, h) {
    return 2 * 3.1415 * r * (r + h);
}

//TODO исправил!)
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let someMas = [0,-4,2,3,4,5,6,7,-52,4,3,2,5,5,6,7,6];
let some = function (a) {
    let max = 0;
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < a.length; i++) {
        if(a[i] < min){min = a[i];}
        if (a[i] > max){max = a[i];}
    }
    console.log(max);
    return min;
}
console.log(some(someMas));
debugger


// - створити функцію яка при створює блок з текстом. Текст задати через аргумент
let someTxt = '123';
let createDiv = function (txt){
    document.write(`<div>${txt}</div>`)
}
createDiv(someTxt);


// - створити функцію яка при створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
someTxt = '123';
let createLi = function (txt){
    document.write(`<ul>
                        <li>${txt}</li>
                        <li>${txt}</li>
                        <li>${txt}</li>
                    </ul>`)
}
createLi(someTxt);


// - створити функцію яка при створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
someTxt = '123';
let createLiMore = function (txt, createLi){
    document.write(`<ul>`);
    for (let i = 0; i < createLi; i++) {
        document.write(`<li>${txt}</li>`);
    }
    document.write(`</ul>`);
}
createLiMore(someTxt, 20);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
someTxt = ['123',2,true,false,56456,'Dasha'];
let createLiMore2 = function (txt, createLi){
    document.write(`<ul>`);
    for (let i = 0; i < createLi.length; i++) {
        document.write(`<li>${txt[i]}</li>`);
    }
    document.write(`</ul>`);
}
createLiMore2(someTxt, someTxt);
