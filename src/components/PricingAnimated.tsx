import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

const PricingAnimated = () => {
  const pricingPlans = [
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

  const ecosystemFeatures = [
    {
      icon: "/feature-icon-1.svg",
      number: "14,000+",
      title: "Curated Safe Videos For Kids, manually reviewed by experts.",
      borderColor: "border-[#d0474c]"
    },
    {
      icon: "/feature-icon-2.svg",
      number: "100%",
      title: "No ads, no tracking, no harmful distractions—just a safe space.",
      borderColor: "border-[#377aff]"
    },
    {
      icon: "/feature-icon-3.svg",
      number: "Fully Child-Safe",
      title: "COPPA & Google Play Families Compliant.",
      borderColor: "border-[#85a70b]"
    },
    {
      icon: "/feature-icon-4.svg",
      number: "All-In-One Platform",
      title: "From entertainment to learning, everything your child needs is in one app.",
      borderColor: "border-[#8b47d0]"
    },
    {
      icon: "/feature-icon-5.svg",
      number: "Parent Controlled",
      title: "You stay in charge with powerful parental controls. Decide what your child watches.",
      borderColor: "border-[#1ca565]"
    },
    {
      icon: "/feature-icon-6.svg",
      number: "Designed for Muslim Kids",
      title: "Content carefully integrated with positive values that inspire.",
      borderColor: "border-[#b17462]"
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
        type: "spring",
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
                    type: "spring",
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
                          : 'bg-[#222222] text-white hover:bg-[#333333] hover:shadow-lg'
                      }`}
                    >
                      {plan.buttonText}
                    </motion.button>
                    <p className="text-xs sm:text-sm text-[#4a4b4d] text-center">
                      You can cancel anytime.
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* Complete Ecosystem Section */}
        <AnimatedSection
          animation="fadeUp"
          delay={0}
          className="flex flex-col gap-12 sm:gap-16 items-center"
        >
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2c2626] leading-tight lg:leading-[1.2] capitalize tracking-tight mb-4 sm:mb-6">
              A Complete Ecosystem
            </h2>
            <p className="text-base sm:text-lg text-[#4a4b4d] tracking-tight max-w-2xl mx-auto">
              Everything your child needs to learn, play, and grow—safely in one place.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full"
          >
            {ecosystemFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                    duration: 0.2
                  }
                }}
                className={`bg-white border-2 ${feature.borderColor} rounded-2xl p-6 sm:p-8 min-h-[160px] sm:min-h-[180px] lg:min-h-[200px] flex flex-col justify-start shadow-lg hover:shadow-xl transition-shadow duration-200`}
              >
                <div className="flex flex-col gap-4">
                  <motion.img
                    src={feature.icon}
                    alt={feature.number}
                    className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#2c2626] mb-2">
                      {feature.number}
                    </h3>
                    <p className="text-sm sm:text-base text-[#4a4b4d] tracking-tight leading-relaxed">
                      {feature.title}
                    </p>
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