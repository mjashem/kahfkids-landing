import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

const SafeScreenAnimated = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25
      }
    }
  };

  const features = [
    "No fighting",
    "No shouting",
    "No chasing"
  ];

  return (
    <div className="py-12 sm:py-16 md:py-20" style={{background: 'linear-gradient(118.88deg, #DD4E6D 22.43%, #E15353 95.02%)'}}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl flex flex-col gap-6 sm:gap-8 md:gap-10 items-center text-center"
      >
        {/* Badge */}
        <AnimatedSection
          animation="fadeDown"
          delay={0.1}
          className="flex items-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-sm border border-white/30 px-4 sm:px-6 py-2 sm:py-3 rounded-full"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              rotate: [0, 10, -10, 0],
              transition: { duration: 0.5 }
            }}
            className="w-5 h-5 sm:w-6 sm:h-6"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-full h-full text-white"
            >
              <path
                d="M12 2L4 7V12C4 16.5 7.5 20.5 12 22C16.5 20.5 20 16.5 20 12V7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 12L11 14L15 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
          <span className="text-white text-sm sm:text-base font-medium">
            Join 230,000+ Families
          </span>
        </AnimatedSection>

        {/* Main Heading */}
        <AnimatedSection
          animation="fadeUp"
          delay={0.2}
          className="max-w-full sm:max-w-4xl lg:max-w-5xl xl:max-w-[1121px]"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight sm:leading-relaxed lg:leading-[70px] capitalize tracking-tight sm:tracking-normal mb-6 sm:mb-8">
            Ready to make your child's screen truly safe?
          </h2>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-[18px] text-white/90 tracking-tight sm:tracking-normal max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-[1002px] mx-auto mb-4 sm:mb-6"
          >
            Control what your kids see, set healthy screen time limits, and watch them thrive in a secure digital environment. No more fights over screens—just peace of mind for you and safe exploration for them.
          </motion.p>
        </AnimatedSection>

        {/* Features List */}
        <AnimatedSection
          animation="fadeUp"
          delay={0.3}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 items-center justify-center mb-6 sm:mb-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                x: 5,
                transition: { duration: 0.2 }
              }}
              className="flex items-center gap-2 sm:gap-3 group"
            >
              <motion.div
                variants={itemVariants}
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.5 }
                }}
                className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
              >
                <img
                  src={`${base}/tick-icon-1.svg`}
                  alt="Checkmark"
                  className="w-full h-full filter brightness-0 invert"
                />
              </motion.div>
              <span className="text-white text-base sm:text-lg md:text-xl font-medium">
                {feature}
              </span>
            </motion.div>
          ))}
        </AnimatedSection>

        {/* App Store Badges Only */}
        <AnimatedSection
          animation="fadeUp"
          delay={0.4}
          className="flex flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center"
        >
          <motion.a
            href="#"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            whileTap={{
              scale: 0.97,
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
            }}
            className="w-1/2 sm:w-[170px] md:w-[175px] lg:w-[180px] h-12 sm:h-11 md:h-12 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
          >
            <img
              src={`${base}/app-store-badge.svg`}
              alt="Download on App Store"
              className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
            />
          </motion.a>
          <motion.a
            href="#"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            whileTap={{
              scale: 0.97,
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
            }}
            className="w-1/2 sm:w-[170px] md:w-[175px] lg:w-[180px] h-12 sm:h-11 md:h-12 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
          >
            <img
              src={`${base}/google-play-badge.svg`}
              alt="Get it on Google Play"
              className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
            />
          </motion.a>
        </AnimatedSection>

        {/* Footer */}
        <AnimatedSection
          animation="fadeUp"
          delay={0.5}
        >
          <motion.p
            variants={itemVariants}
            className="text-white/80 text-sm sm:text-base italic"
          >
            Made with love for Muslim families worldwide
          </motion.p>
        </AnimatedSection>
      </motion.div>
    </div>
  );
};

export default SafeScreenAnimated;