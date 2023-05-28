import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import validation from "./LoginValidation";
import axios from "axios";


function Login(){
    const [values, setValues] = useState({
        username: '',
        password: ''
    })
    const navigate = useNavigate(); 
    const [errors, setErrors] = useState({})
    const handleSubmit =(event) => {
        event.preventDefault();
        setErrors(validation(values));
        if(errors.username===""&& errors.password===""){
            axios.post('http://localhost:8081/login', values )
            .then(res => {
                if(res.data === "Success"){
                    navigate('/home')
                }
                else{
                    alert("No Record Existed");
                }
            })
            .catch(err => console.log(err));
        }
    }
    const handleInput = (event) => {
        setValues (prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    return(
        <div>
            <div>
                <h2>Log In</h2>
                <form action='' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='username'>Username</label>
                        <input type='text' placeholder='Enter Your Username' name='username' onChange={handleInput}/>
                        {errors.username && <span className='text-danger'>{errors.username}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' placeholder='Enter Your Password' name='password' onChange={handleInput}/>
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-success'>Log In</button>
                    <p>Or If You Don't Have an Account</p>
                    <Link to="/signup" className='btn btn-default border'>Create an Account</Link>
                </form>
            </div>
        </div>
    );
}

export default Login