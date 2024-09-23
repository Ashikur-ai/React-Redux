import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      This is homepage.
      <Link to={"/login"}>Login</Link>

      <div className="">
        <Link to={"/email-login"}>
          <button className='bg'>Email Login</button>
        </Link>

        <Link to={"/register"}>
          <button className=''>Email Register</button>
        </Link>

      </div>
    </div>
  );
};

export default HomePage;