import React, { useRef, useState } from 'react';
import { login } from '../auth/Authorization';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');

  async function handleLoginSubmit(e) {
    e.preventDefault();
    try {
      setError('');
      await login(emailRef.current.value, passwordRef.current.value);
    }
    catch {
      console.log("Failed");
      setError('Failed to Login');
    }
  }

  return (
    <div className='login'>
      <form name='registration_form' onSubmit={handleLoginSubmit}>
        <h2>Login</h2>
        {error && alert(error)}
        <input type="email" ref={emailRef} name="email" placeholder="Email" /><br />
        <input type="password" ref={passwordRef} name="password" />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Login;
