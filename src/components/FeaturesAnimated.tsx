import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Card data structure
const cardsData = [
  {
    id: 1,
    title: "Seamless Video watching",
    features: [
      "YouTube Like Interface",
      "Expert-Approved Videos (14K+) – Handpicked by educators.",
      "Video Filter – Parents can change video settings",
      "Child-Lock Fullscreen Mode"
    ],
    image: "/8ddecc66e042270dc07d1dfc91720cda161f11ca.png",
    imageAlt: "Video feature preview",
    backgroundSvg: "/ae3717db0f2d91cf80c0384c9f239aead67fa96a.svg",
    tickIcon: "/0a2110529c0182290d362ea1637ebf4fddce305d.svg"
  },
  {
    id: 2,
    title: "Parental Controls",
    features: [
      "AppGuard (Premium) – Locks kids inside KahfKids (no exit without PIN).",
      "Watch Time Limit – Set daily limits",
      "Games On/Off option & Set Up Password",
      "Video Filter Option & Theme Changing"
    ],
    images: [
      "/e797017022f1be232c6daebc3ba2ade3d4fd5834.png",
      "/d7fc10a6763216ba31e9457dacada447e7750416.png"
    ],
    imageAlt: ["Parental controls top", "Parental controls bottom"],
    isStacked: true,
    backgroundSvg: "/34a08a05c8f525a5f3342655f9bbd32a73fdf157.svg",
    tickIcon: "/95e522db57601cfbfa3033afdd645dc5d2643324.svg"
  },
  {
    id: 3,
    title: "Digital Quran App",
    features: [
      "Audio Recitations",
      "Auto-Loop Ayahs – Perfect for memorization.",
      "Multiple Translations – Bangla, English & more.",
      "Last-Read History & Bookmark"
    ],
    image: "/cae6132d6726f0142a5abb6a1f4a459e4779e1b8.png",
    imageAlt: "Digital Quran app preview",
    backgroundSvg: "/2d40020a2f032826354b02fe447ae8ce898cf2fa.svg",
    tickIcon: "/5f9ede447d45841dbca32696a6283be3300b68b9.svg"
  },
  {
    id: 4,
    title: "Interactive Games",
    features: [
      "Free Educational Games – Brain-boosting activities.",
      "Premium Games – Extra engaging, skill-building games."
    ],
    image: "/e8708a3d3bd151bc79611ec4e5ee8d5012894a78.png",
    imageAlt: "Interactive games preview",
    backgroundSvg: "/8d9c954d65f666b7ad2e9d4964c8d7160338e9a3.svg",
    tickIcon: "/dc023faa25962797083f7f014de1b2501f4866f1.svg"
  },
  {
    id: 5,
    title: "Courses",
    features: [
      "Free Educational Games – Brain-boosting activities.",
      "Premium Games – Extra engaging, skill-building games."
    ],
    image: "/9ddf624ed35c2346c86d9ee92fa4a2dc970c4457.png",
    imageAlt: "Courses preview",
    backgroundSvg: "/d0ce5cdd381f0b1323c9d96ab981bffa32011554.svg",
    tickIcon: "/fbb92885856e7580980b5d6e28bbf209dc738bf9.svg"
  },
  {
    id: 6,
    title: "Calculator, Drawpad, Wallpaper",
    features: [
      "Free Educational Games – Brain-boosting activities.",
      "Premium Games – Extra engaging, skill-building games."
    ],
    image: "/125ed3ef434857c02bc51ba76c31df73c153e8c0.png",
    imageAlt: "Tools preview",
    backgroundSvg: "/7554ca389eb349dd6360f4fb5940c1abd4c4fca2.svg",
    tickIcon: "/34890d8cf644b9e738236c93e3c72c68174b7251.svg"
  }
];

const FeaturesAnimated = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Automatic card rotation
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
      }, 4000); // Change card every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused]);

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

  const currentCard = cardsData[currentCardIndex];

  return (
    <div className="bg-[#faefef] py-20 px-4 md:px-[159px]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <h2 className="text-[42px] font-semibold text-[#222222] leading-[70px] tracking-[-0.42px] mb-5 capitalize">
            Available Features in Kahf Kids
          </h2>
          <p className="text-[18px] text-[#4a4b4d] tracking-[-0.18px]">
            Lorem ipsum dolor sit amet consectetur. Snsecteturm dolor sit amet cosadd.
          </p>
        </motion.div>

        <div className="relative" style={{ minHeight: '450px' }}>
        <AnimatePresence mode="sync">
          <motion.div
            key={currentCard.id}
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -30 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(/b735a4b1560e335b3817dba23ebb3183b366404a.svg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative px-[72px] py-[82px] flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 lg:max-w-[525px]">
                <div className="relative mb-8 h-[62px] flex items-center"
                  style={{
                    backgroundImage: `url(${currentCard.backgroundSvg})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'left center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <h3 className="absolute top-[7px] left-[40px] text-[28px] font-semibold text-[#fffbfb] leading-normal capitalize tracking-[-0.28px] z-10">
                    {currentCard.title}
                  </h3>
                </div>

                <div className="px-[40px] py-[10px]">
                  <div className="space-y-5">
                    {currentCard.features.map((item: string, index: number) => (
                      <motion.div
                        key={`${currentCard.id}-feature-${index}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.3 + (index * 0.1),
                          ease: [0.16, 1, 0.3, 1]
                        }}
                        className="flex items-center gap-3"
                      >
                        <div className="flex-shrink-0 w-6 h-6">
                          <img
                            src={currentCard.tickIcon}
                            alt="tick"
                            className="w-full h-full"
                          />
                        </div>
                        <p className="text-[18px] text-[#4a4b4d] tracking-[-0.18px] font-medium">
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="relative rounded-[16px] overflow-hidden lg:w-[340px] lg:h-[310px] w-full h-[350px]"
              >
                {currentCard.isStacked ? (
                  <div className="relative w-full h-full flex flex-col gap-[17.854px]">
                    <div className="h-[144.825px] rounded-[16px] overflow-hidden">
                      <img
                        src={currentCard.images![0]}
                        alt={currentCard.imageAlt![0]}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="h-[146.068px] rounded-[16px] overflow-hidden">
                      <img
                        src={currentCard.images![1]}
                        alt={currentCard.imageAlt![1]}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ) : (
                  <img
                    src={currentCard.image}
                    alt={Array.isArray(currentCard.imageAlt) ? currentCard.imageAlt[0] : currentCard.imageAlt}
                    className="w-full h-full object-cover"
                  />
                )}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
        </div>

        <motion.div
          variants={itemVariants}
          className="relative h-[77px]"
        >
          <div
            className="absolute inset-0 bg-[#fffbfb] shadow-[0px_-2px_14px_0px_rgba(213,179,179,0.25)]"
            style={{
              backgroundImage: `url(/6031adc49d0406a1240387f50dccbf3dd6fc151f.svg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FeaturesAnimated;