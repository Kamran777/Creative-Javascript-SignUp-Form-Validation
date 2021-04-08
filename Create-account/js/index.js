const accountForm = document.getElementById('form');
const userName = document.getElementById('usernameInput');
const email = document.getElementById('emailInput');
const password = document.getElementById('passwordInput');
const passwordConfirmation = document.getElementById('passwordConfirmationInput');

// FORM SUBMIT BUTTON
accountForm.addEventListener('submit', e => {
    e.preventDefault();

    checkInputsValidation();
})

// CHECK INPUTS VALIDATION
function checkInputsValidation(){

    const usernameInputValue = userName.value.trim();
    const emailInputValue = email.value.trim();
    const passwordInputValue = password.value.trim();
    const passwordConfirmationInputValue = passwordConfirmation.value.trim();

    // USERNAME
    if(usernameInputValue === ''){
        showError(userName, 'Please fill the username field!');
    }else{
        showSuccess(userName)
    }

    // EMAIL
    if(emailInputValue === ''){
        showError(email, 'Email cannot be blank!');
    }else if(!isEmail(emailInputValue)){
        showError(email,'Email is not valid!');
    }
    else{
        showSuccess(email);
    }

    // PASSWORD
    if(passwordInputValue === ''){
        showError(password, 'Please fill the password field!');
    }else{
        showSuccess(password)
    }

    if(passwordConfirmationInputValue === ''){
        showError(passwordConfirmation, 'Please fill the password confirmation field!');
    }else if(passwordConfirmationInputValue != passwordInputValue){
        showError(passwordConfirmation, 'Passwords does not match!');
    }
    else{
        showSuccess(passwordConfirmation)
    }
}

// ERROR
function showError(input,message) {
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small');
 
    small.innerText = message;
    small.style.visibility = 'visible';
    formGroup.className = 'form-group error';
}

// SUCCESS
function showSuccess(input){
    const formGroup = input.parentElement;
    formGroup.className = 'form-group success';
    const small = formGroup.querySelector('small');
    small.style.visibility = 'hidden';
}

// CHECK EMAIL VALIDATION
function isEmail(email){
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}