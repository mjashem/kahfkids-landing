const FooterAnimated = () => {
  return (
    <footer className="bg-white px-4 md:px-[160px] py-[100px]">
      <div className="max-w-7xl mx-auto flex flex-col gap-[10px]">
        <div className="flex flex-col lg:flex-row gap-[130px]">
          <div className="flex flex-col lg:flex-row gap-[100px] w-full lg:w-[1120px] h-auto lg:h-[257px]">
            {/* Logo and Description */}
            <div className="flex flex-col gap-[15px] w-full lg:w-[300px]">
              <div className="flex flex-col gap-[43px]">
                <div className="flex flex-col gap-[15px]">
                  <div className="h-[53.183px] w-[78.427px]">
                    <img
                      src="/77888cd9cbf8ae5c172c487472780b52bd2d46e2.svg"
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
                        src="/3d8f78eb6868df4ae8ace43eda4bf6fc27d410b6.svg"
                        alt="Facebook"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </a>
                  <a href="#" className="bg-[#e7f1f3] flex items-center justify-center rounded-[10px] w-[39.93px] h-[39.93px] hover:bg-[#d1e7ea] transition-colors">
                    <div className="w-[19.97px] h-[19.97px]">
                      <img
                        src="/ba32d6dc9c82d105735a5c2a4836e150e612812d.svg"
                        alt="Twitter"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </a>
                  <a href="#" className="bg-[#e7f1f3] flex items-center justify-center rounded-[10px] w-[39.93px] h-[39.93px] hover:bg-[#d1e7ea] transition-colors">
                    <div className="w-[19.96px] h-[19.96px]">
                      <img
                        src="/75c678c4cd22bfee17b7a8d0b14d66ed18f5ae48.svg"
                        alt="Instagram"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </a>
                  <a href="#" className="bg-[#e7f1f3] flex items-center justify-center rounded-[10px] w-[39.93px] h-[39.93px] hover:bg-[#d1e7ea] transition-colors">
                    <div className="w-[19.96px] h-[19.96px]">
                      <img
                        src="/d9c864e66f2ae6c0c330e0e34acaf8851a7a7f09.svg"
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
                      src="/34533b9289d6d770de004dc34f6fd4b5b1a890e7.svg"
                      alt="App Store"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="h-[29px] w-[97.876px]">
                    <img
                      src="/fe0c087090e275fba7d5db28bb1ef202bfc500ef.svg"
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
      </div>
    </footer>
  );
};

export default FooterAnimated;