function store(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const mobile = event.target.number.value;
    const obj = {
        name:name,
        email:email,
        mobile:mobile
    };

    let objSeriliazed = JSON.stringify(obj);

    localStorage.setItem(`${email}`,objSeriliazed);

    Object.keys(localStorage).forEach((key) => {
        detailsOfUsers = localStorage.getItem(key);
        details = JSON.parse(detailsOfUsers);
        showUserDetails(details);
    });
            
        
    
}

function showUserDetails(user) {
    const parentNode = document.getElementById('items');

    const childHTML = `<li>${user.name} - ${user.email}</li>`;

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}


