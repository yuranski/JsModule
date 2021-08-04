const JSUser = new URL(location).searchParams.get('user')
const user = JSON.parse(JSUser)

let someUserValue = []

someUserValue.push(user.id)
someUserValue.push(user.name)
someUserValue.push(user.email)
someUserValue.push(user.address.street)
someUserValue.push(user.address.suite)
someUserValue.push(user.address.city)
someUserValue.push(user.address.zipcode)
someUserValue.push(user.address.geo.lat)
someUserValue.push(user.address.geo.lng)
someUserValue.push(user.phone)
someUserValue.push(user.website)
someUserValue.push(user.company.name)
someUserValue.push(user.company.catchPhrase)
someUserValue.push(user.company.bs)

let divDescribe = document.createElement('div')
document.body.append(divDescribe)
divDescribe.style.border = '12px solid green'
divDescribe.style.background = 'silver'
divDescribe.style.width = '300px'

let postOfCurrentUser = document.createElement('button')
postOfCurrentUser.innerHTML = 'postOfCurrentUser'
document.body.append(postOfCurrentUser)

for (const someUserValueElement of someUserValue) {
    let mainDiv = document.createElement('div')
    let someDescription = document.createElement('p')

    someDescription.innerHTML = someUserValueElement;

    document.body.append(mainDiv)
    document.body.append(someDescription)

    mainDiv.append(someDescription)

    divDescribe.append(mainDiv)
    divDescribe.append(postOfCurrentUser)
}



let someDiv = document.createElement('div')

postOfCurrentUser.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(value => {
            someDiv.innerHTML = ''
            for (const valueElement of value) {
                let someDivPost = document.createElement('div')
                someDivPost.style.display = 'grid'
                someDivPost.style.border = '12px solid green'
                someDivPost.style.background = 'silver'
                someDivPost.style.margin = 'auto'

                let btnPost = document.createElement('button')
                btnPost.innerHTML = 'Details'
                btnPost.style.width = '90%'
                btnPost.style.margin = 'auto'

                let someDescription = document.createElement('p')
                someDescription.style.margin = 'auto'

                document.body.append(someDivPost)

                someDiv.append(someDescription)
                someDiv.append(btnPost)

                someDivPost.append(someDescription)
                someDivPost.append(btnPost)

                someDescription.innerHTML = valueElement.body

                btnPost.onclick = function () {
                    location.href = `post-details.html?post=${JSON.stringify(valueElement)}`
                }
            }
        })
}