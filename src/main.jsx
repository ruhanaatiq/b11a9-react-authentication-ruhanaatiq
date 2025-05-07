import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom'; 
import router from './routes/router.jsx';
import { UserContext } from './context/UserContext';
import AuthProvider from './providers/AuthProvider.jsx';

const Main = () => {
  const [balance, setBalance] = useState(10000); 

  return (
    <StrictMode>
      <AuthProvider>
        <UserContext.Provider value={{ balance, setBalance }}>
          <RouterProvider router={router} />
        </UserContext.Provider>
      </AuthProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<Main />);
