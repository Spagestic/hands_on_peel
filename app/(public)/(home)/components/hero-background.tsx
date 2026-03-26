"use client";

import Image from "next/image";
import * as motion from "motion/react-client";
import { useEffect, useState } from "react";

const backgroundImages = [
  "https://www.craftsonpeel.com/wp-content/uploads/2025/11/20251104_COP_43531-scaled.jpg",
  "https://www.craftsonpeel.com/wp-content/uploads/2025/11/20251104_COP_43364-1-scaled.jpg",
];

export default function HeroBackground() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-black/80 z-10" />
      <div
        className="absolute inset-0 z-10 opacity-20 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.8'/%3E%3C/svg%3E")`,
        }}
      />
      {backgroundImages.map((src, index) => (
        <motion.div
          key={src}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={src}
            alt={`Artisan workshop details ${index + 1}`}
            fill
            className="object-cover"
            preload={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
          />
        </motion.div>
      ))}
    </div>
  );
}
