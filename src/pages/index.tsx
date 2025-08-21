import HeroSection from "../components/home/HeroSection";
import ImageSlideShow from "../components/home/ImageSlideShow";
import ProcessSection from "../components/home/ProcessSection";
import ServicesSection from "../components/home/ServicesSection";
import LocationSection from "../components/home/LocationSection";

const Home = () => {

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ImageSlideShow />
      <ProcessSection />
      <LocationSection />
    </>
  );
};

export default Home;
