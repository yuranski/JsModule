//
// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста


let mainDiv = document.createElement('div')
let btnPosts = document.createElement('button')

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
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(value => value.json())
                    .then(value => {

                        document.body.append(mainDiv)
                        mainDiv.innerHTML = ''

                        for (const valueElement1 of value) {
                            if (valueElement1.userId === valueElement.id) {
                                let divPostsThisUsers = document.createElement('div')
                                document.body.append(divPostsThisUsers)
                                mainDiv.append(divPostsThisUsers)
                                divPostsThisUsers.innerHTML = valueElement1.title

                                btnPosts.innerHTML = 'elem'
                                document.body.append(btnPosts)

                                divPostsThisUsers.append(btnPosts)

                                btnPosts.onclick = function () {
                                    fetch('https://jsonplaceholder.typicode.com/comments')
                                        .then(value => value.json())
                                        .then(value => {


                                            for (const valueElement2 of value) {
                                                if(valueElement2.postId === valueElement1.userId){
                                                    let comUser = document.createElement('div')
                                                    document.body.append(comUser)
                                                    comUser.innerHTML = valueElement2.body
                                                }
                                            }
                                        })
                                }
                            }
                        }

                    })
            }
        }


    })