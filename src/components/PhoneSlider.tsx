import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  return (
    <>
      {/* Slider Container */}
      <div className={`relative w-full h-full ${className}`}>
        <div className="relative w-full h-full overflow-hidden bg-transparent">
          <AnimatePresence initial={false} custom={1} mode="wait">
            <motion.div
              key={currentSlide}
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
              }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={slides[currentSlide]}
                alt={`App screenshot ${currentSlide + 1}`}
                className="w-full h-full object-contain"
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>
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
