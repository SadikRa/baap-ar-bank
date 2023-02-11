document.getElementById('submit-button').addEventListener('click', function(){
    

    const userEmail = document.getElementById('input-email');

    const email = userEmail.value;

    const userPassword = document.getElementById('input-password');

    const password = userPassword.value;

    if(email === 'sadik@gmail.com' && password === 'sadddd' ){
        console.log('valied user')
    }
    else{
        console.log('un valide user')
    }
})