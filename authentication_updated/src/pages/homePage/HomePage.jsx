import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const HomePage = () => {

  const authValue = useContext(AuthContext);
  console.log(authValue);

  return (
    <div className=''>
      <Link to={"/login"}>{ authValue.name }<button className='btn btn-primary'>Login</button></Link>
      <Link to={"/register"}><button className='btn btn-secondary'>Register</button></Link>
    </div>
  );
};

export default HomePage;