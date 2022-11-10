let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

form.addEventListener('submit', addItem);

itemList.addEventListener('click',removeItem);

function addItem(event) {
    event.preventDefault();

    let newItem = document.getElementById('item').value;

    let li = document.createElement('li');
    li.className = 'list-group-item';

    li.appendChild(document.createTextNode(newItem));

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