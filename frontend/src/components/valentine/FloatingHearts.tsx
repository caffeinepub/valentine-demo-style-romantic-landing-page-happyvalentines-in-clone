export default function FloatingHearts() {
  // Generate multiple hearts with different animations
  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${8 + Math.random() * 4}s`,
    size: `${20 + Math.random() * 30}px`,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float-up opacity-20 dark:opacity-10"
          style={{
            left: heart.left,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
            fontSize: heart.size,
            bottom: '-50px',
          }}
        >
          ❤️
        </div>
      ))}
      
      {/* Decorative stickers */}
      <div className="absolute right-8 top-8 h-24 w-24 animate-float opacity-30 dark:opacity-20 md:h-32 md:w-32">
        <img 
          src="/assets/generated/hearts-stickers.dim_1024x1024.png" 
          alt="" 
          className="h-full w-full object-contain"
        />
      </div>
      <div className="absolute bottom-16 left-8 h-20 w-20 animate-float opacity-30 dark:opacity-20 md:h-28 md:w-28" style={{ animationDelay: '1s' }}>
        <img 
          src="/assets/generated/hearts-stickers.dim_1024x1024.png" 
          alt="" 
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
}
