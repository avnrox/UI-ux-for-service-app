//this is for registration not log in.
function ServiceprovidersignupValidation(serviceprovider) {
    let error = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    //const providerPwd_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    
    if(serviceprovider.providerId === "") {
        error.providerId = "Cant be empty"
    } 
    else if (!email_pattern.test(serviceprovider.providerId)) {
        error.providerId = "Invalid email-id entered"
    }
    else {
        error.providerId = "\u2713"
    }
    if(serviceprovider.providerPwd === "") {
        error.providerPwd = "Password field cant be empty"
    } 
    else if (serviceprovider.providerPwd.length < 3) {
        error.providerPwd = "Password needs atleast 4 charectors"
    }
   else {
    error.providerPwd = "\u2713"
    }
    if (serviceprovider.description === ""){
        error.description = "Cant be empty"
    }
    else if (serviceprovider.description.length < 20){
        error.description = "Too Short Description."
    }
    else {
        error.description = "\u2713"
    }


//hard code an exapmle for already exisists 
    
    return error;
}

export default ServiceprovidersignupValidation;