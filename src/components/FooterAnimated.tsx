import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

const FooterAnimated = () => {
  const base = import.meta.env.BASE_URL;
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.25,
        type: "spring" as const,
        stiffness: 150
      }
    }
  };

  return (
    <footer className="bg-white py-16 sm:py-20 lg:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl flex flex-col gap-8 sm:gap-10 items-center justify-center"
      >
        {/* Main Footer Content */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 w-full max-w-6xl items-start lg:items-start justify-center text-center lg:text-left"
        >
          {/* Logo and Description */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-4 sm:gap-6 w-full lg:w-1/4 xl:w-1/5 items-center lg:items-start text-center"
          >
            <div className="flex flex-col gap-6 sm:gap-8 items-center">
              <div className="flex flex-col gap-4 sm:gap-6 items-center">
                <div className="h-12 w-16 sm:h-14 sm:w-20">
                  <img
                    src={`${base}/footer-logo-1.svg`}
                    alt="Kahf Kids Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="font-medium text-[#4a4b4d] text-sm sm:text-base leading-relaxed max-w-sm">
                  Safe, Islamic, and educational content that nurtures faith, character, and knowledge in children.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation and Support - Always Row Layout, Centered on Medium */}
          <motion.div
            variants={itemVariants}
            className="flex flex-row lg:flex-row gap-4 sm:gap-6 lg:gap-8 w-full lg:w-1/3 items-start justify-center text-center"
          >
            {/* Navigation */}
            <div className="flex-1 max-w-xs">
              <h3 className="font-semibold text-black text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">Navigation</h3>
              <div className="flex flex-col gap-3 sm:gap-4">
                <motion.a
                  href="#"
                  className="font-medium text-[#4a4b4d] text-sm sm:text-base leading-relaxed hover:text-black transition-colors"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring" as const, stiffness: 400 }}
                >
                  Home
                </motion.a>
                <motion.a
                  href="#"
                  className="font-medium text-[#4a4b4d] text-sm sm:text-base leading-relaxed hover:text-black transition-colors"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring" as const, stiffness: 400 }}
                >
                  Features
                </motion.a>
                <motion.a
                  href="#"
                  className="font-medium text-[#4a4b4d] text-sm sm:text-base leading-relaxed hover:text-black transition-colors"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring" as const, stiffness: 400 }}
                >
                  Pricing
                </motion.a>
                <motion.a
                  href="#"
                  className="font-medium text-[#4a4b4d] text-sm sm:text-base leading-relaxed hover:text-black transition-colors"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring" as const, stiffness: 400 }}
                >
                  Blog
                </motion.a>
              </div>
            </div>

            {/* Support */}
            <div className="flex-1 max-w-xs">
              <h3 className="font-semibold text-black text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">Support</h3>
              <div className="flex flex-col gap-3 sm:gap-4">
                <motion.a
                  href="#"
                  className="font-medium text-[#4a4b4d] text-sm sm:text-base leading-relaxed hover:text-black transition-colors"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring" as const, stiffness: 400 }}
                >
                  Contact Us
                </motion.a>
                <motion.a
                  href="#"
                  className="font-medium text-[#4a4b4d] text-sm sm:text-base leading-relaxed hover:text-black transition-colors"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring" as const, stiffness: 400 }}
                >
                  Help Center
                </motion.a>
                <motion.a
                  href="#"
                  className="font-medium text-[#4a4b4d] text-sm sm:text-base leading-relaxed hover:text-black transition-colors"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring" as const, stiffness: 400 }}
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="#"
                  className="font-medium text-[#4a4b4d] text-sm sm:text-base leading-relaxed hover:text-black transition-colors"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring" as const, stiffness: 400 }}
                >
                  Terms & Condition
                </motion.a>
                <motion.a
                  href="#"
                  className="font-medium text-[#4a4b4d] text-sm sm:text-base leading-relaxed hover:text-black transition-colors"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring" as const, stiffness: 400 }}
                >
                  Child Safety Policy
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Social Media and App Stores */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-8 sm:gap-10 w-full lg:w-1/3 xl:w-1/4 items-center lg:items-start text-center"
          >
            {/* Social Media */}
            <div className="flex flex-col gap-4 sm:gap-6 w-full items-center">
              <div className="flex flex-col gap-3 sm:gap-4 items-center">
                <h4 className="font-semibold text-black text-sm sm:text-base leading-relaxed whitespace-nowrap">Follow Us</h4>
              </div>
              <div className="flex gap-3 sm:gap-4">
                <motion.a
                  href="#"
                  className="bg-[#e7f1f3] flex items-center justify-center rounded-lg w-10 h-10 sm:w-12 sm:h-12 hover:bg-[#d1e7ea] transition-colors"
                  whileHover={{
                    y: -4,
                    scale: 1.1,
                    transition: { type: "spring" as const, stiffness: 400, damping: 25 }
                  }}
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6">
                    <img
                      src={`${base}/footer-logo-2.svg`}
                      alt="Facebook"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.a>
                <motion.a
                  href="#"
                  className="bg-[#e7f1f3] flex items-center justify-center rounded-lg w-10 h-10 sm:w-12 sm:h-12 hover:bg-[#d1e7ea] transition-colors"
                  whileHover={{
                    y: -4,
                    scale: 1.1,
                    transition: { type: "spring" as const, stiffness: 400, damping: 25 }
                  }}
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6">
                    <img
                      src={`${base}/footer-logo-3.svg`}
                      alt="Twitter"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.a>
                <motion.a
                  href="#"
                  className="bg-[#e7f1f3] flex items-center justify-center rounded-lg w-10 h-10 sm:w-12 sm:h-12 hover:bg-[#d1e7ea] transition-colors"
                  whileHover={{
                    y: -4,
                    scale: 1.1,
                    transition: { type: "spring" as const, stiffness: 400, damping: 25 }
                  }}
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6">
                    <img
                      src={`${base}/footer-logo-4.svg`}
                      alt="Instagram"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.a>
                <motion.a
                  href="#"
                  className="bg-[#e7f1f3] flex items-center justify-center rounded-lg w-10 h-10 sm:w-12 sm:h-12 hover:bg-[#d1e7ea] transition-colors"
                  whileHover={{
                    y: -4,
                    scale: 1.1,
                    transition: { type: "spring" as const, stiffness: 400, damping: 25 }
                  }}
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6">
                    <img
                      src={`${base}/footer-logo-5.svg`}
                      alt="YouTube"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.a>
              </div>
            </div>

            {/* App Store Badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-4 sm:gap-6 w-full items-center"
            >
              <div className="flex gap-2 sm:gap-3">
                <motion.a
                  href="https://play.google.com/store/apps/details?id=com.kahf.kids&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-24 sm:h-10 sm:w-28"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring" as const, stiffness: 400 }}
                >
                  <img
                    src={`${base}/footer-logo-6.svg`}
                    alt="App Store"
                    className="w-full h-full object-contain"
                  />
                </motion.a>
                <motion.a
                  href="https://apps.apple.com/us/app/kahf-kids-for-child-parents/id6605937095"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-24 sm:h-10 sm:w-28"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring" as const, stiffness: 400 }}
                >
                  <img
                    src={`${base}/footer-logo-7.svg`}
                    alt="Google Play"
                    className="w-full h-full object-contain"
                  />
                </motion.a>
              </div>
              <div className="font-medium text-[#4a4b4d] text-xs sm:text-sm leading-relaxed max-w-xs">
                <p className="mb-1">Also available on:</p>
                <p className="mb-1">Apple TV • Android TV • Chromecast</p>
                <p>Samsung, LG, Roku, Fire TV coming soon</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-200 pt-6 sm:pt-8 lg:pt-10 w-full"
        >
          <div className="text-center">
            <p className="font-medium text-[#6a7282] text-xs sm:text-sm leading-relaxed">
              Copyright © 2025 Kahf Kids. All rights reserved.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default FooterAnimated;