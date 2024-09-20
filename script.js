const btn = document.querySelector('.submit');
const fName = document.querySelector('#Fname');
const lName = document.querySelector('#Lname');
const mail = document.querySelector('#email');
const password = document.querySelector('#password');


btn.addEventListener('click', Main);

function Main(){
    if(fName.value===''){
        const e = document.querySelector('#errorfn');
        const p = document.querySelector('#errorFn');
        e.style.display = 'block';
        p.style.display = 'block';
    }
    if(lName.value===''){
        const e = document.querySelector('#errorln');
        const p = document.querySelector('#errorLn');
        e.style.display = 'block';
        p.style.display = 'block';
    }
    if(!emailVal(mail.value) || mail.value===''){
        const e = document.querySelector('#errormail');
        const p = document.querySelector('#errorMail');
        e.style.display = 'block';
        p.style.display = 'block';
    }
    if(password.value===''){
        const e = document.querySelector('#errorpass');
        const p = document.querySelector('#errorPass');
        e.style.display = 'block';
        p.style.display = 'block';
    } 
     else{
        const e = document.querySelectorAll('.error');
        const p = document.querySelectorAll('.errorP');
        for(let errors of e){
            errors.style.display = 'none'
        }
        for(let paras of p){
            paras.style.display = 'none'
        }
     }

}

function emailVal(mail){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(mail);

}
