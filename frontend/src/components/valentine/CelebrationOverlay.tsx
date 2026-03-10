export default function CelebrationOverlay() {
  // Generate random positions for flowers and hearts
  const flowers = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 2}s`,
    duration: `${3 + Math.random() * 2}s`,
  }));

  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 2}s`,
    duration: `${3 + Math.random() * 2}s`,
  }));

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      {/* Falling flowers from top */}
      {flowers.map((flower) => (
        <div
          key={`flower-${flower.id}`}
          className="absolute -top-12 text-4xl animate-fall-down"
          style={{
            left: flower.left,
            animationDelay: flower.delay,
            animationDuration: flower.duration,
          }}
        >
          🌸
        </div>
      ))}

      {/* Rising hearts from bottom */}
      {hearts.map((heart) => (
        <div
          key={`heart-${heart.id}`}
          className="absolute -bottom-12 text-4xl animate-rise-up"
          style={{
            left: heart.left,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
}
