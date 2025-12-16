import { AnimatedSection } from './AnimatedSection';

// Card data structure
const cardsData = [
  {
    id: 1,
    title: "Replace Unsafe, Uncontrolled YouTube",
    features: [
      "21,000+ safe and handpicked videos. Reviewed by Mufties.",
      "No inappropriate clips, adult jokes, scary scenes or addictive content.",
      "Only Islamic, educational, and child-friendly content."
    ],
    image: "/feature-image-1.png",
    imageAlt: "Safe YouTube videos feature",
    backgroundSvg: "/feature-background-1.svg",
    tickIcon: "/tick-icon-1.svg"
  },
  {
    id: 2,
    title: "Only Watch Videos Parents Add",
    features: [
      "You choose which YouTube videos or playlists your child can watch.",
      "Kids cannot open any outside content.",
      "You can add or remove videos anytime."
    ],
    image: "/feature-image-1-hover.png",
    imageAlt: "Parent-controlled video selection",
    backgroundSvg: "/feature-background-2.svg",
    tickIcon: "/tick-icon-2.svg"
  },
  {
    id: 3,
    title: "Block Addictive Games",
    features: [
      "Block PUBG, Free Fire, Minecraft, and more in one tap.",
      "Games stay on the phone but cannot open without permission.",
      "Kids learn healthy habits and stop overplaying."
    ],
    image: "/feature-image-2.png",
    imageAlt: "Game blocking feature",
    backgroundSvg: "/feature-background-3.svg",
    tickIcon: "/tick-icon-3.svg"
  },
  {
    id: 4,
    title: "Set Daily Time Limits",
    features: [
      "Control how long your child can watch or play each day.",
      "Videos and apps stop automatically when time is up.",
      "No shouting, no arguments, no stress."
    ],
    image: "/feature-image-2-hover.png",
    imageAlt: "Time limit controls",
    backgroundSvg: "/feature-background-4.svg",
    tickIcon: "/tick-icon-4.svg"
  },
  {
    id: 5,
    title: "Block Harmful Apps & Websites",
    features: [
      "Allow only the apps and sites you trust.",
      "Kids cannot open anything unsafe or unapproved.",
      "No accidental browsing or algorithm-based suggestions."
    ],
    image: "/feature-image-3.png",
    imageAlt: "App and website blocking",
    backgroundSvg: "/feature-background-5.svg",
    tickIcon: "/tick-icon-5.svg"
  },
  {
    id: 6,
    title: "Focus on Study Time & Bed Time",
    features: [
      "Automatically block distractions during study hours.",
      "Bedtime mode blocks everything except emergency calls.",
      "Children sleep and study without screen interruptions."
    ],
    image: "/feature-image-3-hover.png",
    imageAlt: "Study and bedtime mode",
    backgroundSvg: "/feature-background-6.svg",
    tickIcon: "/tick-icon-6.svg"
  },
  {
    id: 7,
    title: "Courses, Drawpads & Brain-Boosting Games",
    features: [
      "Kids can learn, draw, create, and solve activities.",
      "Islamic studies, science tools, and creativity apps included.",
      "Every feature promotes growth—not distraction."
    ],
    image: "/feature-image-1.png",
    imageAlt: "Educational activities",
    backgroundSvg: "/feature-background-1.svg",
    tickIcon: "/tick-icon-1.svg"
  },
  {
    id: 8,
    title: "Daily Habit of Qur'an",
    features: [
      "Kids can recite, listen, and memorize Qur'an easily.",
      "Includes translation, loop for memorization, notes, and bookmarks.",
      "Simple and suitable for young learners."
    ],
    images: [
      "/feature-image-1-hover.png",
      "/feature-image-1-active.png"
    ],
    imageAlt: ["Quran app interface", "Quran features"],
    isStacked: true,
    backgroundSvg: "/feature-background-2.svg",
    tickIcon: "/tick-icon-2.svg"
  },
  {
    id: 9,
    title: "Parenting Tips, Support & Consultancy",
    features: [
      "Get guidance on safe digital parenting.",
      "Easy tips for building good habits and character.",
      "Support for raising children in the digital age."
    ],
    image: "/feature-image-2.png",
    imageAlt: "Parenting support resources",
    backgroundSvg: "/feature-background-3.svg",
    tickIcon: "/tick-icon-3.svg"
  },
  {
    id: 10,
    title: "PIN & Password Protected Parental Panel",
    features: [
      "All settings are locked behind a PIN or password.",
      "Kids cannot change time limits, remove blocks, or access controls.",
      "Your rules stay safe and secure."
    ],
    image: "/feature-image-2-hover.png",
    imageAlt: "Secure parental control panel",
    backgroundSvg: "/feature-background-4.svg",
    tickIcon: "/tick-icon-4.svg"
  }
];

// Feature Section Component
const FeatureSection = ({
  feature,
  index,
  isLeft
}: {
  feature: typeof cardsData[0];
  index: number;
  isLeft: boolean;
}) => {
  const sectionNumber = String(index + 1).padStart(2, '0');

  return (
    <div className="py-8 md:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 ${isLeft ? '' : 'lg:flex-row-reverse'}`}>

          {/* Content Column */}
          <div className="flex-1 lg:max-w-[525px]">
            {/* Number Badge */}
            <div className="mb-6 flex items-center">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[#FF6B6B] rounded-full flex items-center justify-center text-white font-bold text-lg lg:text-xl">
                {sectionNumber}
              </div>
            </div>

            {/* Title with background */}
            <div
              className="relative mb-6 h-12 lg:h-16 flex items-center"
              style={{
                backgroundImage: `url(${feature.backgroundSvg})`,
                backgroundSize: 'contain',
                backgroundPosition: 'left center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <h3 className="absolute top-1 left-8 lg:left-10 text-xl lg:text-3xl font-semibold text-[#fffbfb] leading-normal capitalize tracking-[-0.28px] z-10">
                {feature.title}
              </h3>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {feature.features.map((item: string, featureIndex: number) => (
                <AnimatedSection
                  key={`${feature.id}-feature-${featureIndex}`}
                  animation="fadeIn"
                  delay={index * 0.1 + featureIndex * 0.05}
                >
                  <div className="flex items-center gap-3 lg:gap-4">
                    <div className="flex-shrink-0 w-5 h-5 lg:w-6 lg:h-6">
                      <img
                        src={feature.tickIcon}
                        alt="tick"
                        className="w-full h-full"
                      />
                    </div>
                    <p className="text-sm lg:text-lg text-[#4a4b4d] tracking-[-0.18px] font-medium leading-normal">
                      {item}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Visual Column */}
          <div className="flex-1 lg:max-w-[400px]">
            <AnimatedSection
              animation={isLeft ? "slideRight" : "slideLeft"}
              delay={index * 0.1 + 0.2}
            >
              <div
                className="relative rounded-2xl overflow-hidden w-full h-[250px] sm:h-[300px] lg:h-[350px] group transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl"
                style={{ willChange: 'transform' }}
              >
                {feature.isStacked ? (
                  <div className="relative w-full h-full">
                    {/* Mobile: Show only first image */}
                    <div className="lg:hidden w-full h-full rounded-2xl overflow-hidden">
                      <img
                        src={feature.images![0]}
                        alt={feature.imageAlt![0]}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    {/* Desktop: Show both stacked images */}
                    <div className="hidden lg:flex lg:flex-col lg:relative lg:w-full lg:h-full lg:gap-4">
                      <div className="flex-1 rounded-2xl overflow-hidden">
                        <img
                          src={feature.images![0]}
                          alt={feature.imageAlt![0]}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="flex-1 rounded-2xl overflow-hidden">
                        <img
                          src={feature.images![1]}
                          alt={feature.imageAlt![1]}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={feature.image}
                    alt={Array.isArray(feature.imageAlt) ? feature.imageAlt[0] : feature.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturesAnimated = () => {
  return (
    <div className="bg-[#faefef] py-12 lg:py-20">
      {/* Header */}
      <AnimatedSection animation="fadeUp" delay={0}>
        <div className="max-w-6xl mx-auto text-center py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="font-semibold text-[#222222] tracking-[-0.42px] mb-6 lg:mb-8 capitalize"
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.625rem)',
                lineHeight: 'clamp(2.5rem, 5vw, 4.375rem)'
              }}>
            All the Controls You Need — In One Simple App
          </h2>
          <p className="text-[#4a4b4d] tracking-[-0.18px] max-w-2xl mx-auto"
             style={{
               fontSize: 'clamp(1rem, 2vw, 1.25rem)'
             }}>
            Manage what your child watches, learns, and plays with smart filters, app blocking, study-time limits, and curated Islamic content.
          </p>
        </div>
      </AnimatedSection>

      {/* Feature Sections */}
      {cardsData.map((card, index) => (
        <FeatureSection
          key={card.id}
          feature={card}
          index={index}
          isLeft={index % 2 === 0}
        />
      ))}
    </div>
  );
};

export default FeaturesAnimated;