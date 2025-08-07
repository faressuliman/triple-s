import { Link } from "react-router-dom";
import Button from "../ui/Button";
import vid from "../../assets/backgroundvid.mp4";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.div
      className="relative h-[88vh] flex items-center overflow-hidden"
      initial={{ opacity: 0.7 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <video
          src={vid}
          autoPlay={true}
          muted={true}
          loop={true}
          className="w-full h-[88vh] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07254B]/80 to-[#07254B]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-white w-full max-w-screen-3xl mx-auto lg:px-20 px-8">
        <div className="max-w-2xl">
          <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold mb-4 break-words">
            Empowering Progress in the <span className="text-[#38d49c]">Marine</span> Industry
          </h1>
          <p className="md:text-xl text-lg text-[#d4d4d4] mb-6">
            Triple S delivers comprehensive, end-to-end solutions for the maritime sector through
            connecting professionals and businesses with trusted services, technical expertise,
            and innovative tools that drive growth, ensure safety, and promote sustainability across marine operations.
          </p>

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
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
