import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

// Trust badge data interface
interface TrustBadge {
  id: number;
  text: string;
  icon: string;
  link?: string;
}

// Trust badges data
const trustBadgesData: TrustBadge[] = [
  {
    id: 1,
    text: "Google Play Editors' Choice",
    icon: `<svg class="w-full h-full" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
    </svg>`,
  },
  {
    id: 2,
    text: "#1 Parental Control App for Muslims",
    icon: `<svg class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
    </svg>`,
  },
  {
    id: 3,
    text: "COPPA Compliant",
    icon: `<svg class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
    </svg>`,
  },
  {
    id: 4,
    text: "Featured in Muslim Parenting Communities",
    icon: `<svg class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>`,
  }
];

const TrustBadgesAnimated = () => {
  return (
    <div className="bg-gray-50 py-10 sm:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeUp" delay={0} duration={0.3} threshold={0.3}>
          <div className="text-center mb-8">
            <h3 className="text-sm sm:text-base text-gray-500 font-medium tracking-wider uppercase">
              Trusted & Recognized
            </h3>
          </div>
        </AnimatedSection>

        {/* Horizontal scroll on mobile, centered flex on desktop */}
        <div className="flex overflow-x-auto gap-8 sm:gap-12 pb-4 scrollbar-hide justify-center items-center">
          {trustBadgesData.map((badge, index) => (
            <AnimatedSection
              key={badge.id}
              animation="fadeUp"
              delay={index * 0.05}
              duration={0.3}
              threshold={0.3}
            >
              <motion.div
                className="flex flex-col items-center gap-3 min-w-[150px] sm:min-w-[180px] cursor-pointer group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 text-[#E05C41]/60 group-hover:text-[#E05C41] transition-colors duration-300">
                  <div
                    className="w-full h-full"
                    dangerouslySetInnerHTML={{ __html: badge.icon }}
                  />
                </div>

                {/* Text */}
                <p className="text-xs sm:text-sm text-gray-600 font-medium text-center leading-tight max-w-[160px]">
                  {badge.text}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Add scrollbar hide styles */}
        <style>{`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </div>
  );
};

export default TrustBadgesAnimated;
