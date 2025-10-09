import { AnimatedSection } from './AnimatedSection';

const FooterAnimated = () => {
  return (
    <footer className="bg-white py-25">
      <AnimatedSection animation="fadeUp" delay={0.2} className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl flex flex-col gap-2.5 items-center justify-center">
        <div className="flex flex-col lg:flex-row gap-[130px] items-start justify-center">
          <div className="flex flex-col lg:flex-row gap-[100px] w-full max-w-[1120px] h-auto lg:h-[257px]">
            {/* Logo and Description */}
            <div className="flex flex-col gap-[15px] w-full lg:w-[300px]">
              <div className="flex flex-col gap-[43px]">
                <div className="flex flex-col gap-[15px]">
                  <div className="h-[53.183px] w-[78.427px]">
                    <img
                      src="/footer-logo-1.svg"
                      alt="Kahf Kids Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="font-medium text-[#4a4b4d] text-[14px] leading-[22.71px]">
                    Safe, Islamic, and educational content that nurtures faith, character, and knowledge in children.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex flex-col gap-[15.97px] w-full lg:w-[125px]">
              <h3 className="font-semibold text-black text-[13px] leading-[27.951px]">Navigation</h3>
              <div className="flex flex-col gap-[12px]">
                <a href="#" className="font-medium text-[#4a4b4d] text-[14px] leading-[19.965px] hover:text-black transition-colors">Home</a>
                <a href="#" className="font-medium text-[#4a4b4d] text-[14px] leading-[19.965px] hover:text-black transition-colors">Features</a>
                <a href="#" className="font-medium text-[#4a4b4d] text-[14px] leading-[19.965px] hover:text-black transition-colors">Pricing</a>
                <a href="#" className="font-medium text-[#4a4b4d] text-[14px] leading-[19.965px] hover:text-black transition-colors">Blog</a>
              </div>
            </div>

            {/* Support */}
            <div className="flex flex-col gap-[15.97px] w-full lg:w-[138px]">
              <h3 className="font-semibold text-black text-[13px] leading-[27.951px]">Support</h3>
              <div className="flex flex-col gap-[12px]">
                <a href="#" className="font-medium text-[#4a4b4d] text-[14px] leading-[19.965px] hover:text-black transition-colors">Contact Us</a>
                <a href="#" className="font-medium text-[#4a4b4d] text-[14px] leading-[19.965px] hover:text-black transition-colors">Help Center</a>
                <a href="#" className="font-medium text-[#4a4b4d] text-[14px] leading-[19.965px] hover:text-black transition-colors">Privacy Policy</a>
                <a href="#" className="font-medium text-[#4a4b4d] text-[14px] leading-[19.965px] hover:text-black transition-colors">Terms & Condition</a>
                <a href="#" className="font-medium text-[#4a4b4d] text-[14px] leading-[19.965px] hover:text-black transition-colors">Child Safety Policy</a>
              </div>
            </div>

            {/* Social Media and App Stores */}
            <div className="flex flex-col gap-[40px] h-auto lg:h-[257px]">
              {/* Social Media */}
              <div className="flex flex-col gap-[16px] w-full lg:w-[195.72px]">
                <div className="flex flex-col gap-[10px]">
                  <h4 className="font-semibold text-black text-[13px] leading-[27.951px] whitespace-nowrap">Follow Us</h4>
                </div>
                <div className="flex gap-[12px]">
                  <a href="#" className="bg-[#e7f1f3] flex items-center justify-center rounded-[10px] w-[39.93px] h-[39.93px] hover:bg-[#d1e7ea] transition-colors">
                    <div className="w-[19.97px] h-[19.97px]">
                      <img
                        src="/footer-logo-2.svg"
                        alt="Facebook"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </a>
                  <a href="#" className="bg-[#e7f1f3] flex items-center justify-center rounded-[10px] w-[39.93px] h-[39.93px] hover:bg-[#d1e7ea] transition-colors">
                    <div className="w-[19.97px] h-[19.97px]">
                      <img
                        src="/footer-logo-3.svg"
                        alt="Twitter"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </a>
                  <a href="#" className="bg-[#e7f1f3] flex items-center justify-center rounded-[10px] w-[39.93px] h-[39.93px] hover:bg-[#d1e7ea] transition-colors">
                    <div className="w-[19.96px] h-[19.96px]">
                      <img
                        src="/footer-logo-4.svg"
                        alt="Instagram"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </a>
                  <a href="#" className="bg-[#e7f1f3] flex items-center justify-center rounded-[10px] w-[39.93px] h-[39.93px] hover:bg-[#d1e7ea] transition-colors">
                    <div className="w-[19.96px] h-[19.96px]">
                      <img
                        src="/footer-logo-5.svg"
                        alt="YouTube"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </a>
                </div>
              </div>

              {/* App Store Badges */}
              <div className="flex flex-col gap-[20px] h-auto lg:h-[142px]">
                <div className="flex gap-[7.25px]">
                  <div className="h-[29px] w-[97.874px]">
                    <img
                      src="/footer-logo-6.svg"
                      alt="App Store"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="h-[29px] w-[97.876px]">
                    <img
                      src="/footer-logo-7.svg"
                      alt="Google Play"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="font-medium text-[#4a4b4d] text-[12px] leading-[19.965px] w-[207px]">
                  <p className="mb-0">Also available on:</p>
                  <p className="mb-0">Apple TV • Android TV • Chromecast</p>
                  <p>Samsung, LG, Roku, Fire TV coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-[33px]">
          <div className="text-center">
            <p className="font-medium text-[#6a7282] text-[12px] leading-[19.965px]">
              Copyright © 2025 Kahf Kids. All rights reserved.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </footer>
  );
};

export default FooterAnimated;