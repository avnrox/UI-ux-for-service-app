//this is for login not signup for service provider
function ServiceregisterValidation(provider) {
    let error = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    //const provider_pwd_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    
    if(provider.provider_id === "") {
        error.provider_id = "Cant be empty"
    } 
    else if (!email_pattern.test(provider.provider_id)) {
        error.provider_id = "Invalid email-id entered"
    }
    else {
        error.provider_id = "\u2713"
    }
    if(provider.provider_pwd === "") {
        error.provider_pwd = "Password field cant be empty"
    } 
    else if (provider.provider_pwd.length < 3) {
        error.provider_pwd = "Password needs atleast 4 charectors"
    }
   else {
    error.provider_pwd = "\u2713"
}

    
    return error;
}

export default ServiceregisterValidation;