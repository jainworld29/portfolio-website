import { motion } from "framer-motion";
import { Trophy, Award, Star, Medal, Sparkles } from "lucide-react";

/* ================= DATA ================= */
const achievements = [
  {
    text: "Top Performer — Gen AI Exchange Program 2025, Google Cloud & Hack2Skill (Gen AI Academy)",
    icon: Trophy,
  },
  {
    text: "UGC-NET Qualified (2025) — Computer Science & Applications",
    icon: Award,
  },
  {
    text: "Rank 1 Holder (M.Tech, All Branches) — National Institute of Technology Delhi (First Year)",
    icon: Medal,
  },
  {
    text: "Best Machine Learning Expert Trainer — AICTE MODROB (Data Analytics Lab Initiative)",
    icon: Award,
  },
  {
    text: "Best Research Paper Award — ICCICA 2024 (IEEE Delhi Section, AICTE)",
    icon: Trophy,
  },
  {
    text: "Kurukshetra University Gold Medalist — B.Tech AI & ML (All Semesters)",
    icon: Medal,
  },
  {
    text: "Best Research Paper Award — ICCIMA 2023 (AICTE, CRC Press / Taylor & Francis)",
    icon: Trophy,
  },
];

/* ================= ANIMATION ================= */
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

/* ================= COMPONENT ================= */
const AchievementsSection = () => {
  return (
    <section
      id="achievements"
      className="py-28 lg:pl-28 bg-gradient-to-b from-white via-yellow-50/30 to-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mb-5 rounded-full" />

          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Honors &{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl mb-16 max-w-2xl">
            Recognitions across{" "}
            <span className="text-yellow-600 font-semibold">research</span>,{" "}
            <span className="text-orange-500 font-semibold">academics</span>, and{" "}
            <span className="text-pink-500 font-semibold">innovation</span>.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 gap-6"
        >
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="group relative p-6 rounded-2xl 
                         bg-white/80 backdrop-blur-xl 
                         border border-gray-200 
                         shadow-md hover:shadow-2xl 
                         transition-all duration-300 overflow-hidden"
            >

              {/* GLOW EFFECT */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                              bg-gradient-to-r from-yellow-400 to-orange-500 blur-2xl -z-10 transition" />

              {/* CONTENT */}
              <div className="flex gap-4 items-start">

                {/* ICON */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center 
                                bg-gradient-to-br from-yellow-500 to-orange-500 shadow-lg">
                  <a.icon className="w-5 h-5 text-white" />
                </div>

                {/* TEXT */}
                <p className="text-sm md:text-base text-gray-800 leading-relaxed font-medium">
                  {a.text}
                </p>
              </div>

              {/* TOP BADGE (for premium feel) */}
              <div className="absolute top-3 right-3 opacity-20 group-hover:opacity-100 transition">
                <Sparkles size={16} className="text-yellow-500" />
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;