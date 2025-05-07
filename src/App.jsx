import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-4xl">Bill Management Website</h1>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
