import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { slideShow } from "../../data";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageSlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideShow.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideShow.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideShow.length) % slideShow.length);
  };

  return (
    <section className="py-16 bg-[#F8FDFF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="md:text-3xl text-2xl font-bold text-[#07254B] mb-4">
            Our Marine Excellence
          </h2>
          <p className="md:text-lg text-md max-w-2xl mx-auto text-[#5577A0]">
            Discover our comprehensive range of marine services and equipment
            designed to meet the highest industry standards.
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
        <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl shadow-[#CEF3FF] border-[#8eddf7] border-1">
          {slideShow.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 p-6 md:p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  {slide.title}
                </h3>
                <p className="text-lg opacity-90">{slide.description}</p>
              </div>
            </div>
          ))}
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
          {slideShow.map((_, index) => (
            <motion.button
              key={index}
              className={`cursor-pointer w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-green-500 scale-125" : "bg-white/50 hover:bg-white/70"
                }`}
              onClick={() => setCurrentSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ImageSlideShow;