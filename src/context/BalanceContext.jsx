import { Link, NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { BalanceContext } from '../context/BalanceContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { balance } = useContext(BalanceContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const activeClass = ({ isActive }) => isActive ? 'text-blue-500 font-bold' : 'text-gray-700';

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-xl font-semibold text-blue-600">
        BillPay
      </Link>

      {/* Center Navigation */}
      <div className="space-x-4 hidden md:flex">
        <NavLink to="/bills" className={activeClass}>Bills</NavLink>
        <NavLink to="/profile" className={activeClass}>My Profile</NavLink>
      </div>

      {/* Right Side */}
      <div className="relative">
        {!user ? (
          <div className="space-x-3">
            <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
            <Link to="/register" className="text-gray-700 hover:text-blue-600">Register</Link>
          </div>
        ) : (
          <div className="relative">
            <img
              src={user.photoURL}
              alt="profile"
              className="w-9 h-9 rounded-full cursor-pointer border border-gray-300"
              onClick={toggleDropdown}
            />

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
                <div className="p-3 text-sm border-b">
                  Balance: <span className="font-semibold">{balance} BDT</span>
                </div>
                <button
                  onClick={() => {
                    logout();
                    setDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
