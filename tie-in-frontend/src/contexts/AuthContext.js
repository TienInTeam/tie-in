import React, { useContext, useState, useEffect } from 'react';
import auth from '../auth/firebase';

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {

    const[currentUser, setCurrentUser] = useState();
    const[loading, setLoading] = useState(true);

    function signup(email, password){
        auth.createUserWithEmailAndPassword(email, password);
        }

        useEffect(() => {
            const unsubsrcibe = auth.onAuthStateChanged(user => {
                setCurrentUser(user)
                setLoading(false)
            });
            return unsubsrcibe;
        }, []);
        
        

    const value = {
        currentUser,
        signup
    }

  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}
