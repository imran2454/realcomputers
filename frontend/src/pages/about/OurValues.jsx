import { motion } from "framer-motion";
import { FaHandshake, FaLightbulb, FaMedal, FaUsers } from "react-icons/fa";

const values = [
  {
    icon: <FaHandshake className="text-blue-600 text-4xl" />,
    title: "Integrity",
    desc: "We believe in honesty, transparency, and strong ethics in everything we do."
  },
  {
    icon: <FaLightbulb className="text-yellow-500 text-4xl" />,
    title: "Innovation",
    desc: "Encouraging creative thinking and adopting modern technology in education."
  },
  {
    icon: <FaMedal className="text-green-600 text-4xl" />,
    title: "Excellence",
    desc: "We strive for excellence in teaching, learning, and overall student development."
  },
  {
    icon: <FaUsers className="text-purple-600 text-4xl" />,
    title: "Collaboration",
    desc: "Working together with students, staff, and industry to achieve success."
  }
];

export default function OurValues() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Values
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition"
            >
              {value.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
