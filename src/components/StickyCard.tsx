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
        top: '120px',
        zIndex: index + 1,
        height: 'calc(100vh - 200px)' // Reduced height to ensure it fits
      }}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center px-4"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="w-full h-full bg-white rounded-[20px] shadow-lg flex items-center justify-center"
        >
          <div className="relative px-[72px] py-[82px] flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 lg:max-w-[525px]">
              <div
                className="relative mb-8 h-[62px] flex items-center"
                style={{
                  backgroundImage: `url(${card.backgroundSvg})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'left center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <h3 className="absolute top-[7px] left-[40px] text-[28px] font-semibold text-[#fffbfb] leading-normal capitalize tracking-[-0.28px] z-10">
                  {card.title}
                </h3>
              </div>

              <div className="px-[40px] py-[10px]">
                <div className="space-y-5">
                  {card.features.map((item: string, featureIndex: number) => (
                    <motion.div
                      key={`${card.id}-feature-${featureIndex}`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: featureIndex * 0.1,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex-shrink-0 w-6 h-6">
                        <img
                          src={card.tickIcon}
                          alt="tick"
                          className="w-full h-full"
                        />
                      </div>
                      <p className="text-[18px] text-[#4a4b4d] tracking-[-0.18px] font-medium">
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
                duration: 0.6,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="relative rounded-[16px] overflow-hidden lg:w-[340px] lg:h-[310px] w-full h-[350px]"
            >
              {card.isStacked ? (
                <div className="relative w-full h-full flex flex-col gap-[17.854px]">
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