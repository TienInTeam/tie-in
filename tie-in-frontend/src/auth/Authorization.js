//sign-up and login related validations

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export function signUp(email, password)
    {
    const authentication = getAuth();
    createUserWithEmailAndPassword(authentication,email, password).then((response) => {
        const user = authentication.currentUser;
        if (user !== null) {
            const email = user.email;
            const uid = user.uid;
            console.log (email,  uid);
            sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
            sessionStorage.setItem('User Email:', email );
            sessionStorage.setItem('User ID:', uid );
            console.log(sessionStorage);
          }
      })
      .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
      });
    }


export function login(email, password)
{
  const authentication = getAuth();
  signInWithEmailAndPassword(authentication, email, password)
  .then((response) => {
    const user = authentication.currentUser;
    if (user !== null) {
        const email = user.email;
        const uid = user.uid;
        console.log ("Login successful");
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
        sessionStorage.setItem('User Email:', email );
        sessionStorage.setItem('User ID:', uid );
        console.log(sessionStorage);
      }
    })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
  });
}
