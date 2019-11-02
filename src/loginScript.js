const email = document.getElementById('email');
const password = document.getElementById('password');
const login = document.getElementById('login');

login.addEventListener('click', function () {
    const data = {
     password : password.value,
     email : email.value
    }

    fetch( 
        'https://it-blog-posts.herokuapp.com/api/people/login',
        {
          method: "POST", 
          body: JSON.stringify(data), 
          headers: {
            'Content-Type': 'application/json' 
          }
        }
      )
      .then(response => {
         if(response.status === 200){
             window.open('workspace.html')
         }
      })
      .catch(function (err) {
        console.log("Error", err);
      });
   // window.open('login.html')

})

