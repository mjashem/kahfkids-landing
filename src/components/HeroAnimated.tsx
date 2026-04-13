import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import PhoneSlider from './PhoneSlider';

interface HeroAnimatedProps {
  className?: string;
  slides?: string[];
}

const HeroAnimated: React.FC<HeroAnimatedProps> = ({
  className = '',
  slides = []
}) => {
  const base = import.meta.env.BASE_URL;
  const defaultSlides = slides.length > 0 ? slides : [
    `${base}/feature-image-1.png`,
    `${base}/feature-image-2.png`,
    `${base}/feature-image-3.png`,
  ];

  return (
    <section
      id="home"
      className={`relative xl:max-h-screen overflow-hidden bg-white ${className}`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fff5f5] to-white" />

      <div className="relative z-10 pt-24 sm:pt-28 md:pt-32 lg:pt-24 pb-4 sm:pb-6 md:pb-8 lg:pb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 xl:gap-4 items-start xl:items-center xl:h-full">

            {/* LEFT: Content Area */}
            <div className="lg:col-span-7 space-y-4 lg:space-y-6 text-center lg:text-left">

              {/* Main Headline */}
              <AnimatedSection animation="slideRight" delay={0}>
                <motion.h1
                    className="font-['Baloo_2:SemiBold',_sans-serif] font-semibold text-[#0D1013] text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[42px] leading-tight lg:leading-[1.15] xl:leading-[1.1] tracking-tight"
                    whileHover={{ scale: 1.01 }}
                  >
                    Parental{' '}
                    <motion.span
                      className="text-[#E05C41] inline-block relative"
                      whileHover={{
                        scale: 1.05,
                        textShadow: "0 0 20px rgba(224, 92, 65, 0.4)"
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      Control
                    </motion.span>
                    {' '}&{' '}
                    <motion.span
                      className="text-[#E05C41] inline-block relative"
                      whileHover={{
                        scale: 1.05,
                        textShadow: "0 0 20px rgba(224, 92, 65, 0.4)"
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      Safe
                    </motion.span>
                    {' '}Learning for Muslim Kids.
                  </motion.h1>
                <motion.p
                  className="font-['Baloo_2:Medium',_sans-serif] text-[#4a4b4d] text-base sm:text-lg lg:text-xl mt-3 lg:mt-5 max-w-xl mx-auto lg:mx-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Give your child ad-free, curated videos, Qur&apos;an learning tools, games, and complete parental controls — all in one app.
                </motion.p>
              </AnimatedSection>

              {/* CTA Button */}
              <AnimatedSection animation="fadeUp" delay={0.3}>
                <div className="flex flex-col gap-2 items-center lg:items-start">
                  <motion.button
                    className="min-w-[240px] bg-[#E05C41] text-white px-8 sm:px-10 md:px-12 py-3.5 sm:py-4 rounded-xl shadow-lg font-['Baloo_2:SemiBold',_sans-serif] text-base sm:text-lg lg:text-xl font-semibold cursor-pointer relative overflow-hidden"
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
                    <span className="relative z-10">Try for Free Now</span>
                  </motion.button>

                  {/* Mobile Secondary Button */}
                  <motion.button
                    className="lg:hidden min-w-[240px] border-2 border-[#E05C41] text-[#E05C41] bg-transparent px-8 sm:px-10 md:px-12 py-3.5 sm:py-4 rounded-xl font-['Baloo_2:SemiBold',_sans-serif] text-base sm:text-lg lg:text-xl font-semibold cursor-pointer"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(224, 92, 65, 0.05)",
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{
                      scale: 0.97,
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
                    View Premium Plans
                  </motion.button>

                  {/* Pricing Transparency - Fills empty space, improves conversion */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-sm sm:text-base text-[#4a4b4d] text-center lg:text-left mt-2"
                  >
                    14 days free trial • No credit card required
                  </motion.p>

                  {/* Trust Pills */}
                  <motion.div
                    className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mt-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full">
                      {/* Overlapping Store Icons */}
                      <div className="flex items-center -space-x-2">
                        {/* App Store Icon with background */}
                        <div className="flex items-center justify-center w-5 h-5 bg-white rounded-full shadow-sm border border-gray-200 relative z-10">
                          <svg className="w-3 h-3 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                          </svg>
                        </div>
                        {/* Google Play Icon with background */}
                        <div className="flex items-center justify-center w-5 h-5 bg-white rounded-full shadow-sm border border-gray-200 relative z-0">
                          <svg className="w-3 h-3 translate-x-0.5" viewBox="0 0 24 24" fill="none">
                            <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5Z" fill="#00D764"/>
                            <path d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z" fill="#FFD500"/>
                            <path d="M20.16 10.81C20.5 11.08 20.75 11.53 20.75 12C20.75 12.47 20.5 12.92 20.16 13.19L17.89 14.5L15.35 12L17.89 9.5L20.16 10.81Z" fill="#FF5555"/>
                            <path d="M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" fill="#00D764"/>
                          </svg>
                        </div>
                      </div>
                      {/* Star Icon */}
                      <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      4.6
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium bg-[#E05C41]/10 text-[#E05C41] px-3 py-1.5 rounded-full">
                      {/* Review Icon */}
                      <svg className="w-3.5 h-3.5 text-[#E05C41]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
                        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/>
                      </svg>
                      1.4K+ Reviews
                    </span>
                  </motion.div>
                </div>
              </AnimatedSection>

              {/* Platform Availability - Desktop Only */}
              <AnimatedSection animation="fadeUp" delay={0.4} className="hidden lg:block">
                <div className="space-y-3 flex flex-col items-start">
                  <p className="text-sm text-[#9CA3AF] font-['Baloo_2:Medium',_sans-serif]">
                    Available on:
                  </p>
                  <div className="flex items-start gap-6">
                    {/* Android */}
                    <div className="flex flex-col items-center gap-2">
                      <svg className='w-8 h-8 text-[#4A5568]' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5915 3.88444C13.6002 3.32107 14.7626 3 16 3C17.2374 3 18.3998 3.32107 19.4085 3.88444L20.1464 3.14645C20.3417 2.95118 20.6583 2.95118 20.8536 3.14645C21.0488 3.34171 21.0488 3.65829 20.8536 3.85355L20.2612 4.44595C21.9266 5.72558 23 7.73743 23 10H9C9 7.73743 10.0734 5.72558 11.7388 4.44595L11.1464 3.85355C10.9512 3.65829 10.9512 3.34171 11.1464 3.14645C11.3417 2.95118 11.6583 2.95118 11.8536 3.14645L12.5915 3.88444ZM14 7C14 7.55228 13.5523 8 13 8C12.4477 8 12 7.55228 12 7C12 6.44772 12.4477 6 13 6C13.5523 6 14 6.44772 14 7ZM19 8C19.5523 8 20 7.55228 20 7C20 6.44772 19.5523 6 19 6C18.4477 6 18 6.44772 18 7C18 7.55228 18.4477 8 19 8Z" fill="#4A5568" />
                        <path d="M5 12.5C5 11.6716 5.67157 11 6.5 11C7.32843 11 8 11.6716 8 12.5V18.5C8 19.3284 7.32843 20 6.5 20C5.67157 20 5 19.3284 5 18.5V12.5Z" fill="#4A5568" />
                        <path d="M12 24V27.5C12 28.3284 12.6716 29 13.5 29C14.3284 29 15 28.3284 15 27.5V24H17V27.5C17 28.3284 17.6716 29 18.5 29C19.3284 29 20 28.3284 20 27.5V24H21C22.1046 24 23 23.1046 23 22V11H9V22C9 23.1046 9.89543 24 11 24H12Z" fill="#4A5568" />
                        <path d="M24 12.5C24 11.6716 24.6716 11 25.5 11C26.3284 11 27 11.6716 27 12.5V18.5C27 19.3284 26.3284 20 25.5 20C24.6716 20 24 19.3284 24 18.5V12.5Z" fill="#4A5568" />
                      </svg>
                      <span className="text-sm text-[#9CA3AF] font-['Baloo_2:Regular',_sans-serif]">Android</span>
                    </div>

                    {/* iOS */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-7 h-7 mb-1 bg-[#4A5568] rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-semibold">iOS</span>
                      </div>
                      <span className="text-sm text-[#9CA3AF] font-['Baloo_2:Regular',_sans-serif]">iPhone/iPad</span>
                    </div>

                    {/* Web */}
                    <div className="flex flex-col items-center gap-2">
                      <svg className='h-7 w-7 text-[#4A5568] fill-[#4A5568] mb-1' version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                        viewBox="0 0 512 512"  xmlSpace="preserve">
                        <g>
                          <path className="st0" d="M464,0H48C21.492,0,0,21.492,0,48v416c0,26.508,21.492,48,48,48h416c26.508,0,48-21.492,48-48V48
                            C512,21.492,490.508,0,464,0z M444.664,35c10.492,0,19,8.508,19,19s-8.508,19-19,19c-10.492,0-19-8.508-19-19
                            S434.172,35,444.664,35z M374.164,35c10.492,0,19,8.508,19,19s-8.508,19-19,19c-10.492,0-19-8.508-19-19S363.672,35,374.164,35z
                            M303.664,35c10.492,0,19,8.508,19,19s-8.508,19-19,19c-10.492,0-19-8.508-19-19S293.172,35,303.664,35z M472,464
                            c0,4.406-3.586,8-8,8H48c-4.414,0-8-3.594-8-8V104h432V464z"/>
                          <rect x="96" y="192" className="st0" width="152" height="32"/>
                          <rect x="96" y="352" className="st0" width="328" height="32"/>
                          <rect x="304" y="192" className="st0" width="120" height="120"/>
                          <polygon className="st0" points="229.042,304 248,304 248,272 96,272 96,304 213.042,304 	"/>
                        </g>
                      </svg>
                      <span className="text-sm text-[#9CA3AF] font-['Baloo_2:Regular',_sans-serif]">Web/Browser</span>
                    </div>

                     {/* TV */}
                    <div className="flex flex-col items-center gap-2">
                      <svg className="w-7 h-7 mb-1 text-[#4A5568]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/>
                      </svg>
                      <span className="text-sm text-[#9CA3AF] font-['Baloo_2:Regular',_sans-serif]">TV</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

            </div>

            {/* RIGHT: Device Mockup with Slider */}
            <AnimatedSection animation="scaleIn" delay={0.2} className="lg:col-span-5 flex justify-center lg:justify-end pr-0">
              <motion.div
                className="relative w-full flex justify-center lg:justify-end"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <motion.div
                  className="relative origin-bottom w-full md:max-w-[520px] aspect-[3375/4313]"
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <PhoneSlider
                    slides={defaultSlides}
                    autoPlayInterval={4000}
                    showDotsInside={true}
                    className="w-full h-full"
                  />
                </motion.div>
              </motion.div>
            </AnimatedSection>

            {/* Platform Availability - Mobile/Tablet Only */}
            <AnimatedSection animation="fadeUp" delay={0.5} className="lg:hidden block col-span-1">
              <div className="space-y-3 flex flex-col items-center justify-center pt-6">
                <p className="text-sm text-[#9CA3AF] font-['Baloo_2:Medium',_sans-serif]">
                  Available on:
                </p>
                <div className="flex items-start gap-6">
                  {/* Android */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <svg className='w-10 h-10 text-[#4A5568]' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5915 3.88444C13.6002 3.32107 14.7626 3 16 3C17.2374 3 18.3998 3.32107 19.4085 3.88444L20.1464 3.14645C20.3417 2.95118 20.6583 2.95118 20.8536 3.14645C21.0488 3.34171 21.0488 3.65829 20.8536 3.85355L20.2612 4.44595C21.9266 5.72558 23 7.73743 23 10H9C9 7.73743 10.0734 5.72558 11.7388 4.44595L11.1464 3.85355C10.9512 3.65829 10.9512 3.34171 11.1464 3.14645C11.3417 2.95118 11.6583 2.95118 11.8536 3.14645L12.5915 3.88444ZM14 7C14 7.55228 13.5523 8 13 8C12.4477 8 12 7.55228 12 7C12 6.44772 12.4477 6 13 6C13.5523 6 14 6.44772 14 7ZM19 8C19.5523 8 20 7.55228 20 7C20 6.44772 19.5523 6 19 6C18.4477 6 18 6.44772 18 7C18 7.55228 18.4477 8 19 8Z" fill="#4A5568" />
                        <path d="M5 12.5C5 11.6716 5.67157 11 6.5 11C7.32843 11 8 11.6716 8 12.5V18.5C8 19.3284 7.32843 20 6.5 20C5.67157 20 5 19.3284 5 18.5V12.5Z" fill="#4A5568" />
                        <path d="M12 24V27.5C12 28.3284 12.6716 29 13.5 29C14.3284 29 15 28.3284 15 27.5V24H17V27.5C17 28.3284 17.6716 29 18.5 29C19.3284 29 20 28.3284 20 27.5V24H21C22.1046 24 23 23.1046 23 22V11H9V22C9 23.1046 9.89543 24 11 24H12Z" fill="#4A5568" />
                        <path d="M24 12.5C24 11.6716 24.6716 11 25.5 11C26.3284 11 27 11.6716 27 12.5V18.5C27 19.3284 26.3284 20 25.5 20C24.6716 20 24 19.3284 24 18.5V12.5Z" fill="#4A5568" />
                      </svg>
                    <span className="text-sm text-[#9CA3AF] -translate-y-1 font-['Baloo_2:Regular',_sans-serif]">Android</span>
                  </motion.div>

                  {/* iOS */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="w-9 h-9 bg-[#4A5568] rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">iOS</span>
                    </div>
                    <span className="text-sm text-[#9CA3AF] font-['Baloo_2:Regular',_sans-serif]">iPhone/iPad</span>
                  </motion.div>

                  {/* Web */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <svg className='h-9 w-9 text-[#4A5568] fill-[#4A5568]' version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                        viewBox="0 0 512 512"  xmlSpace="preserve">
                        <g>
                          <path className="st0" d="M464,0H48C21.492,0,0,21.492,0,48v416c0,26.508,21.492,48,48,48h416c26.508,0,48-21.492,48-48V48
                            C512,21.492,490.508,0,464,0z M444.664,35c10.492,0,19,8.508,19,19s-8.508,19-19,19c-10.492,0-19-8.508-19-19
                            S434.172,35,444.664,35z M374.164,35c10.492,0,19,8.508,19,19s-8.508,19-19,19c-10.492,0-19-8.508-19-19S363.672,35,374.164,35z
                            M303.664,35c10.492,0,19,8.508,19,19s-8.508,19-19,19c-10.492,0-19-8.508-19-19S293.172,35,303.664,35z M472,464
                            c0,4.406-3.586,8-8,8H48c-4.414,0-8-3.594-8-8V104h432V464z"/>
                          <rect x="96" y="192" className="st0" width="152" height="32"/>
                          <rect x="96" y="352" className="st0" width="328" height="32"/>
                          <rect x="304" y="192" className="st0" width="120" height="120"/>
                          <polygon className="st0" points="229.042,304 248,304 248,272 96,272 96,304 213.042,304 	"/>
                        </g>
                      </svg>
                    <span className="text-sm text-[#9CA3AF] font-['Baloo_2:Regular',_sans-serif]">Web/Browser</span>
                  </motion.div>

                  {/* TV */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <svg className="w-9 h-9 text-[#4A5568]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/>
                    </svg>
                    <span className="text-sm text-[#9CA3AF] font-['Baloo_2:Regular',_sans-serif]">TV</span>
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAnimated;
