import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

// Step data interface
interface StepItem {
  id: number;
  number: string;
  title: string;
  description: string;
  icon: string;
}

// Steps data
const stepsData: StepItem[] = [
  {
    id: 1,
    number: "01",
    title: "Download Kahf Kids",
    description: "Install the app on your device from Google Play or App Store. Create your parent account in seconds.",
    icon: `<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
    </svg>`,
  },
  {
    id: 2,
    number: "02",
    title: "Install on Child's Device",
    description: "Add your child's device to your account. Follow simple setup instructions for iOS or Android.",
    icon: `<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
    </svg>`,
  },
  {
    id: 3,
    number: "03",
    title: "Set Rules & Protect",
    description: "Configure screen time limits, content filters, and monitoring. Get peace of mind instantly.",
    icon: `<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
    </svg>`,
  }
];

// Step Card Component
const StepCard = React.memo(({ step, index }: { step: StepItem; index: number }) => {
  return (
    <AnimatedSection
      animation="fadeUp"
      delay={index * 0.1}
      duration={0.4}
      threshold={0.3}
    >
      <div className="relative">
        {/* Connecting line (not on last item) */}
        {index < stepsData.length - 1 && (
          <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] border-t-2 border-dashed border-[#E05C41]/30 -z-10" />
        )}

        <motion.div
          className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Step number badge */}
          <div className="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 bg-[#E05C41]/10 rounded-full flex items-center justify-center">
            <span className="text-[#E05C41] font-bold text-sm sm:text-base font-['Baloo_2:SemiBold',_sans-serif]">
              {step.number}
            </span>
          </div>

          {/* Icon */}
          <div className="flex justify-center mb-4 relative z-10">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#E05C41]/20 to-[#E05C41]/5 rounded-2xl flex items-center justify-center text-[#E05C41] group-hover:scale-110 transition-transform duration-300">
              <div
                className="w-8 h-8 sm:w-9 sm:h-9"
                dangerouslySetInnerHTML={{ __html: step.icon }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center relative z-10">
            <h3 className="font-semibold text-[#0D1013] text-lg sm:text-xl mb-2 font-['Baloo_2:SemiBold',_sans-serif]">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {step.description}
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
});
StepCard.displayName = 'StepCard';

const HowItWorksAnimated = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection animation="fadeUp" delay={0} duration={0.4} threshold={0.3}>
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="font-semibold text-[#0D1013] mb-3 font-['Baloo_2:SemiBold',_sans-serif]"
                style={{
                  fontSize: 'clamp(1.75rem, 4vw, 2.625rem)',
                  lineHeight: 'clamp(2.5rem, 5vw, 4.375rem)'
                }}>
              Get Started in <span className="text-[#E05C41]">3 Simple Steps</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base"
               style={{
                 fontSize: 'clamp(1rem, 2vw, 1.125rem)'
               }}>
              Set up Kahf Kids in under 5 minutes and start protecting your child&apos;s digital journey today
            </p>
          </div>
        </AnimatedSection>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {stepsData.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} />
          ))}
        </div>

        {/* CTA after steps */}
        <AnimatedSection animation="fadeUp" delay={0.4} duration={0.4} threshold={0.3}>
          <div className="text-center mt-10 sm:mt-12">
            <motion.button
              className="bg-[#E05C41] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl shadow-lg font-['Baloo_2:SemiBold',_sans-serif] text-sm sm:text-base md:text-lg font-semibold cursor-pointer relative overflow-hidden"
              whileHover={{ scale: 1.05, backgroundColor: "#c94d32" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                const pricingSection = document.getElementById('pricing');
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              <span className="relative z-10">Start Your Free Trial</span>
            </motion.button>
            <p className="text-gray-500 text-xs sm:text-sm mt-3 font-['Baloo_2:Medium',_sans-serif]">
              No credit card required • Cancel anytime
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HowItWorksAnimated;
