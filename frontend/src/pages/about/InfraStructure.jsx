import { motion } from "framer-motion";

const facilities = [
  {
    title: "Modern Classroom",
    desc: "Our classrooms are equipped with the latest technology, air conditioning and comfortable seating arrangements so that students can acquire knowledge effortlessly.",
    img: "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg"
  },
  {
    title: "Advance Computer Lab",
    desc: "The labs equipped with high-performance computers and necessary software provide students with the best facilities for hands-on experience and project work.",
    img: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
  },
  {
    title: "Extensive Library",
    desc: "Our library has a vast collection of textbooks, reference materials, e-books and research journals to support student learning.",
    img: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg"
  },
  {
    title: "Seminar Hall",
    desc: "A spacious and well-equipped seminar hall is available for special lectures, workshops and student presentations.",
    img: "https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg"
  }
];

export default function Infrastructure() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Infrastructure
        </motion.h2>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {facilities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
