import { motion } from "framer-motion";
import {
  UserCheck,
  Building2,
  Wrench,
  Briefcase,
  BookOpen,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: <UserCheck className="w-10 h-10 text-yellow-400" />,
    title: "Experienced Faculty",
    desc: "Our expert faculty members bring real-world insights and practical examples to the classroom.",
  },
  {
    icon: <Building2 className="w-10 h-10 text-green-400" />,
    title: "Modern Infrastructure",
    desc: "State-of-the-art classrooms, labs, and digital learning tools for better learning outcomes.",
  },
  {
    icon: <Wrench className="w-10 h-10 text-orange-400" />,
    title: "Practical Training",
    desc: "Hands-on projects, workshops, and live demonstrations to build real-world skills.",
  },
  {
    icon: <Briefcase className="w-10 h-10 text-purple-400" />,
    title: "Placement Assistance",
    desc: "Resume building, interview preparation, and industry connections to help you get placed.",
  },
  {
    icon: <BookOpen className="w-10 h-10 text-pink-400" />,
    title: "Industry-Relevant Curriculum",
    desc: "Updated syllabus designed to meet current industry trends and future skills.",
  },
  {
    icon: <Clock className="w-10 h-10 text-blue-400" />,
    title: "Flexible Timings",
    desc: "Choose class timings that fit your schedule and balance with other commitments.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="relative py-20 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 text-white"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80')] 
        bg-cover bg-center opacity-30"
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative text-center mb-12 px-6">
        <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us?</h2>
        <p className="text-gray-200 mt-2 max-w-2xl mx-auto">
          We provide the best environment for students to learn, grow, and
          succeed.
        </p>
      </div>

      {/* Cards */}
      <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white/90 backdrop-blur-md rounded-xl shadow-md hover:shadow-xl transition p-6 text-center"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-700 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
