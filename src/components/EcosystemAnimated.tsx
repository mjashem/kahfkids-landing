import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { useState, useEffect } from 'react';

const EcosystemAnimated = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768); // md breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  const contentFeatures = [
    {
      icon: "/25e50a221f706eb2892661d26564dfbec384df51.svg",
      title: "Streaming Library",
      backgroundFrame: "/e2d4cd4a3f54fd58990916109f2c8f09eba87dd8.svg"
    },
    {
      icon: "/1b60bf0b14626409fe341a60b3e0da21bf690dc0.svg",
      title: "Interactive Courses",
      backgroundFrame: "/10512204f621f20a64c4e944c914607168149db8.svg"
    },
    {
      icon: "/77c525ad8e6e10f769aabd3b336357b6b62118e2.svg",
      title: "E-Books & Stories",
      backgroundFrame: "/a6b048f83cf47ed0e543d50752db771e6ab6d8fc.svg"
    },
    {
      icon: "/8fd3488e7151bca979dad01fd487918e9b2e3a6b.svg",
      title: "Games & Quran",
      backgroundFrame: "/4d1d86094fdde5cc67991f4fb03b2b3f07adef9a.svg"
    }
  ];

  const safetyFeatures = [
    {
      icon: "/648c015e1bc75a5709e8172500a674aa5319ec3c.svg",
      title: "No Ads. No Algorithms.",
      backgroundFrame: "/e2d4cd4a3f54fd58990916109f2c8f09eba87dd8.svg"
    },
    {
      icon: "/99217ec267233dbeab55899d2f6c928c7cdf04e1.svg",
      title: "Multiple Kids Profiles",
      backgroundFrame: "/10512204f621f20a64c4e944c914607168149db8.svg"
    },
    {
      icon: "/103d5ca0b6b3e90409613886b5d26247c27b2e4c.svg",
      title: "Screen-Time Manage",
      backgroundFrame: "/a6b048f83cf47ed0e543d50752db771e6ab6d8fc.svg"
    },
    {
      icon: "/cb26076868ebe8f00a67808f4e132a751390cad6.svg",
      title: "Reports & App Blocker",
      backgroundFrame: "/4d1d86094fdde5cc67991f4fb03b2b3f07adef9a.svg"
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
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        delay: 0.2
      }
    },
    hover: {
      scale: 1.15,
      rotate: 5,
      transition: {
        duration: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3
      }
    },
    hover: {
      color: "#4F46E5",
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <div className="bg-[#fffbfb] py-28 px-4 sm:px-6 lg:px-8 lg:pb-85 overflow-x-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl flex flex-col gap-20 lg:gap-80"
      >
        {/* Content Features Section */}
        <AnimatedSection animation="fadeUp" delay={0.2} className="flex flex-col gap-10 items-center">
          <h2 className="text-[36px] font-semibold text-[#222222] leading-normal capitalize tracking-[-0.36px] text-center w-full max-w-[676px] font-['Baloo_2:SemiBold',_sans-serif]">
            Watch, Read, Play & Learn - All in One App for kids
          </h2>

          {/* Mobile Layout - Single Column */}
          <div className="flex flex-col items-center gap-8 md:!hidden w-full">
          {contentFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              className="relative flex flex-col items-center justify-center gap-3 h-[200px] w-full max-w-[250px] cursor-pointer"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={feature.backgroundFrame}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="relative z-10 flex flex-col items-center gap-3">
                <motion.div
                  variants={iconVariants}
                  className="w-8 h-8"
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
                <motion.p
                  variants={textVariants}
                  className="font-['Baloo_2:Medium',_sans-serif] font-medium leading-[22px] text-[#222222] text-[20px] text-center max-w-[200px]"
                >
                  {feature.title}
                </motion.p>
              </div>
            </motion.div>
          ))}
          </div>

        {/* Desktop Layout - Staggered Grid */}
        {isDesktop && (
          <div className="relative inline-grid leading-[0] place-items-start w-full" style={{ gridTemplateColumns: 'max-content', gridTemplateRows: 'max-content' }}>
              {contentFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                whileTap="tap"
                className="absolute box-border flex flex-col gap-[12.166px] items-center justify-center h-[182px] px-[5.066px] py-[29.383px] w-[240.56px] cursor-pointer"
                style={{
                  marginLeft: index === 0 ? '0px' : index === 1 ? '285.563px' : index === 2 ? '571.117px' : '856.68px',
                  marginTop: index === 1 || index === 3 ? '30px' : '0px'
                }}
              >
                <div className="absolute h-[179px] left-0 top-0 w-[240.557px] z-0">
                  <img
                    src={feature.backgroundFrame}
                    alt=""
                    className="block max-w-none size-full"
                  />
                </div>
                <motion.div
                  variants={iconVariants}
                  className="relative shrink-0 w-[30.415px] h-[30.415px] z-10"
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="block max-w-none size-full"
                  />
                </motion.div>
                <motion.p
                  variants={textVariants}
                  className="font-['Baloo_2:Medium',_sans-serif] font-medium leading-[22px] text-[#222222] text-[20px] text-center z-10 max-w-[200px]"
                >
                  {feature.title}
                </motion.p>
              </motion.div>
            ))}
            </div>
          )}
        </AnimatedSection>

        {/* Safety Features Section */}
        <AnimatedSection animation="fadeUp" delay={0.4} className="flex flex-col gap-10 items-center">
          <h2 className="text-[36px] font-semibold text-[#222222] leading-[70px] capitalize tracking-[-0.36px] text-center w-full max-w-[676px] font-['Baloo_2:SemiBold',_sans-serif]">
            Safety first - built for parents
          </h2>

          {/* Mobile Layout - Single Column */}
          <div className="flex flex-col items-center gap-8 md:!hidden w-full">
          {safetyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              className="relative flex flex-col items-center justify-center gap-3 h-[200px] w-full max-w-[250px] cursor-pointer"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={feature.backgroundFrame}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="relative z-10 flex flex-col items-center gap-3">
                <motion.div
                  variants={iconVariants}
                  className="w-8 h-8"
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
                <motion.p
                  variants={textVariants}
                  className="font-['Baloo_2:Medium',_sans-serif] font-medium leading-[22px] text-[#222222] text-[20px] text-center max-w-[200px]"
                >
                  {feature.title}
                </motion.p>
              </div>
            </motion.div>
          ))}
          </div>

        {/* Desktop Layout - Staggered Grid */}
        {isDesktop && (
          <div className="relative inline-grid leading-[0] place-items-start w-full" style={{ gridTemplateColumns: 'max-content', gridTemplateRows: 'max-content' }}>
              {safetyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                whileTap="tap"
                className="absolute box-border flex flex-col gap-[12.166px] items-center justify-center h-[182px] px-[5.066px] py-[29.383px] w-[240.56px] cursor-pointer"
                style={{
                  marginLeft: index === 0 ? '0px' : index === 1 ? '285.563px' : index === 2 ? '571.117px' : '856.68px',
                  marginTop: index === 1 || index === 3 ? '30px' : '0px'
                }}
              >
                <div className="absolute h-[179px] left-0 top-0 w-[240.557px] z-0">
                  <img
                    src={feature.backgroundFrame}
                    alt=""
                    className="block max-w-none size-full"
                  />
                </div>
                <motion.div
                  variants={iconVariants}
                  className="relative shrink-0 w-[30px] h-[30px] z-10"
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="block max-w-none size-full"
                  />
                </motion.div>
                <motion.p
                  variants={textVariants}
                  className="font-['Baloo_2:Medium',_sans-serif] font-medium leading-[22px] text-[#222222] text-[20px] text-center z-10 max-w-[200px]"
                >
                  {feature.title}
                </motion.p>
              </motion.div>
              ))}
            </div>
          )}
        </AnimatedSection>
      </motion.div>
    </div>
  );
};

export default EcosystemAnimated;