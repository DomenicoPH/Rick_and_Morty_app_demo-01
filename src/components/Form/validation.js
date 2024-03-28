const validation = (inputs) => {

    const regexUsername = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPassword = new RegExp("[0-9]");

    const errors = {};
    
    if(!regexUsername.test(inputs.username)){errors.username = "Invalid Username"}
    if(!inputs.username){errors.username = "No Username"}
    if(inputs.username.length > 35){errors.username = 'Username is too long...'}
    
    if(!regexPassword.test(inputs.password)){errors.password = 'Invalid Password'}
    if(!inputs.password){errors.password = 'No Password'}
    if(inputs.password.length < 6 || inputs.password.length > 10){errors.password = 'Between 6 and 10 characters'}
    
    return errors;
}

export default validation;