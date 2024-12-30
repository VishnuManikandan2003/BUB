import React from 'react';

const LeadershipSection: React.FC = () => {
  return (
    <section className="space-y-6">
      <h3 className="text-2xl font-medium text-gray-800 text-center">Our Leadership</h3>
      <div className="max-w-2xl mx-auto">
        <div className="group relative bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 animate-pulse-slow opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="aspect-[16/9] overflow-hidden">
            <img 
              src="/src/Founder images/2.jpeg" 
              alt="Dhinoj D.S." 
              className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>
          <div className="absolute bottom-0 w-full p-8 text-white">
            <div className="space-y-4">
              <h4 className="text-3xl font-bold mb-2 transform transition-all duration-500 group-hover:translate-y-[-5px] group-hover:text-blue-300">
                Dhinoj D.S.
              </h4>
              <p className="text-xl text-blue-200 mb-2 transform transition-all duration-500 delay-100 group-hover:translate-y-[-5px]">
                CEO & Founder (DSD)
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              <p className="text-sm text-gray-300 opacity-0 transform translate-y-4 transition-all duration-500 delay-200 group-hover:opacity-100 group-hover:translate-y-0">
                Visionary leader driving innovation in home services technology, 
                committed to revolutionizing the industry through cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;