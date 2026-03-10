import { useState } from 'react';

interface LoveLetterRevealProps {
  onOpen: () => void;
}

export default function LoveLetterReveal({ onOpen }: LoveLetterRevealProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 800);
  };

  return (
    <div className="flex flex-col items-center">
      <p className="mb-8 animate-fade-in text-center text-xl text-rose-700 dark:text-rose-300 md:text-2xl">
        Click the envelope to open it...
      </p>
      
      <button
        onClick={handleClick}
        disabled={isOpening}
        className={`group relative transition-all duration-500 hover:scale-110 active:scale-95 ${
          isOpening ? 'animate-bounce-out scale-0 opacity-0' : 'animate-fade-in'
        }`}
        style={{ animationDelay: '0.3s' }}
      >
        <div className="relative h-64 w-64 md:h-80 md:w-80">
          <img
            src="/assets/generated/love-letter.dim_1024x1024.png"
            alt="Love Letter"
            className="h-full w-full object-contain drop-shadow-2xl transition-all group-hover:drop-shadow-[0_20px_40px_rgba(244,63,94,0.4)]"
          />
          
          {/* Glow effect */}
          <div className="absolute inset-0 -z-10 animate-pulse rounded-full bg-rose-400/30 blur-3xl dark:bg-rose-600/30" />
        </div>
        
        <div className="mt-4 text-center">
          <span className="inline-block rounded-full bg-rose-500/20 px-4 py-2 text-sm font-medium text-rose-700 dark:text-rose-300">
            Tap to open 💌
          </span>
        </div>
      </button>
    </div>
  );
}
