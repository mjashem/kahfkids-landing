import React from 'react';
import { motion } from 'framer-motion';

interface HeroTrustBadgeProps {
  className?: string;
}

const HeroTrustBadge: React.FC<HeroTrustBadgeProps> = ({ className = '' }) => {
  return (
    <motion.div
      className={`inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#E05C41]/10 to-[#E05C41]/5 border border-[#E05C41]/20 rounded-xl px-4 sm:px-5 py-2.5 sm:py-3 ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{
        scale: 1.05,
        backgroundColor: 'rgba(224, 92, 65, 0.15)',
        transition: { duration: 0.2 }
      }}
    >
      {/* Shield Icon */}
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6 text-[#E05C41] flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
      </svg>

      {/* Text */}
      <span className="text-[#E05C41] text-sm sm:text-base lg:text-lg font-semibold font-['Baloo_2:SemiBold',_sans-serif]">
        Trusted By 270K+ Parents
      </span>
    </motion.div>
  );
};

export default HeroTrustBadge;
