const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const form = document.querySelector('#register');
const registerMessage = document.querySelector('.register-message');


let users = [
  {
    id: 1,
    email: 'luma@gmail.com',
    password: 'Asdfghjkl1*'
  },
  {
    id: 2,
    email: 'osama@gmail.com',
    password: 'Asdfghjkl1*'
  },
  {
    id: 2,
    email: 'omar@gmail.com',
    password: 'Asdfghjkl1*'
  },
  {
    id: 2,
    email: 'sara@gmail.com',
    password: 'Asdfghjkl1*'
  },
]



form.addEventListener('submit' , (event) => {
  event.preventDefault();
  message.textContent = '';
  
  function checkEmail(email) {
    if ( users.some( (user) => user.email === email.value ) ) {
      message.textContent += 'Email already exists';
      email.focus();
      return false
    }
    return true
  }
  

  function checkPasswordConfirm(password , confirmPassword) {
    if (password.value !== confirmPassword.value) {
      message.textContent += ' Passwords do not match';
      password.value = '';
      confirmPassword.value = '';
      password.focus();
      message.style.color = "red";
      return false
    }
    return true
  }
  
  
  function minLength(password) {
    if ((password.length <= 8)) {
      message.textContent += "❌ Password is at least 8 characters long.";
      return false;
    }
    return true;
  }
  function hasUpperCase(password) {
    if (!(/[A-Z]/.test(password))) {
      message.textContent += "❌ Password must contain at least one uppercase letter.";
      return false;
    } 
    return true;
  }
  function hasNumber(password) {
    if (!(/\d/.test(password))) {
      message.textContent += "❌ Password must contain at least one number.";
      return false;
    }
    return true;
  }
  function hasSpecialChar(password) {
    if (!(/[!@#$%^&*(),.?":{}|<>]/.test(password))) {
      message.textContent += "❌ Password must contain at least one special character.";
      return false;
    }
    return true;
  }

  
  if (minLength(password.value) && hasUpperCase(password.value) 
      && hasNumber(password.value) && hasSpecialChar(password.value) 
      && checkEmail(email) && checkPasswordConfirm(password , confirmPassword)) {
      message.textContent = "✅ Strong password!";
      message.style.color = "green";
      
      const user = {
        id: users.length + 1,
        email: email.value,
        password: password.value
      }
      
      users.push(user);
      console.log(users);
      
  } else {
      message.style.color = "red";
  }
  
})

const formLogin = document.getElementById('login')
const loginEmail= document.getElementById("loginEmail")
const loginPassword = document.getElementById('loginPassword')
const loginMessage = document.querySelector(".login-message")

formLogin.addEventListener('submit',(event)=>{
    event.preventDefault()
   


let customer=users.filter(user => user.email===loginEmail.value)
if (customer[0]){
    if(customer[0].password===loginPassword.value)
        {
            console.log("ok");
        }
    else {loginMessage.textContent="wrong password"
        console.log(loginMessage.value);
    }
}else{
    loginMessage.textContent="unFound email"
}



})



