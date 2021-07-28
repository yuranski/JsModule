// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//
//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/comments




fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(value => value.json())
    .then(value => {
        for (const valueElement of value) {
            let div = document.createElement('div')
            div.style.fontSize = '4px'
            document.body.append(div)
            div.innerText = valueElement.title
        }
    })

let i = 1
fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then(value => value.json())
    .then(value => {
        for (const valueElement of value) {
            let div = document.createElement('div')
            document.body.append(div)
            div.innerText = i + ' ' + valueElement.name
            i++;
        }
    })