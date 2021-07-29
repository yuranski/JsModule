


// Зробити свій розпорядок дня.
//
//     У вас має бути більше 10 асинхронних дій з рандомними затримками.
//     Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
//
//     Напиклад.
//     Прикнутись - 0.3с
// Поснідати - 1с
// Піти в душ - 0.5с
// Дочекатись автобус - 3с
// Пообідати - 1с
//
// І так далі


function wakeUp(status) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (status) {
                resolve('Я проснувся')
            } else {
                reject('Дядь))) спочатку потрібно прокинутись')
            }
        }, 300)
    });
}
function breakfast(){
   return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve('Поснідав')
       }, 500)
   })
}
function toilet(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('Я сходив в туалет')
        },100)
    })
}
function brushYourTeeth(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('Почистив зуби')
        },1000)
    })
}
function wash(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('Вмив лице')
        },200)
    })
}
function walkTheDog(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('Вигуляв собаку')
        },700)
    })
}
function changeTheCatTray(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('Замінив коту лоток')
        },600)
    })
}
function feedTheParrot(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('Покормив папугая')
        },500)
    })
}
function sitDownCodecs(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('Сів покодити')
        },100)
    })
}
function writeToDoList(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('Написав туду ліст')
        },900)
    })
}
function drinkCoffee(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('Випив каву')
        },200)
    })
}
function toSmokeAHookah() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('Нарешті можна покурити кальянчик')
        },666)
    })
}


async function routine() {
    try {
        const iWakeUp = await wakeUp(true);
        console.log(iWakeUp)

        const iBreakfast = await breakfast();
        console.log(iBreakfast)

        const iToilet = await toilet();
        console.log(iToilet)

        const iBrushYourTeeth = await brushYourTeeth();
        console.log(iBrushYourTeeth)

        const iWash = await wash();
        console.log(iWash)

        const iWalkTheDog = await walkTheDog();
        console.log(iWalkTheDog)

        const iChangeTheCatTray = await changeTheCatTray();
        console.log(iChangeTheCatTray)

        const iFeedTheParrot = await feedTheParrot();
        console.log(iFeedTheParrot)

        const iSitDownCodecs = await sitDownCodecs();
        console.log(iSitDownCodecs)

        const iWriteToDoList = await writeToDoList();
        console.log(iWriteToDoList)

        const iDrinkCoffee = await drinkCoffee();
        console.log(iDrinkCoffee)

        const iToSmokeAHookah = await toSmokeAHookah();
        console.log(iToSmokeAHookah)

    } catch (e) {
        console.warn(e)
    }
}

routine().then();






