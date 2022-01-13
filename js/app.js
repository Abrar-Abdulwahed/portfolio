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
       console.log(item);
        item.style.backgroundColor = 'red';
   });
}


// Form Validation
const form = document.getElementById('form');
// Select elements
let username = document.getElementById('username');
let email = document.getElementById('email');
let message = document.getElementById('message');

form.addEventListener('submit', e => {
    e.preventDefault();
    username = username.value.trim();
    email = email.value.trim();
    message = message.value;

    validInputs();
});
const validInputs = ()=>{
    validationName(username);
    validationEmail(email);
    validationMessage(message);
}
const validationName = (username)=>{
    validName=/^[A-Za-z]+$/;
    nameErr=document.getElementById('nameError');
    if(username === '')
        nameErr.innerHTML = "Name is required";
    else{
        if(!validName.test(username)){
            nameErr.innerHTML="Name must be only string without numbers or symbols";
        }
        else{
            usernameLength = username.length;
            if (usernameLength < 3 || usernameLength > 10)
                nameErr.innerHTML = "It must be more than 3 and less than 10 characters";
        }
        
    }
}
const validationEmail = (email) => {
    emailAddressErr=document.getElementById('emailError');
    validEmailAddress=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email === ''){
        emailAddressErr.innerHTML="Email Address is required";
    }else if(!validEmailAddress.test(email)){
        emailAddressErr.innerHTML="Email Addre must be in valid formate with @ symbol";
    }

}
const validationMessage = message =>{
    msgErr=document.getElementById('msgError');
    if(message === "")
        msgErr.innerHTML = "Message is required";
    else if(message.length < 20)
        msgErr.innerHTML = "must be more than 20 characters";
}





