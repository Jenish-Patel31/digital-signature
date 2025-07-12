import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <ul className="flex justify-center space-x-6 text-blue-600 font-semibold text-lg">
        <li>
          <Link
            to="/"
            className="hover:bg-blue-100 hover:border hover:border-blue-300 hover:rounded-md hover:px-3 hover:py-1 transition-all duration-200"
          >
            Generate Keys
          </Link>
        </li>
        <li>
          <Link
            to="/sender"
            className="hover:bg-blue-100 hover:border hover:border-blue-300 hover:rounded-md hover:px-3 hover:py-1 transition-all duration-200"
          >
            Sender
          </Link>
        </li>
        <li>
          <Link
            to="/receiver"
            className="hover:bg-blue-100 hover:border hover:border-blue-300 hover:rounded-md hover:px-3 hover:py-1 transition-all duration-200"
          >
            Receiver
          </Link>
        </li>
        <li>
          <Link
            to="/eve"
            className="hover:bg-blue-100 hover:border hover:border-blue-300 hover:rounded-md hover:px-3 hover:py-1 transition-all duration-200"
          >
            Attacker (Eve)
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
