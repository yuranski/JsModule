//
// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста


let mainDiv = document.createElement('div')
let mainDiv2 = document.createElement('div')

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {

        for (const valueElement of value) {
            let div = document.createElement('div')
            let btn = document.createElement('button')
            document.body.append(div)
            document.body.append(btn)

            btn.innerText = 'AllPostsThisUsers'
            div.innerText = valueElement.name

            div.append(btn)

            btn.onclick = function () {
                fetch(`https://jsonplaceholder.typicode.com/users/${valueElement.id}/posts`)
                    .then(value => value.json())
                    .then(value => {
                        mainDiv.innerHTML = ''
                        for (const valueElement1 of value) {
                            document.body.append(mainDiv)
                            let divPostsThisUsers = document.createElement('div')
                            document.body.append(divPostsThisUsers)
                            mainDiv.append(divPostsThisUsers)
                            divPostsThisUsers.innerHTML = valueElement1.body

                            let btnPosts = document.createElement('button')
                            btnPosts.innerHTML = 'elem'
                            document.body.append(btnPosts)
                            divPostsThisUsers.append(btnPosts)
                            btnPosts.onclick = function () {
                                fetch(`https://jsonplaceholder.typicode.com/posts/${valueElement1.id}/comments`)
                                    .then(value => value.json())
                                    .then(value => {
                                        mainDiv2.innerHTML = ''
                                        for (const valueElement2 of value) {
                                            let comUser = document.createElement('div')
                                            document.body.append(comUser)
                                            document.body.append(mainDiv2)
                                            mainDiv2.append(comUser)
                                            comUser.innerHTML = valueElement2.body
                                        }
                                    })
                            }
                        }
                    })
            }
        }
    })