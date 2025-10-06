const DevicesAnimated = () => {
  const devicePlatforms = [
    { logo: "/28e0ce35027043bf16ea68628d986ff0871ca6eb.png", name: "Roku" },
    { logo: "/b6a98014599c0a0864772e0c8a0803b5d467d5ac.png", name: "FireTV" },
    { logo: "/736749964c2af19249b3dc29b4b70039ada58147.png", name: "Apple TV" },
    { logo: "/0d6a4cdcedfde206aafd383bb63ab20e0787c91f.png", name: "iOS" },
    { logo: "/15a1d16c58aa8deaafe887642e2b0c5394a122b3.png", name: "Android" },
    { logo: "/d2c840d6d5299337087e74be193e7dcad3336d4c.png", name: "Windows" },
    { logo: "/610119d1b6084c1494dab31893c825844a85ecb8.png", name: "LG" },
    { logo: "/687ec34cab65f3a2f895197cf1e385cf6475f6ae.png", name: "Sony" }
  ];

  return (
    <div className="bg-[#f8f0f0] py-20 px-4 md:px-[160px] min-h-[944px] flex items-center justify-center">
      <div className="max-w-7xl mx-auto flex flex-col gap-[40px] items-center">
        <div className="text-center max-w-[1121px]">
          <h2 className="text-[42px] font-semibold text-[#2c2626] leading-[70px] capitalize tracking-[-0.42px] mb-5">
            Enjoy Kahf Kids anytime, anywhere
          </h2>
          <p className="text-[18px] text-[#4a4b4d] tracking-[-0.18px] max-w-[753px] mx-auto leading-relaxed">
            Stream safely on every device—whether it's phones, tablets, smart TVs, or the web. With just one account, your kids can learn, play, and explore across all platforms seamlessly.
          </p>
        </div>

        {/* Device Group Image */}
        <div className="relative w-full max-w-[790px] h-[403px] flex items-center justify-center">
          <img
            src="/Group-46939.png"
            alt="Kahf Kids on all devices - TV, MacBook, iPad, and iPhone"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Platform Logos */}
        <div className="flex flex-col gap-[45px] items-center w-full max-w-[666px]">
          {/* App Store and Google Play Badges */}
          <div className="flex gap-3 items-center">
            <img
              src="/474171806f8e270d58ca28e75c228a7a2130b51c.svg"
              alt="App Store"
              className="h-12 w-40 object-contain"
            />
            <img
              src="/f6da9254686dc90e68c2ac4399e79e3c053721df.svg"
              alt="Google Play"
              className="h-12 w-40 object-contain"
            />
          </div>

          {/* Device Platform Logos */}
          <div className="flex flex-wrap justify-center gap-0 w-full h-[47px] items-start">
            {devicePlatforms.map((platform, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-white p-3 rounded shadow-sm"
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
        </div>
      </div>
    </div>
  );
};

export default DevicesAnimated;