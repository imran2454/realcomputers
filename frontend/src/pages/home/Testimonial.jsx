import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Web Development Student",
    feedback:
      "This institute transformed my career! The practical training and supportive faculty gave me the confidence to land my first job.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Verma",
    role: "Data Science Student",
    feedback:
      "Amazing experience! The curriculum is industry-relevant and the placement support is outstanding.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Amit Kumar",
    role: "Graphic Design Student",
    feedback:
      "The hands-on projects helped me build a strong portfolio. Highly recommend this institute!",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    name: "Sneha Kapoor",
    role: "AI & ML Student",
    feedback:
      "Great environment and faculty! I learned cutting-edge technologies with real-world projects.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // auto scroll every 4s
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="text-center mb-12 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What Our Students Say
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Hear from our successful students who built their careers with us.
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto overflow-hidden">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 text-center"
        >
          <img
            src={testimonials[index].image}
            alt={testimonials[index].name}
            className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500 shadow-md"
          />
          <h3 className="mt-4 text-xl font-semibold text-gray-900">
            {testimonials[index].name}
          </h3>
          <p className="text-sm text-blue-600">{testimonials[index].role}</p>
          <p className="text-gray-700 mt-4 italic">
            “{testimonials[index].feedback}”
          </p>
        </motion.div>
      </div>

      {/* Dots for navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-blue-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
