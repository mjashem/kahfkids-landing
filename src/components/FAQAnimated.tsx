import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "My child secretly watches videos at night. Will this stop it?",
    answer: "Yes. When Sleep Mode is on, all apps and videos are blocked. Even if they wake up and take the phone, nothing opens except emergency calls."
  },
  {
    question: "What if my child tries to uninstall the app?",
    answer: "The app requires parental authentication to uninstall. Only parents can remove or disable the app through their password-protected settings."
  },
  {
    question: "Will my child watch random YouTube videos?",
    answer: "No. Kahf Kids only allows access to pre-approved, educational content. Random YouTube browsing is completely blocked - only curated videos are available."
  },
  {
    question: "My child refuses to stop playing games.",
    answer: "Set time limits and schedules. When time's up, games automatically stop. The transition is smooth - no warnings, no conflicts, just peaceful sleep time."
  },
  {
    question: "What about online classes?",
    answer: "Easily whitelist educational apps. During class times, those apps work normally while entertainment stays blocked. Perfect for focused learning."
  },
  {
    question: "We want Qur'an learning. How does it help?",
    answer: "Pre-loaded with age-appropriate Islamic content. Qur'an stories, prayers, and educational apps are always available and encouraged."
  },
  {
    question: "I'm not technical. Can I use this?",
    answer: "Absolutely! One-tap setup. If you can use WhatsApp, you can use Kahf Kids. We designed it for busy parents, not tech experts."
  },
  {
    question: "Multiple children?",
    answer: "Yes! Create separate profiles for each child with age-appropriate settings and content filters for their individual needs."
  },
  {
    question: "Does this reduce tantrums?",
    answer: "Yes. Clear routines eliminate fights. Children know when screen time ends, so there's no begging or negotiating. Peaceful transitions become normal."
  },
  {
    question: "Can I start free and upgrade later?",
    answer: "Absolutely! Start with our free plan to see how it works. Upgrade anytime to unlock premium features and multiple device support."
  },
  {
    question: "Will it increase screen addiction?",
    answer: "No - it fights addiction. Strict time limits, content controls, and healthy digital habits. Less screen time, more real childhood."
  },
  {
    question: "What devices work?",
    answer: "Works on Android phones and tablets. iOS support coming soon. One subscription covers all your child's devices."
  }
];

const FAQAnimated: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0])); // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );

  return (
    <section id="faq" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeIn" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#222222] tracking-[-0.42px] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#4a4b4d] tracking-[-0.18px] max-w-2xl mx-auto">
            Everything you need to know about Kahf Kids
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fadeIn" delay={0.1} className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <AnimatedSection
                key={index}
                animation="fadeUp"
                delay={0.1 + index * 0.05}
                className="bg-white border border-gray-200 rounded-xl px-6 transition-all duration-200 hover:shadow-md"
              >
                <h3 id={`faq-question-${index}`}>
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    aria-expanded={openItems.has(index)}
                    aria-controls={`faq-answer-${index}`}
                    className="flex flex-1 items-center justify-between py-4 w-full text-left font-medium text-[#222222] hover:no-underline focus:outline-none"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleItem(index);
                      }
                    }}
                  >
                    <span>{item.question}</span>
                    <ChevronIcon isOpen={openItems.has(index)} />
                  </button>
                </h3>
                <AnimatePresence>
                  {openItems.has(index) && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                    >
                      <div className="pb-4 pt-0 text-sm text-[#4a4b4d] leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQAnimated;