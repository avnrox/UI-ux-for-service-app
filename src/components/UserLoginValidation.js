
function UserLoginValidation(user) {
    let error = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    //const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    
    if(user.user_id === "") {
        error.user_id = "Cant be empty"
    } 
    else if (!email_pattern.test(user.user_id)) {
        error.user_id = "Invalid email-id entered"
    }
    else {
        error.user_id = "\u2713"
    }
    if(user.user_pwd === "") {
        error.user_pwd = "Password field cant be empty"
    } 
    else if (user.user_pwd.length < 3) {
        error.user_pwd = "Password needs atleast 4 charectors"
    }
   else {
    error.user_pwd = "\u2713"
}
    
//    if(values.confirm_password === "" || String(values.confirm_password) !== String(values.password)) {
//        console.log(values.confirm_password + "___" + values.password)
//        error.confirm_password = "Password not matched"
//   }
    return error;
}

export default UserLoginValidation;