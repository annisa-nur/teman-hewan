function validation (values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.username === "") {
        error.username = "Username Should Be Filled"
    }
    else{
        error.username = ""
    }
/***********************************/
    if(values.email === "") {
        error.email = "Email Should Be Filled"
    }
    else if(!email_pattern.test(values.email)){
        error.email = "Email didn't match"
    }
    else{
        error.email = ""
    }
/***********************************/
    if(values.name === "") {
        error.name = "Full Name Should Be Filled"
    }
    else{
        error.name = ""
    }
/***********************************/
    if(values.bday === "") {
        error.bday = "Birth Date Should Be Filled"
    }
    else{
        error.bday = ""
    }
/***********************************/
    if(values.address === "") {
        error.address = "address Should Be Filled"
    }
    else{
        error.address = ""
    }
/***********************************/
    if(values.password === ""){
        error.password = "Password Should Be Filled"
    }
    else if(!password_pattern.test(values.password)){
        error.password = "Incorrect Password"
    }
    else{
        error.password = ""
    }
    return error;
}
export default validation; 