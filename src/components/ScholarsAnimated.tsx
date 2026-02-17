import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

// Scholar data interface
interface Scholar {
  id: number;
  name: string;
  title: string;
  endorsement: string;
  image: string;
}

const base = import.meta.env.BASE_URL;
// Scholar data
const scholarsData: Scholar[] = [
  {
    id: 1,
    name: 'Dr. Mufti Yousuf Sultan',
    title: 'Islamic Finance Scholar, Malaysia',
    endorsement: "My heartfelt prayers for the team behind Kahf. I know them personally and trust their Islamic competence. May this project protect millions of Muslims from harmful content online.",
    image: `${base}mufti-yousuf.jpg`
  },
  {
    id: 2,
    name: 'Dr. Muhammad Salah',
    title: 'Esteemed Scholar, USA',
    endorsement: "Kahf is a service made by Muslims that protects you and your family from online threats like scams, harmful content, and more.",
    image: `${base}drSalah.jpg`
  },
  {
    id: 3,
    name: 'Shykh Ahmadullah',
    title: 'Chairman, As-Sunnah Foundation',
    endorsement: "Kahf blocks haram & inappropriate websites so we can avoid sin and protect our children insha'Allah.",
    image: `${base}ahmadullah.jpg`
  }
];

// Scholar Card Component
const ScholarCard = React.memo(({ scholar, isActive, isNext, isPrev, isMobile }: {
  scholar: Scholar;
  isActive: boolean;
  isNext?: boolean;
  isPrev?: boolean;
  isMobile: boolean;
}) => {
  const cardVariants = {
    active: {
      scale: 1,
      x: 0,
      opacity: 1,
      zIndex: 10,
      transition: isMobile
        ? { duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] as const }
        : { type: "spring" as const, stiffness: 300, damping: 30 }
    },
    next: {
      scale: 0.85,
      x: "-20%",
      opacity: 0.7,
      zIndex: 5,
      transition: isMobile
        ? { duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] as const }
        : { type: "spring" as const, stiffness: 300, damping: 30 }
    },
    prev: {
      scale: 0.85,
      x: "20%",
      opacity: 0.7,
      zIndex: 5,
      transition: isMobile
        ? { duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] as const }
        : { type: "spring" as const, stiffness: 300, damping: 30 }
    },
    hidden: {
      scale: 0.8,
      opacity: 0,
      zIndex: 1,
      transition: isMobile
        ? { duration: 0.2, ease: [0.25, 0.1, 0.25, 1.0] as const }
        : { type: "spring" as const, stiffness: 300, damping: 30 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      animate={isActive ? "active" : isNext ? "next" : isPrev ? "prev" : "hidden"}
      whileHover={!isMobile && isActive ? {
        scale: 1.02,
        transition: { type: "spring", stiffness: 400, damping: 25 }
      } : undefined}
      className={`absolute w-full h-full flex flex-col ${isActive ? 'cursor-default' : 'cursor-pointer'
        }`}
      onClick={() => {
        if (!isActive) {
          const event = new CustomEvent('goToScholar', { detail: scholar.id });
          window.dispatchEvent(event);
        }
      }}
      style={{ transform: 'translateZ(0)', willChange: 'transform, opacity' }}
    >
      <div className="relative bg-gradient-to-br from-white via-white to-[#f7f7fe] rounded-3xl p-6 shadow-2xl h-full flex flex-col overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-[#4848ff]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#4848ff]/10 to-transparent rounded-bl-3xl" />

        {/* Scholar Image */}
        <div className="flex justify-center mb-4 relative z-10">
          <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-[#4848ff]/20 shadow-lg">
            <img
              src={scholar.image}
              alt={scholar.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Scholar Name and Title */}
        <div className="text-center mb-4 relative z-10">
          <h3 className="font-bold text-[#222222] text-xl mb-1">{scholar.name}</h3>
          <p className="text-sm text-[#4848ff] font-medium">{scholar.title}</p>
        </div>

        {/* Quote Icon */}
        <div className="mb-3 relative z-10 flex justify-center">
          <svg
            className="w-10 h-10 text-[#4848ff]"
            fill="currentColor"
            viewBox="0 0 24 24"
            style={{ opacity: 0.15 }}
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Endorsement */}
        <div className="flex-grow flex items-center justify-center relative z-10">
          <p className="text-[#2d2d2d] lg:px-20 leading-relaxed text-base font-medium italic text-center">
            {scholar.endorsement}
          </p>
        </div>
      </div>
    </motion.div>
  );
});
ScholarCard.displayName = 'ScholarCard';

const ScholarsAnimated = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const mobile = typeof window !== 'undefined' && window.innerWidth < 1024;
    setIsMobile(mobile);
  }, []);

  // Auto-rotate scholars
  React.useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % scholarsData.length);
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Handle custom event for card clicks
  React.useEffect(() => {
    const handleGoToScholar = (event: Event) => {
      const customEvent = event as CustomEvent<number>;
      const scholarId = customEvent.detail;
      const index = scholarsData.findIndex(s => s.id === scholarId);
      if (index !== -1) {
        setCurrentIndex(index);
      }
    };

    window.addEventListener('goToScholar', handleGoToScholar);
    return () => window.removeEventListener('goToScholar', handleGoToScholar);
  }, []);

  const goToSlide = React.useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goToPrevious = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + scholarsData.length) % scholarsData.length);
  }, []);

  const goToNext = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % scholarsData.length);
  }, []);

  return (
    <div id="scholars" className="bg-gradient-to-br from-[#fafafa] via-[#f6f6fe] to-[#fefefe] py-8 lg:py-12 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            transition: { duration: 100, repeat: Infinity, ease: "linear" }
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#4848ff]/2 to-transparent rounded-full blur-3xl"
          style={{ contain: 'layout style paint' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Scholars Section Header */}
        <AnimatedSection animation="fadeUp" delay={0} duration={0.6} threshold={0.3}>
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-bold text-[#222222] mb-4"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                lineHeight: 'clamp(2.5rem, 5vw, 3.75rem)',
                letterSpacing: '-0.02em'
              }}
            >
              Endorsed by{' '}
              <span className="bg-gradient-to-r from-[#4848ff] to-[#6b6bff] bg-clip-text text-transparent">
                Islamic Scholars
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-[#4a4b4d] text-lg max-w-3xl mx-auto"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}
            >
              Trusted recommendations from respected Islamic scholars worldwide
            </motion.p>
          </div>
        </AnimatedSection>

        {/* Scholars Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[450px] md:h-[350px] mb-16">
            <div className="absolute inset-0 flex items-center justify-center">
              {scholarsData.map((scholar, index) => {
                const prevIndex = (currentIndex - 1 + scholarsData.length) % scholarsData.length;
                const nextIndex = (currentIndex + 1) % scholarsData.length;
                const isVisible = index === currentIndex || index === prevIndex || index === nextIndex;

                if (!isVisible) return null;

                return (
                  <ScholarCard
                    key={scholar.id}
                    scholar={scholar}
                    isActive={index === currentIndex}
                    isNext={index === nextIndex}
                    isPrev={index === prevIndex}
                    isMobile={isMobile}
                  />
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows - Mobile */}
          <div className="flex items-center justify-center gap-6 mb-8 lg:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToPrevious}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#4848ff] hover:bg-[#4848ff] hover:text-white transition-all duration-300 border-2 border-[#4848ff]/20"
              aria-label="Previous scholar"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToNext}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#4848ff] hover:bg-[#4848ff] hover:text-white transition-all duration-300 border-2 border-[#4848ff]/20"
              aria-label="Next scholar"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Desktop Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToPrevious}
            className="hidden lg:flex absolute -left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-[#4848ff] hover:bg-[#4848ff] hover:text-white transition-all duration-300 border-2 border-[#4848ff]/20"
            aria-label="Previous scholar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToNext}
            className="hidden lg:flex absolute -right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-[#4848ff] hover:bg-[#4848ff] hover:text-white transition-all duration-300 border-2 border-[#4848ff]/20"
            aria-label="Next scholar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          {/* Progress Indicators */}
          <div className="flex items-center justify-center gap-3">
            {scholarsData.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-500 ${index === currentIndex
                    ? 'bg-gradient-to-r from-[#4848ff] to-[#6b6bff] w-12'
                    : 'bg-gray-300 hover:bg-gray-400 w-2'
                  }`}
                aria-label={`Go to scholar ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarsAnimated;
