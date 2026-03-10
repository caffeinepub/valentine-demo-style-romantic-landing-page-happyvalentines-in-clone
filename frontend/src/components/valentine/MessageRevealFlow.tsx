import { useState } from 'react';
import LoveLetterReveal from './LoveLetterReveal';
import PhotosSection from './PhotosSection';
import FinalGreetingCard from './FinalGreetingCard';
import ProposalStep from './ProposalStep';

interface MessageRevealFlowProps {
  step: 'intro' | 'letter' | 'messages' | 'photos' | 'final' | 'proposal';
  onStepChange: (step: 'intro' | 'letter' | 'messages' | 'photos' | 'final' | 'proposal') => void;
}

const messages = [
  "Every moment with you feels like a beautiful dream...",
  "Your smile lights up my world in ways words can't describe.",
  "With you, every day is Valentine's Day.",
  "You make my heart skip a beat, today and always.",
];

export default function MessageRevealFlow({ step, onStepChange }: MessageRevealFlowProps) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const handleLetterOpen = () => {
    onStepChange('messages');
  };

  const handleNextMessage = () => {
    if (currentMessageIndex < messages.length - 1) {
      setCurrentMessageIndex(currentMessageIndex + 1);
    } else {
      onStepChange('photos');
    }
  };

  const handleRestart = () => {
    setCurrentMessageIndex(0);
    onStepChange('intro');
  };

  if (step === 'intro') {
    return (
      <div className="text-center">
        <h1 className="mb-8 animate-fade-in font-serif text-5xl font-bold text-rose-600 dark:text-rose-400 md:text-7xl">
          Happy Valentine's Day
        </h1>
        <p className="mb-12 animate-fade-in text-xl text-rose-700 dark:text-rose-300 md:text-2xl" style={{ animationDelay: '0.3s' }}>
          I have something special for you...
        </p>
        <button
          onClick={() => onStepChange('letter')}
          className="animate-fade-in rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95 dark:from-rose-600 dark:to-pink-600"
          style={{ animationDelay: '0.6s' }}
        >
          Open Your Letter 💌
        </button>
      </div>
    );
  }

  if (step === 'letter') {
    return <LoveLetterReveal onOpen={handleLetterOpen} />;
  }

  if (step === 'messages') {
    return (
      <div className="w-full max-w-2xl animate-fade-in">
        <div className="rounded-3xl bg-white/80 p-8 shadow-2xl backdrop-blur-sm dark:bg-rose-950/80 md:p-12">
          <div className="mb-8 text-center">
            <div className="mb-4 text-6xl">💝</div>
            <p className="animate-slide-up font-serif text-2xl leading-relaxed text-rose-900 dark:text-rose-100 md:text-3xl">
              {messages[currentMessageIndex]}
            </p>
          </div>
          
          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {messages.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === currentMessageIndex
                      ? 'w-8 bg-rose-500'
                      : 'bg-rose-300 dark:bg-rose-700'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={handleNextMessage}
              className="rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95 dark:from-rose-600 dark:to-pink-600"
            >
              {currentMessageIndex < messages.length - 1 ? 'Next →' : 'Continue ❤️'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'photos') {
    return <PhotosSection onContinue={() => onStepChange('final')} />;
  }

  if (step === 'final') {
    return <FinalGreetingCard onRestart={handleRestart} onContinue={() => onStepChange('proposal')} />;
  }

  return <ProposalStep />;
}
