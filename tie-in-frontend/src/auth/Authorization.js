import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export function signUp(email, password) {
  const authentication = getAuth();
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


export function login(email, password) {
  const authentication = getAuth();
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
