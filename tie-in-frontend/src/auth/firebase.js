import firebase from  "firebase/compat/app" ;
import "firebase/compat/auth";

const app= firebase.initializeApp({
    apiKey: "AIzaSyDZ3dscyzzhPEf0fcd4XYtAMpb5P3-GJCo",
  authDomain: "tie-in-b8590.firebaseapp.com",
  projectId: "tie-in-b8590",
  storageBucket: "tie-in-b8590.appspot.com",
  messagingSenderId: "822357931576",
  appId: "1:822357931576:web:2b0888ff48246f72a598cd"
})

export const auth = app.auth();
export default app;
