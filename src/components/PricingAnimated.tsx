import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

const PricingAnimated = () => {
  const pricingPlans = [
    {
      name: "Free",
      price: "$ 0",
      features: [
        "Block up to 3 specific apps for a set time.",
        "Keep your child safe — they can't exit this app.",
        "Block inappropriate websites from predefined categories.",
        "Access to curated safe content."
      ],
      buttonText: "Get Started",
      isPopular: false,
      borderColor: "border-[#e0e0e0]"
    },
    {
      name: "Monthly",
      price: "$ 4.50",
      features: [
        "Block specific apps for a set time or permanently.",
        "Keep your child safe — they can't exit this app.",
        "Block inappropriate & harmful websites.",
        "easily add personalized YouTube videos for kids."
      ],
      buttonText: "Buy Premium for Monthly",
      isPopular: false,
      borderColor: "border-[#e6d6d6]"
    },
    {
      name: "Yearly",
      price: "$ 3.50",
      priceNote: "per month",
      features: [
        "Block specific apps for a set time or permanently.",
        "Keep your child safe — they can't exit this app.",
        "Block inappropriate & harmful websites.",
        "easily add personalized YouTube videos for kids."
      ],
      buttonText: "Buy Premium for Yearly",
      isPopular: true,
      discount: "Save 20%",
      borderColor: "border-[#ff4848]"
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
      src="/pricing-illustration.svg"
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
            className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center justify-center w-full"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  transition: {
                    type: "spring" as const,
                    stiffness: 300,
                    damping: 20
                  }
                }}
                className={`relative bg-white border-2 ${plan.borderColor} rounded-2xl p-6 sm:p-8 w-full max-w-sm sm:max-w-md lg:max-w-lg shadow-lg hover:shadow-2xl transition-shadow duration-300`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3 sm:-top-2 right-4 sm:right-6 bg-[#ff4848] text-white px-3 py-2 sm:px-4 sm:py-3 rounded-t-lg rounded-bl-lg z-10">
                    <span className="text-xs sm:text-sm font-medium">{plan.discount}</span>
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

                  <div className="space-y-4 sm:space-y-6">
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
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 transform ${
                        plan.isPopular
                          ? 'bg-[#ff4848] text-white hover:bg-[#e03333] hover:shadow-lg'
                          : plan.name === 'Free'
                          ? 'bg-[#666666] text-white hover:bg-[#555555] hover:shadow-lg'
                          : 'bg-[#222222] text-white hover:bg-[#333333] hover:shadow-lg'
                      }`}
                    >
                      {plan.buttonText}
                    </motion.button>
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