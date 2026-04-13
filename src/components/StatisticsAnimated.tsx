import React from 'react';
import { AnimatedSection } from './AnimatedSection';

// Statistics data interface
interface StatItem {
  id: number;
  value: string;
  label: string;
  color: string;
  icon: string;
}

// Statistics data (only unique metrics not mentioned in Hero)
const statisticsData: StatItem[] = [
  {
    id: 1,
    value: "25,000+",
    label: "Curated Videos",
    color: "text-[#E05C41]",
    icon: `<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>`
  },
  {
    id: 2,
    value: "4.9★",
    label: "Parent Rating",
    color: "text-yellow-500",
    icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>`
  },
  {
    id: 3,
    value: "24/7",
    label: "Parental Control",
    color: "text-purple-500",
    icon: `<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
    </svg>`
  }
];

// Stat Card Component
const StatCard = React.memo(({ stat, index }: { stat: StatItem; index: number }) => {
  return (
    <AnimatedSection
      animation="fadeUp"
      delay={index * 0.05}
      duration={0.3}
      threshold={0.3}
    >
      <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-md hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Icon */}
        <div className="flex justify-center mb-3 relative z-10">
          <div
            className={`w-8 h-8 sm:w-10 sm:h-10 ${stat.color} group-hover:scale-110 transition-transform duration-300`}
            dangerouslySetInnerHTML={{ __html: stat.icon }}
          />
        </div>

        {/* Value */}
        <div className="text-center relative z-10">
          <h3
            className={`font-bold ${stat.color} mb-1`}
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              lineHeight: '1.2'
            }}
          >
            {stat.value}
          </h3>
          <p className="text-gray-600 font-medium text-xs sm:text-sm">
            {stat.label}
          </p>
        </div>

        {/* Decorative corner element */}
        <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-[#E05C41]/10 to-transparent rounded-bl-2xl" />
      </div>
    </AnimatedSection>
  );
});
StatCard.displayName = 'StatCard';

const StatisticsAnimated = () => {
  return (
    <div className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection animation="fadeUp" delay={0} duration={0.3} threshold={0.3}>
          <div className="text-center mb-8 sm:mb-12">
            <h2
              className="font-semibold text-[#0D1013] mb-3"
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.625rem)',
                lineHeight: 'clamp(2.5rem, 5vw, 4.375rem)'
              }}
            >
              Trusted by <span className="text-[#E05C41]">Muslim Families</span> Worldwide
            </h2>
            <p
              className="text-gray-600 max-w-2xl mx-auto"
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.125rem)'
              }}
            >
              Join thousands of parents who trust Kahf Kids to provide a safe, halal digital environment for their children
            </p>
          </div>
        </AnimatedSection>

        {/* Statistics Grid - 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {statisticsData.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatisticsAnimated;
