import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

const MuslimGenerationAnimated = () => {
  const values = [
    {
      icon: "/muslim-icon-1.svg",
      title: "Eeman",
      description: "Strengthening faith through engaging Islamic content."
    },
    {
      icon: "/muslim-icon-2.svg",
      title: "Akhlaq",
      description: "Building character and beautiful manners."
    },
    {
      icon: "/muslim-icon-3.svg",
      title: "Ilm",
      description: "Fostering love for learning and knowledge."
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25
      }
    }
  };

  return (
    <div className="py-8 md:py-12" style={{background: 'linear-gradient(118.88deg, #DD4E6D 22.43%, #E15353 95.02%)'}}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl flex flex-col gap-20 items-center"
      >
        <AnimatedSection
          animation="fadeUp"
          delay={0.2}
          className="flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-[80px] items-center text-center"
        >
          <div className="text-white max-w-full sm:max-w-4xl lg:max-w-5xl xl:max-w-[1121px]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight sm:leading-relaxed lg:leading-[70px] capitalize tracking-tight sm:tracking-normal mb-6 sm:mb-8">
              Raising the next generation of muslims
            </h2>
            <p className="text-base sm:text-lg md:text-[18px] tracking-tight sm:tracking-normal max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-[1002px] mx-auto">
              To nurture young minds with eeman, akhlaq, and ilm, ensuring their digital world is safe, ethical, and enriching for their faith journey.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            className="flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-[80px] items-center justify-center"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                whileTap={{
                  y: -4,
                  transition: { duration: 0.15 }
                }}
                className="flex flex-col gap-2 sm:gap-3 items-center max-w-full sm:max-w-[280px] group"
              >
                <motion.div
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, 5, -5, 0],
                    transition: { duration: 0.5 }
                  }}
                  className="bg-white/20 backdrop-blur-sm border border-white/30 p-2 sm:p-3 rounded-lg sm:rounded-[10px] w-10 h-10 sm:w-11 sm:h-11 lg:w-[46px] lg:h-[46px] flex items-center justify-center"
                >
                  <img
                    src={value.icon}
                    alt={value.title}
                    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[24px] lg:h-[24px] filter brightness-0 invert"
                  />
                </motion.div>
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-1 sm:mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/90 tracking-tight sm:tracking-normal leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        <motion.button
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#222222] text-white px-8 sm:px-12 md:px-[60px] py-3 sm:py-[14px] rounded-lg sm:rounded-[8px] text-sm sm:text-[14px] font-medium hover:bg-[#333333] transition-colors duration-300"
        >
          Join Our Community
        </motion.button>
      </AnimatedSection>
      </motion.div>
    </div>
  );
};

export default MuslimGenerationAnimated;