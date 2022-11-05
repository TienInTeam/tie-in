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
      sessionStorage.setItem('authToken', response._tokenResponse.refreshToken);
      sessionStorage.setItem('userEmail', email);
      sessionStorage.setItem('userId', uid);
    }
  })
    .catch((error) => {
      const errorMessage = error.message;
    });
}

//method to login the user on the app and store authentication info.
export const login = async (email, password) => {
  const authentication = getAuth(app);
  try {
    const userCredential = await signInWithEmailAndPassword(authentication, email, password)
    const user = authentication.currentUser;
    if (user !== null) {
      const email = user.email;
      const uid = user.uid;
      sessionStorage.setItem('authToken', userCredential._tokenResponse.refreshToken);
      sessionStorage.setItem('userEmail', email);
      sessionStorage.setItem('userId', uid);
    }
  } catch (e) {
    console.error('error: ' + e)
  }
}
