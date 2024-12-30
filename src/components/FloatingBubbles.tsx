import React from 'react';

const FloatingBubbles: React.FC = () => {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-blue-600/30 to-purple-600/30 blur-xl animate-float"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 15 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          />
        ))}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0b2e_70%)]" />
      </div>
      <div className="absolute inset-0 bg-[#0a0b2e]/60 backdrop-blur-sm" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-[#0a0b2e] opacity-70" />
    </>
  );
};

export default FloatingBubbles;