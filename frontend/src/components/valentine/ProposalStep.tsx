import { useState, useRef, useEffect } from 'react';
import CelebrationOverlay from './CelebrationOverlay';
import SuccessPopup from './SuccessPopup';

export default function ProposalStep() {
  const [showCelebration, setShowCelebration] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const moveNoButton = () => {
    if (!containerRef.current || !noButtonRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const button = noButtonRef.current.getBoundingClientRect();

    // Calculate safe boundaries (keep button within container)
    const maxX = container.width - button.width - 40;
    const maxY = container.height - button.height - 40;

    // Generate random position
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    setNoButtonPosition({ x: newX, y: newY });
  };

  const handleYes = () => {
    setShowCelebration(true);
    setTimeout(() => {
      setShowPopup(true);
    }, 500);
  };

  // Initialize No button position
  useEffect(() => {
    if (containerRef.current && noButtonRef.current) {
      const container = containerRef.current.getBoundingClientRect();
      const button = noButtonRef.current.getBoundingClientRect();
      const initialX = container.width - button.width - 40;
      const initialY = (container.height - button.height) / 2;
      setNoButtonPosition({ x: initialX, y: initialY });
    }
  }, []);

  return (
    <>
      {showCelebration && <CelebrationOverlay />}
      
      <div className="w-full max-w-3xl animate-scale-in">
        <div className="rounded-3xl bg-gradient-to-br from-rose-100 to-pink-100 p-8 shadow-2xl dark:from-rose-900 dark:to-pink-900 md:p-12">
          <div className="mb-12 text-center">
            <div className="mb-6 text-8xl">💝</div>
            <h2 className="mb-8 font-serif text-3xl font-bold leading-relaxed text-rose-800 dark:text-rose-100 md:text-4xl">
              will you be my valentine my rasmalai😍🫶
            </h2>
          </div>

          {/* Button container with relative positioning */}
          <div 
            ref={containerRef}
            className="relative mx-auto h-48 w-full max-w-2xl"
          >
            {/* Yes button - fixed position */}
            <div className="absolute left-8 top-1/2 -translate-y-1/2">
              <button
                onClick={handleYes}
                className="rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-12 py-6 text-xl font-bold text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl active:scale-95 dark:from-rose-600 dark:to-pink-600"
              >
                Yes 💖
              </button>
            </div>

            {/* No button - moves away on interaction */}
            <button
              ref={noButtonRef}
              onMouseEnter={moveNoButton}
              onPointerDown={moveNoButton}
              onTouchStart={moveNoButton}
              className="absolute rounded-full border-2 border-rose-500 bg-transparent px-12 py-6 text-xl font-bold text-rose-600 transition-all hover:border-rose-600 dark:border-rose-400 dark:text-rose-400"
              style={{
                left: `${noButtonPosition.x}px`,
                top: `${noButtonPosition.y}px`,
                transition: 'left 0.3s ease-out, top 0.3s ease-out',
              }}
            >
              No
            </button>
          </div>
        </div>
      </div>

      {showPopup && <SuccessPopup onClose={() => setShowPopup(false)} />}
    </>
  );
}
