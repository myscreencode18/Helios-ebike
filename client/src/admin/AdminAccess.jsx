// AdminAccess.jsx
import React, { useState } from 'react';

const AdminAccess = ({ children }) => {
  const [accessGranted, setAccessGranted] = useState(false);
  const [input, setInput] = useState('');
  const secret = 'heliosAdmin2025'; // Set your secret password here

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === secret) {
      setAccessGranted(true);
    } else {
      alert('Wrong password!');
    }
  };

  if (!accessGranted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow max-w-sm w-full"
        >
          <h2 className="mb-4 text-xl font-bold text-center">
            Enter Admin Password
          </h2>
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border p-2 rounded mb-4 w-full"
            placeholder="Password"
            autoFocus
          />
          <button
            type="submit"
            className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }

  return <>{children}</>;
};

export default AdminAccess;
