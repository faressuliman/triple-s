import { motion } from "framer-motion"
import { GetInTouch } from "../data"

const Contact = () => {

  const renderGetInTouch = GetInTouch.map(({ Icon, title, description }, index) => (
    <div key={index} className="flex flex-col justify-between gap-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 rounded-full bg-[#E6E9ED] flex items-center justify-center">
                <Icon className="h-6 w-6 text-[#07254B]"/>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#07254B] mb-1">{title}</h3>
                <p className="text-[#5577A0]">{description}</p>
              </div>
            </div>
          </div>
  ))

  return (
    <div>
      {/*Hero Section */}
      <section className="relative md:h-[48vh] h-[32vh] flex items-center bg-gradient-to-r from-[#09253b] to-[#0e4d6d] overflow-hidden">
        {/* Background */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
        </motion.div>

        {/* Hero */}
        <div className="relative z-10 text-white w-full max-w-screen-3xl mx-auto lg:px-20 px-16 md:pt-8">
          <motion.div
            className="flex flex-col max-w-2xl"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-wrap md:text-nowrap mb-6">
              Contact Us for Trusted <span className="text-[#38d49c]">Marine</span> Guidance
            </h1>
            <p className="md:text-xl text-lg text-[#f0f0f0]">
              Get expert insights and solutions that keep your operations safe, efficient, and future-ready.
            </p>
          </motion.div>
        </div>
      </section>

      {/*Main Content Section*/}
      <section className="mx-auto grid md:grid-cols-3 grid-cols-1 space-x-32 items-stretch pt-32 pb-24 bg-[#F8FDFF] lg:px-16 px-8 gap-8">
        {/* Contact Form */}
        <div className="border border-black md:col-span-2">

        </div>
        <div className="rounded-xl shadow-xl shadow-indigo-300 border border-[#CEF3FF] p-8">
          <h1 className="text-center text-3xl mb-6 font-bold text-[#07254B]">Get In Touch</h1>
          <div className="flex flex-col justify-between gap-12">
            {renderGetInTouch}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact