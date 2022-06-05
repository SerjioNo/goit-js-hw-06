
const formEl = document.querySelector('.login-form');
const emailEl = document.querySelector('input[type="email"]');
const passwordEl = document.querySelector('input[type="password"]');


formEl.addEventListener('submit', formSubmit);

const elements = { email: '', password: '', };


function formSubmit (event) {
    event.preventDefault();

              
    if(emailEl.value === '' || passwordEl.value === '') {
        return console.log("Please fill in all the fields");
    }
    else {
        elements.email = emailEl.value;
        elements.password = passwordEl.value;
    }

    console.log(elements);
    event.currentTarget.reset();
}

