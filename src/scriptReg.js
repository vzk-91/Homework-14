const lastname = document.getElementById('last_name');
const username = document.getElementById('user_name');
const password = document.getElementById('password');
const email = document.getElementById('email');
const registration = document.getElementById('registration');


function validate (data) {
    if(data.lastname.length > 2 && data.username.length >3 && data.password.length > 6){
        window.open("login.html")
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
  validate(data)

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
    console.log(response.status)
  })
  .catch(function (err) {
    console.log("Error", err);
  });
   

})


