function myUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(earth => myDisdplay(earth))
}
function myDisdplay(goods){
    const ul = document.getElementById('user-list');
    for(const good of goods){
        console.log(good.phone);
        const li = document.createElement('li');
        li.innerText = good.phone;
        ul.appendChild(li); 
    }
}  