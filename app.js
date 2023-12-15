const PASSWORD_INPUT = document.querySelector("#password");
const CONFIRM_PASSWORD_INPUT = document.querySelector("#cpassword");

let password = "";
let cpassword = "";

PASSWORD_INPUT.addEventListener('keypress',getPassword);
CONFIRM_PASSWORD_INPUT.addEventListener('keypress',validate);

function validate(e){
    cpassword = e.target.value;
    if(password === cpassword){
        e.target.classList.remove('error');
    }
    else{
        e.target.classList.add('error');
    }
}
function getPassword(e){
    password = e.target.value;
}