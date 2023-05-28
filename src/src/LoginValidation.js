function validation (values) {
    let error = {}
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.username === "") {
        error.username = "Username Should Be Filled"
    }
    else{
        error.username = ""
    }

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