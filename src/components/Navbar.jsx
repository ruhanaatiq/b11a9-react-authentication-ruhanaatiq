import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/banklogo.png';
import { AuthContext } from '../providers/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navLinks = (
    <>
      <NavLink to="/bills" className="btn btn-ghost text-base">Bills</NavLink>
      <NavLink to="/profile" className="btn btn-ghost text-base">My Profile</NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      {/* Left - Logo */}
      <div className="flex-1 flex items-center gap-2">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10 w-10" />
        </Link>
        <Link to="/" className="btn btn-ghost text-xl normal-case">Elite Finance Corporation</Link>
      </div>

      {/* Center - Navigation Links */}
      <div className="hidden md:flex gap-2">
        {navLinks}
      </div>

      {/* Right - Avatar / Auth Buttons */}
      <div className="flex-none gap-2">
        {!user ? (
          <>
            <Link to="/login" className="btn btn-sm">Login</Link>
            <Link to="/register" className="btn btn-sm btn-outline">Register</Link>
          </>
        ) : (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="User Avatar" src={user.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
              <li>
                <a className="text-base font-medium">{user.displayName}</a>
              </li>
              <li>
                <button onClick={logOut} className="text-red-500">Log Out</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
