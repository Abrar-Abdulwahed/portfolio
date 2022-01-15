const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});

function classToggle() {
    const navs = document.querySelectorAll('.menu-toggle')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }
  
document.querySelector('.menu-bar')
.addEventListener('click', classToggle);

// JS Image Effect
let el = document.getElementById('profile');

const height = el.clientHeight
const width = el.clientWidth

el.addEventListener('mousemove', handleMove)

function handleMove(e) {
  const xVal = e.layerX
  const yVal = e.layerY
  const yRotation = 20 * ((xVal - width / 2) / width)
  
  const xRotation = -20 * ((yVal - height / 2) / height)

  const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
  el.style.transform = string
}

el.addEventListener('mouseout', function() {
  el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})

el.addEventListener('mousedown', function() {
  el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
})
el.addEventListener('mouseup', function() {
  el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
})

function changeToBlueColor(){
   var items = document.querySelectorAll(".work-item");
   items.forEach(item =>{
       setconsole.log(item);
        item.style.filter = "grayscale(100%)";
   });
}



/**
 * Form Validation
 *  
 * */ 

// Select elements
const form = document.getElementById('form');
let username = document.getElementById('username');
let email = document.getElementById('email');
let message = document.getElementById('message');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

function setError(input, message) {
	const formControl = input.parentElement;
	const errorElement = formControl.querySelector('.error');
    errorElement.innerText = message;
    formControl.classList.add('error');
    formControl.classList.remove('success')
}

function setSuccess(input) {
    const formControl = input.parentElement;
	const errorMessage = formControl.querySelector('.error');
    errorMessage.innerText = '';
    formControl.classList.add('success');
    formControl.classList.remove('error')
}
const validateInputs = ()=>{
    validationName(username);
    validationEmail(email);
    validationMessage(message);
}
const validationName = (username)=>{
    var usernameValue = username.value.trim();
    var validName= /^[a-zA-Z]{4,10}$/;
    if(usernameValue === "")
        setError(username, "Username is required");
    else if(!validName.test(usernameValue))
        setError(username, "Name must be 4 - 10 letters ONLY");
    // else if (usernameValue.length < 3 || usernameValue.length > 10)
    //     setError(username, "It must be more than 3 and less than 10 characters");
    else{
        setSuccess(username);
    }
}
const validationEmail = (emailValue) => {
    var emailValue = email.value;
    validEmailAddress=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(emailValue === "")
        setError(email, "Email Address is required");
    else if(!validEmailAddress.test(emailValue))
        setError(email, "Email Addre must be in valid formate with @ symbol");
    else
        setSuccess(email);

}
const validationMessage = message =>{
    var msgValue = message.value;
    var validMessage=/^[a-zA-Z]{20,1000}$/;
    if(msgValue === "")
        setError(message, "Message is required");
    else if(!validMessage.test(msgValue))
        setError(message, "must be more than 20 characters");
    else
        setSuccess(message);
}





