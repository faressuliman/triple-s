import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-blue-300 to-cyan-200 relative overflow-hidden px-8">
      {/* Decorative marine SVG wave at the bottom */}
      <svg className="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 1440 320">
        <path fill="#1976d2" fillOpacity="0.4" d="M0,224L48,202.7C96,181,192,139,288,128C384,117,480,139,576,170.7C672,203,768,245,864,240C960,235,1056,181,1152,154.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
      <div className="relative z-10 text-center p-8 bg-white/80 rounded-lg shadow-xl backdrop-blur-md">
        <h1 className="text-7xl font-extrabold text-blue-700 mb-2 drop-shadow-lg">404</h1>
        <p className="text-2xl text-blue-900 mb-6 font-semibold">Sorry, we can't find that page.</p>
        <Link to="/" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition font-bold">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
