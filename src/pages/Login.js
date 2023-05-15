import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import validation from './LoginValidation';
import './login.css';

function Login() {  
    const [values, setValues] = useState({
        username: '',
        password: ''
    })
    const [errors, setErrors] = useState({

    })
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value] }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
    }

    return (
        <body>
            <center><img src="images/Logo.png" class="logo"/></center>
            <div>
                <img src="images/dog.png" class="dog"/>
                <img src="/cat.png" class="cat"/>
            </div>
        <div>
            <div class="login">
            <p class="log">Log In</p>
        
               <center><form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="username">Username</label>
                        <input type="text" placeholder='Enter Your Username'  name="Uname" id="Uname" class="kolom" onChange={handleInput} /> 
                        <span>{errors.username  && <span className='text-danger'>{errors.username}</span>}</span>
                    </div>
                    <br></br>
                    <div className='mb-3'>
                        <label htmlFor="password">Password</label>
                        <input type="Password" placeholder='Enter Your Password' name="Pass" id="Pass" class="kolom" onChange={handleInput}/>
                        <span>{errors.password  && <span className='text-danger'>{errors.password}</span>}</span>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <center><a href="" type='submit' class="btn">Log In</a></center>
                    <p class="footer">Or if you don't have an account</p>
                    <Link to= '/signup' class="create">Create an Account</Link>
                </form></center>
            </div>
        </div>
        <footer></footer>
        </body>
    );
}

export default Login