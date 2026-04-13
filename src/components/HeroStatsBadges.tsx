import React from 'react';
import { motion } from 'framer-motion';

interface StatBadgeProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

const StatBadge: React.FC<StatBadgeProps> = ({ value, label, icon }) => {
  return (
    <motion.div
      className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 shadow-sm hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4, scale: 1.02 }}
    >
      {/* Icon (if provided) */}
      {icon && (
        <span className="text-[#E05C41] flex-shrink-0">
          {icon}
        </span>
      )}

      {/* Value */}
      {value && (
        <span className="text-[#E05C41] font-bold text-base sm:text-lg font-['Baloo_2:SemiBold',_sans-serif]">
          {value}
        </span>
      )}

      {/* Label */}
      <span className="text-[#4a4b4d] text-xs sm:text-sm font-medium font-['Baloo_2:Medium',_sans-serif]">
        {label}
      </span>
    </motion.div>
  );
};

interface HeroStatsBadgesProps {
  className?: string;
}

const HeroStatsBadges: React.FC<HeroStatsBadgesProps> = ({ className = '' }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4
      }
    }
  };

  return (
    <motion.div
      className={`flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-6 ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <StatBadge
        value="25k+"
        label="Mufties Approved Videos"
        icon={
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        }
      />

      <StatBadge
        value="100%"
        label="Ads Free"
        icon={
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        }
      />

      <StatBadge
        label="Teacher Approved"
        icon={
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
          </svg>
        }
      />
    </motion.div>
  );
};

export default HeroStatsBadges;
