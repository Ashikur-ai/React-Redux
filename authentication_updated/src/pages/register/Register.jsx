import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../firebase/firebase.config';

const Register = () => {

  const [registerError, setRegisterError] = useState('');
  const [success,  setSuccess] = useState('');


  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setRegisterError('');
    setSuccess('');


    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result.user);
        setSuccess('User created successfully');

      })
      .catch(error => {
        console.log(error)
        setRegisterError(error.message);
    })
  }
  return (
    <div>
      <div className="mx-auto md:w-1/2 border rounded-lg shadow-2xl">
        <h2 className="text-3xl mb-8 font-semibold">
          Please Register
        </h2>
        <form action="" onSubmit={handleRegister}>
          <input className='mb-4 w-3/4 py-2 px-4 border rounded-lg' type="email" name='email' />
          <br />
          <input className='mb-4 w-3/4 py-2 px-4 border rounded-lg' type="password" name='password' />
          <br />
          <input className='btn btn-secondary mb-4 w-3/4' type="submit" value={"Register"} />
        </form>
        {
          registerError && <p className='text-red-600'>{ registerError }</p>
        }

        {
          success && <p className="text-green-600">{ success }</p>
        }
      </div>
    </div>
  );
};

export default Register;