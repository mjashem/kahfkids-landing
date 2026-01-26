import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

// Review data interface
interface Review {
  id: number;
  username: string;
  review: string;
  rating: number;
  highlight?: string;
}

// Review data
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

// Star rating component
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

// Review Card Component
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

const ReviewsAnimated = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const mobile = typeof window !== 'undefined' && window.innerWidth < 1024;
    setIsMobile(mobile);
  }, []);

  // Auto-rotate reviews
  React.useEffect(() => {
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
  React.useEffect(() => {
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

  const goToSlide = React.useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goToPrevious = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviewsData.length) % reviewsData.length);
  }, []);

  const goToNext = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#fafafa] via-[#fef6f6] to-[#fefefe] py-16 lg:py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            transition: { duration: 100, repeat: Infinity, ease: "linear" }
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#ff4848]/2 to-transparent rounded-full blur-3xl"
          style={{ contain: 'layout style paint' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Testimonials Section Header */}
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
              Hear From Our{" "}
              <span className="bg-gradient-to-r from-[#ff4848] to-[#ff6b6b] bg-clip-text text-transparent">
                Happy Parents
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-[#4a4b4d] text-lg max-w-3xl mx-auto"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}
            >
              Real experiences from families who trust us with their children's digital journey
            </motion.p>
          </div>
        </AnimatedSection>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[400px] md:h-[350px] mb-16">
            <div className="absolute inset-0 flex items-center justify-center">
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

          {/* Navigation Arrows - Mobile */}
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

          {/* Desktop Navigation Arrows */}
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

export default ReviewsAnimated;
