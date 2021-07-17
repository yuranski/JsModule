
//     -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
let mas = [9, 8, 0, 4];
let changeMas = function (mas, num) {
    let ii = 0;
    let mas2 = [];
    for (let i = 0; i < mas.length; i++) {
        if (mas[num] === mas[i]) {
            mas2.push(mas[i + 1]);
            ii++;
        } else if (ii === 1) {
            mas2.push(mas[i - 1])
            ii = 0;
        } else {
            mas2.push(mas[i])
        }
    }
    return mas2;
}
console.log(changeMas(mas, 2));


// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let n1 = '    Harry       Potter      '
let n2 = '    Ron       Whisley      '
let n3 = '    Hermione       Granger      '
let normalized = function (name) {
    let res = name.replaceAll(' ', '');
    return res.replace(/([A-Z])/g, ' $1').trim();
}
console.log(normalized(n1));
console.log(normalized(n2));
console.log(normalized(n3));


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100.
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
let exFinal1 = [1,0,6,0,3];
let exFinal2 = [0,1,2,3,4];
let exFinal3 = [0,0,1,0];
let zeroToTheEnd = function (arr){
    let newArr = [];
    let ex = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 0) {
            ex += 0;
        }
        else {
            newArr.push(arr[i]);
        }
    }
    for (let i = 0; i < ex.length; i++) {
        newArr.push(0);
    }
    return newArr;
}
console.log(zeroToTheEnd(exFinal1));
console.log(zeroToTheEnd(exFinal2));
console.log(zeroToTheEnd(exFinal3));


























