function RegisterValidation(user) {
    let error = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    //const userPwd_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    
    if(user.userId === "") {
        error.userId = "Cant be empty"
    } 
    else if (!email_pattern.test(user.userId)) {
        error.userId = "Invalid email-id entered"
    }
    else {
        error.userId = "\u2713"
    }
    if(user.userPwd === "") {
        error.userPwd = "Password field cant be empty"
    } 
    else if (user.userPwd.length < 4) {
        error.userPwd = "Password needs atleast 4 charectors"
    }
   else {
    error.userPwd = "\u2713"
}
//hard code an exapmle for already exisists 
    

    return error;
}

export default RegisterValidation;