import React, { useRef, useState } from 'react';
import { signUp } from '../auth/Authorization';

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }
    try {
      setError('');
      setLoading(true);
      console.log(emailRef.current.value, passwordRef.current.value);
      await signUp(emailRef.current.value, passwordRef.current.value);
    }
    catch {
      setError('Failed to create an account');
    }
    setLoading(false);
  }

  return (
    <div className='signup'>
      <h2>Sign Up</h2>
      {error && alert(error)}
      <form name='registration_form' onSubmit={handleSubmit}>
        SignUp
        <input type="email" ref={emailRef} name="email" placeholder="Email" />
        <input type="password" ref={passwordRef} name="password" />
        <input type="password" ref={passwordConfirmRef} name="confirmPassword" />
        <button disabled={loading} type='submit'>Sign up</button>
      </form>
    </div>
  )
}

export default SignUp;
