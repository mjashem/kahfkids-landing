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