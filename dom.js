let title = document.getElementById('header-title');
let header = document.getElementById('main-header');
title.textContent = 'There was Item Lister earlier, now I have changed it using DOM';

let item = document.querySelector('.title');
//item.textContent = 'I have changed this using class name and query selector';



let ul = document.getElementsByClassName('list-group');

title.style.border = 'solid 3px black';

header.style.border = 'solid 3px black';

item.innerHTML = '<b>Add Items</b>';
item.style.color = 'green';

let listItems = document.getElementsByClassName('list-group-item');

listItems[2].style.backgroundColor = 'green';
listItems[2].style.color = 'white';

for (let i = 0; i<listItems.length; i++){
    listItems[i].style.fontWeight = "bold";
    listItems[i].style.color = 'navy';
}


