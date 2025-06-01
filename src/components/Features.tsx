
const Features = () => {
  const features = [
    {
      icon: "⚡",
      title: "Quick Booking",
      description: "Book your cleaning service in under 2 minutes with our streamlined process"
    },
    {
      icon: "🛡️",
      title: "Trusted Cleaners",
      description: "All our cleaning professionals are background-checked and verified"
    },
    {
      icon: "📱",
      title: "Real-time Updates",
      description: "Track your booking status and get notifications about your service"
    },
    {
      icon: "💰",
      title: "Transparent Pricing",
      description: "No hidden fees. See exactly what you'll pay before you book"
    },
    {
      icon: "🕒",
      title: "Flexible Scheduling",
      description: "Choose the time that works best for you, including weekends"
    },
    {
      icon: "⭐",
      title: "Quality Guarantee",
      description: "Not satisfied? We'll make it right or refund your money"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose NyumbaClean?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We make professional cleaning services accessible, reliable, and hassle-free
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
