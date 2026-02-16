import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

const BottomBanner: React.FC = () => {
  const [appStoreUrl, setAppStoreUrl] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // OS Detection Function (from Navbar.astro)
    const detectOS = (): 'ios' | 'android' | 'unknown' => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

      // iOS detection (iPhone, iPad, iPod)
      if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
        return 'ios';
      }

      // Android detection
      if (/android/i.test(userAgent)) {
        return 'android';
      }

      return 'unknown';
    };

    // App store URLs
    const APP_STORE_URLS = {
      ios: 'https://apps.apple.com/us/app/kahf-kids-for-child-parents/id6605937095',
      android: 'https://play.google.com/store/apps/details?id=com.kahf.kids&pcampaignid=web_share',
    };

    const os = detectOS();
    // iOS -> App Store, Android/unknown -> Google Play
    setAppStoreUrl(os === 'ios' ? APP_STORE_URLS.ios : APP_STORE_URLS.android);
  }, []);

  // Scroll detection for desktop visibility
  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past first section (~500px)
      setIsVisible(window.scrollY > 500);
    };

    // Check initial scroll position
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    if (appStoreUrl) {
      window.open(appStoreUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed bottom-0 left-0 right-0 z-50 hidden lg:flex bg-[#ff4848] items-center justify-center"
          style={{ minHeight: '36px' }}
        >
      {/* Subtle animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-8 -left-8 w-16 h-16 bg-white/5 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-10 -right-10 w-20 h-20 bg-white/5 rounded-full"
        />
        <motion.div
          animate={{
            x: [-10, 10, -10],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/4 w-8 h-8 bg-white/5 rounded-full"
        />
        <motion.div
          animate={{
            y: [-8, 8, -8],
            opacity: [0.04, 0.1, 0.04],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute top-1/3 right-1/4 w-6 h-6 bg-white/4 rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.02, 0.06, 0.02],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
          className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-white/5 rounded-full"
        />
      </div>

      {/* Banner content */}
      <div className="relative z-10 px-4 py-1 flex items-center justify-center gap-3 max-w-3xl mx-auto">
        <p className="text-white font-medium text-xs">
          Get all premium features. No credit card required.
        </p>
        <Button
          variant="secondary"
          size="sm"
          onClick={handleClick}
          className="whitespace-nowrap !py-1 !px-3 !text-xs"
        >
          Try Free
        </Button>
      </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BottomBanner;
