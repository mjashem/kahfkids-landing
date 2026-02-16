import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { detectOS, getAppStoreURL } from '../hooks/useAppStoreLink';
import { useState, useEffect } from 'react';

// Pricing plan interface
interface PricingPlan {
  name: string;
  price: string;
  priceNote?: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  isBestValue?: boolean;
  badge?: string;
  borderColor: string;
  isProminent?: boolean;
}

const PricingAnimated = () => {
  const base = import.meta.env.BASE_URL;
  const [appStoreUrl, setAppStoreUrl] = useState<string>('');

  useEffect(() => {
    // Set the appropriate app store URL on mount
    setAppStoreUrl(getAppStoreURL());
  }, []);

  const pricingPlans: PricingPlan[] = [
    {
      name: "Free",
      price: "$0",
      features: [
        "21,000+ Curated Safe YouTube Videos",
        "Drawing Activities",
        "Digital Qur'an — read, recite, memorize",
        "Brain-Boosting Games",
        "Wallpapers, Calculators",
        "Video Watch Time Limit",
        "Video Filters — age, language, etc",
        "Games — on/off",
        "Quizzes"
      ],
      buttonText: "Install Free",
      borderColor: "border-[#e0e0e0]"
    },
    {
      name: "Monthly Premium",
      price: "$5",
      priceNote: "/month",
      features: [
        "Everything in Free Plan +",
        "Block Apps, Games & Websites permanently",
        "Fix time limit of Games / App usage",
        "Create schedules for Study Time, Bed Time, etc",
        "Add your own videos / playlists",
        "Video feed — on/off",
        "Lock kids' device",
        "Uninstall protection (Android only)"
      ],
      buttonText: "Start 7-Day Free Trial",
      isPopular: true,
      badge: "Start Free Trial",
      borderColor: "border-[#E05C41]"
    },
    {
      name: "Yearly Premium",
      price: "$2.50",
      priceNote: "/month",
      features: [
        "Everything in Free Plan +",
        "Block Apps, Games & Websites permanently",
        "Fix time limit of Games / App usage",
        "Create schedules for Study Time, Bed Time, etc",
        "Add your own videos / playlists",
        "Video feed — on/off",
        "Lock kids' device",
        "Uninstall protection (Android only)",
        "Save 50% compared to Monthly"
      ],
      buttonText: "Start 7-Day Free Trial",
      isBestValue: true,
      badge: "7-Day Free Trial",
      borderColor: "border-[#E05C41]",
      isProminent: true
    }
  ];

  
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

  const TickIcon = () => (
    <img
      src={`${base}/pricing-illustration.svg`}
      alt="tick"
      className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
    />
  );

  return (
    <div id="pricing" className="bg-gradient-to-b from-white to-[#fffbfb] py-12 lg:py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"
      >
        {/* Pricing Section */}
        <AnimatedSection
          animation="fadeUp"
          delay={0}
          className="flex flex-col gap-8 lg:gap-12 items-center"
        >
          {/* Header */}
          <div className="text-center max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block mb-4 px-4 py-2 bg-[#E05C41]/10 rounded-full"
            >
              <span className="text-sm font-semibold text-[#E05C41] uppercase tracking-wide">
                Simple Pricing
              </span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D1013] mb-4 leading-tight">
              Choose Your Perfect Plan
            </h2>
            <p className="text-base sm:text-lg text-[#4a4b4d] max-w-2xl mx-auto">
              Start with our free plan or unlock premium features. All plans include safe, curated content.
            </p>
          </div>

          {/* Pricing Cards */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-7xl"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className={`relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${
                  plan.isProminent
                    ? 'border-4 border-[#E05C41] md:scale-105 md:z-10'
                    : 'border-2 border-gray-100'
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-0 -right-0 bg-gradient-to-br from-[#E05C41] to-[#c94d32] text-white px-6 py-2 rounded-bl-3xl shadow-lg">
                    <span className="text-xs font-bold uppercase tracking-wider">
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Card Content */}
                <div className="p-6 sm:p-8">
                  {/* Plan Header */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-[#0D1013] mb-3">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl sm:text-6xl font-bold text-[#0D1013]">
                        {plan.price}
                      </span>
                      {plan.priceNote && (
                        <span className="text-lg text-[#4a4b4d] font-medium">
                          {plan.priceNote}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mb-6 space-y-3 min-h-[280px] sm:min-h-[320px]">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex gap-3 items-start">
                        <div className="flex-shrink-0 mt-1">
                          <TickIcon />
                        </div>
                        <p className="text-sm text-[#4a4b4d] leading-relaxed">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="space-y-3">
                    {plan.name === 'Free' ? (
                      <motion.a
                        href={appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="block w-full py-4 px-6 text-center rounded-xl font-semibold text-white bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        {plan.buttonText}
                      </motion.a>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-4 px-6 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 ${
                          plan.isProminent
                            ? 'bg-gradient-to-r from-[#E05C41] to-[#c94d32] hover:from-[#c94d32] hover:to-[#b03d28]'
                            : 'bg-gradient-to-r from-[#E05C41] to-[#d45438] hover:from-[#d45438] hover:to-[#c94d32]'
                        }`}
                      >
                        {plan.buttonText}
                      </motion.button>
                    )}
                    {plan.name !== 'Free' && (
                      <p className="text-xs text-[#4a4b4d] text-center font-medium">
                        No credit card required · Cancel anytime
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center pt-6"
          >
            <p className="text-sm text-[#4a4b4d] flex items-center justify-center gap-2 flex-wrap">
              <svg className="w-5 h-5 text-[#E05C41]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Trusted by 270,000+ Muslim families</span>
              <span className="text-[#4a4b4d]/50">·</span>
              <span>100% Safe & Ad-Free</span>
            </p>
          </motion.div>
        </AnimatedSection>
      </motion.div>
    </div>
  );
};

export default PricingAnimated;