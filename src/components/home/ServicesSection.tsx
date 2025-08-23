import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { services } from "../../data/";

const ServicesSection = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const nextService = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  return (
    <section className="pt-16 pb-24 bg-[#EEF6FB]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          className="text-center mb-2"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="md:text-3xl text-2xl font-bold text-[#07254B]">
            What We Design and Supply
          </h2>
        </motion.div>

        <motion.div
          className="text-center mb-8"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ amount: 0.2, once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <p className="md:text-lg text-base max-w-2xl mx-auto text-[#5577A0]">
            Propulsion, power generation and centralized marine HVAC engineered and delivered for your vessel.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="relative bg-white rounded-lg border border-[#CEF3FF] shadow-lg shadow-indigo-200/40 overflow-hidden"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ amount: 0.2, once: true }}
            transition={{ duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 60 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex flex-row md:flex-row items-start md:items-center gap-4 md:gap-8 text-left md:text-left px-6 md:px-10 py-6 md:py-10 pr-14 md:pr-16 pb-16 md:pb-10 h-64 md:h-56"
              >
                {(() => {
                  const { icon: Icon, title, description, color } = services[currentIndex];
                  return (
                    <>
                      <motion.div className="flex-shrink-0"
                        key={title}
                        initial={{ scale: 0.95, rotate: -2, opacity: 0 }}
                        animate={{ scale: 1, rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                      >
                        <div className="h-12 w-12 md:h-20 md:w-20 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#34CD97]/10 to-[#0A3251]/10">
                          <Icon className={`h-8 w-8 md:h-12 md:w-12 text-[#07254B] ${color}`} />
                        </div>
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <motion.h3
                          key={`title-${title}`}
                          initial={{ y: 8, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="text-lg sm:text-lg md:text-2xl font-bold text-[#07254B] mb-1 whitespace-normal"
                        >
                          {title}
                        </motion.h3>
                        <motion.p
                          key={`desc-${title}`}
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                          className="text-[#4B6F9B] text-base md:text-lg leading-relaxed"
                        >
                          {description}
                        </motion.p>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </AnimatePresence>

            {/* Next button */}
            <button
              onClick={nextService}
              aria-label="Next"
              className="absolute bottom-3 right-3 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#0A3251] text-white flex items-center justify-center hover:bg-[#0c3e64] transition-colors cursor-pointer"
            >
              <ChevronRight size={22} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;