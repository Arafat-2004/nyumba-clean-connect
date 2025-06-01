
import { useState } from 'react';
import { Calendar, MapPin, Clock, Phone, Mail } from 'lucide-react';

const BookingsDashboard = () => {
  // Mock data for demonstration
  const [bookings] = useState([
    {
      id: 1,
      serviceType: 'Home Cleaning - Regular',
      date: '2024-06-05',
      time: 'Morning (8AM - 12PM)',
      location: '123 Main St, Downtown',
      status: 'confirmed',
      cleaner: 'Sarah Johnson',
      contactName: 'John Doe',
      contactPhone: '+1 (555) 123-4567',
      contactEmail: 'john.doe@email.com'
    },
    {
      id: 2,
      serviceType: 'Office Cleaning',
      date: '2024-06-07',
      time: 'Evening (5PM - 8PM)',
      location: '456 Business Ave, Suite 200',
      status: 'pending',
      cleaner: 'TBD',
      contactName: 'Jane Smith',
      contactPhone: '+1 (555) 987-6543',
      contactEmail: 'jane.smith@email.com'
    },
    {
      id: 3,
      serviceType: 'Home Cleaning - Deep Clean',
      date: '2024-05-28',
      time: 'Afternoon (12PM - 5PM)',
      location: '789 Oak Street, Residential Area',
      status: 'completed',
      cleaner: 'Mike Wilson',
      contactName: 'Bob Johnson',
      contactPhone: '+1 (555) 456-7890',
      contactEmail: 'bob.johnson@email.com'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'completed':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return '✅';
      case 'pending':
        return '⏳';
      case 'completed':
        return '✨';
      default:
        return '📋';
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Bookings</h1>
        <p className="text-gray-600">Track and manage your cleaning service appointments</p>
      </div>

      <div className="grid gap-6">
        {bookings.map((booking) => (
          <div key={booking.id} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
              <div className="flex items-center space-x-3 mb-3 lg:mb-0">
                <div className="text-2xl">{getStatusIcon(booking.status)}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{booking.serviceType}</h3>
                  <p className="text-sm text-gray-500">Booking ID: #{booking.id.toString().padStart(4, '0')}</p>
                </div>
              </div>
              
              <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(booking.status)}`}>
                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>{new Date(booking.date).toLocaleDateString()}</span>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="w-4 h-4" />
                <span>{booking.time}</span>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{booking.location}</span>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Contact Information</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{booking.contactName}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-3 h-3" />
                      <span>{booking.contactPhone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-3 h-3" />
                      <span>{booking.contactEmail}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Assigned Cleaner</h4>
                  <div className="text-sm text-gray-600">
                    {booking.cleaner === 'TBD' ? (
                      <span className="text-yellow-600">To be assigned</span>
                    ) : (
                      <span className="text-green-600 font-medium">{booking.cleaner}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {booking.status === 'pending' && (
              <div className="border-t pt-4 mt-4">
                <div className="flex space-x-3">
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm">
                    Cancel Booking
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                    Modify Booking
                  </button>
                </div>
              </div>
            )}

            {booking.status === 'completed' && (
              <div className="border-t pt-4 mt-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                  Leave Review
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {bookings.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📋</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No bookings yet</h3>
          <p className="text-gray-600 mb-6">Book your first cleaning service to get started!</p>
          <button className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all">
            Book Now
          </button>
        </div>
      )}
    </div>
  );
};

export default BookingsDashboard;
