const JSONpost = new URL(location).searchParams.get('post')
const post = JSON.parse(JSONpost)

let somePostValue = []

somePostValue.push(post.userId)
somePostValue.push(post.id)
somePostValue.push(post.title)
somePostValue.push(post.body)

let mainDivHeader = document.createElement('div')
mainDivHeader.style.display = 'grid'
mainDivHeader.style.gridTemplateColumns = 'auto auto auto auto'

let mainDiv = document.createElement('div')
mainDiv.style.display = 'grid'
mainDiv.style.gridTemplateColumns = 'auto auto auto auto auto'

for (const somePostValueElement of somePostValue) {
    let somePost = document.createElement('p')
    document.body.append(somePost)
    document.body.append(mainDivHeader)
    mainDivHeader.append(somePost)
    somePost.innerHTML = somePostValueElement;
    somePost.style.border = '12px solid green'
    somePost.style.background = 'silver'
}

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(value => {
        for (const valueElement of value) {
            let pCom = document.createElement('p')
            document.body.append(pCom)
            document.body.append(mainDiv)
            mainDiv.append(pCom)
            pCom.innerHTML = valueElement.body
            pCom.style.border = '12px solid green'
            pCom.style.background = 'silver'
        }
    })