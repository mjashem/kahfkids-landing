import React from 'react';
import { motion } from 'framer-motion';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  shimmer?: boolean;
  children: React.ReactNode;
}

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const variantStyles = {
  primary: 'bg-kahf-accent text-white shadow-cta hover:bg-kahf-accent-hover hover:shadow-cta-hover',
  secondary: 'bg-white text-kahf-accent border-2 border-kahf-accent hover:bg-kahf-accent-light',
  text: 'bg-transparent text-kahf-accent hover:bg-kahf-accent-light',
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      shimmer = false,
      className = '',
      disabled = false,
      children,
      onClick,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const baseStyles = 'rounded-xl font-semibold font-["Baloo_2:SemiBold",_sans-serif] cursor-pointer relative overflow-hidden transition-colors';
    const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';
    const widthStyles = fullWidth ? 'w-full' : '';

    return (
      <motion.button
        ref={ref}
        type={type}
        disabled={disabled}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabledStyles} ${widthStyles} ${className}`}
        onClick={onClick}
        style={{ transform: 'translateZ(0)', willChange: 'transform, box-shadow' }}
        animate={
          !disabled && variant === 'primary'
            ? {
                scale: [1, 1.02, 1],
                boxShadow: [
                  '0 4px 15px rgba(224, 92, 65, 0.3)',
                  '0 6px 20px rgba(224, 92, 65, 0.4)',
                  '0 4px 15px rgba(224, 92, 65, 0.3)',
                ],
              }
            : undefined
        }
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        whileHover={
          !disabled
            ? {
                scale: variant === 'primary' ? 1.05 : 1.02,
              }
            : undefined
        }
        whileTap={
          !disabled
            ? {
                scale: 0.97,
              }
            : undefined
        }
        {...props}
      >
        {shimmer && !disabled && variant === 'primary' && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
            animate={{
              x: ['-200%', '300%'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeOut',
              repeatDelay: 0.5,
            }}
          />
        )}
        <span className="relative z-10">{children}</span>
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
