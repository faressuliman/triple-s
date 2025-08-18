import { steps } from "../../data";
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";

const ProcessSection = () => {

  // Map Lazy Load
  const LazyMap = lazy(() => import("../../components/ui/Map"))

  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.05 },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.96 },
    show: { opacity: 1, y: 0, scale: 1 },
  } as const;

  // RENDER
  const renderProcesses = steps.map(({ title, description, Icon }) => (
    <motion.div
      key={title}
      variants={cardVariants}
      className="relative rounded-xl border border-[#CEF3FF] bg-white p-6 transition-colors duration-300 shadow-lg hover:shadow-indigo-300 hover:shadow-xl hover:cursor-default"
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.3 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <motion.div
          className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#34CD97]/10 to-[#0A3251]/10 flex items-center justify-center"
          initial={{ scale: 0.9, rotate: -3 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <Icon className="text-[#0A3251]" />
        </motion.div>
        <h3 className="text-lg font-semibold text-[#07254B]">{title}</h3>
      </div>
      <p className="text-[#4B6F9B] leading-relaxed">{description}</p>
    </motion.div>
  ))

  return (
    <section className="py-12 md:py-24 bg-[#F8FDFF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          className="text-center mb-2"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="md:text-3xl text-2xl font-bold text-[#07254B]">How We Deliver Projects</h2>
        </motion.div>

        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, amount: 0.01 }}
        >
          <p className="md:text-lg text-base max-w-2xl mx-auto text-[#5577A0]">
            From requirements and engineering to procurement, delivery and long‑term support.
          </p>
        </motion.div>

        <div className="relative">
          {/* CONNECTOR LINE */}
          <motion.div
            className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-[#DCE8F5] via-[#B8D3EC] to-[#DCE8F5]"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          />

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {renderProcesses}
          </motion.div>
        </div>

        <motion.div
          className="pt-12 md:pt-24"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 80, damping: 25, duration: 1.2 }}
        >
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="md:text-3xl text-2xl font-bold text-[#07254B]">Where You Can Find Us</h2>
          </motion.div>
          <div className="rounded-lg shadow-xl shadow-indigo-300 border-2 border-[#316cb9] overflow-hidden">
            <Suspense fallback={<div className="h-[500px] bg-gray-200 animate-pulse flex items-center justify-center">Loading map...</div>}>
              <LazyMap />
            </Suspense>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;