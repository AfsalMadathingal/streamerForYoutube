import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center min-h-screen text-center bg-blue-600 text-white">
        <h1 className="text-5xl font-bold mb-4">Stream Your Videos to YouTube Effortlessly</h1>
        <p className="text-xl mb-6">Join our platform and take your streaming experience to the next level.</p>
        <a
          href="#features"
          className="px-6 py-3 bg-orange-500 text-white rounded-full shadow hover:bg-orange-600 transition duration-300"
        >
          Get Started
        </a>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Live Streaming</h3>
              <p>Stream live videos directly to your YouTube channel with ease.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Easy Setup</h3>
              <p>Quickly set up your streaming environment without any hassle.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Analytics Dashboard</h3>
              <p>Track your performance and grow your audience with our dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">What Our Users Say</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <blockquote className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-xl italic">“This app has revolutionized my streaming!”</p>
              <footer className="mt-4">— Jane Doe</footer>
            </blockquote>
            <blockquote className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-xl italic">“I love how easy it is to use!”</p>
              <footer className="mt-4">— John Smith</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-6">Join us today and enhance your streaming experience!</p>
          <a
            href="#"
            className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition duration-300"
          >
            Sign Up Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
