import React, { useRef,useState } from 'react';
import { auth } from '../auth/firebase';
import { useAuth } from '../contexts/AuthContext';




const SingUp = () => {

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const {signup} = useAuth();
  const [error,setError] = useState('');
  const [loading,setLoading] = useState(false);

  async function handleSubmit(e){
    e.preventDefault();

    if(passwordRef.current.value !== passwordConfirmRef.current.value){
      return setError('passwords do not match')
    }

    try{
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    }
    catch{
      setError('Failed to create an account')
    }
    setLoading(false);
  }

  return (
    <div className='signup'>
      <h2>Sign Up</h2>
      {error && alert(error)}
      <form name='registration_form' onSubmit={handleSubmit}>
        SingUp
        <input type="email" ref={emailRef} name="email"  placeholder="Email"/>
        <input type="password"  ref={passwordRef} name="password"/>
        <input type="password" ref={passwordConfirmRef} name="confirmPassword"/>
        <button disabled={loading} type='submit'>Sign up</button>
      </form>
    </div>
  )
}



// const validatePassword = () => {
//   let isValid = true;
//   if (password !== '' && confirmPassword !== '')
//   {
//     if (password !== confirmPassword) 
//     {
//       isValid = false;
//       setError('Passwords does not match')
//     }
//   }
//   return isValid;
// }


// const register = e => {
//   e.preventDefault();
//   setError('');
//   if(validatePassword()) 
//   {
//     // Create a new user with email and password using firebase
//       createUserWithEmailAndPassword(auth, email, password)
//       .then((res) => {
//           console.log(res.user)
//         })
//       .catch(err => setError(err.message))
//   }
//   setEmail('');
//   setPassword('');
//   setConfirmPassword('');
// }

export default SingUp;