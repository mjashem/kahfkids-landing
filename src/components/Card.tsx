import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface CardProps extends HTMLMotionProps<'div'> {
  variant?: 'default' | 'featured' | 'pricing' | 'feature';
  hoverable?: boolean;
  children: React.ReactNode;
  className?: string;
}

const variantStyles = {
  default: 'bg-white border border-gray-200',
  featured: 'bg-white border-2 border-kahf-accent shadow-cta',
  pricing: 'bg-white border border-gray-200',
  feature: 'bg-white border border-gray-100',
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', hoverable = true, className = '', children, ...props }, ref) => {
    const baseStyles = 'rounded-xl p-6 shadow-card';
    const hoverStyles = hoverable
      ? 'transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1'
      : '';

    return (
      <motion.div
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${className}`}
        whileHover={
          hoverable
            ? {
                y: -4,
                transition: { duration: 0.2 },
              }
            : undefined
        }
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
