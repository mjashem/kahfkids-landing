import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface PhoneSliderProps {
  slides: string[];
  autoPlayInterval?: number;
  className?: string;
  showDotsInside?: boolean;
}

const PhoneSlider: React.FC<PhoneSliderProps> = ({
  slides,
  autoPlayInterval = 3000,
  className = '',
  showDotsInside = false,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [slides.length, autoPlayInterval]);

  return (
    <>
      {/* Slider Container */}
      <div className={`relative w-full h-full ${className}`}>
        <div className="relative w-full h-full overflow-hidden bg-transparent">
          {/* All slides stay mounted — no remount/network fetch on transition */}
          {slides.map((src, index) => (
            <motion.div
              key={src}
              animate={{
                opacity: index === currentSlide ? 1 : 0,
                scale: index === currentSlide ? 1 : 1.04,
              }}
              transition={{
                opacity: { duration: 0.5, ease: 'easeInOut' },
                scale: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
              }}
              className="absolute inset-0 w-full h-full"
              style={{ pointerEvents: index === currentSlide ? 'auto' : 'none' }}
            >
              <img
                src={src}
                alt={`App screenshot ${index + 1}`}
                className="w-full h-full object-contain"
                draggable={false}
              />
            </motion.div>
          ))}
        </div>

        {/* Navigation Dots - Inside (if enabled) */}
        {showDotsInside && (
          <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-20 px-3 py-1.5 rounded-full backdrop-blur-sm bg-black/20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${
                  index === currentSlide
                    ? 'w-6 bg-white'
                    : 'w-1.5 bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Navigation Dots - Outside (default) */}
      {!showDotsInside && (
        <div className="flex gap-2 justify-center mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'w-6 bg-[#E05C41]'
                  : 'w-1.5 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default PhoneSlider;
