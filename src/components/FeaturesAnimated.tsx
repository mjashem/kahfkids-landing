import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress for the entire container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

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

  // Create a separate component for each card to handle useScroll properly
  const StickyCard = ({ card, index, totalCards }: { card: typeof cardsData[0]; index: number; totalCards: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    // Track scroll progress for this specific card
    const { scrollYProgress: cardScrollProgress } = useScroll({
      target: cardRef,
      offset: ["start end", "end start"]
    });

    // Transform values for stacking effect
    // First card (index 0): no initial animation, stays in place
    // Other cards: animate from bottom
    const scale = useTransform(cardScrollProgress, [0, 0.5, 1], [
      index === 0 ? 1 : 0.9,
      1,
      1
    ]);
    const y = useTransform(cardScrollProgress, [0, 0.5, 1], [
      index === 0 ? 0 : 50,
      0,
      0
    ]);
    const opacity = useTransform(cardScrollProgress, [0, 0.3, 1], [
      index === 0 ? 1 : 0,
      1,
      1
    ]);

    return (
      <div
        ref={cardRef}
        className="relative"
        style={{
          position: 'sticky',
          top: '200px', // Account for fixed header height
          zIndex: index + 1,
          height: '450px' // Match the original card height
        }}
      >
        <motion.div
          style={{
            scale,
            y,
            opacity
          }}
          className="absolute inset-0 flex items-center justify-center px-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="w-full"
            style={{
              backgroundImage: `url(/b735a4b1560e335b3817dba23ebb3183b366404a.svg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="relative px-[72px] py-[82px] flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 lg:max-w-[525px]">
                <div
                  className="relative mb-8 h-[62px] flex items-center"
                  style={{
                    backgroundImage: `url(${card.backgroundSvg})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'left center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <h3 className="absolute top-[7px] left-[40px] text-[28px] font-semibold text-[#fffbfb] leading-normal capitalize tracking-[-0.28px] z-10">
                    {card.title}
                  </h3>
                </div>

                <div className="px-[40px] py-[10px]">
                  <div className="space-y-5">
                    {card.features.map((item: string, featureIndex: number) => (
                      <motion.div
                        key={`${card.id}-feature-${featureIndex}`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: featureIndex * 0.1,
                          ease: [0.16, 1, 0.3, 1]
                        }}
                        className="flex items-center gap-3"
                      >
                        <div className="flex-shrink-0 w-6 h-6">
                          <img
                            src={card.tickIcon}
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
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="relative rounded-[16px] overflow-hidden lg:w-[340px] lg:h-[310px] w-full h-[350px]"
              >
                {card.isStacked ? (
                  <div className="relative w-full h-full flex flex-col gap-[17.854px]">
                    <div className="h-[144.825px] rounded-[16px] overflow-hidden">
                      <img
                        src={card.images![0]}
                        alt={card.imageAlt![0]}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="h-[146.068px] rounded-[16px] overflow-hidden">
                      <img
                        src={card.images![1]}
                        alt={card.imageAlt![1]}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ) : (
                  <img
                    src={card.image}
                    alt={Array.isArray(card.imageAlt) ? card.imageAlt[0] : card.imageAlt}
                    className="w-full h-full object-cover"
                  />
                )}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    );
  };

  return (
    <div className="bg-[#faefef] py-20 px-4 md:px-[159px]">
      {/* Fixed Header */}
      <div className="sticky top-0 z-50 bg-[#faefef] py-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto text-center"
        >
          <h2 className="text-[42px] font-semibold text-[#222222] leading-[70px] tracking-[-0.42px] mb-5 capitalize">
            Available Features in Kahf Kids
          </h2>
          <p className="text-[18px] text-[#4a4b4d] tracking-[-0.18px]">
            Lorem ipsum dolor sit amet consectetur. Snsecteturm dolor sit amet cosadd.
          </p>
        </motion.div>
      </div>

      {/* Sticky Cards Container */}
      <div ref={containerRef} className="relative">
        {cardsData.map((card, index) => (
          <StickyCard
            key={card.id}
            card={card}
            index={index}
            totalCards={cardsData.length}
          />
        ))}

        {/* Footer decorative element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-[77px] mt-20"
        >
          <div
            className="absolute inset-0 bg-[#fffbfb] shadow-[0px_-2px_14px_0px_rgba(213,179,179,0.25)]"
            style={{
              backgroundImage: `url(/6031adc49d0406a1240387f50dccbf3dd6fc151f.svg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesAnimated;