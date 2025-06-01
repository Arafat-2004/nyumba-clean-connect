
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Professional Cleaning
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
              {" "}Made Simple
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Connect with trusted cleaning professionals in your area. Book reliable home, office, 
            and event cleaning services with just a few clicks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book"
              className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Book Cleaning Service
            </Link>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏠</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Home Cleaning</h3>
            <p className="text-gray-600">Regular house cleaning, deep cleaning, and move-in/out services</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏢</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Office Cleaning</h3>
            <p className="text-gray-600">Professional commercial cleaning for offices and workspaces</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎉</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Event Cleanup</h3>
            <p className="text-gray-600">Pre and post-event cleaning services for any occasion</p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-blue-600" />
      </div>
    </section>
  );
};

export default Hero;
