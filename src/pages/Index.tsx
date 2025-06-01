
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🧽</span>
                </div>
                <span className="text-xl font-bold">NyumbaClean</span>
              </div>
              <p className="text-gray-400 mb-4">
                Making professional cleaning services accessible to everyone in urban areas. 
                Book trusted cleaners for your home, office, or event with ease.
              </p>
              <div className="flex space-x-4">
                <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">📱</span>
                <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">📧</span>
                <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">🌐</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Home Cleaning</li>
                <li>Office Cleaning</li>
                <li>Event Cleanup</li>
                <li>Deep Cleaning</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>support@nyumbaclean.com</li>
                <li>+1 (555) NYUMBA-1</li>
                <li>24/7 Customer Support</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 NyumbaClean. All rights reserved. Making urban cleaning simple.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
