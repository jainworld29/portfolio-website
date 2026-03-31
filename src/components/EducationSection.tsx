import { motion } from "framer-motion";
import { GraduationCap, Award, Trophy } from "lucide-react";

const education = [
  {
    institution: "National Institute of Technology Delhi",
    degree: "Masters Research Scholar",
    period: "2024-2026",
    highlight: "GPA: 9.82/10",
    badge: "Rank 1",
    badgeIcon: Trophy,
  },
  {
    institution: "Kurukshetra University (Panipat Institute of Engineering & Technology)",
    degree: "Bachelors in Computer Science and Engineering - Artificial Intelligence and Machine Learning",
    period: "2020-2024",
    highlight: "GPA: 9.43/10",
    badge: "Gold Medalist",
    badgeIcon: Award,
  },
  {
    institution: "C.C.A.S Jain Sr. Sec. School, Gannaur",
    degree: "Higher Secondary (CBSE Board)",
    period: "2019 – 2020",
    highlight: "Aggregate: 95.0%",
    badge: "Rank 1",
    badgeIcon: Award,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -60, scale: 0.95 },
  visible: { opacity: 1, x: 0, scale: 1 },
};

const EducationSection = () => {
  return (
    <section id="education" className="py-20 lg:pl-28 bg-gradient-to-b from-white to-blue-50/40">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Education
          </h2>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative">

          {/* LINE */}
          <div className="absolute left-7 top-0 bottom-0 w-[3px] hidden md:block 
                          bg-gradient-to-b from-blue-500 via-indigo-500 to-cyan-500 rounded-full" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="space-y-12"
          >

            {education.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="flex gap-6 group"
              >

                {/* ICON NODE */}
                <div className="hidden md:flex w-14 h-14 rounded-2xl 
                                items-center justify-center z-10 
                                bg-gradient-to-br from-blue-500 to-indigo-600 
                                shadow-lg group-hover:scale-110 transition">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>

                {/* CARD */}
                <div className="flex-1 p-8 rounded-3xl 
                                bg-white/90 backdrop-blur-xl 
                                border border-gray-200 
                                shadow-md hover:shadow-2xl 
                                transition-all duration-300 hover:-translate-y-1">

                  {/* TOP ROW */}
                  <div className="flex flex-wrap justify-between items-start gap-3 mb-4">

                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug">
                      {item.institution}
                    </h3>

                    {/* BADGE */}
                    <span className="inline-flex items-center gap-2 text-xs font-semibold 
                                     px-4 py-1.5 rounded-full 
                                     bg-gradient-to-r from-blue-500 to-indigo-600 
                                     text-white shadow-md">
                      <item.badgeIcon size={14} />
                      {item.badge}
                    </span>

                  </div>

                  {/* DEGREE */}
                  <p className="text-gray-700 text-base md:text-lg font-medium mb-1">
                    {item.degree}
                  </p>

                  {/* PERIOD */}
                  <p className="text-gray-500 text-sm mb-3">
                    {item.period}
                  </p>

                  {/* HIGHLIGHT */}
                  <p className="text-lg font-semibold 
                                bg-gradient-to-r from-blue-600 to-indigo-600 
                                bg-clip-text text-transparent">
                    {item.highlight}
                  </p>

                </div>
              </motion.div>
            ))}

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;