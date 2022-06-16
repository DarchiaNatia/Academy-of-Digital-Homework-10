let registrationForm = document.getElementById('registrationForm');
let password_input = document.getElementById('password');
let hideShowPassIcon = document.getElementById('hideShowPass');


// registration form 
registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let errors = {};
    let regExp = /[a-zA-Z]/g;
    let registration_form = event.target;

    let firstName = document.getElementById('fName').value;
    if(firstName == "") {
        errors.fName = 'First name can not be empty'
    }
    else if (firstName.length < 6 || !regExp.test(firstName)) {
        errors.fName = 'Name must contain at least 6 characters and should contain letters'
    }

    let lastName = document.getElementById('LName').value;
    if(lastName == "") {
        errors.lName = 'Last name can not be empty'
    }
    else if (lastName.length < 6 || !regExp.test(lastName)) {
        errors.lName = 'Last name must contain at least 6 characters and should contain letters'
    }

    let password = document.getElementById('password').value;
    let repeatPassword = document.getElementById('repeat-password').value;

    if(password == "") {
        errors.password = 'Please, enter your password!'
    }
    else if (password.length < 8) {
        errors.password = 'Password should contain at least 8 characters'
    }
    else if(password != repeatPassword) {
        errors.repeat_password = 'Passwords do not match';
    }

    let gender = false;
    let selectedItem = registration_form.querySelectorAll('[name = "gender"]');
    selectedItem.forEach(element => {
        if(element.checked) {
            gender = true
        };
        if (!gender) {
            errors.gender = 'Please, select your gender.'
        }
    });

    let checkedItem = document.getElementById('agree').checked;
    if(!checkedItem) {
        errors.agree = 'You must agree our terms and conditions!';
    }
// create error text
    registration_form.querySelectorAll('.error-text').forEach(element => {
        element.textContent = '';
    });

    for (let item in errors) {
        console.log(item);
        let errorSpan = document.getElementById('error_' + item); 
        if(errorSpan) {
            errorSpan.textContent = errors[item];
        }
    }
    if(Object.keys(errors).length == 0){
        registration_form.submit();
    }
});

function hideShowPassword () {
    console.log('hello');
    if(password_input.type == 'password') {
        password_input.setAttribute ('type', 'text');
        hideShowPassIcon.classList.add('fa-eye-slash');
    }
    else {
        password_input.setAttribute ('type', 'password');
        hideShowPassIcon.classList.remove('fa-eye-slash');
    }
}
hideShowPassIcon.addEventListener('click', hideShowPassword)

// Second registration form
