import React from 'react';
import { Outlet } from 'react-router-dom';

const Mainlayout = () => {
  return (
    <div>
      <p>This is header</p>
      <Outlet></Outlet>
      <p>This is footer</p>
    </div>
  );
};

export default Mainlayout;