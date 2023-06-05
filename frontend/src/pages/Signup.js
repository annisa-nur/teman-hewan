import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import validation from './SignupValidation';
import './register.css';
import axios from 'axios';

function Signup() {
    const [values, setValues] = useState({
        name: '',
        username: '',
        email: '',
        bday: '',
        address: '',
        phone: '',
        password: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({

    })
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value] }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        if(errors.name==="" && errors.username==="" && errors.email==="" && errors.bday==="" && errors.address==="" && errors.phone==="" && errors.password===""){
            axios.post('http://localhost:8081/signup', values)
            .then(res=>{
                navigate('/login');
            })
            .catch(err=>console.log(err));
        }
    }
    return (
        <body>
            <center><img src="/Logo.png" class="logo"/></center>
            {/* <div>
                <img src="/rumput.png" class="rumput"/>
                <img src="/dogreal.png" class="dog"/>
                <img src="/catreal.png" class="cat"/>
            </div> */}
            <div>
                <div class="regis">
                <p class="reg">Registration</p>
                    <center><form action="" onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label htmlFor="name">FullName</label>
                            <input type="text" placeholder='Enter Your Full Name' className="kolom" name ='name' onChange={handleInput}/>
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
                            <center><label htmlFor="date">BirthDate</label></center>
                            <input type="date" placeholder='Enter Your Birth Date' class="kol" name ='bday'onChange={handleInput}/>
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
                            <label htmlFor="phone">Phone</label>
                            <input type="text" placeholder='Enter Your Phone Number' class="kolom" name ='phone'onChange={handleInput}/>
                            <span>{errors.phone  && <span className='text-danger'>{errors.phone}</span>}</span>
                        </div>
                        <br></br>
                        <div className='mb-3'>
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder='Enter Your Password' class="kol" name ='password'onChange={handleInput}/>
                            <span>{errors.password  && <span className='text-danger'>{errors.password}</span>}</span>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <button type="submit" className='btn btn-success'>Register</button>
                        <br></br>
                        <p>Already Has an Account?</p>
                        <Link to="/login" className='create'>Log in</Link>
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