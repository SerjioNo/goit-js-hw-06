
const inputEl = document.querySelector('#validation-input');

const lengthInputEl = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', event => {

   if (event.currentTarget.value.length < lengthInputEl) { 
     inputEl.classList.remove('valid') 
     inputEl.classList.add('invalid')
    }
    else {
     inputEl.classList.remove('invalid')
     inputEl.classList.add('valid')
    }

});