import React from 'react';
import TimCap from '../assets/TimCap.png';
import TimCap1 from '../assets/TimCap1.png';
import { Link } from 'react-router-dom';

function Logo({ width = '70px', className = '' }) {
  return (
    <nav className="text-xs font-semibold uppercase text-gray-500">
      <Link to={'/'}>
        {/* Light logo */}
        <img
          className={`dark:hidden ${className}`}
          width={width}
          src={TimCap}
          alt="Logo"
        />
        {/* Dark logo */}
        <img
          className={`hidden dark:block ${className}`}
          width={width}
          src={TimCap1}
          alt="Logo"
        />
      </Link>
    </nav>
  );
}

export default Logo;
