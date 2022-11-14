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

    localStorage.setItem('userDetails',objSeriliazed);
    
}


