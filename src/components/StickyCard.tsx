import { useRef } from 'react';
import { motion } from 'framer-motion';

interface CardType {
  id: number;
  title: string;
  features: string[];
  image?: string;
  images?: string[];
  imageAlt: string | string[];
  backgroundSvg: string;
  tickIcon: string;
  isStacked?: boolean;
}

const StickyCard = ({ card, index, totalCards }: { card: CardType; index: number; totalCards: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);


  return (
    <div
      ref={cardRef}
      className="relative"
      style={{
        position: 'sticky',
        top: '200px',
        zIndex: index + 1,
        height: 'calc(100vh - 200px)'
      }}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center px-4"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.2,
            delay: index * 0.3,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="w-full h-full bg-white rounded-[20px] shadow-lg flex items-center justify-center overflow-hidden"
        >
          <div className="relative px-5 py-4 lg:px-[72px] lg:py-[82px] flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-12 w-full h-full">
            <div className="flex-1 lg:max-w-[525px] flex flex-col lg:justify-center">
              <div
                className="relative mb-2 lg:mb-8 h-[40px] lg:h-[62px] flex items-center flex-shrink-0"
                style={{
                  backgroundImage: `url(${card.backgroundSvg})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'left center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <h3 className="absolute top-[4px] left-[26px] lg:left-[40px] text-[18px] lg:text-[28px] font-semibold text-[#fffbfb] leading-normal capitalize tracking-[-0.28px] z-10">
                  {card.title}
                </h3>
              </div>

              <div className="px-3 lg:px-[40px] py-2 lg:py-[10px] flex-1">
                <div className="space-y-1.5 lg:space-y-5">
                  {card.features.map((item: string, featureIndex: number) => (
                    <motion.div
                      key={`${card.id}-feature-${featureIndex}`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: featureIndex * 0.2,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="flex items-center gap-2 lg:gap-3"
                    >
                      <div className="flex-shrink-0 w-4 h-4 lg:w-6 lg:h-6">
                        <img
                          src={card.tickIcon}
                          alt="tick"
                          className="w-full h-full"
                        />
                      </div>
                      <p className="text-[15px] lg:text-[18px] text-[#4a4b4d] tracking-[-0.18px] font-medium leading-normal">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1.0,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
              className="relative rounded-[16px] overflow-hidden lg:w-[340px] lg:h-[310px] w-full h-[140px] sm:h-[160px] flex-shrink-0"
            >
              {card.isStacked ? (
                <div className="relative w-full h-full">
                  {/* Mobile: Show only first image */}
                  <div className="lg:hidden w-full h-full rounded-[16px] overflow-hidden">
                    <img
                      src={card.images![0]}
                      alt={card.imageAlt![0]}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Desktop: Show both stacked images */}
                  <div className="hidden lg:flex lg:flex-col lg:relative lg:w-full lg:h-full lg:gap-[17.854px]">
                    <div className="h-[144.825px] rounded-[16px] overflow-hidden">
                      <img
                        src={card.images![0]}
                        alt={card.imageAlt![0]}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="h-[146.068px] rounded-[16px] overflow-hidden">
                      <img
                        src={card.images![1]}
                        alt={card.imageAlt![1]}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <img
                  src={card.image}
                  alt={Array.isArray(card.imageAlt) ? card.imageAlt[0] : card.imageAlt}
                  className="w-full h-full object-cover"
                />
              )}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default StickyCard;