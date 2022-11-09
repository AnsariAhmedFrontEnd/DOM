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



