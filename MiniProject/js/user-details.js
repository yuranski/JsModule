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

let someDivMarginAuto = document.createElement('div')
someDivMarginAuto.style.margin = 'auto'


let someDivGrid = document.createElement('div')
document.body.append(someDivGrid)
someDivGrid.style.display = 'grid'
someDivGrid.style.gridTemplateColumns = 'auto auto auto auto auto'

postOfCurrentUser.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(value => {
            someDiv.innerHTML = ''
            for (const valueElement of value) {
                let someDivPost = document.createElement('div')

                someDivPost.style.border = '12px solid green'
                someDivPost.style.background = 'silver'

                let btnPost = document.createElement('button')
                btnPost.innerHTML = 'Details'
                btnPost.style.width = '90%'
                btnPost.style.margin = 'auto'

                someDivPost.innerHTML = `<p>${valueElement.body}</p>
                                        <div style="margin: auto; display: flex ">
                                        <button class="onClick" style="margin: auto">${btnPost.innerHTML = 'Details'}</button>
                                        </div>`
                someDivGrid.append(someDivPost)
                let btn = document.getElementsByClassName('onClick')
                for (const btnElement of btn) {
                    btnElement.style.width = '90%'
                }
                btn.onclick = function (){
                    location.href = `post-details.html?post=${JSON.stringify(valueElement)}`
                }
            }
        })
}