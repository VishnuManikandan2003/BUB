import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="transition-transform duration-300 hover:scale-110">
      <img 
        src="/src/logo/WHite.png" 
        alt="BUB Logo" 
        className="w-48 mb-8"
      />
    </div>
  );
};

export default Logo;