import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { slideShow } from "../../data";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageSlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slideShow.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideShow.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideShow.length) % slideShow.length);
  };

  // RENDERS
  const renderSlides = slideShow.map((slide, index) => (
    <div
      key={slide.id}
      className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
        }`}
    >
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full h-full object-cover"
        loading={index === 0 ? "eager" : "lazy"}
        fetchPriority={index === 0 ? "high" : "auto"}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <motion.div
        className="absolute bottom-6 left-6 p-6 md:p-8 text-white"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 25, duration: 0.9 }}
      >
        <motion.h3
          key={`title-${slide.id}-${index}`}
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-2xl md:text-3xl font-bold mb-2"
        >
          {slide.title}
        </motion.h3>
        <motion.p
          key={`desc-${slide.id}-${index}`}
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
          className="text-lg opacity-90"
        >
          {slide.description}
        </motion.p>
      </motion.div>
    </div>
  ));

  const renderIndicators = slideShow.map((_, index) => (
    <motion.button
      key={index}
      className={`cursor-pointer w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-green-500 scale-125" : "bg-white/50 hover:bg-white/70"
        }`}
      onClick={() => setCurrentSlide(index)}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      aria-label={`Go to slide ${index + 1}`}
    />
  ));

  return (
    <section className="pt-12 md:pt-16 bg-[#F8FDFF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="md:text-3xl text-2xl font-bold text-[#07254B]">
            Marine Systems We Deliver
          </h2>
        </motion.div>

        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, amount: 0.01 }}
        >
          <p className="md:text-lg text-base max-w-2xl mx-auto text-[#5577A0]">
            Propulsion, onboard power and marine HVAC. Engineered, specified and supplied to fit your vessel.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="relative max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="relative h-80 md:h-[450px] rounded-lg overflow-hidden shadow-xl shadow-[#CEF3FF] border border-[#8eddf7]">
          {renderSlides}
        </div>

        {/* Navigation Buttons */}
        <motion.button
          className="cursor-pointer absolute left-5 md:left-8 top-1/2 -translate-y-1/2 md:w-10 md:h-10 w-7 h-7 bg-white/20 text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </motion.button>
        <motion.button
          className="cursor-pointer absolute right-5 md:right-8 top-1/2 -translate-y-1/2 md:w-10 md:h-10 w-7 h-7 bg-white/24.5 text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </motion.button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {renderIndicators}
        </div>
      </motion.div>
    </section>
  );
};

export default ImageSlideShow;