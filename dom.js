// let title = document.getElementById('header-title');
// let header = document.getElementById('main-header');
// title.textContent = 'There was Item Lister earlier, now I have changed it using DOM';

// let item = document.querySelector('.title');
// //item.textContent = 'I have changed this using class name and query selector';



// let ul = document.getElementsByClassName('list-group');

// title.style.border = 'solid 3px black';

// header.style.border = 'solid 3px black';

// item.innerHTML = '<b>Add Items</b>';
// item.style.color = 'green';

// let listItems = document.getElementsByClassName('list-group-item');

// listItems[2].style.backgroundColor = 'green';
// listItems[2].style.color = 'white';

// for (let i = 0; i<listItems.length; i++){
//     listItems[i].style.fontWeight = "bold";
//     listItems[i].style.color = 'navy';
// }

// let listItems = document.getElementsByTagName('li');

// listItems[2].style.backgroundColor = 'orange';
// listItems[2].style.color = 'white';
// listItems[4].textContent = 'This list item have different class name';

// for (let i = 0; i<listItems.length; i++){
//     listItems[i].style.fontWeight = "bold";
//     listItems[i].style.color = 'navy';
// }

// listItems[4].style.color = 'green';

// let li = document.getElementsByClassName('newitem');


// let liNew = document.getElementsByTagName('li');
// liNew[4] = 'This item have different class Name';

// // let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// // secondItem.style.backgroundColor = 'green';

// let thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility = 'hidden'

// let secondItemQueryAll = document.querySelectorAll('li');
// secondItemQueryAll[1].style.color = 'green';

let odd = document.querySelectorAll('li:nth-child(odd)');

for(let i = 0; i<odd.length; i++){
    odd[i].style.backgroundColor = 'green';
}
