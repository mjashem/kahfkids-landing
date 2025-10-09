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
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const TickIcon = () => (
    <img
      src="/pricing-illustration.svg"
      alt="tick"
      className="w-[18px] h-[18px] flex-shrink-0"
    />
  );

  return (
    <div className="bg-[#faefef] py-36">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl flex flex-col gap-36"
      >
        {/* Pricing Section */}
        <AnimatedSection
          animation="fadeUp"
          delay={0.2}
          className="flex flex-col gap-[60px] items-center"
        >
          <div className="text-center">
            <h2 className="text-[42px] font-semibold text-[#222222] leading-[70px] capitalize tracking-[-0.42px] mb-5">
              Safe & Fun Content for Kids – at an Affordable Price
            </h2>
            <p className="text-[18px] text-[#4a4b4d] tracking-[-0.18px]">
              Kahf Kids brings your child safe, halal, and fun content at an affordable price. Simple plans for a secure and joyful digital world.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            className="flex flex-col lg:flex-row gap-[23px] items-center justify-center"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className={`relative bg-white border-2 ${plan.borderColor} rounded-[20px] p-[30px] w-full max-w-[420px]`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-[-28px] right-0 bg-[#ff4848] text-white px-4 py-3 rounded-tl-[9px] rounded-bl-[9px]">
                    <span className="text-[14px] font-medium">{plan.discount}</span>
                  </div>
                )}

                <div className="flex flex-col gap-[30px]">
                  <div>
                    <h3 className="text-[16px] font-medium text-[#222222] capitalize tracking-[-0.16px] mb-2">
                      {plan.name}
                    </h3>
                    <div className="relative">
                      <p className="text-[40px] font-semibold text-[#222222] tracking-[-0.4px]">
                        {plan.price}
                      </p>
                      {plan.priceNote && (
                        <span className="text-[16px] text-[#4a4b4d] tracking-[-0.16px] absolute top-[21px] right-0">
                          {plan.priceNote}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-[24px]">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex gap-[10px] items-start">
                        <TickIcon />
                        <p className="text-[16px] text-[#4a4b4d] leading-[23px] flex-1">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-[12px] items-center">
                    <button
                      className={`w-full py-3 px-4 rounded-[6px] text-[14px] font-medium transition-colors duration-300 ${
                        plan.isPopular
                          ? 'bg-[#ff4848] text-white hover:bg-[#e03333]'
                          : 'bg-[#222222] text-white hover:bg-[#333333]'
                      }`}
                    >
                      {plan.buttonText}
                    </button>
                    <p className="text-[12px] text-[#4a4b4d] text-center">
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
          delay={0.4}
          className="flex flex-col gap-[40px] items-center"
        >
          <div className="text-center">
            <h2 className="text-[42px] font-semibold text-[#2c2626] leading-[70px] capitalize tracking-[-0.42px] mb-5">
              A Complete Ecosystem
            </h2>
            <p className="text-[18px] text-[#4a4b4d] tracking-[-0.18px]">
              Everything your child needs to learn, play, and grow—safely in one place.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] w-full"
          >
            {ecosystemFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className={`bg-white border-2 ${feature.borderColor} rounded-[20px] p-[30px] h-[188px] flex flex-col justify-start`}
              >
                <div className="flex flex-col gap-[10px]">
                  <img
                    src={feature.icon}
                    alt={feature.number}
                    className="w-[30px] h-[30px] flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-[24px] font-semibold text-[#2c2626] mb-2">
                      {feature.number}
                    </h3>
                    <p className="text-[16px] text-[#4a4b4d] tracking-[-0.16px] leading-normal">
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