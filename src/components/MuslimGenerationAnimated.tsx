import { motion } from 'framer-motion';

const MuslimGenerationAnimated = () => {
  const values = [
    {
      icon: "/20e040a21212644c38f1d506cd7751e86ce79481.svg",
      title: "Eeman",
      description: "Strengthening faith through engaging Islamic content."
    },
    {
      icon: "/116f44fbeefae0ed7f6abcc7a7ccc1f19757e4e7.svg",
      title: "Akhlaq",
      description: "Building character and beautiful manners."
    },
    {
      icon: "/518ceaaf119d4f469af89dcc1e02fd50a5919375.svg",
      title: "Ilm",
      description: "Fostering love for learning and knowledge."
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

  return (
    <div className="bg-gradient-to-br from-orange-500 to-pink-600 py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl flex flex-col gap-20 items-center"
      >
        <motion.div
          variants={containerVariants}
          className="flex flex-col gap-[80px] items-center text-center"
        >
          <motion.div
            variants={itemVariants}
            className="text-white max-w-[1121px]"
          >
            <h2 className="text-[42px] font-semibold leading-[70px] capitalize tracking-[-0.42px] mb-5">
              Raising the next generation of muslims
            </h2>
            <p className="text-[18px] tracking-[-0.18px] max-w-[1002px] mx-auto">
              To nurture young minds with eeman, akhlaq, and ilm, ensuring their digital world is safe, ethical, and enriching for their faith journey.
            </p>
          </motion.div>

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
      </motion.div>
    </div>
  );
};

export default MuslimGenerationAnimated;