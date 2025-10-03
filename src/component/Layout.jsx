// component/Layout.jsx
import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-light relative overflow-hidden">
      {/* Background texture image */}
      <div className="absolute inset-0 opacity-30 mix-blend-soft-light z-0">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/ff0b970c10dacde9cef9c8d91123ba4cd453cfab?width=2880"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
