import { Link } from "react-router-dom";
import Button from "../ui/Button";
import vid from "../../assets/backgroundvid.mp4";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.div
      className="relative h-[88vh] flex items-center overflow-hidden"
      initial={{ opacity: 0, scale: 1.02 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background */}
      <section className="absolute inset-0">
        <motion.video
          src={vid}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#19254B]/80 to-[#000000]/40" />
      </section>

      {/* Content */}
      <section className="relative z-10 text-white w-full max-w-screen-3xl mx-auto lg:px-20 px-8">
        <motion.div
          className="flex flex-col max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <motion.h1
            className="lg:text-4xl md:text-3xl text-2xl font-bold text-wrap mb-8"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Empowering Progress in the <span className="text-[#38d49c]">Marine</span> Industry
          </motion.h1>
          <motion.p
            className="md:text-xl text-lg text-[#f0f0f0] mb-8"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Triple S delivers comprehensive, end-to-end solutions for the maritime sector through
            connecting professionals and businesses with trusted services, technical expertise,
            and innovative tools that drive growth, ensure safety, and promote sustainability across marine operations.
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Link to="/contact" className="w-full md:w-auto">
              <Button className="border-[#38d49c] bg-[#38d49c] hover:bg-[#3c9776] hover:border-[#3c9776]">
                Get Started →
              </Button>
            </Link>
            <Link to="/about" className="w-full md:w-auto">
              <Button className="border-[#38d49c] hover:bg-white hover:border-white hover:text-black">
                Learn More
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default HeroSection;
