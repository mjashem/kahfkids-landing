import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

interface HeroAnimatedProps {
  className?: string;
}

const HeroAnimated: React.FC<HeroAnimatedProps> = ({ className = '' }) => {
  return (
    <section
      id="home"
      className={`relative bg-white ${className}`}
      style={{ minHeight: '600px', paddingBottom: '0px' }}
    >
      {/* Background with decorative elements */}
      <div className="absolute inset-0">
        {/* Wavy divider at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10" style={{ height: '23px' }}>
          <svg viewBox="0 0 1440 23" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1440 0.5L0 22.5H1440V0.5Z"
              fill="#FF4848"
            />
          </svg>
        </div>
      </div>

      <div className="relative h-full pt-10 lg:pt-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl h-full">
          <div className="flex flex-col lg:flex-row items-start lg:items-start justify-between h-full w-full gap-8 lg:gap-16">

            {/* Hero Content */}
            <AnimatedSection animation="slideRight" delay={0.2} className="flex-1 lg:flex-[2] text-center lg:text-left order-2 lg:order-1">
              <div className="space-y-6">
                {/* Decorative elements row */}
                <div className="flex flex-row items-center lg:items-start gap-4 justify-end lg:justify-end -mb-8 mr-44">
                  <div className="flex h-[60px] sm:h-[80px] lg:h-[100px] items-center justify-center w-[40px] sm:w-[45px] lg:w-[50px]" style={{ transform: 'rotate(13.97deg)' }}>
                    <img
                      src="/b2de00c26e68f0cd06db557a2c071e420ab33f7c.svg"
                      alt="Decorative element 1"
                      className="w-full h-full object-contain mr-9 -mb-6"
                    />
                  </div>
                  <div className="flex h-[80px] sm:h-[100px] lg:h-[120px] items-center justify-center w-[50px] sm:w-[55px] lg:w-[60px]" style={{ transform: 'rotate(344.472deg)' }}>
                    <img
                      src="/3ed83473475b7033e6aee65965f34306b624d58e.svg"
                      alt="Decorative element 2"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                {/* Heading */}
                <motion.h1
                  className="font-['Baloo_2:SemiBold',_sans-serif] font-semibold text-[#222222] text-3xl sm:text-4xl lg:text-5xl leading-tight lg:leading-[70px] tracking-[-0.56px]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  The Ultimate <span className="text-[#ff4848]">Safe & Fun</span> Edutainment Hub for Kids
                </motion.h1>

                {/* Description */}
                <motion.p
                  className="font-['Baloo_2:Medium',_sans-serif] font-medium text-[#4a4b4d] text-lg leading-normal tracking-[-0.18px] w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Discover stories, games, and learning tools—all in<br />
                  a secure space made just for kids.
                </motion.p>
              </div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row items-top justify-center lg:justify-start gap-3 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {/* Buy Premium Button */}
                <motion.button
                  className="bg-[#ff4848] rounded-lg px-4 py-3 h-[50px] flex items-center gap-1 w-full sm:w-[157px] justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-white text-sm font-['Baloo_2:Medium',_sans-serif] font-medium leading-6">Buy Premium</span>
                  <motion.img
                    src="/8b78a29a98038eaf1e4c5809e928d41af276b77e.svg"
                    alt="Arrow"
                    className="w-6 h-6"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.button>

                {/* App Store Badges */}
                <div className="flex gap-3">
                  <div className="w-[162px] h-12">
                    <img
                      src="/50ef2ac624889246853661a08035409d6146ae4d.svg"
                      alt="App Store"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-[162px] h-12">
                    <img
                      src="/91d03ea036776e5d506d4a563368f57e1012ce70.svg"
                      alt="Google Play"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center w-[45px] sm:w-[50px] lg:w-[55px] h-[45px] sm:h-[50px] lg:h-[55px] ml-18 mt-12">
                    <img
                      src="/c068262c56f0183e00a6b2dfa618608bda1d6964.svg"
                      alt="Decorative element 3"
                      className="w-full h-full object-contain"
                    />
                </div>
              </motion.div>
            </AnimatedSection>

            {/* iPhone Mockup */}
            <motion.div
              className="flex-1 lg:flex-[1] flex justify-center lg:justify-end order-1 lg:order-2 mt-6 relative z-20"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
              <div className="relative scale-75 sm:scale-90 lg:scale-100 origin-top" style={{ marginBottom: '-80px' }}>
                <img
                  src="/iPhone-11.png"
                  alt="iPhone 11 with Kahf Kids App"
                  className="w-auto h-auto max-w-full"
                  style={{ maxHeight: '600px' }}
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