import { AnimatedSection } from './AnimatedSection';

const DevicesAnimated = () => {
  const devicePlatforms = [
    { logo: "/roku-logo.png", name: "Roku" },
    { logo: "/firetv-logo.png", name: "FireTV" },
    { logo: "/appletv-logo.png", name: "Apple TV" },
    { logo: "/ios-logo.png", name: "iOS" },
    { logo: "/android-logo.png", name: "Android" },
    { logo: "/windows-logo.png", name: "Windows" },
    { logo: "/lg-logo.png", name: "LG" },
    { logo: "/sony-logo.png", name: "Sony" }
  ];

  return (
    <div className="bg-[#f8f0f0] py-20 min-h-[944px] flex items-center justify-center">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl flex flex-col gap-10 items-center w-full">
        <AnimatedSection animation="fadeUp" delay={0.2} className="text-center max-w-[1121px]">
          <h2 className="text-[42px] font-semibold text-[#2c2626] leading-[70px] capitalize tracking-[-0.42px] mb-5">
            Enjoy Kahf Kids anytime, anywhere
          </h2>
          <p className="text-[18px] text-[#4a4b4d] tracking-[-0.18px] max-w-[753px] mx-auto leading-relaxed">
            Stream safely on every device—whether it's phones, tablets, smart TVs, or the web. With just one account, your kids can learn, play, and explore across all platforms seamlessly.
          </p>
        </AnimatedSection>

        {/* Device Group Image */}
        <AnimatedSection animation="scaleIn" delay={0.4} className="relative w-full max-w-[790px] h-[403px] flex items-center justify-center">
          <img
            src="/tv-mockup.png"
            alt="Kahf Kids on all devices - TV, MacBook, iPad, and iPhone"
            className="w-full h-full object-contain"
          />
        </AnimatedSection>

        {/* Platform Logos */}
        <AnimatedSection animation="fadeUp" delay={0.6} className="flex flex-col gap-[45px] items-center w-full max-w-[666px]">
          {/* App Store and Google Play Badges */}
          <div className="flex gap-3 items-center">
            <img
              src="/devices-background.svg"
              alt="App Store"
              className="h-12 w-40 object-contain"
            />
            <img
              src="/devices-illustration.svg"
              alt="Google Play"
              className="h-12 w-40 object-contain"
            />
          </div>

          {/* Device Platform Logos */}
          <div className="flex flex-wrap justify-center gap-0 w-full h-[47px] items-start">
            {devicePlatforms.map((platform, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-3"
                style={{
                  width: '83.25px',
                  height: '47px',
                  padding: '17.33px 18.27px'
                }}
              >
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className="w-[46.71px] h-[46.71px] object-contain"
                />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default DevicesAnimated;