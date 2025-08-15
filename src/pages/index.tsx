import HeroSection from "../components/home/HeroSection";
import ImageSlideShow from "../components/home/ImageSlideShow";
import ProcessSection from "../components/home/ProcessSection";
import ServicesSection from "../components/home/ServicesSection";
import { useState, useEffect } from "react";
import Loading from "../components/ui/Loading";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loading for 2 seconds to allow images to load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FDFF]">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ImageSlideShow />
      <ProcessSection />
    </>
  );
};

export default Home;
