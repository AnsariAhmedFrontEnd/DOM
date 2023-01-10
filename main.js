function store(event) {
    event.preventDefault();
    const name = event.target.nameInput.value;
    const email = event.target.email.value;
    const mobile = event.target.number.value;
    const obj = {
        name:name,
        email:email,
        mobile:mobile
    };

    axios.post("https://crudcrud.com/api/051c011ca5ce4e0796efbbafab2ef779/appData",obj)
    .then(response => response.data)
    .catch(err => console.log(err));

    //let objSeriliazed = JSON.stringify(obj);


    // localStorage.setItem(`${email}`,objSeriliazed);

    // Object.keys(localStorage).forEach((key) => {
    //     detailsOfUsers = localStorage.getItem(key);
    //     details = JSON.parse(detailsOfUsers);
        
    // });
        
    //showUserDetails(details);      
    
}

window.addEventListener('DOMContentLoaded', () => {
    axios.get("https://crudcrud.com/api/051c011ca5ce4e0796efbbafab2ef779/appData")
    .then(response => {
        for(let i = 0; i<response.data.length; i++){
            showUserDetails(response.data[i])
        }
        
    })
    .catch(err => console.log(err));
})

function showUserDetails(user) {

    document.getElementById('nameInput').value = '';
    document.getElementById('email').value = '';
    document.getElementById('number').value = '';
    

    // if(localStorage.getItem(user.email != null)) {
    //     removeUserFromScreen(user.email);
    // }

    const parentNode = document.getElementById('items');

    const childNode = document.createElement('li');
    childNode.id = user._id;


    childNode.textContent = `${user.name}- ${user.email}`;
    const editButton = document.createElement('input');
    editButton.type = 'button';
    editButton.value = 'Edit';

    editButton.onclick = () => {
        const name = document.getElementById('nameInput').value = user.name;
       const email= document.getElementById('email').value = user.email;
        const mobile = document.getElementById('number').value = user.mobile;
        const updatedData = {
            name,
            email,
            mobile
        }
        removeFromScreen(user._id)
        axios.put(`https://crudcrud.com/api/051c011ca5ce4e0796efbbafab2ef779/appData/${user._id}`,updatedData)
        .then(response => console.log(response))
        // localStorage.removeItem(user.email);
         
    }

    const deleteButton = document.createElement('input');
    deleteButton.type = 'button';
    deleteButton.value = 'Delete';

    deleteButton.onclick = () => {

        axios.delete(`https://crudcrud.com/api/051c011ca5ce4e0796efbbafab2ef779/appData/${user._id}`)
        .then(response => {
            removeFromScreen(user._id)
        })
        // localStorage.removeItem(user.email);
        // parentNode.removeChild(childNode);
    }

    childNode.appendChild(editButton)
    childNode.appendChild(deleteButton)
    parentNode.appendChild(childNode);
}

function removeUserFromScreen(emailId) {
    const parentNode = document.getElementById('itmes');
    const childNodeToBeDeleted = document.getElementById(emailId);
    if(childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted);
    }
}





function removeFromScreen(key) {
    const parentNode = document.getElementById('items');
    const child = document.getElementById(key);

    if(child != null) {
        
        parentNode.removeChild(child);
    }
}

function editBtn(name,email,mobile) {
    document.getElementById('nameInput').value = name;
    document.getElementById('email').value = email;
    document.getElementById('number').value = mobile

    removeFromScreen(email);
}





