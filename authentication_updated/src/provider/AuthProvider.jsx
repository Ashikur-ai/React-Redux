import PropTypes from 'prop-types';
import React, { createContext } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const authValue = {name:   'John Doe', isLoggedIn: true};

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node
}

export default AuthProvider;