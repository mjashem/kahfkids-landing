import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

export interface SectionHeaderProps {
  title: string;
  description?: string;
  badge?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const alignStyles = {
  left: 'text-left',
  center: 'text-center mx-auto',
  right: 'text-right ml-auto',
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  badge,
  align = 'center',
  className = '',
}) => {
  return (
    <AnimatedSection animation="fadeUp" delay={0}>
      <div className={`max-w-content ${alignStyles[align]} ${className}`}>
        {/* Optional Badge */}
        {badge && (
          <motion.div
            className="inline-flex items-center gap-1.5 bg-kahf-accent-light border border-kahf-accent/20 rounded-lg px-3 py-1.5 mb-3"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            <span className="text-kahf-accent text-sm font-semibold font-['Baloo_2:SemiBold',_sans-serif]">
              {badge}
            </span>
          </motion.div>
        )}

        {/* Section Title */}
        <motion.h2
          className="font-['Baloo_2:SemiBold',_sans-serif] font-semibold text-kahf-dark text-3xl sm:text-4xl md:text-5xl lg:text-[40px] leading-tight tracking-tight mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>

        {/* Optional Description */}
        {description && (
          <motion.p
            className="font-['Baloo_2:Medium',_sans-serif] text-kahf-gray text-base sm:text-lg lg:text-xl mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {description}
          </motion.p>
        )}
      </div>
    </AnimatedSection>
  );
};

export default SectionHeader;
