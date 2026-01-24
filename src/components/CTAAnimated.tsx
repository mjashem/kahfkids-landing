import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

const CTAAnimated = () => {
  const ctaContent = {
    headline: "Join 270,000+ Muslim Parents Protecting Their Kids",
    subheadline: "Start your 7-day free trial — no credit card required. Give your child a safe, halal digital experience today.",
    features: ["270K+ families trust Kahf Kids", "Cancel anytime", "7-day free trial"],
    buttonText: "Start Free Trial Now"
  };

  return (
    <div className="bg-gradient-to-br from-[#E05C41] via-orange-500 to-orange-600 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-24 -left-24 w-48 h-48 bg-white rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-32 -right-32 w-64 h-64 bg-white rounded-full"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="fadeUp" delay={0} duration={0.4} threshold={0.3}>
          <div className="text-center">
            {/* Headline */}
            <motion.h2
              className="font-semibold text-white mb-4"
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.625rem)',
                lineHeight: '1.2'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {ctaContent.headline}
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              className="text-white/90 text-lg sm:text-xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {ctaContent.subheadline}
            </motion.p>

            {/* Features list */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {ctaContent.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-white/95"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {/* Primary CTA */}
              <motion.button
                className="bg-white text-[#E05C41] px-8 py-4 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  const pricingSection = document.getElementById('pricing');
                  if (pricingSection) {
                    pricingSection.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
              >
                {ctaContent.buttonText}
              </motion.button>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default CTAAnimated;
