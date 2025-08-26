import { motion } from "framer-motion";
import { lazy, Suspense } from "react";

const LocationSection = () => {
  // Map Lazy Load
  const LazyMap = lazy(() => import("../../components/ui/Map"))

  return (
    <section className="pt-16 pb-24 bg-[#F8FDFF] shadow-black shadow-2xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.01 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="md:text-3xl text-2xl font-bold text-[#07254B]">Where You Can Find Us</h2>
        </motion.div>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
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

export default LocationSection;
