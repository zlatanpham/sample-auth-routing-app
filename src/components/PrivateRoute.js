import React, { useContext } from 'react';
import { Redirect } from '@reach/router';
import LoginContext from '@/loginContext';

export default function PrivateRoute({ Component, ...rest }) {
  const { isLogin } = useContext(LoginContext);
  if (!isLogin) {
    return <Redirect to="/login" noThrow />;
  }
  return <Component {...rest} />;
}
