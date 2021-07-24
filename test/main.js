






let someArr = [
    asd = {
    a1: '2',
    a2: '2',
    a3: '2',
    a4: '2'
    },
    'text',
    true,
    2,
    'text2',
    false
];


for (const someArrElement of someArr) {
    for (const someArrElementKey in someArrElement) {
        console.log(someArrElementKey);
    }
}

let keyMas = function (arr) {
    let m1 = [];
    let i = 0;
    for (const ex4Element of arr) {
        for (const ex4ElementElement in ex4Element) {
            m1.push(ex4ElementElement);
        }
        if (i === 1) {
            return m1;
        }
        i++;
    }
}
console.log(keyMas(ex4));

