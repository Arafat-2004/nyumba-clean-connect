
import Header from '@/components/Header';
import BookingForm from '@/components/BookingForm';

const Book = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <BookingForm />
      </div>
    </div>
  );
};

export default Book;
