import React from 'react';
import Link from 'next/link'; 

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">
        Welcome to Dashboard App
      </h1>
      <p className="text-lg mb-8 text-gray-600">
        Manage your tasks, track analytics and stay organized with our Powerfull dashboard
      </p>
      <Link 
        href="/dashboard" 
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Go to Dashboard
      </Link>
    </div>
  );
};

export default Home;