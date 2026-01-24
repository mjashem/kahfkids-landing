import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

interface DevicesAnimatedProps {
  tvMockup?: string;
}

const DevicesAnimated = ({ tvMockup }: DevicesAnimatedProps) => {
  const base = import.meta.env.BASE_URL;
  const mockupSrc = tvMockup || `${base}/tv-mockup.png`;
  const devicePlatforms = [
    { logo: `${base}/roku-logo.png`, name: "Roku" },
    { logo: `${base}/firetv-logo.png`, name: "FireTV" },
    { logo: `${base}/appletv-logo.png`, name: "Apple TV" },
    { logo: `${base}/ios-logo.png`, name: "iOS" },
    { logo: `${base}/android-logo.png`, name: "Android" },
    { logo: `${base}/windows-logo.png`, name: "Windows" },
    { logo: `${base}/lg-logo.png`, name: "LG" },
    { logo: `${base}/sony-logo.png`, name: "Sony" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
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
        duration: 0.25,
        type: "spring" as const,
        stiffness: 150
      }
    }
  };

  return (
    <div className="bg-[#f8f0f0] py-12 sm:py-16 lg:py-20 flex items-center justify-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl flex flex-col gap-8 sm:gap-12 lg:gap-16 items-center w-full"
      >
        <AnimatedSection animation="fadeUp" delay={0} className="text-center max-w-4xl lg:max-w-5xl">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-[#2c2626] leading-tight lg:leading-[70px] capitalize tracking-tight mb-4 sm:mb-6">
            Enjoy Kahf Kids anytime, anywhere
          </h2>
          <p className="text-base sm:text-lg text-[#4a4b4d] tracking-tight max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
            Stream safely on every device—whether it's phones, tablets, smart TVs, or the web. With just one account, your kids can learn, play, and explore across all platforms seamlessly.
          </p>
        </AnimatedSection>

        {/* Device Group Image */}
        <AnimatedSection animation="scaleIn" delay={0.1} className="relative w-full max-w-2xl lg:max-w-4xl h-64 sm:h-80 lg:h-96 flex items-center justify-center">
          <motion.img
            src={mockupSrc}
            alt="Kahf Kids on all devices - TV, MacBook, iPad, and iPhone"
            className="w-full h-full object-contain"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          />
        </AnimatedSection>

        {/* Platform Logos */}
        <AnimatedSection animation="fadeUp" delay={0.2} className="flex flex-col gap-6 sm:gap-8 items-center w-full max-w-4xl">
          {/* Device Platform Logos */}
          <motion.div
            variants={containerVariants}
            className="flex flex-wrap justify-center gap-2 sm:gap-4 lg:gap-6 w-full items-center"
          >
            {devicePlatforms.map((platform, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -6,
                  scale: 1.1,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 25
                  }
                }}
                whileTap={{
                  scale: 0.95,
                  transition: { duration: 0.1 }
                }}
                className="flex items-center justify-center p-2 sm:p-3"
              >
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
      </motion.div>
    </div>
  );
};

export default DevicesAnimated;