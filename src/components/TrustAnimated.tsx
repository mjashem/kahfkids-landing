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
    value: "2M+",
    label: "Safe Hours Watched",
    description: "Children engaging with halal, educational content daily",
    icon: `<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>`,
    color: "text-[#E05C41]"
  },
  {
    id: 2,
    value: "50K+",
    label: "Hours Saved from Ads",
    description: "Ad-free experience saves time compared to regular YouTube",
    icon: `<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
    </svg>`,
    color: "text-[#E05C41]"
  },
  {
    id: 3,
    value: "100K+",
    label: "Times Protected",
    description: "Active protection from indecent content",
    icon: `<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01"></path>
    </svg>`,
    color: "text-[#E05C41]"
  },
  {
    id: 4,
    value: "45 min",
    label: "Avg. Daily Learning",
    description: "Balanced screen time parents love and kids enjoy",
    icon: `<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
    </svg>`,
    color: "text-[#E05C41]"
  }
];


// Featured In - Media logos (placeholder data - update with real logos)
const featuredInData: FeaturedInLogo[] = [
  {
    id: 1,
    name: "Productive Muslim",
    logo: `<svg class="w-24 h-12" viewBox="0 0 120 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="10" width="8" height="20" rx="2"/>
      <rect x="12" y="5" width="8" height="30" rx="2"/>
      <rect x="24" y="15" width="8" height="10" rx="2"/>
      <text x="40" y="28" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="currentColor">Productive Muslim</text>
    </svg>`
  },
  {
    id: 2,
    name: "Muslim Pro",
    logo: `<svg class="w-24 h-12" viewBox="0 0 120 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="12" fill="none" stroke="currentColor" stroke-width="3"/>
      <path d="M20 12 L20 28 M12 20 L28 20" stroke="currentColor" stroke-width="2"/>
      <text x="40" y="28" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="currentColor">Muslim Pro</text>
    </svg>`
  },
  {
    id: 3,
    name: "Islamicity",
    logo: `<svg class="w-24 h-12" viewBox="0 0 120 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 20 L20 10 L30 20 L20 30 Z" fill="none" stroke="currentColor" stroke-width="2"/>
      <circle cx="20" cy="20" r="6" fill="currentColor"/>
      <text x="40" y="28" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="currentColor">Islamicity</text>
    </svg>`
  },
  {
    id: 4,
    name: "IlmFeed",
    logo: `<svg class="w-24 h-12" viewBox="0 0 120 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="12" width="24" height="16" rx="3" fill="none" stroke="currentColor" stroke-width="2"/>
      <path d="M14 20 L18 24 L26 16" stroke="currentColor" stroke-width="2" fill="none"/>
      <text x="40" y="28" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="currentColor">IlmFeed</text>
    </svg>`
  },
  {
    id: 5,
    name: "Muslim Central",
    logo: `<svg class="w-24 h-12" viewBox="0 0 140 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="20" r="10" fill="currentColor"/>
      <circle cx="40" cy="20" r="10" fill="none" stroke="currentColor" stroke-width="2"/>
      <text x="60" y="28" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="currentColor">Muslim Central</text>
    </svg>`
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
    <div className="bg-gradient-to-br from-[#fafafa] via-[#fef6f6] to-[#fefefe] py-16 lg:py-20 relative overflow-hidden">
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
              Making a{" "}
              <span className="bg-gradient-to-r from-[#ff4848] to-[#ff6b6b] bg-clip-text text-transparent">
                Real Impact
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-[#4a4b4d] text-base sm:text-lg max-w-3xl mx-auto"
            >
              See how Kahf Kids is protecting and enriching children's digital lives worldwide
            </motion.p>
          </div>
        </AnimatedSection>

        {/* ================================================================ */}
        {/* STATS BAR - Compact Horizontal Layout                           */}
        {/* ================================================================ */}
        <StatsBar metrics={impactMetricsData} />

        {/* ================================================================ */}
        {/* TRUST BADGES - Simplified                                       */}
        {/* ================================================================ */}
        <AnimatedSection animation="fadeUp" delay={0.5} duration={0.5} threshold={0.3}>
          <div className="mt-8 mb-10 lg:mb-12">
            <div className="text-center mb-6">
              <h3 className="text-xs sm:text-sm text-gray-500 font-medium tracking-wider uppercase">
                Trusted & Recognized
              </h3>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-10">
              {trustBadgesData.map((badge, index) => (
                <AnimatedSection
                  key={badge.id}
                  animation="fadeUp"
                  delay={0.5 + (index * 0.08)}
                  duration={0.3}
                  threshold={0.3}
                >
                  <motion.div
                    className="flex items-center gap-2 cursor-pointer group"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Icon */}
                    <div className="w-8 h-8 sm:w-10 sm:h-10 text-[#E05C41]/50 group-hover:text-[#E05C41] transition-colors duration-300 flex-shrink-0">
                      <div
                        className="w-full h-full"
                        dangerouslySetInnerHTML={{ __html: badge.icon }}
                      />
                    </div>

                    {/* Text */}
                    <p className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">
                      {badge.text}
                    </p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ================================================================ */}
        {/* FEATURED IN - Simplified                                        */}
        {/* ================================================================ */}
        <AnimatedSection animation="fadeUp" delay={0.7} duration={0.5} threshold={0.3}>
          <div className="text-center">
            <span className="inline-block text-xs text-gray-400 font-medium tracking-widest uppercase mb-6">
              As Featured In
            </span>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-10">
              {featuredInData.map((item, index) => (
                <AnimatedSection
                  key={item.id}
                  animation="fadeUp"
                  delay={0.7 + (index * 0.08)}
                  duration={0.3}
                  threshold={0.3}
                >
                  <motion.div
                    className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    title={item.name}
                  >
                    <div
                      className="text-gray-400 hover:text-[#E05C41]"
                      dangerouslySetInnerHTML={{ __html: item.logo }}
                    />
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
};

export default TrustAnimated;
