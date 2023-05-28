import React,{ useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validation from "./SignupValidation";
import axios from "axios";


function Signup() {
    const [values, setValues] = useState({
        name: '',
        username: '',
        email: '',
        bday: '',
        address: '',
        password: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleSubmit =(event) => {
        event.preventDefault();
        setErrors(validation(values));
        if(errors.name==="" && errors.username==="" && errors.email==="" && errors.bday==="" && errors.address==="" && errors.password===""){
            axios.post('http://localhost:8081/signup', values )
            .then(res => {
                navigate('/');
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
                <h2>Create an Account</h2>
                <form action='' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='name'>Full Name</label>
                        <input type='text' placeholder='Enter Your Full Name' name="name" onChange={handleInput}/>
                        {errors.name && <span className='text-danger'>{errors.name}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='username'>Username</label>
                        <input type='text' placeholder='Enter Your Username' name="username" onChange={handleInput}/>
                        {errors.username && <span className='text-danger'>{errors.username}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' placeholder='Enter Your Email' name="email" onChange={handleInput}/>
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='date'>Birthdate</label>
                        <input type='date' placeholder='Enter Your Birthdate' name="bday" onChange={handleInput}/>
                        {errors.bday && <span className='text-danger'>{errors.bday}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='address'>Address</label>
                        <input type='text' placeholder='Enter Your Address'name="address" onChange={handleInput}/>
                        {errors.address && <span className='text-danger'>{errors.address}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' placeholder='Enter Your Password' name="password" onChange={handleInput}/>
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type="submit" className='btn btn-success'>Signup</button>
                    <p>Already Has an Account?</p>
                    <Link to="/" className='btn btn-default border'>Log in</Link>
                </form>
            </div>
        </div>
    )
}
export default Signup