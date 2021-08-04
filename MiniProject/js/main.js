let mainDivGrid = document.createElement('div')
document.body.append(mainDivGrid)
mainDivGrid.style.display = 'grid'
mainDivGrid.style.gridTemplateColumns = 'auto auto auto auto auto'

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        for (const valueElement of value) {

            let mainDiv = document.createElement('div')
            mainDiv.style.border = '12px solid green'
            mainDiv.style.background = 'silver'
            document.body.append(mainDiv)
            mainDiv.innerHTML = `<div>${valueElement.name}</div>`

            const button = document.createElement('button')
            button.innerHTML = `details`
            document.body.append(button)

            mainDiv.append(button)

            button.onclick = function () {
                console.log('asd')
                location.href = `user-details.html?user=${JSON.stringify(valueElement)}`
            }

            mainDivGrid.append(mainDiv)
        }
    })