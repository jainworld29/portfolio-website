import { motion } from "framer-motion";
import { Mic, Users, BookOpenCheck } from "lucide-react";

/* ================= DATA ================= */

const workshops = [
  {
    title: "National Technology Day 2024 Workshop",
    desc: "Delivered a 5-day workshop titled “Research Projects in the field of AI”, sponsored by DST Haryana and supported by Inner Wheel Central Panipat. Guided 100+ students and delivered expert sessions on research and publications.",
    icon: Mic,
  },
  {
    title: "PRASHIKSHAN 2025 – AI Expert Talk & Judge",
    desc: "Invited as AI Expert Talk speaker and judge at PIET. Evaluated innovative research projects and guided undergraduate students.",
    icon: Users,
  },
  {
    title: "Career Guidance Session Expert Talk 2025",
    desc: "Mentored first- and second-year students on career paths, AI research opportunities, and emerging technologies.",
    icon: Mic,
  },
];

const reviews = [
  {
    title: "IEEE Access Reviewer Recognition (2024)",
    desc: "Recognized by IEEE Access for reviewing manuscript: “A Survey on Quantum Machine Learning: Basics, Current Trends, Challenges, Opportunities, and the Road Ahead”.",
    icon: BookOpenCheck,
  },
  {
    title: "Peer Reviewer – IGI Global Scientific Publishing",
    desc: "Reviewed multiple manuscripts in “Neural Network Technologies and Brain-Computer Interfaces: Innovations and Applications”, covering topics like Neurofinance, BCI, CNN, Bi-GRU, and Deep Learning.",
    icon: BookOpenCheck,
  },
];

/* ================= COMPONENT ================= */

const WorkshopReviewSection = () => {
  return (
    <section id="talks" className="section-padding px-4 md:px-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mb-4 rounded-full" />

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Workshops, Talks &{" "}
            <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Reviewing
            </span>
          </h2>
        </motion.div>

        {/* WORKSHOPS */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-blue-600 mb-6">
            Workshops & Invited Talks
          </h3>

          <div className="space-y-6">
            {workshops.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-5 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                  <item.icon size={20} />
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* REVIEWERS */}
        <div>
          <h3 className="text-xl font-semibold text-indigo-600 mb-6">
            Reviewer Contributions
          </h3>

          <div className="space-y-6">
            {reviews.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-5 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                  <item.icon size={20} />
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkshopReviewSection;