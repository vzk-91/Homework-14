const lastname = document.getElementById('last_name');
const username = document.getElementById('user_name');
const password = document.getElementById('password');
const email = document.getElementById('email');
const registration = document.getElementById('registration');


function validate (data,page) {
    let re = /\S+@\S+\.\S+/;
    if(lastname.value.length > 2 && firstname.value.length >3 && password.value.length > 6 && re.test(email.value)){
        window.open(page)
    }  else {
        return alert('not validate')
    }
    
}

registration.addEventListener('click', function () {
  const data = {
    lastname : lastname.value,
    username : username.value,
    password : password.value,
    email : email.value
  }

  fetch( 
    'https://it-blog-posts.herokuapp.com/api/people',
    {
      method: "POST", 
      body: JSON.stringify(data), 
      headers: {
        'Content-Type': 'application/json' 
      }
    }
  )
  .then(function (response) {
    console.log(response)
  })
  .catch(function (err) {
    console.log("Error", err);
  });
   
  validate(data,"login.html")

})
