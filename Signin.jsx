import React, { useState } from 'react'
import './Signin.css'
// import { auth } from './firebase';
import { Link } from 'react-router-dom'

function Signin() {
const [email,setemail]=useState('');
const [password,setpassword]=useState('');
const signin=e=>{
     e.preventDefault();
     //firebase login
}
const register=e=>{
  e.preventDefault();

  //register
  // auth
  //     .createUserWithEmailAndPassword(email,password)
  //     .then((auth)=>{
  //       console.log(auth);
  //     })
  //     .catch(error=>alert(error.message))
}


  return (
    <div className='login'>
      <Link to='/'>
      <img className='login_logo'
       src='https://i0.wp.com/www.vectorico.com/wp-content/uploads/2018/11/amazon-icon.png?resize=300%2C300'>
       </img>
       </Link>
       <div className='login_container'>
       <h1>Sign-in</h1>
       <form>
        <h5>E-mail</h5>
        <input type='email' value={email} onChange={e=>setemail(e.target.value)}/>
        <h5>Password</h5>
        <input type='password' value={password} onChange={e=>setpassword(e.target.value)}></input>
        <button className='login_signin_btn' onClick={signin} type='submit'>Sign in</button>
       </form>
       <p>
       By signing in, you agree to Amazon's Conditions of Use and Privacy Notice.
       </p>
       <button className='login_register' onClick={register}>Create your account</button>
       </div>
    </div>
   
  )
}

export default Signin