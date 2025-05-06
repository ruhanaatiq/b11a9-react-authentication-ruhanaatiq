import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow rounded p-6 w-full max-w-md text-center">
        <img
          src={user?.photoURL || 'https://i.postimg.cc/t7Qn68RM/avatar.jpg'}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h2 className="text-xl font-semibold">{user?.displayName || 'No Name'}</h2>
        <p className="text-gray-600">{user?.email}</p>
        <button
          className="btn btn-primary mt-6"
          onClick={() => navigate('/update-profile')}
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
