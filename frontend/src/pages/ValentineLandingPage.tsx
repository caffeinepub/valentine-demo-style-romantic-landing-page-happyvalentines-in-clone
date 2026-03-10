import { useState } from 'react';
import FloatingHearts from '../components/valentine/FloatingHearts';
import MessageRevealFlow from '../components/valentine/MessageRevealFlow';

export default function ValentineLandingPage() {
  const [step, setStep] = useState<'intro' | 'letter' | 'messages' | 'photos' | 'final' | 'proposal'>('intro');

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 dark:from-rose-950 dark:via-pink-950 dark:to-red-950">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-10 dark:opacity-5"
        style={{
          backgroundImage: 'url(/assets/generated/valentine-bg.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Floating hearts decoration */}
      <FloatingHearts />
      
      {/* Main content */}
      <main className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8">
        <MessageRevealFlow step={step} onStepChange={setStep} />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 border-t border-rose-200/50 bg-white/30 py-6 backdrop-blur-sm dark:border-rose-800/50 dark:bg-black/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-rose-800 dark:text-rose-200">
            © {new Date().getFullYear()} • Built with{' '}
            <span className="inline-block animate-pulse text-red-500">❤️</span> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'valentine-app')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-rose-600 transition-colors hover:text-rose-700 dark:text-rose-400 dark:hover:text-rose-300"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
