import { motion } from "framer-motion";
import { Briefcase, ArrowUpRight, Sparkles } from "lucide-react";

/* ================= DATA ================= */
const experiences = [
  {
    role: "Co-Founder & ML Specialist",
    org: "SkillifyMe: Gateway to Tech Mastery",
    period: "July 2024 – Sep 2025",
    color: "from-blue-600 to-cyan-400",
  },
  {
    role: "Ambassador & AI Researcher",
    org: "AICTE IDEA Lab, PIET Panipat",
    period: "Jan 2023 – June 2024",
    color: "from-indigo-600 to-blue-500",
  },
  {
    role: "Machine Learning Intern",
    org: "Alpine Technologies, Kanpur",
    period: "July 2023 – Aug 2023",
    color: "from-cyan-500 to-blue-500",
  },
  {
    role: "Project Intern",
    org: "Uno Minda Limited, Sonipat",
    period: "July 2022 – Aug 2022",
    color: "from-blue-500 to-indigo-500",
  }
];

/* ================= COMPONENT ================= */
const ExperienceSection = () => {
  return (
    <section id="experience" className="py-28 lg:pl-28 bg-gradient-to-b from-white via-blue-50/40 to-white">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mb-5 rounded-full" />

          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Experience
          </h2>

          <p className="text-gray-600 text-lg md:text-xl mb-14 max-w-2xl">
            Leading innovation across <span className="text-blue-600 font-semibold">AI</span>, 
            <span className="text-indigo-600 font-semibold"> Quantum</span>, and 
            <span className="text-cyan-600 font-semibold"> real-world systems</span>
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.15 }}
              className="group relative p-8 rounded-3xl 
                         bg-white/80 backdrop-blur-xl 
                         border border-gray-200 
                         shadow-lg hover:shadow-2xl 
                         transition-all duration-300
                         hover:-translate-y-2 overflow-hidden"
            >

              {/* GRADIENT GLOW */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 
                               bg-gradient-to-r ${exp.color} blur-2xl -z-10 transition`} />

              {/* ICON */}
              <div className={`w-16 h-16 rounded-2xl 
                               bg-gradient-to-br ${exp.color} 
                               flex items-center justify-center mb-6 shadow-lg`}>
                <Briefcase className="w-7 h-7 text-white" />
              </div>

              {/* ROLE */}
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                {exp.role}
              </h3>

              {/* ORG */}
              <p className="text-lg text-gray-700 font-medium mb-2">
                {exp.org}
              </p>

              {/* PERIOD */}
              <p className="text-sm text-gray-500 mb-5">
                {exp.period}
              </p>

              {/* TAG */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full 
                              bg-blue-50 text-blue-600 text-sm font-semibold">
                <Sparkles size={14} />
                Professional Experience
              </div>

              {/* ARROW */}
              <ArrowUpRight className="absolute top-6 right-6 text-gray-300 group-hover:text-blue-500 transition" />

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;