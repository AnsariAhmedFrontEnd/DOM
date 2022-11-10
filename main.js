let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

let filter = document.getElementById('filter');

form.addEventListener('submit', addItem);

itemList.addEventListener('click',removeItem);

filter.addEventListener('keyup',filterItems);

function addItem(event) {
    event.preventDefault();

    let newItem = document.getElementById('item').value;

    let li = document.createElement('li');
    li.className = 'list-group-item';

    li.appendChild(document.createTextNode(newItem));

    let itemDescription = document.getElementById('description').value;

    li.appendChild(document.createTextNode(` ${itemDescription}`));

    let delButton = document.createElement('button');

    delButton.className = 'btn btn-danger btn-sm float-right delete';

    delButton.appendChild(document.createTextNode('X'));

    li.appendChild(delButton);

    let editButton = document.createElement('button');

    editButton.className = 'btn float-right btn-sm edit';

    editButton.appendChild(document.createTextNode('Edit'));

    li.appendChild(editButton);

    itemList.appendChild(li);

}

function removeItem(event) {
    if(event.target.classList.contains('delete')){
        if(confirm('Are You Sure?')) {
            let li =  event.target.parentElement;
            itemList.removeChild(li);
        }
    }
   
}


function filterItems(event) {
    let text = event.target.value.toLowerCase();
    let items = itemList.getElementsByTagName('li');

    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        let descName = item.childNodes[1].textContent;
        if(itemName.toLocaleLowerCase().indexOf(text) != -1 || descName.toLocaleLowerCase().indexOf(text) != -1) {
            item.style.display ='block';
        }
        else{
            item.style.display = 'none';
        }
    });
}