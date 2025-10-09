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
    image: "/feature-image-1.png",
    imageAlt: "Video feature preview",
    backgroundSvg: "/feature-background-1.svg",
    tickIcon: "/tick-icon-1.svg"
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
      "/feature-image-1-hover.png",
      "/feature-image-1-active.png"
    ],
    imageAlt: ["Parental controls top", "Parental controls bottom"],
    isStacked: true,
    backgroundSvg: "/feature-background-2.svg",
    tickIcon: "/tick-icon-2.svg"
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
    image: "/feature-image-2.png",
    imageAlt: "Digital Quran app preview",
    backgroundSvg: "/feature-background-3.svg",
    tickIcon: "/tick-icon-3.svg"
  },
  {
    id: 4,
    title: "Interactive Games",
    features: [
      "Free Educational Games – Brain-boosting activities.",
      "Premium Games – Extra engaging, skill-building games."
    ],
    image: "/feature-image-2-hover.png",
    imageAlt: "Interactive games preview",
    backgroundSvg: "/feature-background-4.svg",
    tickIcon: "/tick-icon-4.svg"
  },
  {
    id: 5,
    title: "Courses",
    features: [
      "Free Educational Games – Brain-boosting activities.",
      "Premium Games – Extra engaging, skill-building games."
    ],
    image: "/feature-image-3.png",
    imageAlt: "Courses preview",
    backgroundSvg: "/feature-background-5.svg",
    tickIcon: "/tick-icon-5.svg"
  },
  {
    id: 6,
    title: "Calculator, Drawpad, Wallpaper",
    features: [
      "Free Educational Games – Brain-boosting activities.",
      "Premium Games – Extra engaging, skill-building games."
    ],
    image: "/feature-image-3-hover.png",
    imageAlt: "Tools preview",
    backgroundSvg: "/feature-background-6.svg",
    tickIcon: "/tick-icon-6.svg"
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