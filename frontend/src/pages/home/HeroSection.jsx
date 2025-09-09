import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
    const navigate = useNavigate();
  return (
    <section className="relative h-[90vh] flex items-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://www.pexels.com/download/video/3141210/" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-white text-center md:text-left">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight mb-4"
        >
          Empowering Students with <span className="text-yellow-400">Knowledge</span>
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl mb-6 max-w-2xl"
        >
          Computer knowledge is the greatest investment for children because it builds a strong foundation for their future. By learning technology at an early stage, they gain the confidence and skills needed to face tomorrow’s challenges..
        </motion.p>

        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
         <button
        type="button"
        onClick={() => navigate("/courses")}
        className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-300"
       >
            Explore Courses
          </button>
          <button
          type="button"
          onClick={() => navigate("/admission")}
          className="bg-transparent border border-white px-6 py-3 rounded-lg shadow-md hover:bg-white hover:text-blue-700"
        >
      Apply Now
        </button>
        </div>
      </div>
    </section>
  );
}
