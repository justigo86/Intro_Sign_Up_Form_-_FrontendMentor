const btn = document.querySelector('.btn');
const form = document.querySelector('.input');
const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const small = document.querySelector('.error');
const image = document.querySelector('.error_image');

form.addEventListener('submit', e => {
    e.preventDefault();

    const first = fname.value.trim();
    const last = lname.value.trim();
    const mail = email.value.trim();
    const pw = password.value.trim();

    if(first === '') {
        error(fname, "First Name cannot be empty");
    } else {
        success(fname);
    }

    if(last === '') {
        error(lname, "Last Name cannot be empty");
    } else {
        success(lname);
    }

    if(mail === '') {
        error(email, "Email cannot be empty");
    } else {
        success(email);
    }

    if(pw === '') {
        error(password, "Password cannot be empty");
    } else {
        success(password);
    }
})

const error = (val, message) => {
    const parent = val.parentElement;
    const sml = parent.querySelector('small');
    const img = parent.querySelector('img'); 
    val.classList.add('errors');   
    sml.innerHTML = message;
    img.style.opacity = "1";
}

const success = (val) => {
    const parent = val.parentElement;
    const img = parent.querySelector('img');
    const sml = parent.querySelector('small');
    val.classList.remove('errors');
    val.classList.add('success');
    img.style.opacity = "0";
    sml.style.opacity = "0";
}