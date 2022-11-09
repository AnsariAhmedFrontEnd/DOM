let itemList = document.querySelector('#items');
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f2f2f2';

// console.log(itemList.parentElement.parentElement);

//console.log(itemList.firstChild);


//itemList.firstElementChild.textContent = 'This is First Element Child';

//itemList.lastChild.textContent = 'This is actually the blank text part';

//itemList.lastElementChild.textContent = 'This is last member of the family';

//console.log(itemList.nextSibling);

//console.log(itemList.nextElementSibling);

//console.log(itemList.previousSibling);

//itemList.previousElementSibling.textContent = 'Previous Sibling';

let newDiv = document.createElement('div');

newDiv.className = 'hello';

newDiv.setAttribute('title', 'Hello Div'); 

let newDivText = document.createTextNode('Hello World');

newDiv.appendChild(newDivText);

let container = document.querySelector('header .container');

let h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv,h1);

let divBeforeItems = document.createElement('div');
let divBeforeItemsText = document.createTextNode('Hello World');

divBeforeItems.append(divBeforeItemsText);

let beforeItemOne = document.querySelector('div .title');

let cont = document.querySelector('div #main');

cont.insertBefore(divBeforeItems, beforeItemOne)


let parentNode = document.querySelector('#items');

parentNode.innerHTML = '<li>Hello World</li>' + parentNode.innerHTML;





