import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

interface HeroAnimatedProps {
  className?: string;
  iphoneMockup?: string;
}

const HeroAnimated: React.FC<HeroAnimatedProps> = ({ className = '', iphoneMockup }) => {
  const base = import.meta.env.BASE_URL;
  const mockupSrc = iphoneMockup || `${base}/iphone-mockup.png`;

  return (
    <section
      id="home"
      className={`relative bg-white min-h-[350px] sm:min-h-[400px] lg:min-h-[480px] ${className}`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fff5f5] to-white" />

      <div className="relative z-10 h-full py-3 sm:py-5 md:py-7 lg:py-9">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* LEFT: Content Area */}
            <div className="space-y-2 sm:space-y-3 lg:space-y-4 text-center lg:text-left order-1 lg:order-1">

              {/* Main Headline */}
              <AnimatedSection animation="slideRight" delay={0}>
                <div className="relative">
                  {/* Decorative balloons - positioned above "Safe Learning" */}
                  <div className="absolute -top-6 sm:-top-10 lg:-top-14 right-2 sm:right-6 lg:right-10 flex gap-1.5 sm:gap-2.5">
                    <motion.div
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 flex-shrink-0"
                      style={{ transform: 'translateZ(0)', willChange: 'transform' }}
                      animate={{
                        rotate: [13.97, 18.97, 13.97],
                        y: [0, -5, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      whileHover={{
                        rotate: 25,
                        scale: 1.2,
                        transition: { type: "spring", stiffness: 300, damping: 10 }
                      }}
                    >
                      <img
                        src={`${base}/decorative-element-hero-1.svg`}
                        alt=""
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                    <motion.div
                      className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 flex-shrink-0"
                      style={{ transform: 'translateZ(0)', willChange: 'transform' }}
                      animate={{
                        rotate: [344.472, 339.472, 344.472],
                        y: [0, 5, 0]
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.8
                      }}
                      whileHover={{
                        rotate: 320,
                        scale: 1.15,
                        transition: { type: "spring", stiffness: 300, damping: 10 }
                      }}
                    >
                      <img
                        src={`${base}/decorative-element-hero-2.svg`}
                        alt=""
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  </div>

                  <motion.h1
                    className="font-['Baloo_2:SemiBold',_sans-serif] font-semibold text-[#0D1013] text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-tight lg:leading-[1.15] tracking-tight"
                    whileHover={{ scale: 1.01 }}
                  >
                    Parental Control &{' '}
                    <motion.span
                      className="text-[#E05C41] inline-block relative"
                      whileHover={{
                        scale: 1.05,
                        textShadow: "0 0 20px rgba(224, 92, 65, 0.4)"
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      Safe Learning
                    </motion.span>
                    {' '}for Muslim Kids
                  </motion.h1>
                </div>
                <motion.p
                  className="font-['Baloo_2:Medium',_sans-serif] text-[#4a4b4d] text-sm sm:text-base lg:text-lg mt-2 lg:mt-4 max-w-xl mx-auto lg:mx-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Give your child ad-free, curated videos, Qur&apos;an learning tools, games, and complete parental controls — all in one app
                </motion.p>
              </AnimatedSection>

              {/* CTA Button */}
              <AnimatedSection animation="fadeUp" delay={0.3}>
                <div className="space-y-2">
                  <motion.button
                    className="bg-[#E05C41] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl shadow-lg font-['Baloo_2:SemiBold',_sans-serif] text-sm sm:text-base md:text-lg font-semibold cursor-pointer relative overflow-hidden"
                    style={{ transform: 'translateZ(0)', willChange: 'transform, box-shadow' }}
                    animate={{
                      scale: [1, 1.05, 1],
                      boxShadow: [
                        "0 4px 15px rgba(224, 92, 65, 0.3)",
                        "0 8px 30px rgba(224, 92, 65, 0.5)",
                        "0 4px 15px rgba(224, 92, 65, 0.3)"
                      ]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    whileHover={{
                      scale: 1.08,
                      backgroundColor: "#c94d32",
                      boxShadow: "0 15px 40px rgba(224, 92, 65, 0.6)",
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{
                      scale: 0.97,
                      backgroundColor: "#b5432b",
                      transition: { duration: 0.1 }
                    }}
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
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                      animate={{
                        x: ["-200%", "300%"]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeOut",
                        repeatDelay: 0.5
                      }}
                    />
                    <span className="relative z-10">Start Your Free Trial</span>
                  </motion.button>
                </div>
              </AnimatedSection>

              {/* Platform Availability */}
              <AnimatedSection animation="fadeUp" delay={0.4}>
                <div className="space-y-1.5 flex flex-col items-center lg:items-start">
                  <p className="text-xs text-[#4a4b4d] font-['Baloo_2:Medium',_sans-serif]">
                    Available on:
                  </p>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 0.9, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="opacity-90 hover:opacity-100 transition-opacity"
                  >
                    <picture>
                      <source
                        srcSet={`${base}/platform-group-mobile.png`}
                        media="(max-width: 640px)"
                      />
                      <img
                        src={`${base}/platform-group.png`}
                        alt="Available on iOS, Android, Android TV, Fire TV, Kindle, and Web"
                        className="w-full max-w-[200px] sm:max-w-[280px] h-auto object-contain"
                      />
                    </picture>
                  </motion.div>
                </div>
              </AnimatedSection>

              {/* Trust & Stats Section */}
              <AnimatedSection animation="fadeUp" delay={0.5}>
                <div className="space-y-3 flex flex-col items-center lg:items-start">
                  {/* Trust Badge */}
                  <motion.div
                    className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#E05C41]/10 to-[#E05C41]/5 border border-[#E05C41]/20 rounded-lg px-3 sm:px-4 py-1.5 sm:py-2"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#E05C41]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                    </svg>
                    <span className="text-[#E05C41] text-sm sm:text-base font-semibold font-['Baloo_2:SemiBold',_sans-serif]">
                      Trusted By 270K+ Parents
                    </span>
                  </motion.div>

                  {/* Stats Row - Simplified to 2 key stats */}
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-3">
                    <motion.div
                      className="flex items-center gap-1.5 sm:gap-2 bg-white border border-gray-200 rounded-lg px-2.5 sm:px-3 py-1.5 shadow-sm"
                      whileHover={{ y: -2, scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E05C41]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="text-[#E05C41] font-bold text-sm sm:text-base font-['Baloo_2:SemiBold',_sans-serif]">23k+</div>
                        <div className="text-[#4a4b4d] text-[10px] sm:text-xs font-medium">Videos</div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-1.5 sm:gap-2 bg-white border border-gray-200 rounded-lg px-2.5 sm:px-3 py-1.5 shadow-sm"
                      whileHover={{ y: -2, scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E05C41]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <div className="text-[#E05C41] font-bold text-sm sm:text-base font-['Baloo_2:SemiBold',_sans-serif]">100%</div>
                        <div className="text-[#4a4b4d] text-[10px] sm:text-xs font-medium">Ads Free</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </AnimatedSection>

            </div>

            {/* RIGHT: Device Mockup */}
            <AnimatedSection animation="scaleIn" delay={0.2} className="flex justify-center order-2 lg:order-2">
              <motion.div
                className="relative w-full lg:w-auto flex justify-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                whileHover={{
                  scale: 1.02,
                  rotate: [-1, 1, -1],
                  transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse" }
                }}
              >
                <div className="relative origin-bottom">
                  <img
                    src={mockupSrc}
                    alt="Kahf Kids App - Parental Control & Safe Learning for Muslim Kids"
                    className="w-full h-auto object-contain max-w-[180px] sm:max-w-[240px] md:max-w-[300px] lg:max-w-[360px] xl:max-w-[400px]"
                  />
                </div>
              </motion.div>
            </AnimatedSection>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAnimated;
