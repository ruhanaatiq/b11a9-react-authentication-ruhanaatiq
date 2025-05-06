import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || '');
  const [photo, setPhoto] = useState(user?.photoURL || '');
  const navigate = useNavigate();

  const handleUpdate = e => {
    e.preventDefault();

    updateProfile(user, {
      displayName: name,
      photoURL: photo
    })
      .then(() => {
        toast.success('Profile updated successfully!');
        navigate('/profile');
      })
      .catch(err => {
        toast.error(err.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleUpdate}
        className="bg-white shadow rounded p-6 w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center">Update Profile</h2>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Full Name"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          value={photo}
          onChange={e => setPhoto(e.target.value)}
          placeholder="Photo URL"
          className="input input-bordered w-full"
          required
        />
        <button className="btn btn-primary w-full">Update Information</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
