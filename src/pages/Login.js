import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validation from './LoginValidation';
import './login.css';
import { FaHome } from "react-icons/fa";
import axios from 'axios';
function Login() {  
    const [values, setValues] = useState({
        username: '',
        password: ''
    }) 
    const navigate = useNavigate();
    const [errors, setErrors] = useState({

    })
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value] }))
    }
    const handleSubmit =(event) => {
        event.preventDefault();
        setErrors(validation(values));
        if(errors.username===""&& errors.password===""){
            axios.post('http://localhost:8081/login', values )
            .then(res => {
                if(res.data === "Success"){
                    navigate('/')
                }
                else{
                    alert("No Record Existed");
                }
            })
            .catch(err => console.log(err));
        }
    }

    return (
        <body>
        <div>
        <img src="/background.png" class="background"/>
        <div className="home-txt-box">
        <Link to="/"><FaHome className="home-btn"/></Link>
        </div>
            <center><img src="/logo.png" className="logologin"/></center>
        </div>
        <div>
            <div class="login">
            <p class="log">Log In</p>
        
               <center><form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="username">Username</label>
                        <input type="text" placeholder='Enter Your Username'  name="username" id="Uname" class="kolom" onChange={handleInput} /> 
                        <span>{errors.username  && <span className='text-danger'>{errors.username}</span>}</span>
                    </div>
                    <br></br>
                    <div className='mb-3'>
                        <label htmlFor="password">Password</label>
                        <input type="Password" placeholder='Enter Your Password' name="password" id="Pass" class="kolom" onChange={handleInput}/>
                        <span>{errors.password  && <span className='text-danger'>{errors.password}</span>}</span>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <button type="submit" className='btn'>Login</button>
                    <p className="ftr">Or if you don't have an account</p>
                    <Link to= '/signup' class="create">Create an Account</Link>
                </form></center>
            </div>
        </div>
        <footer></footer>
        </body>
    );
}

export default Login