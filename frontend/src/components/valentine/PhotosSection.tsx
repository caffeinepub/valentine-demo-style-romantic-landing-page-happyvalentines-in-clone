interface PhotosSectionProps {
  onContinue: () => void;
}

export default function PhotosSection({ onContinue }: PhotosSectionProps) {
  const photos = [
    { src: '/assets/Snapchat-374559267.jpg', alt: 'Beautiful moment together' },
    { src: '/assets/Snapchat-2137308291.jpg', alt: 'Lovely smile' },
    { src: '/assets/Snapchat-1819211754.jpg', alt: 'Sweet memory' },
  ];

  return (
    <div className="w-full max-w-4xl animate-fade-in">
      <div className="rounded-3xl bg-white/80 p-8 shadow-2xl backdrop-blur-sm dark:bg-rose-950/80 md:p-12">
        <h2 className="mb-8 text-center font-serif text-4xl font-bold text-rose-800 dark:text-rose-100 md:text-5xl">
          face of my heart
        </h2>
        
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="animate-scale-in overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover"
                style={{ aspectRatio: '3/4' }}
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onContinue}
            className="rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95 dark:from-rose-600 dark:to-pink-600"
          >
            Continue ❤️
          </button>
        </div>
      </div>
    </div>
  );
}
