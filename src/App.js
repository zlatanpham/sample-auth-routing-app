import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';
import { Router } from '@reach/router';
import LoginContext from '@/loginContext';
import Login from '@/pages/Login';
import Home from '@/pages/Home';
import Users from '@/pages/Users';
import PrivateRoute from '@/components/PrivateRoute';

function App() {
  const [isLogin, setIsLogin] = useState(!!localStorage.getItem('token'));

  const login = token => {
    localStorage.setItem('token', token);
    setIsLogin(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsLogin(false);
  };
  return (
    <LoginContext.Provider value={{ isLogin, login, logout }}>
      <Router>
        <Login path="/login" />
        <PrivateRoute path="/" Component={Home} />
        <PrivateRoute path="/users" Component={Users} />
      </Router>
    </LoginContext.Provider>
  );
}

export default hot(App);
