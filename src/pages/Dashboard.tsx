
import Header from '@/components/Header';
import BookingsDashboard from '@/components/BookingsDashboard';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <BookingsDashboard />
      </div>
    </div>
  );
};

export default Dashboard;
