import React, { useContext } from 'react';
import { Redirect } from '@reach/router';
import LoginContext from '@/loginContext';

export default function Login() {
  const { isLogin, login } = useContext(LoginContext);
  if (isLogin) {
    return <Redirect to="/" noThrow />;
  }
  return (
    <div className="bg-pink h-screen flex items-center justify-center">
      <button
        className="bg-black text-white px-5 py-2"
        onClick={() => login('token-string')}
      >
        Log in
      </button>
    </div>
  );
}
