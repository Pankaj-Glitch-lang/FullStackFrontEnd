import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Signup = () => {

    const[name,setName]=useState('');
    const[gender,setGender]=useState('');
    const[role,setRole]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[error,setError]=useState('');
    const navigate=useNavigate();

const handleSubmit=async(e)=>{
    e.preventDefault();
    const obj={
        name:name,
        gender:gender,
        role:role,
        email:email,
        password:password
    }
    console.log(obj);
    try{
       const response= await axios.post('http://localhost:8080/auth/register',obj);
       
      localStorage.setItem('token',response.token);
       navigate('/');

    }
    catch(err){

        setError(err.response.data.message)
    }
}

    return (
        <>

        <div className='signuppage'> 
            <h2 style={{textAlign:'center', marginTop:'20px'}}>Sign Up Form</h2>
            <form className="signUp" onSubmit={handleSubmit}>

                <input type="text" placeholder='Enter Your name' value={name} onChange={(e)=>setName(e.target.value)} />
                <select id='gender' value={gender} onChange={(e)=>setGender(e.target.value)}>
                    <option value="">Specify Your Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <select name="Role" id="roles" value={role} onChange={(e)=>setRole(e.target.value)}>
                    <option value="">Select Your Role</option>
                    <option value="buyer">Buyer</option>
                    <option value="seller">Buyer</option>
                    <option value="admin">Buyer</option>


                </select>
                <input type="email" placeholder='Enter your email :'  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder='Enter Your Password ' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <input type="submit" value={'Sign Up'} />
            </form>
            </div>
        </>
    )
}

export default Signup