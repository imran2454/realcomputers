import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const achievements = [
  { icon: "🎓", number: 500, label: "Students Trained" },
  { icon: "🏆", number: 95, label: "Exam Success Rate (%)" },
  { icon: "💼", number: 300, label: "Job Placements" },
];

export default function AchievementsCounters() {
  const [counts, setCounts] = useState(achievements.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((val, i) =>
          val < achievements[i].number ? val + 5 : achievements[i].number
        )
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Our Achievements</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
        {achievements.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="p-8 bg-white shadow rounded-lg"
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-3xl font-bold text-blue-600">
              {counts[i]}
              {item.label.includes("%") ? "%" : "+"}
            </h3>
            <p className="text-gray-700 mt-2">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
