import { motion } from 'framer-motion';

const FeaturesAnimated = () => {
  const features = [
    {
      title: "Seamless Video Watching",
      items: [
        "YouTube Like Interface",
        "Expert-Approved Videos (14K+) – Handpicked by educators.",
        "Video Filter – Parents can change video settings",
        "Child-Lock Fullscreen Mode"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="bg-[#faefef] py-20 px-4 md:px-[159px]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="text-center mb-12"
        >
          <h2 className="text-[42px] font-semibold text-[#222222] leading-[70px] tracking-[-0.42px] mb-5 capitalize">
            Available Features in Kahf Kids
          </h2>
          <p className="text-[18px] text-[#4a4b4d] tracking-[-0.18px]">
            Lorem ipsum dolor sit amet consectetur. Snsecteturm dolor sit amet cosadd.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="relative"
          style={{
            backgroundImage: `url(/b735a4b1560e335b3817dba23ebb3183b366404a.svg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative px-[72px] py-[82px] flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              variants={itemVariants}
              className="flex-1 lg:max-w-[525px]"
            >
              <div className="relative mb-8 h-[62px] flex items-center"
                style={{
                  backgroundImage: `url(/ae3717db0f2d91cf80c0384c9f239aead67fa96a.svg)`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'left center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <h3 className="absolute top-[7px] left-[40px] text-[28px] font-semibold text-[#fffbfb] leading-normal capitalize tracking-[-0.28px]">
                  Seamless Video Watching
                </h3>
              </div>

              <div className="px-[40px] py-[10px]">
                <div className="space-y-5">
                  {features[0].items.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex items-center gap-3"
                    >
                      <div className="flex-shrink-0 w-6 h-6">
                        <img
                          src="/0a2110529c0182290d362ea1637ebf4fddce305d.svg"
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
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="relative rounded-[16px] overflow-hidden lg:w-[340px] lg:h-[230px] w-full h-64"
            >
              <img
                src="/8ddecc66e042270dc07d1dfc91720cda161f11ca.png"
                alt="Video feature preview"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="relative h-[77px]"
        >
          <div
            className="absolute inset-0 bg-[#fffbfb] shadow-[0px_-2px_14px_0px_rgba(213,179,179,0.25)]"
            style={{
              backgroundImage: `url(/6031adc49d0406a1240387f50dccbf3dd6fc151f.svg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FeaturesAnimated;