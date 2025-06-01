
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🧽</span>
            </div>
            <span className="text-xl font-bold text-gray-900">NyumbaClean</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/book" className="text-gray-700 hover:text-blue-600 transition-colors">
              Book Service
            </Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 transition-colors">
              My Bookings
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Sign In
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link to="/book" className="text-gray-700 hover:text-blue-600 transition-colors">
                Book Service
              </Link>
              <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 transition-colors">
                My Bookings
              </Link>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-left">
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
