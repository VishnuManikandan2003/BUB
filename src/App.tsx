import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import FloatingBubbles from './components/FloatingBubbles';
import CompanyDetails from './components/CompanyDetails';
import AnimatedText from './components/AnimatedText';
import CookingEffects from './components/CookingEffects';
import Logo from './components/Logo';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative">
      <div className="min-h-screen relative overflow-hidden bg-[#0a0b2e]">
        <FloatingBubbles />
        <CookingEffects />
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <Logo />
          <AnimatedText 
            text="BUB is on the way"
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200 text-6xl font-light mb-4 tracking-wider" 
          />
          <AnimatedText 
            text="Stay Tuned !!"
            className="text-white text-xl mb-12 tracking-widest"
          />
          <button 
            onClick={scrollToContent}
            className="absolute bottom-8 animate-bounce text-white hover:text-blue-400 transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
      <CompanyDetails />
    </div>
  );
};

export default App;