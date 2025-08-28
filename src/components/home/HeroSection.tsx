import { Link } from "react-router-dom";
import Button from "../ui/Button";
import vid from "../../assets/backgroundvid.mp4";
import posterImage from "../../assets/posterImage.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
  
  return (
    <section className="relative md:h-[88vh] h-[80vh] py-60 lg:py-0 flex items-center overflow-hidden">
      {/* Background */}
      <section className="absolute inset-0">
        <video
          poster={posterImage}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src={vid} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#19254B]/80 to-[#000000]/40" />
      </section>

      {/* Content */}
      <section className="relative z-10 text-white w-full max-w-screen-3xl mx-auto lg:px-20 px-8">
        <motion.div
          className="flex flex-col max-w-2xl"
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="lg:text-4xl md:text-3xl text-2xl font-bold text-wrap mb-8"

          >
            <span className="text-[#38d49c]">Marine</span> Systems Engineering and Supply
          </h1>
          <p
            className="md:text-xl text-lg text-[#f0f0f0] mb-8"

          >
            Triple S delivers comprehensive, end-to-end solutions for the maritime sector through
            connecting professionals and businesses with trusted services, technical expertise,
            and innovative tools that drive growth, ensure safety, and promote sustainability across marine operations.
          </p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-4"
            initial={{ opacity: 0.1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Link to="/contact" className="w-full md:w-auto">
              <Button className="border-[#2d7a5a] bg-[#2d7a5a] hover:bg-[#52977a] hover:border-[#52977a] text-white">
                Get Started →
              </Button>
            </Link>
            <Link to="/about" className="w-full md:w-auto">
              <Button className="border-[#52977a] hover:bg-white hover:border-white hover:text-black">
                More About Us
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </section>
  );
};

export default HeroSection;
