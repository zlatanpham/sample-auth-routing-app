import React, { useContext } from 'react';
import { Location, Link } from '@reach/router';
import LoginContext from '@/loginContext';

export default function Header() {
  const { logout } = useContext(LoginContext);
  return (
    <Location>
      {({ location: { pathname } }) => (
        <div className="bg-black px-5 py-4 flex items-center justify-between">
          <div
            css={`
              a {
                ${tw`mr-2 text-white text-sm hover:text-pink`};
                text-decoration: none;
                &.active {
                  ${tw`text-pink`}
                }
              }
            `}
          >
            <Link to="/" className={pathname === '/' ? 'active' : ''}>
              Home
            </Link>
            <Link to="/users" className={pathname === '/users' ? 'active' : ''}>
              Users
            </Link>
          </div>
          <button className="bg-pink text-black px-5 py-2" onClick={logout}>
            Log out
          </button>
        </div>
      )}
    </Location>
  );
}
