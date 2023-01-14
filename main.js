function saveToCloud(event){
    event.preventDefault();
    let amount = document.getElementById('amount').value;
    let description = document.getElementById('description').value;
    let category = document.getElementById('category').value;
    let obj = {
    amount,
    description,
    category
}
    axios.post("https://crudcrud.com/api/8f76f2397a4b4388b76cb414e846f965/expenseTracker",obj)
    .then(response => {
        showOnScreen(obj)
    })
    .catch(err => {
        document.body.innerHTML = `<h4>Something Went Wrong</h4>`
    });

    amount.value = '';
    description.value='';


}

window.addEventListener('DOMContentLoaded', () => {
    axios.get("https://crudcrud.com/api/8f76f2397a4b4388b76cb414e846f965/expenseTracker")
    .then((response) =>{
        
        for(let i = 0; i<response.data.length; i++){
            showOnScreen(response.data[i]);
        }
        
    } )
    .catch(err => console.log(err))
})

function showOnScreen(object){
    let parentNode = document.getElementById('list');
    let childNode = document.createElement('li');
    childNode.className = 'list-group-item'
    childNode.id = object._id

    childNode.textContent = `${object.amount} - ${object.description} - ${object.category}`;

    let editButton = document.createElement('input');
    editButton.type = 'button'
    editButton.value = 'Edit';
    editButton.className="btn btn-dark btn-sm float-end mx-1"

    editButton.onclick = () => {
        let amount=  document.getElementById('amount').value = object.amount;
        let description= document.getElementById('description').value = object.description;
        let category=  document.getElementById('category').value = object.category;
        axios.delete(`https://crudcrud.com/api/8f76f2397a4b4388b76cb414e846f965/expenseTracker/${object._id}`)
        .then(response => {
            removeFromScreen(object._id)
        })
          
   
    }

    let deleteButton = document.createElement('input');
    deleteButton.type = 'button'
    deleteButton.value = 'X';
    deleteButton.className = "btn btn-danger btn-sm float-end delete"

    deleteButton.onclick = () => {
        axios.delete(`https://crudcrud.com/api/8f76f2397a4b4388b76cb414e846f965/expenseTracker/${object._id}`)
        .then(response => {
            removeFromScreen(object._id)
        })
    }
      
    parentNode.appendChild(childNode);
    childNode.appendChild(editButton)
    childNode.appendChild(deleteButton);
}

function removeFromScreen(id) {
    let parentNode = document.getElementById('list');
    let childNode = document.getElementById(id);
    parentNode.removeChild(childNode)
}

