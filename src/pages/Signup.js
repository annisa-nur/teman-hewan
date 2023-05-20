import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import validation from './SignupValidation';
import './register.css';

function Signup() {
    const [values, setValues] = useState({
        name: '',
        username: '',
        email: '',
        address: '',
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
            <center><img src="/Logo.png" class="logo"/></center>
            <div>
                <img src="/rumput.png" class="rumput"/>
                <img src="/dogreal.png" class="dog"/>
                <img src="/catreal.png" class="cat"/>
            </div>
            <div>
                <div class="regis">
                <p class="reg">Registration</p>
                    <center><form action="" onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label htmlFor="name">Full Name</label>
                            <input type="text" placeholder='Enter Your Full Name' class="kolom" name ='name' onChange={handleInput}/>
                            <span>{errors.name  && <span className='text-danger'>{errors.name}</span>}</span>
                        </div>
                        <br></br>
                        <div className='mb-3'>
                            <label htmlFor="username">Username</label>
                            <input type="text" placeholder='Enter Your Username' class="kolom" name ='username' onChange={handleInput}/>
                            <span>{errors.username  && <span className='text-danger'>{errors.username}</span>}</span>
                        </div>
                        <br></br>
                        <div className='mb-3'>
                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder='Enter Your Email' class="kolom" name ='email'onChange={handleInput}/>
                            <span>{errors.email  && <span className='text-danger'>{errors.email}</span>}</span>
                        </div>
                        <br></br>
                        <div className='mb-3'>
                            <center><label htmlFor="date">Birth Date</label></center>
                            <input type="date" placeholder='Enter Your Birth Date' class="kolom" name ='date'onChange={handleInput}/>
                            <span>{errors.date  && <span className='text-danger'>{errors.date}</span>}</span>
                        </div>
                        <br></br>
                        <div className='mb-3'>
                            <label htmlFor="address">Address</label>
                            <input type="text" placeholder='Enter Your Address' class="kolom" name ='address'onChange={handleInput}/>
                            <span>{errors.address  && <span className='text-danger'>{errors.address}</span>}</span>
                        </div>
                        <br></br>
                        <div className='mb-3'>
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder='Enter Your Password' class="kolom" name ='password'onChange={handleInput}/>
                            <span>{errors.password  && <span className='text-danger'>{errors.password}</span>}</span>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Link to= '/home' className='btn btn-default border'>Register</Link>
                        <br></br>
                        <br></br>
                        <br></br>
                    </form></center>
                </div>
                <footer></footer>
            </div>
        </body>
    )
}

export default Signup