let mainDivGrid = document.createElement('div')
mainDivGrid.style.display = 'grid'
mainDivGrid.style.gridTemplateColumns = 'auto auto'
mainDivGrid.style.borderWidth = '2px'
mainDivGrid.style.borderColor = 'red'
mainDivGrid.style.borderStyle = 'solid'

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        for (const valueElement of value) {
            const mainDiv = document.createElement('div')
            const divUser = document.createElement('div')
            const link = document.createElement('a')

            link.innerHTML = 'user-details.html'
            link.href = `user-details.html?user=${JSON.stringify(valueElement)}`

            document.body.append(mainDiv)
            document.body.append(divUser)
            document.body.append(link)
            document.body.append(mainDivGrid)

            mainDiv.append(divUser)
            mainDiv.append(link)
            mainDivGrid.append(mainDiv)

            divUser.innerHTML = valueElement.name
            divUser.style.borderWidth = '2px'
            divUser.style.borderColor = 'red'
            divUser.style.borderStyle = 'solid'
        }
    })