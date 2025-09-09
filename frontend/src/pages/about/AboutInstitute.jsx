import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutInstitute() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-8 items-center">
        
        {/* Left Side - Director */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:col-span-1 text-center md:text-left"
        >
          <img
            src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" // 👉 Director photo
            alt="Director"
            className="rounded-lg shadow-lg mx-auto md:mx-2"
          />
          <h3 className="mt-4 text-xl font-semibold text-gray-800">
            Mr.Neeraj kumar Keshari
          </h3>
          <p className="text-blue-600 font-medium">Founder & Director</p>
        </motion.div>

        {/* Right Side - About Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:col-span-4"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 ">
          About our institute
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
           Our Computer Institute is dedicated to providing high-quality, job-oriented computer education that empowers students to succeed in today’s digital world. We aim to bridge the gap between theoretical knowledge and practical skills by offering training in the latest technologies such as web development, programming, and data analytics. By focusing on affordable and accessible IT education, we ensure that learners from both rural and urban backgrounds can benefit equally.
          </p>

          {/* Animated Expand/Collapse */}
          <AnimatePresence>
            {showMore && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="text-gray-700 leading-relaxed mt-4 text-justify">
                  Beyond technical expertise, our institute emphasizes the importance of digital literacy, preparing students not only for academic excellence but also for government and private sector employment opportunities. We also guide learners towards freelancing and entrepreneurship, enabling them to become self-reliant and financially independent. Practical training, live projects, and real-world assignments form the core of our teaching methodology, ensuring that every student gains hands-on experience. Ultimately, our mission is to nurture confidence, self-reliance, and adaptability in students, helping them to grow as competent professionals and responsible contributors in the ever-evolving technology sector.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            {showMore ? "Show Less" : "Learn More"}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
