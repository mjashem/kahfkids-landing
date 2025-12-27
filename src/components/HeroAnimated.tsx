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
      className={`relative bg-white min-h-[500px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[600px] ${className}`}
    >
      {/* Background with decorative elements */}
      <div className="absolute inset-0">
        {/* Wavy divider at bottom */}
        <div className="absolute -bottom-2 sm:-bottom-1 md:-bottom-0 left-0 right-0 z-10 h-4 sm:h-5 md:h-6">
          <svg viewBox="0 0 1440 23" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1440 0.5L0 22.5H1440V0.5Z"
              fill="#FF4848"
            />
          </svg>
        </div>
      </div>

      <div className="relative h-full pt-4 sm:pt-6 md:pt-8 lg:pt-12 xl:pt-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl h-full">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between h-full w-full gap-0 lg:gap-16">

            {/* Hero Content */}
            <AnimatedSection animation="slideRight" delay={0.1} className="flex-1 lg:flex-[2] text-center lg:text-left order-1 lg:order-1">
              <div className="space-y-6">
                {/* Decorative elements row */}
                <div className="flex flex-row items-center lg:items-start gap-2 sm:gap-3 md:gap-4 lg:gap-4 justify-end lg:justify-end -mb-2 sm:-mb-4 lg:-mb-8 mr-2 sm:mr-4 lg:mr-44">
                  <motion.div
                    className="flex h-12 sm:h-14 md:h-16 lg:h-[100px] items-center justify-center w-8 sm:w-9 md:w-10 lg:w-[50px]"
                    style={{ transform: 'translateZ(0)', willChange: 'transform' }}
                    animate={{
                      rotate: [13.97, 18.97, 13.97],
                      y: [0, -3, 0]
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
                      alt="Decorative element 1"
                      className="w-full h-full object-contain mr-2 sm:mr-4 lg:mr-6 -mb-2 sm:-mb-4 lg:-mb-6"
                    />
                  </motion.div>
                  <motion.div
                    className="flex h-16 sm:h-18 md:h-20 lg:h-[120px] items-center justify-center w-10 sm:w-11 md:w-12 lg:w-[60px]"
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
                      alt="Decorative element 2"
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                </div>
                {/* Heading */}
                <motion.h1
                  className="font-['Baloo_2:SemiBold',_sans-serif] font-semibold text-[#222222] text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-normal lg:leading-[70px] tracking-tight md:tracking-normal lg:tracking-[-0.56px]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  The Ultimate <motion.span
                    className="text-[#ff4848] inline-block"
                    whileHover={{
                      scale: 1.1,
                      textShadow: "0 0 20px rgba(255, 72, 72, 0.5)"
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >Safe & Fun</motion.span> Edutainment Hub for Kids with <motion.span
                    className="text-[#ff4848] inline-block"
                    whileHover={{
                      scale: 1.1,
                      textShadow: "0 0 20px rgba(255, 72, 72, 0.5)"
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >Smart Parental Control</motion.span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  className="font-['Baloo_2:Medium',_sans-serif] font-medium text-[#4a4b4d] text-base sm:text-lg leading-normal tracking-normal sm:tracking-[-0.18px] w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Discover stories, games, and learning tools—all in<br />
                  a secure space made just for kids.
                </motion.p>
              </div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-3 md:gap-4 mt-6 sm:mt-7 md:mt-8 lg:mt-10 w-full sm:w-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {/* Buy Premium Button */}
                <motion.button
                  className="relative bg-[#ff4848] rounded-lg px-3 sm:px-4 md:px-5 py-2 sm:py-3 md:py-4 h-9 sm:h-11 md:h-12 flex items-center gap-1 sm:gap-2 w-full sm:w-[157px] justify-center cursor-pointer overflow-hidden shadow-lg whitespace-nowrap"
                  style={{ transform: 'translateZ(0)', willChange: 'transform, box-shadow' }}
                  animate={{
                    scale: [1, 1.08, 1],
                    boxShadow: [
                      "0 4px 15px rgba(255, 72, 72, 0.4)",
                      "0 8px 30px rgba(255, 72, 72, 0.6)",
                      "0 4px 15px rgba(255, 72, 72, 0.4)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{
                    scale: 1.15,
                    backgroundColor: "#ff3030",
                    boxShadow: "0 15px 40px rgba(255, 72, 72, 0.7)",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{
                    scale: 0.95,
                    backgroundColor: "#e02020",
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
                  {/* Strong shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
                    animate={{
                      x: ["-200%", "300%"]
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "easeOut",
                      repeatDelay: 0.3
                    }}
                  />

                  {/* Pulsing glow ring */}
                  <motion.div
                    className="absolute -inset-1 bg-[#ff4848] rounded-lg opacity-30"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.1, 0.3]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Bright flash effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-transparent via-white/30 to-transparent"
                    animate={{
                      opacity: [0, 0, 0.6, 0],
                      y: ["100%", "-100%"]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeOut",
                      repeatDelay: 1
                    }}
                  />

                  {/* Diamond Icon */}
                  <motion.img
                    src={`${base}/diamond-icon.svg`}
                    alt="Diamond"
                    className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 flex-shrink-0"
                    animate={{
                      rotate: [0, 45, 0, -45, 0],
                      scale: [1, 1.1, 1, 1.1, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  <motion.span
                    className="text-white text-xs sm:text-sm font-['Baloo_2:Bold',_sans-serif] font-bold leading-5 sm:leading-6 relative z-10"
                    animate={{
                      textShadow: [
                        "0 0 10px rgba(255, 255, 255, 0.5)",
                        "0 0 20px rgba(255, 255, 255, 0.8)",
                        "0 0 10px rgba(255, 255, 255, 0.5)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    Unlock Premium
                  </motion.span>
                </motion.button>

                {/* App Store Badges - Row on all screen sizes */}
                <div className="flex flex-row gap-3 sm:gap-3 md:gap-4 w-full sm:w-auto items-center">
                  <motion.a
                    href="#"
                    className="w-1/2 sm:w-[170px] md:w-[175px] lg:w-[180px] h-12 sm:h-11 md:h-12 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    whileTap={{
                      scale: 0.97,
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                    }}
                  >
                    <img
                      src={`${base}/app-store-badge.svg`}
                      alt="Download on App Store"
                      className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="w-1/2 sm:w-[170px] md:w-[175px] lg:w-[180px] h-12 sm:h-11 md:h-12 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    whileTap={{
                      scale: 0.97,
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                    }}
                  >
                    <img
                      src={`${base}/google-play-badge.svg`}
                      alt="Get it on Google Play"
                      className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </motion.a>
                </div>
                <motion.div
                  className="hidden lg:flex items-center justify-center w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 ml-4 sm:ml-8 lg:ml-12 mt-8 sm:mt-10 lg:mt-12"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <img
                    src={`${base}/decorative-element-hero-3.svg`}
                    alt="Decorative element 3"
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </motion.div>
            </AnimatedSection>

            {/* iPhone Mockup */}
            <motion.div
              className="flex-1 lg:flex-[1] flex justify-center lg:justify-end order-1 lg:order-2 mt-4 sm:mt-6 lg:mt-8 relative z-20 lg:pr-0"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              whileHover={{
                scale: 1.02,
                rotate: [-1, 1, -1],
                transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse" }
              }}
            >
              <div className="relative w-full lg:w-auto origin-top -mb-12 sm:-mb-16 md:-mb-20 lg:-mb-24 xl:-mb-32 -translate-x-6 lg:transform lg:translate-x-8">
                <img
                  src={mockupSrc}
                  alt="iPhone 11 with Kahf Kids App"
                  className="w-full h-auto object-contain max-w-[320px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[450px] xl:max-w-[520px]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAnimated;