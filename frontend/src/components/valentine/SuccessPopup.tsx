import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface SuccessPopupProps {
  onClose: () => void;
}

export default function SuccessPopup({ onClose }: SuccessPopupProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-md border-rose-200 bg-gradient-to-br from-rose-50 to-pink-50 dark:border-rose-800 dark:from-rose-950 dark:to-pink-950">
        <DialogHeader>
          <div className="mb-4 text-center text-7xl">🥰</div>
          <DialogTitle className="text-center font-serif text-3xl text-rose-800 dark:text-rose-100">
            I knew you love me so much🥰🫶
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-6 flex justify-center">
          <button
            onClick={onClose}
            className="rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95 dark:from-rose-600 dark:to-pink-600"
          >
            Close 💖
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
