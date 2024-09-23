import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const HomePage = () => {

  const authValue = useContext(AuthContext);

  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(result => {
        console.log(result)
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className=''>
      <div className="flex py-5 justify-around items-center ">
        {
          user ?
            <>
              <p>{user.email}</p>
              <button onClick={handleLogOut} className='btn btn-success text-white'>Sign Out</button>
            </>
            :
            <Link to={"/login"}>{authValue.name}<button className='btn btn-primary'>Login</button></Link>
        }

      </div>
      
      <Link to={"/register"}><button className='btn btn-secondary'>Register</button></Link>
    </div>
  );
};

export default HomePage;