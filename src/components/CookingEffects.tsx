import React from 'react';

const CookingEffects: React.FC = () => {
  const emojis = ['🏠', '🧹', '👨‍🍳', '🥗', '🫧','🔧','📺'];
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Steam effect */}
      <div className="absolute left-0 right-0 top-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={`steam-${i}`}
            className="absolute w-3 h-3 bg-white/10 rounded-full"
            style={{
              left: `${15 + (i * 15)}%`,
              animation: `steam 3s infinite ease-out ${i * 0.5}s`,
            }}
          />
        ))}
      </div>
      
      {/* Floating emojis */}
      <div className="absolute inset-0">
        {emojis.map((emoji, i) => (
          <div
            key={`emoji-${i}`}
            className="absolute text-3xl"
            style={{
              left: `${20 + (i * 15)}%`,
              animation: `floatEmoji 8s infinite linear ${i * 1.5}s`,
              top: '100%',
            }}
          >
            {emoji}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CookingEffects;