import React from 'react';
import { motion } from 'framer-motion';

interface HeroAnimatedProps {
  className?: string;
}

const HeroAnimated: React.FC<HeroAnimatedProps> = ({ className = '' }) => {
  return (
    <section
      id="home"
      className={`relative bg-white overflow-hidden ${className}`}
      style={{ minHeight: '703px' }}
    >
      {/* Background with decorative elements */}
      <div className="absolute inset-0">
        {/* Wavy divider at bottom */}
        <div className="absolute bottom-0 left-0 right-0" style={{ height: '22px' }}>
          <svg viewBox="0 0 1440 22" className="w-full h-full" style={{ transform: 'rotate(180deg) scaleY(-1)' }}>
            <path
              d="M0,22 C480,11 960,0 1440,11 L1440,22 L0,22 Z"
              fill="#7cac0f3bc32b634469f881db7ee593f79f24c926"
            />
          </svg>
        </div>
      </div>

      <div className="relative h-full pt-20 lg:pt-32">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl h-full">
          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center h-full gap-8 lg:gap-16">

            {/* Hero Content */}
            <div className="flex-none lg:max-w-lg text-center lg:text-center">
              <div className="space-y-6">
                {/* Heading */}
                <h1 className="font-semibold text-[#222222] text-3xl sm:text-4xl lg:text-5xl leading-tight lg:leading-[70px] tracking-[-0.56px]">
                  The Ultimate <span className="text-[#ff4848]">Safe & Fun</span> Edutainment Hub for Kids
                </h1>

                {/* Description */}
                <p className="font-medium text-[#4a4b4d] text-lg leading-normal tracking-[-0.18px] max-w-md">
                  Discover stories, games, and learning tools—all in a secure space made just for kids.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8">
                {/* Buy Premium Button */}
                <motion.button
                  className="bg-[#ff4848] rounded-lg px-4 py-3 h-12 flex items-center gap-2 w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-white text-sm leading-6">Buy Premium</span>
                  <motion.svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </motion.button>

                {/* App Store Badges */}
                <div className="flex gap-3">
                  <div className="w-40 h-12">
                    <img
                      src="/50ef2ac624889246853661a08035409d6146ae4d.svg"
                      alt="App Store"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-40 h-12">
                    <img
                      src="/91d03ea036776e5d506d4a563368f57e1012ce70.svg"
                      alt="Google Play"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* iPhone Mockup */}
            <motion.div
              className="flex-none flex justify-center lg:justify-end lg:max-w-md"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
          <div className="relative">
            {/* Phone Shadow */}
            <div
              className="absolute bg-gray-900/10 rounded-[40px] blur-xl"
              style={{
                width: '260.77px',
                height: '516px',
                left: '-28.8px',
                top: '21.8px'
              }}
            />

            {/* Phone Body */}
            <div className="relative bg-white rounded-[40px] shadow-[-28.8px_21.8px_50px_0px_rgba(1,0,35,0.1),0px_0.8px_4.8px_0px_rgba(20,27,41,0.08)]"
                 style={{ width: '256.30px', height: '516px' }}>

              {/* Inner shadow */}
              <div className="absolute inset-0 rounded-[40px]"
                   style={{ boxShadow: '0.8px_0.8px_5px_0px_inset_rgba(217,217,217,0.7),0px_-4.8px_4.6px_0px_inset_rgba(156,156,156,0.16),0px_4.8px_4.6px_0px_inset_rgba(156,156,156,0.16)' }} />

              {/* Screen */}
              <div className="absolute bg-[#fff7f4] rounded-[23px] overflow-hidden"
                   style={{ top: '14px', left: '12px', right: '12px', bottom: '14px', width: '232px', height: '472.07px' }}>

                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white rounded-bl-[10px] rounded-br-[10px]"
                     style={{ width: '101.33px', height: '18.37px' }} />

                {/* Status Bar */}
                <div className="absolute top-[17.25px] right-[38.07px] w-[26.17px] h-[26.17px] rounded-[38.07px] overflow-hidden">
                  <img
                    src="/99866959bdf7eaf41f82746f243dbd6e48280274.png"
                    alt="Battery"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute top-[9.52px] left-[11.89px] w-[55.32px] h-[41.05px]">
                  <img
                    src="/6f12e17405d9d43bbd202cccf48207b4a75ca732.png"
                    alt="Signal"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* App Content */}
                <div className="absolute top-[64.84px] left-[11.89px] w-[245.68px]">
                  {/* Recommended Section */}
                  <div className="mb-[12.49px]">
                    <div className="flex items-center justify-between mb-[9.52px]">
                      <span className="font-['Axiforma:SemiBold',_sans-serif] text-[#0d1013] text-[9.52px] leading-[13.09px]">Recommended</span>
                      <span className="text-[#ff7050] text-[8.33px] leading-[11.90px]">View All</span>
                    </div>

                    <div className="flex gap-[5.95px]">
                      <div className="relative rounded-[11.90px] w-[146.34px] h-[79.12px] overflow-hidden">
                        <img
                          src="/0fef175161e3166e5a18b2d340748dd780722ac8.png"
                          alt="Recommended content"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-[11.90px] right-[11.90px] w-[23.79px] h-[23.79px]">
                          <img
                            src="/b70d5f911a21cd0cd1b76955fbe8f455dca55c16.svg"
                            alt="Play button"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>

                      <div className="relative rounded-[11.90px] w-[146.34px] h-[79.12px]">
                        <img
                          src="/287dc96ac343cf0c4411cdccffeff692e49651be.png"
                          alt="Recommended content 2"
                          className="w-full h-full object-cover rounded-[11.90px]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Top Picks Section */}
                  <div className="mb-[12.49px]">
                    <span className="font-['Axiforma:SemiBold',_sans-serif] text-[#0d1013] text-[9.52px] leading-[13.09px]">Top Picks</span>

                    <div className="flex gap-[5.95px] mt-[9.52px]">
                      <div className="bg-[#e8ecff] rounded-[11.90px] p-[13.09px] w-[54.73px] h-[66.92px]">
                        <div className="flex flex-col items-center gap-[3.57px]">
                          <div className="w-[28.29px] h-[18.44px]">
                            <img
                              src="/6bd816d019b929d57244e36a7f1965a46d268cd9.svg"
                              alt="Courses"
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <span className="text-[#0d1013] text-[7.14px] leading-[10.11px] text-center font-['Axiforma:Medium',_sans-serif]">Courses</span>
                        </div>
                      </div>

                      <div className="bg-[#f2e2ff] rounded-[11.90px] p-[13.09px] w-[54.73px] h-[66.92px]">
                        <div className="flex flex-col items-center gap-[3.57px]">
                          <div className="w-[28.55px] h-[23.20px]">
                            <img
                              src="/4db8e9a5af4123d497dd7a3104ca81883ec09885.svg"
                              alt="Draw Pad"
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <span className="text-[#0d1013] text-[7.14px] leading-[10.11px] text-center font-['Axiforma:Medium',_sans-serif]">Draw Pad</span>
                        </div>
                      </div>

                      <div className="bg-[#d9f4e4] rounded-[11.90px] p-[13.09px] w-[54.73px] h-[66.92px]">
                        <div className="flex flex-col items-center gap-[3.57px]">
                          <div className="w-[22.07px] h-[23.20px]">
                            <img
                              src="/137b2e86d5b34d85f3d97b0796854f531dece342.svg"
                              alt="Quran"
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <span className="text-[#0d1013] text-[7.14px] leading-[10.11px] text-center font-['Axiforma:Medium',_sans-serif]">Quran</span>
                        </div>
                      </div>

                      <div className="bg-[#ffecdf] rounded-[11.90px] p-[13.09px] w-[54.73px] h-[66.92px]">
                        <div className="flex flex-col items-center gap-[3.57px]">
                          <div className="w-[17.78px] h-[17.78px]">
                            <img
                              src="/2de07977ac47360d566333b5cd1d25c5776e5b69.svg"
                              alt="Videos"
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <span className="text-[#0d1013] text-[7.14px] leading-[10.11px] text-center font-['Axiforma:Medium',_sans-serif]">Videos</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* All Apps Section */}
                  <div className="mb-[12.49px]">
                    <span className="font-['Axiforma:SemiBold',_sans-serif] text-[#0d1013] text-[9.52px] leading-[13.09px]">All Apps</span>

                    <div className="flex gap-[5.95px] mt-[9.52px]">
                      <div className="bg-white rounded-[11.90px] p-[14.87px] w-[65.44px] h-[77.93px]">
                        <div className="flex flex-col items-center gap-[7.14px]">
                          <div className="w-[34.87px] h-[34.87px]">
                            <img
                              src="/0d8319fcfb8b0661232cd54ef2ee2ba949e5c6f9.svg"
                              alt="Salah"
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <span className="text-[#0d1013] text-[7.14px] leading-[10.11px] text-center font-['Axiforma:Medium',_sans-serif]">Salah</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="absolute bottom-[11.90px] left-[11.89px] right-[11.89px] bg-white rounded-[23px] h-[37.48px] flex items-center justify-center">
                  <div className="flex items-center gap-[25.58px]">
                    <div className="bg-white border border-[#ff7050] border-solid rounded-[20.95px] px-[11.00px] py-[5.76px] h-[24.10px] flex items-center gap-[4.76px]">
                      <div className="w-[14.28px] h-[14.28px]">
                        <img
                          src="/0a7160e8cc393c94ef9f71567af4feb5add2702e.svg"
                          alt="Home"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-[#ff7050] text-[7.14px] leading-[10.11px] font-['Axiforma:Medium',_sans-serif]">Home</span>
                    </div>
                  </div>
                </div>

                {/* Child Safety Banner */}
                <div className="absolute bottom-[47.59px] left-[11.89px] right-[11.89px]">
                  <div className="bg-[#e05c41] px-[47.59px] py-[5.35px] h-[24.98px] flex items-center justify-between">
                    <div className="flex items-center gap-[5.95px]">
                      <div className="flex items-center gap-[2.38px]">
                        <div className="w-[10.71px] h-[10.71px]">
                          <img
                            src="/59c65368f161fb1241e39a96e9852b60e4666b0b.svg"
                            alt="Warning"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span className="text-white text-[6.54px] leading-[8.99px] font-['Axiforma:Medium',_sans-serif]">Child Safety & Digital Wellbeing</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-[2.38px]">
                      <span className="text-white text-[5.95px] leading-[8.99px] font-['Axiforma:Medium',_sans-serif]">Keep Safe</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Power Button */}
              <div className="absolute -right-[28.8px] top-[88.86px] w-[4.47px] h-[34.95px]">
                <img
                  src="/d77c2542976c040bdfd0b3c44cf7ad819b6f46e1.svg"
                  alt="Power button"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Volume Button */}
              <div className="absolute -right-[28.8px] top-[141.38px] w-[3.48px] h-[64.07px]">
                <img
                  src="/60567b9f9222e2871c92568106e4b7bc1ebe50c3.svg"
                  alt="Volume button"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAnimated;