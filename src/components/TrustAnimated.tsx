import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

// ============================================================================
// DATA INTERFACES
// ============================================================================

interface ImpactMetric {
  id: number;
  value: string;
  label: string;
  description: string;
  icon: string;
  color: string;
}

interface FeaturedInLogo {
  id: number;
  name: string;
  logo: string;
  url?: string;
}

// ============================================================================
// DATA
// ============================================================================

// Value-Focused Impact Metrics - Compact horizontal bar
const impactMetricsData: ImpactMetric[] = [
  {
    id: 1,
    value: "270K+",
    label: "Trusted By Parents",
    description: "Muslim families worldwide trust Kahf Kids for their children's digital safety",
    icon: `<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
    </svg>`,
    color: "text-[#E05C41]"
  },
  {
    id: 2,
    value: "23K+",
    label: "Mufties Approved Videos",
    description: "Islamic scholars verify every piece of content for authenticity",
    icon: `<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
    </svg>`,
    color: "text-[#E05C41]"
  },
  {
    id: 3,
    value: "100%",
    label: "Ads Free",
    description: "Zero advertisements for a pure, distraction-free learning experience",
    icon: `<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
      <circle cx="12" cy="12" r="9" stroke-width="2"></circle>
    </svg>`,
    color: "text-[#E05C41]"
  },
  {
    id: 4,
    value: "✓",
    label: "Teacher Approved",
    description: "Educators recommend Kahf Kids for quality Islamic education",
    icon: `<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
    </svg>`,
    color: "text-[#E05C41]"
  }
];


// Featured In - Media logos (actual downloaded logos)
const featuredInData: FeaturedInLogo[] = [
  {
    id: 1,
    name: "Somoy TV",
    logo: `<img loading="lazy" src="${import.meta.env.BASE_URL}somoy-tv-logo.png" alt="Somoy TV" class="h-10 sm:h-12 w-auto object-contain" />`
  },
  {
    id: 2,
    name: "Daily Star",
    logo: `<img loading="lazy" src="${import.meta.env.BASE_URL}daily-star-logo.svg" alt="The Daily Star" class="h-10 w-auto object-contain" />`
  },
  {
    id: 3,
    name: "Future Startup",
    logo: `<img loading="lazy" src="${import.meta.env.BASE_URL}future-startup-logo.png" alt="Future Startup" class="h-10 sm:h-12 w-auto object-contain" />`
  },
  {
    id: 4,
    name: "Banglavision",
    logo: `<img loading="lazy" src="${import.meta.env.BASE_URL}banglavision-logo.png" alt="Banglavision" class="h-10 sm:h-12 w-auto object-contain" />`
  },
  {
    id: 5,
    name: "Naya Diganta",
    logo: `<img loading="lazy" src="${import.meta.env.BASE_URL}naya-diganta-logo.png" alt="Naya Diganta" class="h-10 sm:h-12 invert w-auto object-contain" />`
  },
  {
    id: 6,
    name: "Khoborer Kagoz",
    logo: `<img loading="lazy" src="${import.meta.env.BASE_URL}khoborer-kagoz-logo.png" alt="Khborere Kagoz" class="h-10 w-auto object-contain" />`
  },
  {
    id: 7,
    name: "Islam Online",
    logo: `<img loading="lazy" src="${import.meta.env.BASE_URL}islam-online-logo.svg" alt="Islam Online" class="h-10 sm:h-12 w-auto object-contain" />`
  },
  {
    id: 8,
    name: "Khola Kagoz",
    logo: `<img loading="lazy" src="${import.meta.env.BASE_URL}khola-kagoj-logo.png" alt="Khola Kagoz" class="h-10 w-auto object-contain" />`
  },
  {
    id: 10,
    name: "Digibanglatech",
    logo: `<img loading="lazy" src="${import.meta.env.BASE_URL}digibanglatech-logo.png" alt="Digibanglatech" class="h-10 sm:h-16 -translate-y-1 w-auto object-contain" />`
  },
  {
    id: 9,
    name: "Dainik Inkilab",
    logo: `<img loading="lazy" src="${import.meta.env.BASE_URL}dainik-inqilab-logo.png" alt="Dainik Inkilab" class="h-10 sm:h-12 w-auto object-contain" />`
  },
  {
    id: 11,
    name: "Samakal",
    logo: `<img loading="lazy" src="${import.meta.env.BASE_URL}samakal-logo.png" alt="Samakal" class="h-6 translate-y-1 w-auto object-contain" />`
  }
];

// Trust badges data (keep existing)
interface TrustBadge {
  id: number;
  text: string;
  icon: string;
}

const trustBadgesData: TrustBadge[] = [
  {
    id: 1,
    text: "Google Play Editors' Choice",
    icon: `<svg class="w-full h-full" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
    </svg>`,
  },
  {
    id: 2,
    text: "#1 Parental Control App for Muslims",
    icon: `<svg class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
    </svg>`,
  },
  {
    id: 3,
    text: "COPPA Compliant",
    icon: `<svg class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
    </svg>`,
  },
  {
    id: 4,
    text: "Featured in Muslim Parenting Communities",
    icon: `<svg class="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>`,
  }
];

// ============================================================================
// HOOKS
// ============================================================================

// Animated counter hook
const useCounter = (target: string, duration: number = 2000) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    // Extract numeric value from string like "2M+", "5M+", "270K+", "45 min"
    let numericValue = 0;
    let suffix = "";

    if (target.includes("M+")) {
      numericValue = parseFloat(target);
      suffix = "M+";
    } else if (target.includes("K+")) {
      numericValue = parseFloat(target);
      suffix = "K+";
    } else if (target.includes(" min")) {
      numericValue = parseFloat(target);
      suffix = " min";
    } else if (target.includes("%")) {
      numericValue = parseFloat(target);
      suffix = "%";
    } else if (target.includes("+")) {
      numericValue = parseInt(target.replace(/,/g, ""));
      suffix = "+";
    } else {
      numericValue = parseInt(target.replace(/,/g, ""));
    }

    // For very large numbers, we'll just show the final value
    if (numericValue > 1000) {
      setCount(numericValue);
      return;
    }

    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(numericValue * easeOut);

      if (progress >= 1) {
        clearInterval(timer);
        setCount(numericValue);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  // Format the count for display
  const formatCount = () => {
    if (target.includes("M+")) {
      return `${Math.round(count)}M+`;
    } else if (target.includes("K+")) {
      return `${Math.round(count)}K+`;
    } else if (target.includes(" min")) {
      return `${Math.round(count)} min`;
    } else if (target.includes("%")) {
      return `${Math.round(count)}%`;
    } else if (target.includes("+")) {
      return `${Math.round(count).toLocaleString()}+`;
    } else {
      return target;
    }
  };

  return formatCount();
};

// ============================================================================
// COMPONENTS
// ============================================================================

// Compact Stats Bar Component - Horizontal layout without cards
const StatsBar = React.memo(({ metrics }: { metrics: ImpactMetric[] }) => {
  return (
    <AnimatedSection
      animation="fadeUp"
      delay={0.1}
      duration={0.6}
      threshold={0.3}
    >
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12 max-w-5xl mx-auto py-8">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.id}
            className="flex flex-col items-center text-center group min-w-[120px] sm:min-w-[140px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + (index * 0.1), duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Icon */}
            <div className={`w-10 h-10 sm:w-12 sm:h-12 ${metric.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
              <div
                className="w-full h-full"
                dangerouslySetInnerHTML={{ __html: metric.icon }}
              />
            </div>

            {/* Value */}
            <h3
              className={`font-bold ${metric.color} leading-tight`}
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)'
              }}
            >
              {metric.value}
            </h3>

            {/* Label */}
            <p className="text-gray-700 font-semibold text-xs sm:text-sm mt-1 max-w-[140px]">
              {metric.label}
            </p>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
});
StatsBar.displayName = 'StatsBar';

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const TrustAnimated = () => {
  return (
    <div className="bg-gradient-to-br from-[#fafafa] via-[#fef6f6] to-[#fefefe] py-8 lg:py-12 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            transition: { duration: 100, repeat: Infinity, ease: "linear" }
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#ff4848]/2 to-transparent rounded-full blur-3xl"
          style={{ contain: 'layout style paint' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ================================================================ */}
        {/* HEADER                                                          */}
        {/* ================================================================ */}
        <AnimatedSection animation="fadeUp" delay={0} duration={0.6} threshold={0.3}>
          <div className="text-center mb-8 lg:mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-bold text-[#222222] mb-4"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                lineHeight: 'clamp(2.5rem, 5vw, 3.75rem)',
                letterSpacing: '-0.02em'
              }}
            >
              Trusted by{" "}
              <span className="bg-gradient-to-r from-[#ff4848] to-[#ff6b6b] bg-clip-text text-transparent">
                Muslim Families
              </span>{" "}
              Worldwide
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-[#4a4b4d] text-base sm:text-lg max-w-3xl mx-auto"
            >
              Join over 270,000 parents providing safe, Islamic content for their children
            </motion.p>
          </div>
        </AnimatedSection>

        {/* ================================================================ */}
        {/* STATS BAR - Compact Horizontal Layout                           */}
        {/* ================================================================ */}
        <StatsBar metrics={impactMetricsData} />

        {/* ================================================================ */}
        {/* TRUST BADGES - Redesigned for Mobile                            */}
        {/* ================================================================ */}
        <AnimatedSection animation="fadeUp" delay={0.5} duration={0.5} threshold={0.3}>
          <div className="mt-6 mb-8 lg:mb-12">
            <div className="text-center mb-5">
              <h3 className="text-xs sm:text-sm text-gray-500 font-semibold tracking-wider uppercase">
                Trusted & Recognized
              </h3>
            </div>
            {/* Grid layout: 2 cols on mobile, 4 cols on desktop */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-3 sm:gap-6 lg:gap-8 max-w-5xl mx-auto md:px-4">
              {trustBadgesData.map((badge, index) => (
                <AnimatedSection
                  key={badge.id}
                  animation="fadeUp"
                  delay={0.5 + (index * 0.08)}
                  duration={0.3}
                  threshold={0.3}
                >
                  <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-2.5 p-2 md:p-4 sm:p-0 rounded-xl sm:rounded-none bg-white/70 sm:bg-transparent border border-gray-200/60 sm:border-0 shadow-sm sm:shadow-none backdrop-blur-sm sm:backdrop-blur-none cursor-pointer group hover:bg-white hover:shadow-md hover:border-[#E05C41]/30 sm:hover:bg-transparent sm:hover:shadow-none sm:hover:border-0 transition-all duration-300 min-h-[100px] sm:min-h-0"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Icon */}
                    <div className="w-10 h-10 sm:w-9 sm:h-9 text-[#E05C41] group-hover:text-[#E05C41] group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                      <div
                        className="w-full h-full"
                        dangerouslySetInnerHTML={{ __html: badge.icon }}
                      />
                    </div>

                    {/* Text */}
                    <p className="text-[11px] sm:text-sm text-gray-800 font-semibold leading-snug text-center sm:text-left">
                      {badge.text}
                    </p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ================================================================ */}
        {/* FEATURED IN - Auto-scrolling Horizontal                         */}
        {/* ================================================================ */}
        <AnimatedSection animation="fadeUp" delay={0.7} duration={0.5} threshold={0.3}>
          <div className="text-center overflow-hidden">
            <span className="inline-block text-xs text-gray-400 font-medium tracking-widest uppercase mb-8">
              As Featured In
            </span>

            {/* Auto-scrolling container */}
            <div className="relative">
              {/* Gradient overlays for fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#fef6f6] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#fefefe] to-transparent z-10 pointer-events-none" />

              {/* Scrolling track with CSS animation */}
              <div className="overflow-hidden py-4">
                <style>{`
                  @keyframes scroll-logos {
                    0% {
                      transform: translateX(0);
                    }
                    100% {
                      transform: translateX(-50%);
                    }
                  }
                  .animate-scroll {
                    animation: scroll-logos 30s linear infinite;
                  }
                  .animate-scroll:hover {
                    animation-play-state: paused;
                  }
                  @media (max-width: 768px) {
                    .animate-scroll {
                      animation-duration: 20s;
                    }
                  }
                `}</style>
                <div
                  className="flex gap-8 sm:gap-12 lg:gap-16 animate-scroll"
                  style={{ width: 'max-content' }}
                >
                  {/* Duplicate the logos exactly twice for perfect loop */}
                  {[...Array(2)].map((_, setIndex) => (
                    <React.Fragment key={`set-${setIndex}`}>
                      {featuredInData.map((item) => (
                        <div
                          key={`${setIndex}-${item.id}`}
                          className="flex-shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer px-4"
                          title={item.name}
                        >
                          <div
                            className="text-gray-600 hover:text-[#E05C41] flex items-center justify-center"
                            dangerouslySetInnerHTML={{ __html: item.logo }}
                          />
                        </div>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
};

export default TrustAnimated;
