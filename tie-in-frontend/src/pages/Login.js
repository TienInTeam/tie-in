import React, { useRef, useState } from 'react';
import {useNavigate} from "react-router-dom";
import { login } from '../auth/Authorization';

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');

  async function handleLoginSubmit(e) {
    e.preventDefault();
    try {
      setError('');
      await login(emailRef.current.value, passwordRef.current.value);
      sessionStorage.setItem("userLoggedIn", "true");
      navigate("/dashboard");
    }
    catch {
      setError('Failed to Login');
    }
  }

  return (
    <div className='login'>
      <form name='registration_form' onSubmit={handleLoginSubmit}>
        <h2>Login</h2>
        {error && alert(error)}
        <div className="username">
          <label htmlFor="user">Username</label>
          <input id="user" type="email" ref={emailRef} name="email" placeholder="Email" /><br />
        </div>
        <div className="password">
          <label htmlFor="pass">Password</label>
          <input id="pass" type="password" ref={passwordRef} name="password" />
          <p>Forget your password?</p>
        </div>
        <button type='submit' className='primary'>Submit</button>
      </form>
    </div>
  )
}

export default Login;
