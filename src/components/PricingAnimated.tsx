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
      buttonText: "Buy Premium for Monthly",
      isPopular: true,
      badge: "Most Popular",
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
      buttonText: "Buy Premium for Yearly",
      isBestValue: true,
      badge: "Best Value",
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
    <div id="pricing" className="bg-[#fffbfb] py-16 sm:py-20 lg:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl flex flex-col gap-24 lg:gap-32"
      >
        {/* Pricing Section */}
        <AnimatedSection
          animation="fadeUp"
          delay={0}
          className="flex flex-col gap-12 sm:gap-16 lg:gap-20 items-center"
        >
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#222222] leading-tight lg:leading-[1.2] capitalize tracking-tight mb-4 sm:mb-6">
              Safe & Fun Content for Kids – at an Affordable Price
            </h2>
            <p className="text-base sm:text-lg text-[#4a4b4d] tracking-tight max-w-2xl mx-auto">
              Kahf Kids brings your child safe, halal, and fun content at an affordable price. Simple plans for a secure and joyful digital world.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch justify-center w-full"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className={`relative bg-white border-2 ${plan.borderColor} rounded-2xl p-6 sm:p-8 w-full shadow-lg hover:shadow-2xl transition-shadow duration-300 ${
                  plan.isProminent
                    ? 'border-4 max-w-sm sm:max-w-lg lg:max-w-xl'
                    : 'max-w-sm sm:max-w-md lg:max-w-lg'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 sm:-top-2 right-4 sm:right-6 bg-[#E05C41] text-white px-3 py-2 sm:px-4 sm:py-3 rounded-t-lg rounded-bl-lg z-10 shadow-md">
                    <span className="text-xs sm:text-sm font-medium">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="flex flex-col gap-6 sm:gap-8">
                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-[#222222] capitalize tracking-tight mb-2">
                      {plan.name}
                    </h3>
                    <div className="relative">
                      <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] tracking-tight">
                        {plan.price}
                      </p>
                      {plan.priceNote && (
                        <span className="text-sm sm:text-base text-[#4a4b4d] tracking-tight absolute top-2 sm:top-3 right-0">
                          {plan.priceNote}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex gap-3 items-start">
                        <TickIcon />
                        <p className="text-sm sm:text-base text-[#4a4b4d] leading-relaxed flex-1">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3 sm:gap-4 items-center">
                    {plan.name === 'Free' ? (
                      <motion.a
                        href={appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 transform bg-[#666666] text-white hover:bg-[#555555] hover:shadow-lg text-center"
                      >
                        {plan.buttonText}
                      </motion.a>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 transform ${
                          plan.isPopular || plan.isBestValue
                            ? 'bg-[#E05C41] text-white hover:bg-[#c94d32] hover:shadow-lg'
                            : 'bg-[#222222] text-white hover:bg-[#333333] hover:shadow-lg'
                        }`}
                      >
                        {plan.buttonText}
                      </motion.button>
                    )}
                    {plan.name !== 'Free' && (
                      <p className="text-xs sm:text-sm text-[#4a4b4d] text-center">
                        You can cancel anytime.
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
      </motion.div>
    </div>
  );
};

export default PricingAnimated;