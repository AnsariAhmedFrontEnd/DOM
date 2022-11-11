function store(event) {
    event.preventDefault();
    
    let inputName = document.getElementById('name').value;
    
    let inputEmail = document.getElementById('email').value;
    
    localStorage.setItem(inputName, inputEmail);
}

