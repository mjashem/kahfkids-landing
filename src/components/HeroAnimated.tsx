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
      className={`relative bg-white ${className}`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fff5f5] to-white" />

      <div className="relative z-10 h-full pt-4 sm:pt-6 md:pt-8 lg:pt-10 pb-1 sm:pb-2 md:pb-3 lg:pb-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

            {/* LEFT: Content Area */}
            <div className="lg:col-span-7 space-y-4 lg:space-y-6 text-center lg:text-left">

              {/* Main Headline */}
              <AnimatedSection animation="slideRight" delay={0}>
                <motion.h1
                    className="font-['Baloo_2:SemiBold',_sans-serif] font-semibold text-[#0D1013] text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-tight lg:leading-[1.15] tracking-tight"
                    whileHover={{ scale: 1.01 }}
                  >
                    Worried About Screen Time?{' '}
                    <motion.span
                      className="text-[#E05C41] inline-block relative"
                      whileHover={{
                        scale: 1.05,
                        textShadow: "0 0 20px rgba(224, 92, 65, 0.4)"
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      We Fixed It.
                    </motion.span>
                  </motion.h1>
                <motion.p
                  className="font-['Baloo_2:Medium',_sans-serif] text-[#4a4b4d] text-sm sm:text-base lg:text-lg mt-2 lg:mt-4 max-w-xl mx-auto lg:mx-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Get complete parental control for your peace of mind, plus Qur&apos;an learning and Islamic content your kids will love. Join 270,000+ Muslim families.
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

                  {/* Pricing Transparency - Fills empty space, improves conversion */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-xs sm:text-sm text-[#4a4b4d] text-center lg:text-left mt-2"
                  >
                    7-day free trial • From $2.50/month • Cancel anytime
                  </motion.p>

                  {/* Trust Pills */}
                  <motion.div
                    className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mt-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <span className="inline-flex items-center gap-1 text-xs font-medium bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full">
                      <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      4.6★
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium bg-[#E05C41]/10 text-[#E05C41] px-2.5 py-1 rounded-full">
                      270K+ Downloads
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium bg-[#E05C41] text-white px-2.5 py-1 rounded-full">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                      </svg>
                      No Ads
                    </span>
                  </motion.div>
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

            </div>

            {/* RIGHT: Device Mockup */}
            <AnimatedSection animation="scaleIn" delay={0.2} className="lg:col-span-5 flex justify-end pr-0">
              <motion.div
                className="relative w-full flex justify-end"
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
