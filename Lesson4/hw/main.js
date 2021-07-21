// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let randomNumber = function (){
    return Math.round(Math.random()*100);
}

// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.
let myNumber = function (a){
    return Math.round(Math.random()*a);
}

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let arr = [];
let count = 10;
for (let i = 0; i < count; i++) {
    arr.push(myNumber(100));
}
arr.sort(function (a,b) {
    return a - b;
});

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, за лишивши тільки парні числа
let some = arr.filter(function (value) {
    return value % 2 === 0;
})

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.
let arrToString = arr.map(function (toString){
    return toString.toString();
})

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User (name, id, surname, email){
    this.name = name;
    this.id = id;
    this.surname = surname;
    this.email = email;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let someArrUsers = [
    new User('Yurii6',6,'Bidniak6','yuranski637@gmail.com'),
    new User('Yurii7',7,'Bidniak7','yuranski737@gmail.com'),
    new User('Yurii8',8,'Bidniak8','yuranski837@gmail.com'),
    new User('Yurii9',9,'Bidniak9','yuranski937@gmail.com'),
    new User('Yurii10',10,'Bidniak10','yuranski1037@gmail.com'),
    new User('Yurii1',1,'Bidniak1','yuranski137@gmail.com'),
    new User('Yurii2',2,'Bidniak2','yuranski237@gmail.com'),
    new User('Yurii3',3,'Bidniak3','yuranski337@gmail.com'),
    new User('Yurii4',4,'Bidniak4','yuranski437@gmail.com'),
    new User('Yurii5',5,'Bidniak5','yuranski537@gmail.com')
]

// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)
//TODO
// а це в нас новий масив, а сказано в задачі що потрібно відфільтрувати *створенний масив*,
// ми ще не вчили як через фільтр фідфільтрувати масив який був
let a = someArrUsers.filter(function (arr){
       return arr.id % 2 === 0;
})
a.sort(function (arr1,arr2){
    return arr1.id - arr2.id;
})
console.log(a)
