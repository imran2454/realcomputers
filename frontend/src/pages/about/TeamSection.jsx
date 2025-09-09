import { motion } from "framer-motion";

const team = [
  {
    name: " Ramesh Prasad",
    role: "Lab Instructer",
    exp: "5+ Years in Education Leadership",
    desc: " Ramesh Prasad founded our institute with the goal of bringing excellence to the education sector. He is dedicated to helping students reach their full potential.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    link: "#"
  },
  {
    name: "Ms. Priya Singh",
    role: "Head of Academics, Programming",
    exp: "3+ Years in Software Development & Training",
    desc: "Ms. Priya Singh has extensive experience in programming and software development. She is excited to help students master the world of coding.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    link: "#"
  },
  {
    name: "Mr. Alok Verma",
    role: "Lead Instructor, Web Development",
    exp: "10+ Years in Full Stack Web Development",
    desc: "Mr. Alok Verma guides the students in creating amazing real world projects especially in web development.",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    link: "#"
  },
  {
    name: "Ms. Deepika Sharma",
    role: "Admissions Counselor",
    exp: "2+ Years in Student Counseling",
    desc: "Ms. Deepika Sharma assists students in choosing the right course and in the admission process.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    link: "#"
  }
];

export default function TeamSection() {
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
          Our Team
        </motion.h2>

        {/* Team Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-blue-500"
              />
              <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
              <a
                href={member.link}
                className="text-blue-600 font-medium text-sm"
              >
                {member.role}
              </a>
              <p className="text-gray-500 text-sm mt-1">{member.exp}</p>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                {member.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
