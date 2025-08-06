import { useEffect, useState } from "react";
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
    <div className="py-16 bg-[#F8FDFF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#07254B] mb-4">
            Our Marine Excellence
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[#5577A0]">
            Discover our comprehensive range of marine services and equipment
            designed to meet the highest industry standards.
          </p>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 ">
        <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-ocean">
          {slideShow.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
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
        <button
          className="cursor-pointer absolute left-8 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          onClick={prevSlide}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="cursor-pointer absolute right-8 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          onClick={nextSlide}
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slideShow.map((_, index) => (
            <button key={index} className={`cursor-pointer w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-green-500 scale-125" : "bg-white/50 hover:bg-white/70"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlideShow;