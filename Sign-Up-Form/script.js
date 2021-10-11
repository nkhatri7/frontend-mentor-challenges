const form = document.getElementById('signup-form');

function hasValue(input, inputName) {
    const errorMessage = input.parentNode.querySelector('.error-message');
    if (input.value.trim() === "") {  
        errorMessage.innerText = `${inputName} cannot be empty`;
        input.classList.add('invalid-entry');
        return false;
    } else {
        if (input.classList.contains('invalid-entry')) {
            input.classList.remove('invalid-entry');
            errorMessage.innerText = '';
        }
        return true;
    }
}

function validateEmail(input) {
    let filledEmail = hasValue(input, "Email");
    if (filledEmail) {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regex.test(String(input.value).toLowerCase())) {
            const errorMessage = input.parentNode.querySelector('.error-message');
            if (input.classList.contains('invalid-entry')) {
                input.classList.remove('invalid-entry');
                errorMessage.innerText = '';
            }
            if (input.classList.contains('invalid-email')) {
                input.classList.remove('invalid-email');
                errorMessage.innerText = '';
            }
            return true;
        } else {
            const errorMessage = input.parentNode.querySelector('.error-message');
            errorMessage.innerText = 'Looks like this is not a valid email';
            input.classList.add('invalid-entry');
            input.classList.add('invalid-email');
            return false;
        }
    } else {
        return false;
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let validFirstName = hasValue(form.elements['first-name'], 'First Name');
    let validLastName = hasValue(form.elements['last-name'], 'Last Name');
    let validEmail = validateEmail(form.elements['email']);
    let validPassword = hasValue(form.elements['password'], 'Password');

    if (validFirstName && validLastName && validEmail && validPassword) {
        alert('Thanks for signing up! Please check your email to validate your account.');
        form.elements['first-name'].value = '';
        form.elements['last-name'].value = '';
        form.elements['email'].value = '';
        form.elements['password'].value = '';
    }
});