interface FinalGreetingCardProps {
  onRestart: () => void;
  onContinue: () => void;
}

export default function FinalGreetingCard({ onRestart, onContinue }: FinalGreetingCardProps) {
  return (
    <div className="w-full max-w-3xl animate-scale-in">
      <div className="rounded-3xl bg-gradient-to-br from-rose-100 to-pink-100 p-8 shadow-2xl dark:from-rose-900 dark:to-pink-900 md:p-12">
        {/* Celebration animation */}
        <div className="mb-8 text-center">
          <div className="mb-6 animate-bounce text-8xl">💖</div>
          <h2 className="mb-4 font-serif text-4xl font-bold text-rose-800 dark:text-rose-100 md:text-5xl">
            You're My Everything
          </h2>
          <p className="mb-6 text-xl leading-relaxed text-rose-700 dark:text-rose-200 md:text-2xl">
            Thank you for being the most amazing person in my life. 
            Here's to many more beautiful moments together!
          </p>
        </div>

        {/* Decorative hearts */}
        <div className="mb-8 flex justify-center gap-4 text-4xl">
          <span className="animate-pulse" style={{ animationDelay: '0s' }}>❤️</span>
          <span className="animate-pulse" style={{ animationDelay: '0.2s' }}>💕</span>
          <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>💗</span>
          <span className="animate-pulse" style={{ animationDelay: '0.6s' }}>💖</span>
          <span className="animate-pulse" style={{ animationDelay: '0.8s' }}>❤️</span>
        </div>

        {/* Message */}
        <div className="mb-8 rounded-2xl bg-white/50 p-6 text-center backdrop-blur-sm dark:bg-black/20">
          <p className="font-serif text-lg italic text-rose-800 dark:text-rose-200 md:text-xl">
            "Love is not just looking at each other, it's looking in the same direction together."
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={onContinue}
            className="w-full rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95 dark:from-rose-600 dark:to-pink-600 sm:w-auto"
          >
            Continue 💝
          </button>
          <button
            onClick={onRestart}
            className="w-full rounded-full border-2 border-rose-500 bg-transparent px-8 py-4 font-semibold text-rose-600 transition-all hover:bg-rose-500 hover:text-white active:scale-95 dark:border-rose-400 dark:text-rose-400 dark:hover:bg-rose-400 dark:hover:text-white sm:w-auto"
          >
            Read Again 🔄
          </button>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Happy Valentine\'s Day',
                  text: 'Check out this beautiful Valentine\'s message!',
                  url: window.location.href,
                }).catch(() => {});
              }
            }}
            className="w-full rounded-full border-2 border-rose-500 bg-transparent px-8 py-4 font-semibold text-rose-600 transition-all hover:bg-rose-500 hover:text-white active:scale-95 dark:border-rose-400 dark:text-rose-400 dark:hover:bg-rose-400 dark:hover:text-white sm:w-auto"
          >
            Share Love 💌
          </button>
        </div>
      </div>
    </div>
  );
}
