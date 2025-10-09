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
    <div className="py-20" style={{background: 'linear-gradient(118.88deg, #DD4E6D 22.43%, #E15353 95.02%)'}}>
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
          className="flex flex-col gap-[80px] items-center text-center"
        >
          <div className="text-white max-w-[1121px]">
            <h2 className="text-[42px] font-semibold leading-[70px] capitalize tracking-[-0.42px] mb-5">
              Raising the next generation of muslims
            </h2>
            <p className="text-[18px] tracking-[-0.18px] max-w-[1002px] mx-auto">
              To nurture young minds with eeman, akhlaq, and ilm, ensuring their digital world is safe, ethical, and enriching for their faith journey.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            className="flex flex-col lg:flex-row gap-[80px] items-center justify-center"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="flex flex-col gap-[10px] items-center max-w-[280px] group"
              >
                <motion.div
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, 5, -5, 0],
                    transition: { duration: 0.5 }
                  }}
                  className="bg-white/20 backdrop-blur-sm border border-white/30 p-3 rounded-[10px] w-[46px] h-[46px] flex items-center justify-center"
                >
                  <img
                    src={value.icon}
                    alt={value.title}
                    className="w-[24px] h-[24px] filter brightness-0 invert"
                  />
                </motion.div>
                <div className="text-center">
                  <h3 className="text-[24px] font-semibold text-white mb-1">
                    {value.title}
                  </h3>
                  <p className="text-[16px] text-white/90 tracking-[-0.16px] leading-relaxed">
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
          className="bg-[#222222] text-white px-[60px] py-[14px] rounded-[8px] text-[14px] font-medium hover:bg-[#333333] transition-colors duration-300"
        >
          Join Our Community
        </motion.button>
      </AnimatedSection>
      </motion.div>
    </div>
  );
};

export default MuslimGenerationAnimated;