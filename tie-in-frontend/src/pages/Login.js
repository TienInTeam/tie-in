import React from 'react';

const Login = () => {
  return (
    <div className='login'>
        Login
        <input type="email" name="email"  placeholder="Email"/>
        <input type="password" name="password"/>
        <button type='submit'>Submit</button>
    </div>
  )
}

export default Login;