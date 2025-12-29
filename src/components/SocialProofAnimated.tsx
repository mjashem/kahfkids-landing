import { AnimatedSection } from './AnimatedSection';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

// Statistics data interface
interface StatItem {
  id: number;
  value: string;
  label: string;
  icon: string;
}

// Review data interface
interface Review {
  id: number;
  username: string;
  review: string;
  rating: number;
  highlight?: string;
}

// Statistics data - moved outside component to prevent recreation
const statisticsData: StatItem[] = [
  {
    id: 1,
    value: "230,000+",
    label: "Families",
    icon: `<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
    </svg>`,
  },
  {
    id: 2,
    value: "100%",
    label: "Safe Content",
    icon: `<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
    </svg>`,
  },
  {
    id: 3,
    value: "21,000+",
    label: "Videos",
    icon: `<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
    </svg>`,
  },
  {
    id: 4,
    value: "100%",
    label: "Ad-Free",
    icon: `<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
    </svg>`,
  }
];

// Review data - moved outside component to prevent recreation
const reviewsData: Review[] = [
  {
    id: 1,
    username: 'Sihinta Sharifa',
    review: "I highly recommend Kahf Kids for any Muslim parent looking to introduce their children to Islam in a way they'll enjoy and remember. It's a blend of education and entertainment that brings Islamic values to life. Alhamdulillah.",
    rating: 5,
    highlight: "Highly Recommended"
  },
  {
    id: 2,
    username: 'Jisan Chowdhury',
    review: "That's Awesome. 🥰🥰. I use it for my little brothers & sisters. They are really happy to use it. 🥰 & they are also gaining Knowledge from here.🥰🥰",
    rating: 5,
    highlight: "Kids Love It"
  },
  {
    id: 3,
    username: 'Kim Dipty (Anya)',
    review: "best app for my little sister. she reads in class 1 at madrasa and this is the perfect source for her. now I can be carefree with her using this app",
    rating: 5,
    highlight: "Perfect for Learning"
  },
  {
    id: 4,
    username: 'Shohan',
    review: "Currently, it is very difficult to keep children away from mobile phones, so now an app that is somewhat regulated is a very good initiative.",
    rating: 5,
    highlight: "Safe Screen Time"
  },
  {
    id: 5,
    username: 'Elias Pramanik',
    review: "Kahf Kids is a safe, fun app offering halal, educational content for Muslim children. With strong parental controls and a kid-friendly design, it's a great choice for faith-based learning and entertainment.",
    rating: 5,
    highlight: "Safe & Educational"
  }
];

// Helper to detect device performance
const usePerformanceDetection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);

  useEffect(() => {
    const mobile = typeof window !== 'undefined' && window.innerWidth < 1024;
    const lowEnd = typeof window !== 'undefined' &&
      (navigator.hardwareConcurrency || 4) < 4;

    setIsMobile(mobile);
    setIsLowEndDevice(lowEnd);
  }, []);

  return { isMobile, isLowEndDevice };
};

// Star rating component - memoized to prevent unnecessary re-renders
const StarRating = React.memo(({ rating, size = "normal" }: { rating: number; size?: "small" | "normal" | "large" }) => {
  const sizeClasses = {
    small: "w-4 h-4",
    normal: "w-5 h-5",
    large: "w-6 h-6"
  };

  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`${sizeClasses[size]} ${i < rating ? 'text-yellow-400 drop-shadow-sm' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
});
StarRating.displayName = 'StarRating';

// Stat Card Component
const StatCard = React.memo(({ stat, index }: { stat: StatItem; index: number }) => {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-5 shadow-md hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff4848]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon */}
      <div className="flex justify-center mb-3 relative z-10">
        <div
          className="w-8 h-8 sm:w-10 sm:h-10 text-[#ff4848] group-hover:scale-110 transition-transform duration-300"
          dangerouslySetInnerHTML={{ __html: stat.icon }}
        />
      </div>

      {/* Value */}
      <div className="text-center relative z-10">
        <h3
          className="font-bold text-[#222222] mb-1"
          style={{
            fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
            lineHeight: '1.2',
            letterSpacing: '-0.01em'
          }}
        >
          {stat.value}
        </h3>
        <p className="text-[#4a4b4d] font-medium text-xs sm:text-sm">
          {stat.label}
        </p>
      </div>

      {/* Decorative corner element */}
      <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-[#ff4848]/10 to-transparent rounded-bl-xl" />
    </div>
  );
});
StatCard.displayName = 'StatCard';

// Review Card Component - memoized with optimized animations
const ReviewCard = React.memo(({ review, isActive, isNext, isPrev, isMobile }: {
  review: Review;
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
      // Remove blur filter on mobile - use opacity only for better performance
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
          const event = new CustomEvent('goToReview', { detail: review.id });
          window.dispatchEvent(event);
        }
      }}
      style={{ transform: 'translateZ(0)', willChange: 'transform, opacity' }}
    >
      <div className="relative bg-gradient-to-br from-white via-white to-[#fef7f7] rounded-3xl p-5 shadow-2xl h-full flex flex-col overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-[#ff4848]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#ff4848]/10 to-transparent rounded-bl-3xl" />

        {review.highlight && (
          <div className="mb-4 relative z-10">
            <span className="inline-flex items-center gap-1 bg-gradient-to-r from-[#ff4848] to-[#ff6b6b] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              {review.highlight}
            </span>
          </div>
        )}

        <div className="mb-3 relative z-10">
          <svg
            className="w-10 h-10 text-[#ff4848]"
            fill="currentColor"
            viewBox="0 0 24 24"
            style={{ opacity: 0.1 }}
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        <div className="mb-3 relative z-10">
          <StarRating rating={review.rating} />
        </div>

        <div className="flex-grow mb-2 relative z-10">
          <p className="text-[#2d2d2d] leading-relaxed text-base font-medium italic">
            {review.review}
          </p>
        </div>

        <div className="relative z-10">
          <div className="flex items-center justify-between pt-2 border-t border-[#ff4848]/10">
            <div>
              <p className="font-bold text-[#222222] text-lg">{review.username}</p>
              <p className="text-sm text-[#ff4848] font-medium">Verified Parent</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-[#ff4848] to-[#ff6b6b] rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});
ReviewCard.displayName = 'ReviewCard';

const SocialProofAnimated = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { isMobile, isLowEndDevice } = usePerformanceDetection();

  // Auto-rotate reviews continuously
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Handle custom event for card clicks
  useEffect(() => {
    const handleGoToReview = (event: Event) => {
      const customEvent = event as CustomEvent<number>;
      const reviewId = customEvent.detail;
      const index = reviewsData.findIndex(r => r.id === reviewId);
      if (index !== -1) {
        setCurrentIndex(index);
      }
    };

    window.addEventListener('goToReview', handleGoToReview);
    return () => window.removeEventListener('goToReview', handleGoToReview);
  }, []);

  // Memoize navigation handlers to prevent recreation
  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviewsData.length) % reviewsData.length);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
  }, []);

  return (
    <div id="social-proof" className="bg-gradient-to-br from-[#fafafa] via-[#fef6f6] to-[#fefefe] py-16 lg:py-24 relative overflow-hidden">
      {/* Decorative background elements - optimized for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Only show 1 background on mobile, 3 on desktop */}
        {isMobile || isLowEndDevice ? (
          <motion.div
            animate={{
              rotate: [0, 360],
              transition: { duration: 100, repeat: Infinity, ease: "linear" }
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#ff4848]/2 to-transparent rounded-full blur-3xl"
            style={{ contain: 'layout style paint' }}
          />
        ) : (
          <>
            <motion.div
              animate={{
                rotate: [0, 360],
                transition: { duration: 50, repeat: Infinity, ease: "linear" }
              }}
              className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-[#ff4848]/3 to-transparent rounded-full blur-3xl"
              style={{ contain: 'layout style paint' }}
            />
            <motion.div
              animate={{
                rotate: [360, 0],
                transition: { duration: 60, repeat: Infinity, ease: "linear" }
              }}
              className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tl from-[#ff4848]/3 to-transparent rounded-full blur-3xl"
              style={{ contain: 'layout style paint' }}
            />
            <motion.div
              animate={{
                rotate: [0, 360],
                transition: { duration: 70, repeat: Infinity, ease: "linear" }
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#ff4848]/2 to-transparent rounded-full blur-3xl"
              style={{ contain: 'layout style paint' }}
            />
          </>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Header */}
        <AnimatedSection animation="fadeUp" delay={0} duration={0.6} threshold={0.3}>
          <div className="text-center mb-12 lg:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-bold text-[#222222] mb-6"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                lineHeight: 'clamp(3rem, 6vw, 4rem)',
                letterSpacing: '-0.02em'
              }}
            >
              Why Parents{" "}
              <span className="bg-gradient-to-r from-[#ff4848] to-[#ff6b6b] bg-clip-text text-transparent">
                Trust Kahf Kids
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-[#4a4b4d] text-lg max-w-4xl mx-auto"
              style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)' }}
            >
              Join thousands of Muslim families who{'\''}ve made the smart choice for safe, educational, and faith-based digital content
            </motion.p>
          </div>
        </AnimatedSection>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {statisticsData.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>

        {/* Rating Badge - Prominent Display */}
        <AnimatedSection animation="fadeUp" delay={0.5} duration={0.6} threshold={0.3}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
            className="max-w-md mx-auto mb-16"
          >
            <div className="bg-white rounded-2xl p-6 shadow-xl text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff4848]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#ff4848]/10 to-transparent rounded-bl-2xl" />

              <div className="relative z-10">
                <div className="flex justify-center mb-3">
                  <StarRating rating={5} size="normal" />
                </div>

                <div className="mb-3">
                  <span
                    className="font-bold text-[#222222] block"
                    style={{
                      fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                      lineHeight: '1.2'
                    }}
                  >
                    4.9★
                  </span>
                </div>

                <p className="text-[#4a4b4d] font-medium mb-3 text-base">
                  Rated by <span className="text-[#ff4848] font-bold">10,000+</span> Parents
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ff4848] to-[#ff6b6b] text-white px-5 py-2.5 rounded-full text-xs font-semibold shadow-md"
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Trusted Choice for Families
                </motion.div>
              </div>

              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: "0 0 30px rgba(255, 72, 72, 0.12)"
                }}
              />
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Testimonials Section Header */}
        <AnimatedSection animation="fadeUp" delay={0.7} duration={0.6} threshold={0.3}>
          <div className="text-center mb-12">
            <motion.h3
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
              Hear From Our{" "}
              <span className="bg-gradient-to-r from-[#ff4848] to-[#ff6b6b] bg-clip-text text-transparent">
                Happy Parents
              </span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-[#4a4b4d] text-lg max-w-3xl mx-auto"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}
            >
              Real experiences from families who trust us with their children{'\''}s digital journey
            </motion.p>
          </div>
        </AnimatedSection>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[400px] md:h-[350px] mb-16">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Only render visible cards (active, next, prev) for better performance */}
              {reviewsData.map((review, index) => {
                const prevIndex = (currentIndex - 1 + reviewsData.length) % reviewsData.length;
                const nextIndex = (currentIndex + 1) % reviewsData.length;
                const isVisible = index === currentIndex || index === prevIndex || index === nextIndex;

                if (!isVisible) return null;

                return (
                  <ReviewCard
                    key={review.id}
                    review={review}
                    isActive={index === currentIndex}
                    isNext={index === nextIndex}
                    isPrev={index === prevIndex}
                    isMobile={isMobile}
                  />
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows - Positioned between cards and progress indicators on mobile */}
          <div className="flex items-center justify-center gap-6 mb-8 lg:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToPrevious}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#ff4848] hover:bg-[#ff4848] hover:text-white transition-all duration-300 border-2 border-[#ff4848]/20"
              aria-label="Previous review"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToNext}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#ff4848] hover:bg-[#ff4848] hover:text-white transition-all duration-300 border-2 border-[#ff4848]/20"
              aria-label="Next review"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Desktop Navigation Arrows - Outside the carousel container */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToPrevious}
            className="hidden lg:flex absolute -left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-[#ff4848] hover:bg-[#ff4848] hover:text-white transition-all duration-300 border-2 border-[#ff4848]/20"
            aria-label="Previous review"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToNext}
            className="hidden lg:flex absolute -right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-[#ff4848] hover:bg-[#ff4848] hover:text-white transition-all duration-300 border-2 border-[#ff4848]/20"
            aria-label="Next review"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          {/* Progress Indicators */}
          <div className="flex items-center justify-center gap-3">
            {reviewsData.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-500 ${index === currentIndex
                    ? 'bg-gradient-to-r from-[#ff4848] to-[#ff6b6b] w-12'
                    : 'bg-gray-300 hover:bg-gray-400 w-2'
                  }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofAnimated;
