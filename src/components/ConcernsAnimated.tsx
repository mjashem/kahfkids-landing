import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

// Concern data interface
interface Concern {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

// Concerns data
const concernsData: Concern[] = [
  {
    id: 1,
    title: "Screen Time Battles?",
    description: "Set automatic limits. No more negotiations. Kids learn healthy digital habits with time-based controls that work even when you're not around.",
    icon: `<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>`,
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "Inappropriate Content?",
    description: "25,000+ videos reviewed by Islamic scholars. Zero exposure to harmful content. Our curated library ensures your children only see what's appropriate.",
    icon: `<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
    </svg>`,
    color: "bg-green-500"
  },
  {
    id: 3,
    title: "Game Addiction?",
    description: "Block addictive games instantly. Kids can play, but can't overplay. Set daily limits and schedule downtime to ensure balance between play and other activities.",
    icon: `<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"></path>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>`,
    color: "bg-purple-500"
  },
  {
    id: 4,
    title: "Lost Study Time?",
    description: "Study mode blocks distractions. Bedtime mode ensures peaceful sleep. Create schedules that help your children focus on what matters most.",
    icon: `<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
    </svg>`,
    color: "bg-orange-500"
  }
];

// Concern Card Component
const ConcernCard = ({ concern, index, isExpanded, onToggle }: {
  concern: Concern;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  return (
    <AnimatedSection
      animation="fadeUp"
      delay={index * 0.05}
      duration={0.3}
      threshold={0.3}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
        whileHover={{ y: -4 }}
      >
        <button
          onClick={onToggle}
          className="w-full p-5 sm:p-6 text-left flex items-start gap-4 focus:outline-none focus:ring-2 focus:ring-[#E05C41] focus:ring-inset rounded-2xl"
        >
          {/* Icon */}
          <div className={`flex-shrink-0 w-12 h-12 ${concern.color} rounded-xl flex items-center justify-center text-white`}>
            <div className="w-6 h-6" dangerouslySetInnerHTML={{ __html: concern.icon }} />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-semibold text-[#0D1013] mb-2">
              {concern.title}
            </h3>
            <AnimatePresence>
              {isExpanded && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-600 text-sm sm:text-base leading-relaxed"
                >
                  {concern.description}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Arrow */}
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 text-[#E05C41]"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </button>
      </motion.div>
    </AnimatedSection>
  );
};

const ConcernsAnimated = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleConcern = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="bg-gradient-to-br from-orange-50/50 to-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection animation="fadeUp" delay={0} duration={0.3} threshold={0.3}>
          <div className="text-center mb-10 sm:mb-12">
            <h2
              className="font-semibold text-[#0D1013] mb-3"
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.625rem)'
              }}
            >
              We're Here to Help with Your <span className="text-[#E05C41]">Concerns</span>
            </h2>
            <p
              className="text-gray-600 max-w-3xl mx-auto"
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.125rem)'
              }}
            >
              Whatever challenges you face with your children's digital habits, Kahf Kids has the solution
            </p>
          </div>
        </AnimatedSection>

        {/* Concerns Grid */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {concernsData.map((concern, index) => (
            <ConcernCard
              key={concern.id}
              concern={concern}
              index={index}
              isExpanded={expandedId === concern.id}
              onToggle={() => toggleConcern(concern.id)}
            />
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection animation="fadeUp" delay={0.3} duration={0.3} threshold={0.3}>
          <div className="text-center mt-10">
            <button
              onClick={() => {
                const pricingSection = document.getElementById('pricing');
                if (pricingSection) {
                  pricingSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
              className="bg-[#E05C41] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#c94d32] transition-colors duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              See How It Works
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ConcernsAnimated;
