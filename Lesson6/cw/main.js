// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

let divFooter = document.createElement('div');
let divFooterMain = document.createElement('div')

let i = 0;
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {
        for (const val of value) {
            if (i < 10) {
                let div = document.createElement('div')
                let divMain = document.createElement('div')
                let btn = document.createElement('button')

                divMain.style.display = 'flex'

                btn.innerText = 'changeText'

                document.body.append(div)
                document.body.append(btn)
                document.body.append(divMain)

                divMain.append(div)
                divMain.append(btn)

                div.innerText = val.title
                i++

                btn.onclick = function () {
                    divFooterMain.innerHTML = ''
                    fetch(`https://jsonplaceholder.typicode.com/comments`)
                        .then(value => value.json())
                        .then(value => {
                            for (const valueElement of value) {
                                divFooter = document.createElement('div')

                                if (valueElement.postId === val.id) {
                                    document.body.append(divFooter)
                                    document.body.append(divFooterMain)
                                    divFooterMain.append(divFooter)
                                    divFooter.innerText = valueElement.body
                                }
                            }

                        })
                }
            }
        }
    })