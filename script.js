const btn = document.querySelector('.submit');
const fName = document.querySelector('#Fname');
const lName = document.querySelector('#Lname');
const mail = document.querySelector('#email');
const password = document.querySelector('#password');

btn.addEventListener('click', Main);

function Main() {
    let isValid = true; // Flag to track if all fields are valid

    isValid = validateField(fName, '#errorfn', '#errorFn') && isValid;
    isValid = validateField(lName, '#errorln', '#errorLn') && isValid;
    isValid = validateField(mail, '#errormail', '#errorMail', emailVal) && isValid;
    isValid = validateField(password, '#errorpass', '#errorPass') && isValid;

     if (isValid) {
        console.log("Form submitted successfully!");
    }
}

function validateField(inputField, errorSelector, errorPSelector, validationFunc = check) {
    const e = document.querySelector(errorSelector);
    const p = document.querySelector(errorPSelector);
    
    if (!validationFunc(inputField.value)) {
        e.style.display = 'block';
        p.style.display = 'block';
        return false;
    } else {
        e.style.display = 'none';
        p.style.display = 'none';
        return true;
    }
}

function emailVal(mail) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(mail) && mail.length > 0;
}

function check(string) {
    return string !== ''; // Returns true if the string is not empty
}
