import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const isLoggedIn = true; // Replace with actual auth logic
  const user = {
    displayName: "John Doe",
    photoURL: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    balance: 10000
  };

  const navLinks = (
    <>
      <NavLink to="/bills" className="btn btn-ghost text-base">Bills</NavLink>
      <NavLink to="/profile" className="btn btn-ghost text-base">My Profile</NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      {/* Left - Logo */}
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">Elite Finance Corporation</Link>
      </div>

      {/* Center - Links */}
      <div className="hidden md:flex gap-2">
        {navLinks}
      </div>

      {/* Right - Auth/Avatar */}
      <div className="flex-none gap-2">
        {!isLoggedIn ? (
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
                <a className="text-sm text-gray-600">Balance: {user.balance} BDT</a>
              </li>
              <li><a className="text-red-500">Log Out</a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
