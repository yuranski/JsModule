// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let exClient = [
    new Client(3, 'Yura3', 'Bidniak3', 'yuranski337@gmail.com', '+380989120663', ['phone3', 'iphone3', 'tv3', 'jbl3']),
    new Client(6, 'Yura6', 'Bidniak6', 'yuranski637@gmail.com', '+380989120666', ['phone6']),
    new Client(1, 'Yura1', 'Bidniak1', 'yuranski137@gmail.com', '+380989120661', ['phone1', 'iphone1']),
    new Client(2, 'Yura2', 'Bidniak2', 'yuranski237@gmail.com', '+380989120662', ['phone2', 'iphone2', 'tv2']),
    new Client(8, 'Yura8', 'Bidniak8', 'yuranski837@gmail.com', '+380989120668', ['phone8', 'iphone8', 'tv8', 'jbl8']),
    new Client(9, 'Yura9', 'Bidniak9', 'yuranski937@gmail.com', '+380989120669', ['phone9']),
    new Client(7, 'Yura7', 'Bidniak7', 'yuranski737@gmail.com', '+380989120667', ['phone7', 'iphone7']),
    new Client(4, 'Yura4', 'Bidniak4', 'yuranski437@gmail.com', '+380989120664', ['phone4', 'iphone4', 'tv4', 'jbl4']),
    new Client(10, 'Yura10', 'Bidniak10', 'yuranski1037@gmail.com', '+380989120610', ['phone10']),
    new Client(5, 'Yura5', 'Bidniak5', 'yuranski537@gmail.com', '+380989120665', ['phone5', 'iphone5'])
]

// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
exClient.sort(function (a, b) {
    return a.order.length - b.order.length;
})
//console.log(exClient)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
function CarFn(model = 'MERS', producer = 'Null', graduationYear = 2000, maxSpeed = 220, engineCapacity = 5.5, driver = 'Null') {
    this.model = model;
    this.producer = producer;
    this.graduationYear = graduationYear;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.driver = driver;

    this.drive = function () {
        console.log('їдемо зі швидкістю ' + this.maxSpeed + ' на годину')
    }
    this.info = function () {
        console.log(this.model, this.producer, this.graduationYear, this.maxSpeed, this.engineCapacity)
    }
    this.increaseMaxSpeed = function (newValue) {
        return maxSpeed += newValue;
    }
    this.changeYear = function (newValue) {
        return graduationYear = newValue;
    }
    this.addDriver = function (dr) {
        return driver = dr;
    }
}

let carFn = [new CarFn()]
carFn[0].drive()
carFn[0].info()
carFn[0].increaseMaxSpeed(100);
carFn[0].changeYear(2020);
carFn[0].addDriver('Syper Perec');

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

class CarCl {
    constructor(model = 'MERS', producer = 'Null', graduationYear = 2000, maxSpeed = 220, engineCapacity = 5.5, driver = 'Null') {
        this.model = model;
        this.producer = producer;
        this.graduationYear = graduationYear;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
        this.driver = driver;
    }

    drive() {
        console.log('їдемо зі швидкістю ' + this.maxSpeed + ' на годину')
    }

    info() {
        console.log(this.model, this.producer, this.graduationYear, this.maxSpeed, this.engineCapacity)
    }

    increaseMaxSpeed(newValue) {
        return this.maxSpeed += newValue;
    }

    changeYear(newValue) {
        return this.graduationYear = newValue;
    }

    addDriver(dr) {
        return this.driver = dr;
    }
}

let carCl = new CarCl();
carCl.drive()
carCl.info()
carCl.increaseMaxSpeed(100);
carCl.changeYear(2020);
carCl.addDriver('Syper Perec');
carCl.info();

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
class Popel {
    constructor(name,age,sizeFoot) {
        this.name = name;
        this.age = age;
        this.sizeFoot = sizeFoot;
    }
}

let arrPopels = [
    new Popel('Popelyshka1',21,31),
    new Popel('Popelyshka2',22,32),
    new Popel('Popelyshka3',23,33),
    new Popel('Popelyshka4',24,34),
    new Popel('Popelyshka5',25,35),
    new Popel('Popelyshka6',26,36),
    new Popel('Popelyshka7',27,37),
    new Popel('Popelyshka8',28,38),
    new Popel('Popelyshka9',29,39),
    new Popel('Popelyshka10',30,40),
]

class Prince {
    constructor(name,age,shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
let prince = new Prince('prince',27,37);

for (const arrPopel of arrPopels) {
    if(arrPopel.sizeFoot === prince.shoe){
        console.log(arrPopel.name + ' Нашлась')
    }
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let popelAgeFound = arrPopels.find(function (a){
    return a.age === 25;
})
console.log(popelAgeFound);


