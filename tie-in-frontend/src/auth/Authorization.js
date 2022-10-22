import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import app from './firebase';

//method to register user on the app and authenticate with firebase.
export function signUp(email, password) {
  const authentication = getAuth(app);
  createUserWithEmailAndPassword(authentication, email, password).then((response) => {
    const user = authentication.currentUser;
    if (user !== null) {
      const email = user.email;
      const uid = user.uid;
      sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
      sessionStorage.setItem('User Email:', email);
      sessionStorage.setItem('User ID:', uid);
    }
  })
    .catch((error) => {
      const errorMessage = error.message;
    });
}

//method to login the user on the app and store authentication info.
export function login(email, password) {
  const authentication = getAuth(app);
  signInWithEmailAndPassword(authentication, email, password)
    .then((response) => {
      const user = authentication.currentUser;
      if (user !== null) {
        const email = user.email;
        const uid = user.uid;
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
        sessionStorage.setItem('User Email:', email);
        sessionStorage.setItem('User ID:', uid);
      }
    })
    .catch((error) => {
      const errorMessage = error.message;
    });
}
