import { Link } from "react-router-dom";
import heroImage from "../assets/hero-marine.jpg";
import Button from "../components/ui/Button";

const Home = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Marine industry hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07254B]/80 to-[#07254B]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-white text-center p-4 max-w-2xl">
        <h1 className="text-5xl font-bold pb-1">Commitment is our motive</h1>
        <p className="mt-5 text-xl pb-1">
          Welcome to our company where you can find anything related to the Marine industry.
        </p>
        <p className="text-2xl mt-2 font-semibold text-[#38d49c] pb-1">
          The Best Place To Meet Your Requirements.
        </p>
        <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4">
          <Link to="/contact" className="w-full md:w-auto">
            <Button className="border-[#38d49c] bg-[#38d49c] hover:bg-[#3c9776] hover:border-[#3c9776]">
              Get Started →
            </Button>
          </Link>
          <Link to="/about" className="w-full md:w-auto">
            <Button className="border-white hover:bg-white hover:text-black">
              Learn More
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Home;
