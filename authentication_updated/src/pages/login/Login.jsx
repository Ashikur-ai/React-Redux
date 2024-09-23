import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import auth from '../../firebase/firebase.config';

const Login = () => {
  const [loginError, setLoginError] = useState('');
  const [success, setSuccess] = useState('');
  const emailRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    setLoginError('');
    setSuccess('');

    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result.user);
        setSuccess('Login successful');
      }
        
        
    )
      .catch(error => {
        console.log(error.message);
        setLoginError(error.message);
    })
  }

  const handleResetPassword = () => {
    console.log('send reset email', emailRef.current.value)
    const email = emailRef.current.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('please check your email');
      })
      .catch(error => {
        console.log(error.message);
    })
  
  }


  return (
    <div>
      <div className="mx-auto md:w-1/2 border rounded-lg shadow-2xl">
        <h2 className="text-3xl mb-8 font-semibold">
          Please Login
        </h2>
        <form action="" onSubmit={handleLogin}>
          <input className='mb-4 w-3/4 py-2 px-4 border rounded-lg' type="email" name='email' ref={emailRef} />
          <br />
          <input className='mb-4 w-3/4 py-2 px-4 border rounded-lg' type="password" name='password' />
          <br />
          <input className='btn btn-secondary mb-4 w-3/4' type="submit" value={"Login"} />
        </form>
        {
          loginError && <p className='text-red-500'>{loginError}</p>
        }
        {
          success &&  <p className='text-green-500'>{success}</p>

        }

        <p onClick={handleResetPassword}>forget password?</p>
      </div>
    </div>
  );
};

export default Login;