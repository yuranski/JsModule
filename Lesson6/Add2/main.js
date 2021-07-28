



//Я просто немножечко шалю :) не относиться к заданию вообще

let btn = document.createElement('button');
btn.id = '1';
btn.innerText = 'Add'
let i = 0;
let page = 1;
document.body.append(btn);


btn.onclick = function () {
    fetch(`https://reqres.in/api/users?page=${page}`)
        .then(value => value.json())
        .then(value => {
            try{
                let div = document.createElement('div');
                div.style.display = 'flex'
                let divMain = document.createElement('div');
                div.append(divMain);
                divMain.innerHTML = value.data[i].first_name;
                document.body.append(div);

                let btnDeleted = document.createElement('button');
                btnDeleted.innerText = 'Deleted'
                div.appendChild(btnDeleted)

                let btnChange = document.createElement('button');
                btnChange.innerText = 'ChangeText'
                div.appendChild(btnChange)
                btnDeleted.onclick = function (){
                    div.remove()
                }

                btnChange.onclick = function (){
                    divMain.innerHTML = 'SomeText';
                }
                i++;
            } catch (e) {
                page++;
                i=0;
            }
        })
}





















