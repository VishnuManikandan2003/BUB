import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const ContactSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="text-center space-y-8">
      <h3 className="text-2xl font-medium text-gray-800">Get in Touch</h3>
      
      <div className="flex justify-center space-x-6">
        <a href="mailto:contact@buddot.tech" 
           className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
          <Mail size={20} />
          <span>sales@buddot.tech</span>
        </a>
        <a href="https://www.linkedin.com/company/buddot/" 
           className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
           target="_blank" 
           rel="noopener noreferrer">
          <Linkedin size={20} />
          <span>LinkedIn</span>
        </a>
      </div>

      <div className="mt-12 flex justify-center">
        <button 
          onClick={scrollToTop}
          className="transform transition-all duration-500 hover:scale-110 focus:outline-none"
        >
          <img 
            src="/src/logo/WHite.png" 
            alt="BUB Logo" 
            className="w-32 h-auto filter brightness-0 hover:brightness-75 transition-all duration-300"
          />
        </button>
      </div>
    </section>
  );
};

export default ContactSection;