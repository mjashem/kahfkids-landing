import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import StickyCard from './StickyCard';

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

  
  return (
    <div className="bg-[#faefef] py-12 lg:py-20 px-4 md:px-[159px]">
      {/* Sticky Cards Container */}
      <div ref={containerRef} className="relative">
        {/* Header as a sticky element in the sequence */}
        <div
          className="relative"
          style={{
            position: 'sticky',
            top: '0',
            zIndex: 0, // Highest z-index to stay on top
            height: '200px'
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="absolute inset-0 flex items-center justify-center bg-[#faefef]"
          >
            <div className="max-w-6xl mx-auto text-center py-6 lg:py-8 px-4">
              <h2 className="text-[28px] lg:text-[42px] font-semibold text-[#222222] leading-[40px] lg:leading-[70px] tracking-[-0.42px] mb-4 lg:mb-5 capitalize">
                Available Features in Kahf Kids
              </h2>
              <p className="text-[16px] lg:text-[18px] text-[#4a4b4d] tracking-[-0.18px]">
                Lorem ipsum dolor sit amet consectetur. Snsecteturm dolor sit amet cosadd.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        {cardsData.map((card, index) => (
          <StickyCard
            key={card.id}
            card={card}
            index={index}
            totalCards={cardsData.length}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesAnimated;