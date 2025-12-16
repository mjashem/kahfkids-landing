import { AnimatedSection } from './AnimatedSection';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Review data interface
interface Review {
  id: number;
  username: string;
  review: string;
  rating: number;
  highlight?: string; // Green benefit tag
}

// Enhanced Star rating component with animation
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <motion.svg
          key={i}
          initial={{ scale: 0, rotate: -180 }}
          animate={{
            scale: 1,
            rotate: 0,
            transition: {
              delay: i * 0.1,
              type: "spring",
              stiffness: 200,
              damping: 15
            }
          }}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400 drop-shadow-sm' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </motion.svg>
      ))}
    </div>
  );
};

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

// Review Card Component with enhanced design
const ReviewCard = ({ review, isActive, isNext, isPrev }: {
  review: Review;
  isActive: boolean;
  isNext?: boolean;
  isPrev?: boolean;
}) => {
  const cardVariants = {
    active: {
      scale: 1,
      x: 0,
      opacity: 1,
      zIndex: 10,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    next: {
      scale: 0.85,
      x: "-20%",
      opacity: 0.7,
      zIndex: 5,
      filter: "blur(0.5px)",
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    prev: {
      scale: 0.85,
      x: "20%",
      opacity: 0.7,
      zIndex: 5,
      filter: "blur(0.5px)",
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    hidden: {
      scale: 0.8,
      opacity: 0,
      zIndex: 1,
      filter: "blur(2px)",
      transition: { type: "spring", stiffness: 300, damping: 30 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      animate={isActive ? "active" : isNext ? "next" : isPrev ? "prev" : "hidden"}
      whileHover={isActive ? {
        scale: 1.02,
        transition: { type: "spring", stiffness: 400, damping: 25 }
      } : {}}
      className={`absolute w-full h-full flex flex-col ${
        isActive ? 'cursor-default' : 'cursor-pointer'
      }`}
      onClick={() => {
        if (!isActive) {
          // Handle click to navigate to this card
          const event = new CustomEvent('goToReview', { detail: review.id });
          window.dispatchEvent(event);
        }
      }}
    >
      {/* Gradient background with subtle pattern */}
      <div className="relative bg-gradient-to-br from-white via-white to-[#fef7f7] rounded-3xl p-8 shadow-2xl h-full flex flex-col overflow-hidden group">
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-[#ff4848]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Decorative corner element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#ff4848]/10 to-transparent rounded-bl-3xl" />

        {/* Highlight Tag with enhanced design */}
        {review.highlight && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 relative z-10"
          >
            <span className="inline-flex items-center gap-1 bg-gradient-to-r from-[#ff4848] to-[#ff6b6b] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              {review.highlight}
            </span>
          </motion.div>
        )}

        {/* Quote icon */}
        <div className="mb-4 relative z-10">
          <motion.svg
            initial={{ opacity: 0, rotate: -5 }}
            animate={{ opacity: 0.1, rotate: 0 }}
            transition={{ delay: 0.3 }}
            className="w-12 h-12 text-[#ff4848]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </motion.svg>
        </div>

        {/* Star Rating with enhanced design */}
        <div className="mb-6 relative z-10">
          <StarRating rating={review.rating} />
        </div>

        {/* Review Text with better typography */}
        <div className="flex-grow mb-6 relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[#2d2d2d] leading-relaxed text-lg font-medium italic"
          >
            {review.review}
          </motion.p>
        </div>

        {/* Author section with enhanced design */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-between pt-6 border-t border-[#ff4848]/10"
          >
            <div>
              <p className="font-bold text-[#222222] text-lg">{review.username}</p>
              <p className="text-sm text-[#ff4848] font-medium">Verified Parent</p>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="w-10 h-10 bg-gradient-to-br from-[#ff4848] to-[#ff6b6b] rounded-full flex items-center justify-center"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </motion.div>
          </motion.div>
        </div>

        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            boxShadow: "0 0 40px rgba(255, 72, 72, 0.15)"
          }}
        />
      </div>
    </motion.div>
  );
};

const ReviewsAnimated = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

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
    const handleGoToReview = (event: CustomEvent) => {
      const reviewId = event.detail;
      const index = reviewsData.findIndex(r => r.id === reviewId);
      if (index !== -1) {
        setCurrentIndex(index);
      }
    };

    window.addEventListener('goToReview', handleGoToReview as EventListener);
    return () => window.removeEventListener('goToReview', handleGoToReview as EventListener);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  
  return (
    <div className="relative bg-gradient-to-br from-[#fef6f6] via-[#fef2f2] to-[#fefefe] py-16 lg:py-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            transition: { duration: 60, repeat: Infinity, ease: "linear" }
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#ff4848]/5 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            transition: { duration: 80, repeat: Infinity, ease: "linear" }
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-[#ff4848]/5 to-transparent rounded-full blur-3xl"
        />
      </div>

      {/* Header */}
      <AnimatedSection animation="fadeUp" delay={0} duration={0.6} threshold={0.3}>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-bold text-[#222222] mb-8 text-center"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  lineHeight: 'clamp(2.5rem, 5vw, 3.75rem)',
                  letterSpacing: '-0.02em'
                }}>
              What Parents Are{" "}
              <span className="bg-gradient-to-r from-[#ff4848] to-[#ff6b6b] bg-clip-text text-transparent">
                Saying
              </span>
            </h2>
          </motion.div>

          <p className="text-[#4a4b4d] mb-12 text-lg max-w-3xl mx-auto"
             style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}>
            Join thousands of Muslim parents who trust Kahf Kids for safe, educational, and faith-based content
          </p>

          {/* Overall Rating */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full shadow-lg mb-16"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.svg
                  key={i}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                  className="w-6 h-6 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </motion.svg>
              ))}
            </div>
            <div>
              <span className="text-2xl font-bold text-gray-900">4.9</span>
              <span className="text-gray-500">/5</span>
            </div>
            <span className="text-gray-600 font-medium">Excellent</span>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Carousel Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Carousel Viewport */}
        <div className="relative h-[500px] md:h-[450px] mb-16">
          <div className="absolute inset-0 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {reviewsData.map((review, index) => {
                const prevIndex = (currentIndex - 1 + reviewsData.length) % reviewsData.length;
                const nextIndex = (currentIndex + 1) % reviewsData.length;

                return (
                  <ReviewCard
                    key={review.id}
                    review={review}
                    isActive={index === currentIndex}
                    isNext={index === nextIndex}
                    isPrev={index === prevIndex}
                  />
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex items-center justify-center gap-3">
          {reviewsData.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-[#ff4848] to-[#ff6b6b] w-12'
                  : 'bg-gray-300 hover:bg-gray-400 w-2'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsAnimated;