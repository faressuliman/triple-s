import { motion } from "framer-motion"
import sea from "../assets/sea.webp"
import { Award, ShieldHalf } from "lucide-react";
import logo from "../assets/logo.png";
import Card from "../components/ui/Card";
import { missionVision, storyTimeline } from "../data";
import "../index.css"
import Loading from "../components/ui/Loading";
import { useEffect, useState } from "react";

const About = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetch or some async work
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }


  // RENDERS
  const renderMissionVision = missionVision.map((item, index) => (
    <motion.div
      key={item.title}
      initial={{ y: 50, opacity: 0, scale: 0.95 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
    >
      <Card {...item} />
    </motion.div>
  ));

  const renderStory = storyTimeline.map((item, index) => (
    <motion.div
      key={item.badge}
      className="relative flex items-start"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.01 }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
    >
      <div
        className="absolute left-2 lg:left-6 top-2 w-4 h-4 bg-white border-2 rounded-full shadow-lg border-[#4B6F9B]"
      ></div>
      <div className="ml-12 lg:ml-20 w-full max-w-2xl">
        <div className="bg-white rounded-lg p-4 shadow-xl w-full">
          <div className="flex items-center gap-3 mb-2">
            <span
              className="text-sm font-bold px-3 py-1 rounded-full text-[#4B6F9B] bg-[#4B6F9B]/10"
            >
              {item.badge}
            </span>
            <h3 className="text-lg font-semibold text-[#0A3251]">{item.title}</h3>
          </div>
          <p className="text-[#4B6F9B] text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  ));

  return (
    <div>
      {/*Hero Section*/}
      <section className="relative md:h-[48vh] h-[36vh] py-40 lg:py-0 flex items-center bg-gradient-to-r from-[#09253b] to-[#0e4d6d] overflow-hidden">
        {/* Background */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.0 }}
        >
          <img src={sea} alt="Sea image" className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 text-white w-full max-w-screen-3xl mx-auto lg:px-16 px-4">
          <motion.div
            className="flex flex-col max-w-2xl md:translate-y-4 -translate-y-4"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-wrap md:text-nowrap mb-3">
              Shaping the <span className="text-[#38d49c]">Future</span> of Smarter Seas
            </h1>
            <p className="md:text-xl text-lg text-[#d5d5d5]">
              We deliver advanced marine solutions that make vessels safer, stronger, more efficient, and environmentally responsible.
            </p>
          </motion.div>
        </div>
      </section>

      {/*Main Content Section*/}
      <section className="mx-auto grid lg:grid-cols-4  md:grid-cols-1 grid-cols-1 items-stretch pt-16 pb-24 bg-[#EEF6FB] lg:px-16 px-6 gap-8">

        {/* Story Section */}
        <div className="col-span-2 space-y-8 max-w-3xl">

          <motion.div
            className="flex flex-row gap-3 items-center"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-2 rounded-full bg-gradient-to-b from-[#0A3251] to-[#34CD97]"
              initial={{ height: 0 }}
              animate={{ height: 48 }}
              transition={{ duration: 0.8 }}
            />
            <motion.h2
              className="text-[#0A3251] font-semibold text-sm"
              initial={{ y: -12 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              OUR STORY
            </motion.h2>
          </motion.div>

          <motion.div
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
            initial={{ y: -14 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className=" text-[#07254B]">From Vision To</h2>
            <span className="text-transparent bg-gradient-to-r from-[#0A3251] to-[#88A0B4] bg-clip-text">Industry Leadership</span>
          </motion.div>

          <motion.p
            className="text-[#4B6F9B] text-lg"
            initial={{ x: 40 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            We exist to solve technical marine problems. Every project begins by understanding the vessel, its loads and constraints, and the outcome the owner needs.
          </motion.p>

          <motion.p
            className="text-[#4B6F9B] text-lg"
            initial={{ x: 40 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Then we engineer, specify and supply. Shaftlines and propellers, generators and distribution, chilled‑water or DX HVAC, all coordinated to integrate cleanly on board.
          </motion.p>

          {/* Icons and Text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 mb-8">
            <div className="grid grid-cols-[auto_1fr] items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#34CD97]/10 to-[#0A3251]/10">
                <Award className="h-6 w-6 text-[#07254B]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#0A3251] mb-1 text-sm md:text-base">Industry Recognition</h3>
                <p className="text-sm text-[#4B6F9B]">
                  Multiple awards for innovation and excellence
                </p>
              </div>
            </div>

            <div className="grid grid-cols-[auto_1fr] items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#34CD97]/10 to-[#0A3251]/10">
                <ShieldHalf className="h-6 w-6 text-[#07254B]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#0A3251] mb-1 text-sm md:text-base">Expert Team</h3>
                <p className="text-sm text-[#4B6F9B]">
                  World-class professionals driving innovation
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Modern Timeline */}
        <div className="col-span-2 max-w-4xl mx-auto">
          <motion.div
            className="relative"
            initial={{ y: 24 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Vertical Line */}
            <div className="absolute left-4 lg:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-br from-[#34CD97]/10 to-[#0A3251]/10"></div>

            <div className="space-y-6">
              {renderStory}
            </div>
          </motion.div>
        </div>

      </section>

      {/* Mission and Vision Section */}
      <section className="mx-auto lg:px-16 px-6 pt-16 pb-20 bg-[#EEF6FB]">
        <div className="max-w-screen-3xl mx-auto">
          <motion.div
            className="flex flex-row gap-3 items-center mb-12"
            initial={{ y: -20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-2 rounded-full bg-gradient-to-b from-[#0A3251] to-[#34CD97]"
              initial={{ height: 0 }}
              whileInView={{ height: 48 }}
              viewport={{ once: true, amount: 0.01 }}
              transition={{ duration: 0.8 }}
            />
            <motion.h2
              className="text-[#0A3251] font-semibold text-sm"
              initial={{ y: -12 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              OUR PURPOSE
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {renderMissionVision}
          </div>
        </div>
      </section>

      {/* Foundation Section */}
      <section className="mx-auto lg:px-16 px-6 pt-16 pb-20 bg-[#EEF6FB] grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-12 items-center">
        {/* Text Section */}
        <div className="space-y-8">
          <motion.div
            className="flex flex-row gap-3 items-center"
            initial={{ y: -20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-2 rounded-full bg-gradient-to-b from-[#0A3251] to-[#34CD97]"
              initial={{ height: 0 }}
              whileInView={{ height: 48 }}
              viewport={{ once: true, amount: 0.01 }}
              transition={{ duration: 0.8 }}
            />
            <motion.h2
              className="text-[#0A3251] font-semibold text-sm"
              initial={{ y: -12 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              OUR FOUNDATION
            </motion.h2>
          </motion.div>

          <motion.div
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
            initial={{ y: -14 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className=" text-[#07254B]">Built On Values</h2>
            <span className="text-transparent bg-gradient-to-r from-[#0A3251] to-[#88A0B4] bg-clip-text">Driving Everything We Do</span>
          </motion.div>

          <motion.p
            className="text-[#4B6F9B] text-lg"
            initial={{ x: 40 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ duration: 0.8 }}
          >
            Our foundation is built on integrity, reliability, and a passion for maritime excellence. These core principles guide our decisions and ensure we deliver lasting value to our partners and communities. <br />
            <br />Through disciplined execution and continuous improvement, we uphold the highest standards of safety, sustainability, and customer trust across every project we undertake.
          </motion.p>
        </div>

        {/* Logo */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ y: 12 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.01 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={logo}
            alt="Triple S Logo"
            className="w-64 h-64 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] object-contain transition-transform duration-500 hover:animate-spin"
            loading="lazy"
            fetchPriority="low"
          />
        </motion.div>
      </section>

    </div>
  );

};

export default About;