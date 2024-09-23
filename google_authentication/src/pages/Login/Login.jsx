import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';


const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const loggedUser = result.user;
        setUser(loggedUser);

      })
      .catch(error => {
        console.log('error', error.message);
      })
  }


  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        console.log('Signout successfully')
      })
      .catch(err => {
        console.log(err);
      })
  }
  console.log('logged in user: ', user);
  return (
    <div>
      
       
      {
        !user ? <button onClick={handleGoogleSignIn}>Google Sign In</button> : <button onClick={handleSignOut}>SignOut</button>
         }
    
      <p>UserName: {user?.displayName}</p>
      <p>UserEmail: { user?.email }</p>

    </div>
  );
};

export default Login;