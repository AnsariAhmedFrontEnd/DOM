function save(event) {
    event.preventDefault();
    let nameInput = event.target.name.value;
    let emailInput = event.target.email.value;
    let numberInput = event.target.number.value;

    let obj = {
        name:nameInput,
        email:emailInput,
        number: numberInput
    }


    let serilazed = JSON.stringify(obj);
    
    localStorage.setItem(obj.email, serilazed);

    showUserOnScreen(obj);
}

window.addEventListener('DOMContentLoaded', (event) => {
    Object.keys(localStorage).forEach(key => {
        const user = JSON.parse(localStorage.getItem(key))
        showUserOnScreen(user)
    })
});


function showUserOnScreen(user) {
    document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('number').value = '';
    if(localStorage.getItem(user.email) != null) {
        removeUserFromScreen(user.email);
    }

    const parentNode = document.getElementById('items');
    const childHTML = `<li id=${user.email}>${user.name} - ${user.email}
                        <button onclick=deleteUser('${user.email}')>Delete User</button>
                        <button onclick=edit('${user.name}','${user.email}','${user.number}')>Edit</button>
                        </li>`;
    parentNode.innerHTML = parentNode.innerHTML + childHTML;

    }


    function removeUserFromScreen(email) {
        const parentNode = document.getElementById('items');
        const childToBeDeleted = document.getElementById(email);
        
        
        if(childToBeDeleted){
            parentNode.removeChild(childToBeDeleted);
        }
    }

    function deleteUser(email) {
        localStorage.removeItem(email);
        removeUserFromScreen(email);
    }

    function edit(name,email,number) {
        document.getElementById('name').value = name;
        document.getElementById('email').value = email;
        document.getElementById('number').value = number;

        deleteUser(email);

    }
   