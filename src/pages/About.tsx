import { motion } from "framer-motion"
import sea from "../assets/sea.png"
import { Award, ShieldHalf, Waves, Target } from "lucide-react";
import logo from "../assets/logo.png";
import "../index.css"

const About = () => {
  return (
    <div>
      {/*Hero Section*/}
      <div className="relative h-[48vh] py-40 lg:py-0 flex items-center overflow-hidden">
        {/* Background */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={sea} alt="Waves" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#09253b]/80 to-[#0e4d6d]/80"></div>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 text-white w-full max-w-screen-3xl mx-auto lg:px-20 px-8 md:pt-8">
          <motion.div
            className="flex flex-col max-w-2xl"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-wrap mb-6">
              Your Partner in <span className="text-[#38d49c]">Oceanic</span> Innovation
            </h1>
            <p className="md:text-xl text-lg text-[#f0f0f0]">
              At Triple S, we deliver smart, end-to-end marine solutions that drive performance, safety, and sustainability.
            </p>
          </motion.div>
        </div>

      </div>

      {/*Main Content Section*/}
      <section className="mx-auto grid lg:grid-cols-4 md:grid-cols-1 grid-cols-1 items-stretch pt-32 pb-24 bg-[#F8FDFF] lg:px-16 px-8 gap-8">

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
              transition={{ duration: 0.8, delay: 0.15 }}
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
            Founded with an audacious vision to revolutionize the marine industry, we've transformed from a small team of passionate innovators into a globally recognized leader.
          </motion.p>

          <motion.p
            className="text-[#4B6F9B] text-lg"
            initial={{ x: 40 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Our journey has been marked by breakthrough innovations, strategic partnerships, and an unwavering commitment to pushing the boundaries of what's possible in maritime technology.
          </motion.p>

          {/* Icons and Text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="grid grid-cols-[auto_1fr] items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#E6E9ED]">
                <Award className="h-6 w-6 text-[#07254B]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#0A3251] mb-1">Industry Recognition</h3>
                <p className="text-sm text-[#4B6F9B]">
                  Multiple awards for innovation and excellence
                </p>
              </div>
            </div>

            <div className="grid grid-cols-[auto_1fr] items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#E6E9ED]">
                <ShieldHalf className="h-6 w-6 text-[#07254B]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#0A3251] mb-1">Expert Team</h3>
                <p className="text-sm text-[#4B6F9B]">
                  World-class professionals driving innovation
                </p>
              </div>
            </div>
          </div>


        </div>

        {/* Mission and Vision */}
        <motion.div
          className="col-span-2 max-w-3xl h-full rounded-xl shadow-lg shadow-indigo-300 border border-[#CEF3FF]"
          initial={{ y: 24 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="rounded-xl bg-white p-6 md:py-10 md:px-8 h-full">
            <div className="flex flex-col justify-between gap-8 h-full">
              {/* Mission */}
              <div className="flex items-start gap-5">
                <div aria-hidden className="w-20 h-16 rounded-2xl flex items-center justify-center bg-[#E6E9ED] shadow-md">
                  <Target className="w-12 h-9 text-[#07254B]" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#0A3251] mb-2">Mission</h3>
                  <p className="text-[#4B6F9B]">
                    To be the most trusted and innovative partner in the marine industry, delivering superior solutions while maintaining the highest standards of safety and environmental responsibility.
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-300/80 mx-2 md:mx-4" />

              {/* Vision */}
              <div className="flex items-start gap-5">
                <div aria-hidden className="w-20 h-16 rounded-2xl flex items-center justify-center bg-[#E6E9ED] shadow-md">
                  <Waves className="w-9 h-9 text-[#07254B]" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#0A3251] mb-2">Vision</h3>
                  <p className="text-[#4B6F9B]">
                    To shape the future of maritime operations through cutting-edge technology, sustainable practices, and unwavering commitment to excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </section>

      {/* Foundation Section*/}
      <section className="mx-auto lg:px-16 px-8 pt-16 pb-20 bg-[#F8FDFF] grid lg:grid-cols-4 grid-cols-1 gap-8">
        <div className="lg:col-span-4 col-span-1 space-y-8 max-w-screen-3xl w-full">
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
              transition={{ duration: 0.8, delay: 0.15 }}
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
            Our foundation is built on integrity, reliability, and a passion for maritime excellence. These core principles guide our decisions and ensure we deliver lasting value to our partners and communities.
          </motion.p>

          <motion.p
            className="text-[#4B6F9B] text-lg"
            initial={{ x: 40 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Through disciplined execution and continuous improvement, we uphold the highest standards of safety, sustainability, and customer trust across every project we undertake.
          </motion.p>
        </div>
      </section>

      {/* Logo Section */}
      <section className="mx-auto lg:px-16 px-8 pt-16 pb-20 bg-[#F8FDFF] grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-12 items-center">
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
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              OUR IDENTITY
            </motion.h2>
          </motion.div>

          <motion.div
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
            initial={{ y: -14 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className=" text-[#07254B]">Precision At The Helm</h2>
            <span className="text-transparent bg-gradient-to-r from-[#0A3251] to-[#88A0B4] bg-clip-text">A Symbol of Excellence</span>
          </motion.div>

          <motion.p
            className="text-[#4B6F9B] text-lg"
            initial={{ x: 40 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ duration: 0.8 }}
          >
            Our logo represents steadfast reliability and innovation at sea. It reflects our promise to deliver smart, sustainable solutions with discipline and care.
          </motion.p>
        </div>

        {/* Logo */}
        <motion.div
          className="flex justify-center items-center group"
          initial={{ y: 12 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.01 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={logo}
            alt="Triple S Logo"
            className="w-full max-w-lg object-contain transition-transform duration-500 group-hover:animate-spin"
          />
        </motion.div>
      </section>

    </div>
  );

};

export default About;