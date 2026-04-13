import { AnimatedSection } from './AnimatedSection';

interface FeaturesAnimatedProps {
  optimizedImages?: Record<string, string>;
}

const FeaturesAnimated = ({ optimizedImages = {} }: FeaturesAnimatedProps) => {
  const base = import.meta.env.BASE_URL;

  // Helper function to get optimized image URL
  const getImageUrl = (imageName: string) => {
    return optimizedImages[imageName] || `${base}/${imageName}.png`;
  };

  // Card data structure
  const cardsData = [
    {
      id: 1,
      title: "Replace Unsafe, Uncontrolled YouTube",
      features: [
        "25,000+ safe and handpicked videos. Reviewed by Mufties.",
        "No inappropriate clips, adult jokes, scary scenes or addictive content.",
        "Only Islamic, educational, and child-friendly content."
      ],
      image: getImageUrl('feature-image-1'),
      imageAlt: "Safe YouTube videos feature",
      backgroundSvg: `${base}/feature-background-1.svg`,
      tickIcon: `${base}/tick-icon-1.svg`
    },
  {
      id: 2,
      title: "Only Watch Videos Parents Add",
      features: [
        "You choose which YouTube videos or playlists your child can watch.",
        "Kids cannot open any outside content.",
        "You can add or remove videos anytime."
      ],
      image: getImageUrl('feature-image-2'),
      imageAlt: "Parent-controlled video selection",
      backgroundSvg: `${base}/feature-background-2.svg`,
      tickIcon: `${base}/tick-icon-2.svg`
    },
    {
      id: 3,
      title: "Block Addictive Games",
      features: [
        "Block PUBG, Free Fire, Minecraft, and more in one tap.",
        "Games stay on the phone but cannot open without permission.",
        "Kids learn healthy habits and stop overplaying."
      ],
      image: getImageUrl('feature-image-3'),
      imageAlt: "Game blocking feature",
      backgroundSvg: `${base}/feature-background-3.svg`,
      tickIcon: `${base}/tick-icon-3.svg`
    },
    {
      id: 4,
      title: "Set Daily Time Limits",
      features: [
        "Control how long your child can watch or play each day.",
        "Videos and apps stop automatically when time is up.",
        "No shouting, no arguments, no stress."
      ],
      image: getImageUrl('feature-image-4'),
      imageAlt: "Time limit controls",
      backgroundSvg: `${base}/feature-background-4.svg`,
      tickIcon: `${base}/tick-icon-4.svg`
    },
    {
      id: 5,
      title: "Block Harmful Apps & Websites",
      features: [
        "Allow only the apps and sites you trust.",
        "Kids cannot open anything unsafe or unapproved.",
        "No accidental browsing or algorithm-based suggestions."
      ],
      image: getImageUrl('feature-image-5'),
      imageAlt: "App and website blocking",
      backgroundSvg: `${base}/feature-background-5.svg`,
      tickIcon: `${base}/tick-icon-5.svg`
    },
    {
      id: 6,
      title: "Focus on Study Time & Bed Time",
      features: [
        "Instantly block all apps with one tap during study or sleep time",
        "Set automatic blocking based on daily study and sleep schedules",
        "Limit screen time to prevent late nights and improve focus"
      ],
      image: getImageUrl('feature-image-6'),
      imageAlt: "Study and bedtime mode",
      backgroundSvg: `${base}/feature-background-6.svg`,
      tickIcon: `${base}/tick-icon-6.svg`
    },
    {
      id: 7,
      title: "Courses, Drawpads & Brain-Boosting Games",
      features: [
        "Kids can learn, draw, create, and solve activities.",
        "Islamic studies, science tools, and creativity apps included.",
        "Every feature promotes growth—not distraction."
      ],
      image: getImageUrl('feature-image-7'),
      imageAlt: "Educational activities",
      backgroundSvg: `${base}/feature-background-1.svg`,
      tickIcon: `${base}/tick-icon-1.svg`
    },
    {
      id: 8,
      title: "Daily Habit of Qur'an",
      features: [
        "Kids can recite, listen, and memorize Qur'an easily.",
        "Includes translation, loop for memorization, notes, and bookmarks.",
        "Simple and suitable for young learners."
      ],
      image: getImageUrl('feature-image-8'),
      imageAlt: "Quran app interface",
      isStacked: false,
      backgroundSvg: `${base}/feature-background-2.svg`,
      tickIcon: `${base}/tick-icon-2.svg`
    },
    {
      id: 9,
      title: "Parenting Tips, Support & Consultancy",
      features: [
        "Get guidance on safe digital parenting.",
        "Easy tips for building good habits and character.",
        "Support for raising children in the digital age."
      ],
      image: getImageUrl('feature-image-9'),
      imageAlt: "Parenting support resources",
      backgroundSvg: `${base}/feature-background-3.svg`,
      tickIcon: `${base}/tick-icon-3.svg`
    },
    {
      id: 10,
      title: "PIN & Password Protected Parental Panel",
      features: [
        "All settings are locked behind a PIN or password.",
        "Kids cannot change time limits, remove blocks, or access controls.",
        "Your rules stay safe and secure."
      ],
      image: getImageUrl('feature-image-10'),
      imageAlt: "Secure parental control panel",
      backgroundSvg: `${base}/feature-background-4.svg`,
      tickIcon: `${base}/tick-icon-4.svg`
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
  return (
    <div className="py-4 md:py-6 lg:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-8 lg:gap-12 text-center lg:text-left ${isLeft ? '' : 'lg:flex-row-reverse'}`}>

          {/* Content Column */}
          <div className="flex-1 lg:max-w-[525px]">
            {/* Title with background */}
            <AnimatedSection
              animation={isLeft ? "slideRight" : "slideLeft"}
              delay={index * 0.01}
              duration={0.25}
              threshold={0.3}
            >
              <h3
                className="mb-6 text-xl lg:text-2xl font-semibold leading-tight capitalize tracking-[-0.28px] inline-block"
                style={{
                  backgroundImage: `url(${feature.backgroundSvg})`,
                  backgroundSize: '100% 100%',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  color: '#fffbfb',
                  paddingLeft: '2.5rem',
                  paddingRight: '2rem',
                  paddingTop: '0.5rem',
                  paddingBottom: '0.5rem'
                }}
              >
                {feature.title}
              </h3>
            </AnimatedSection>

            {/* Features List */}
            <div className="space-y-4">
              {feature.features.map((item: string, featureIndex: number) => (
                <AnimatedSection
                  key={`${feature.id}-feature-${featureIndex}`}
                  animation="fadeIn"
                  delay={index * 0.01 + featureIndex * 0.005}
                  duration={0.2}
                  threshold={0.3}
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
          <div className="flex-1 lg:max-w-[450px]">
            <AnimatedSection
              animation={isLeft ? "slideRight" : "slideLeft"}
              delay={index * 0.01 + 0.02}
              duration={0.25}
              threshold={0.3}
            >
              <div
                className="relative rounded-2xl overflow-hidden w-full h-[220px] sm:h-[260px] lg:h-[300px] group transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl"
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

return (
    <div id="features" className="bg-[#faefef] pb-12">
      {/* Header */}
      <AnimatedSection animation="fadeUp" delay={0} duration={0.25} threshold={0.3}>
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