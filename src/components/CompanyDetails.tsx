import React from 'react';
import VisionSection from './sections/VisionSection';
import LeadershipSection from './sections/LeadershipSection';
import ContactSection from './sections/ContactSection';

const CompanyDetails: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-light mb-12 text-center text-gray-900">About Buddot</h2>
        
        <div className="space-y-16">
          <section className="space-y-4">
            <h3 className="text-2xl font-medium text-gray-800">Who We Are</h3>
            <p className="text-gray-600 leading-relaxed">
              Buddot Technologies Pvt Ltd is a pioneering service-based technology solutions company. 
              Our name combines "Bud" - representing friendship and approachability, with "dot" - 
              signifying digital connectivity, perfectly embodying our mission to connect customers 
              with trusted professionals in a modern, tech-savvy manner.
            </p>
          </section>

          <VisionSection />
          <LeadershipSection />

          <section className="text-center space-y-4">
            <p className="text-xl font-medium text-blue-600">"Empowering Homes, Enabling Lives"</p>
            <p className="text-lg text-gray-600">Your Home, Our Mission</p>
          </section>

          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;