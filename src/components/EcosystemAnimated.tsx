import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

const EcosystemAnimated = () => {
  const contentFeatures = [
    {
      icon: "/25e50a221f706eb2892661d26564dfbec384df51.svg",
      title: "Streaming Library",
      borderColor: "border-[#e9a5aa]"
    },
    {
      icon: "/1b60bf0b14626409fe341a60b3e0da21bf690dc0.svg",
      title: "Interactive Courses",
      borderColor: "border-[#7496d5]"
    },
    {
      icon: "/77c525ad8e6e10f769aabd3b336357b6b62118e2.svg",
      title: "E-Books & Stories",
      borderColor: "border-[#c4d38d]"
    },
    {
      icon: "/8fd3488e7151bca979dad01fd487918e9b2e3a6b.svg",
      title: "Games & Quran",
      borderColor: "border-[#b89ad7]"
    }
  ];

  const safetyFeatures = [
    {
      icon: "/648c015e1bc75a5709e8172500a674aa5319ec3c.svg",
      title: "No Ads. No Algorithms.",
      borderColor: "border-[#e9a5aa]"
    },
    {
      icon: "/99217ec267233dbeab55899d2f6c928c7cdf04e1.svg",
      title: "Multiple Kids Profiles",
      borderColor: "border-[#7496d5]"
    },
    {
      icon: "/103d5ca0b6b3e90409613886b5d26247c27b2e4c.svg",
      title: "Screen-Time Manage",
      borderColor: "border-[#c4d38d]"
    },
    {
      icon: "/cb26076868ebe8f00a67808f4e132a751390cad6.svg",
      title: "Reports & App Blocker",
      borderColor: "border-[#b89ad7]"
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
    <div className="bg-[#fffbfb] py-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl flex flex-col gap-40"
      >
        {/* Content Features Section */}
        <AnimatedSection animation="fadeUp" delay={0.2} className="flex flex-col gap-10 items-center">
          <h2 className="text-[36px] font-semibold text-[#222222] leading-normal capitalize tracking-[-0.36px] text-center w-full max-w-[676px]">
            Watch, Read, Play & Learn - All in One App for kids
          </h2>

          <motion.div
            variants={containerVariants}
            className="flex flex-wrap gap-5 justify-center"
          >
            {contentFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className={`bg-white border-2 ${feature.borderColor} rounded-[20px] h-[90px] px-[40px] py-[30px] flex items-center justify-center min-w-[220px] max-w-[280px] flex-1`}
              >
                <div className="flex items-center gap-3 w-full">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-[30px] h-[30px] flex-shrink-0"
                  />
                  <p className="text-[20px] font-medium text-[#222222] leading-[22px] text-center">
                    {feature.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* Safety Features Section */}
        <AnimatedSection animation="fadeUp" delay={0.4} className="flex flex-col gap-10 items-center">
          <h2 className="text-[36px] font-semibold text-[#222222] leading-[70px] capitalize tracking-[-0.36px] text-center w-full max-w-[676px]">
            Safety first - built for parents
          </h2>

          <motion.div
            variants={containerVariants}
            className="flex flex-wrap gap-5 justify-center"
          >
            {safetyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className={`bg-white border-2 ${feature.borderColor} rounded-[20px] h-[90px] px-[40px] py-[30px] flex items-center justify-center min-w-[220px] max-w-[280px] flex-1`}
              >
                <div className="flex items-center gap-3 w-full">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-[30px] h-[30px] flex-shrink-0"
                  />
                  <p className="text-[20px] font-medium text-[#222222] leading-[22px] text-center">
                    {feature.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
      </motion.div>
    </div>
  );
};

export default EcosystemAnimated;