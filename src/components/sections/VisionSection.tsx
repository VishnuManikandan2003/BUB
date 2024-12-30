import React from 'react';
import { motion } from 'framer-motion';

const VisionSection: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-5xl mx-auto px-4">
        <motion.h3 
          className="text-4xl font-light text-center mb-16 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Vision & Mission
        </motion.h3>

        <div className="space-y-12">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="group"
          >
            <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl p-8 transition-all duration-500 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="flex items-start gap-6">
                <motion.div 
                  className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  🎯
                </motion.div>
                <div className="flex-1">
                  <h4 className="text-2xl font-medium text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">Vision</h4>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    "To become the leading platform for seamless access to reliable home services, 
                    leveraging cutting-edge technology to connect customers with trusted professionals."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="group"
          >
            <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl p-8 transition-all duration-500 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-l from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="flex items-start gap-6">
                <motion.div 
                  className="flex-shrink-0 w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-3xl"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ⚡
                </motion.div>
                <div className="flex-1">
                  <h4 className="text-2xl font-medium text-gray-800 mb-4 group-hover:text-purple-600 transition-colors">Mission</h4>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    "To revolutionize the home service industry by providing a one-stop solution for all 
                    household needs, ensuring quality, efficiency, and customer satisfaction through 
                    advanced technology and a dedicated team of experts."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;