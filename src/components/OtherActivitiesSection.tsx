import { motion } from "framer-motion";
import { Users, Mic, BookOpenCheck, Award, Calendar } from "lucide-react";

/* ================= DATA ================= */

const workshops = [
  {
    title: "National Technology Day 2024 Workshop",
    desc: "Delivered a 5-day workshop on 'Research Projects in the field of AI', sponsored by DST Haryana. Guided 100+ students on research, publications, and AI innovations.",
  },
  {
    title: "PRASHIKSHAN 2025 – AI Expert Talk & Judge",
    desc: "Invited as AI expert and judge. Evaluated research projects and mentored students on innovation and applied AI.",
  },
  {
    title: "Career Guidance Expert Talk 2025",
    desc: "Mentored undergraduate students on AI careers, research paths, and emerging technologies.",
  },
];

const reviewers = [
  {
    title: "IEEE Access Reviewer Recognition (2024)",
    desc: "Recognized for reviewing 'A Survey on Quantum Machine Learning: Basics, Trends, and Opportunities'.",
  },
  {
    title: "Peer Reviewer – IGI Global",
    desc: "Reviewed multiple manuscripts in Neural Networks & Brain-Computer Interfaces.",
  },
];

const responsibilities = [
  {
    title: "Training & Placement Cell Coordinator – NIT Delhi (2025)",
    desc: "Coordinated recruitment drives, industry outreach, and student career development.",
  },
  {
    title: "Organizing Committee – ICPIDS 2024 (Thailand)",
    desc: "Collaborated with international research foundations to organize global conference.",
  },
  {
    title: "Organizing Committee – TIACOMP 2024 (Bali, Indonesia)",
    desc: "Managed coordination with international speakers and academic partners.",
  },
  {
    title: "Mathematics & Computing Representative (2024–Present)",
    desc: "Facilitating communication between students and faculty.",
  },
  {
    title: "Overall Student Head – ICCIMA 2024",
    desc: "Led conference execution, managed data, publications, and keynote sessions.",
  },
  {
    title: "Student Coordinator Head – ICCIMA 2023",
    desc: "Organized international conference operations and logistics.",
  },
  {
    title: "AI & ML Representative (2022–2024)",
    desc: "Bridged gap between students and faculty, promoting collaborative learning.",
  },
  {
    title: "Coordinator – International Women’s Day 2021",
    desc: "Managed event planning and execution at PIET.",
  },
  {
    title: "Event Coordinator & Anchor – National Engineers Day 2021",
    desc: "Hosted and coordinated large-scale academic event.",
  },
];

const supervision = {
  title: "Undergraduate Research Supervision",
  desc: "Mentored 250+ students in AI, ML, and advanced computational research. Guided project development and innovation-driven learning.",
};

/* ================= COMPONENT ================= */

const OtherActivitiesSection = () => {
  return (
    <section id="activities" className="section-padding lg:pl-28 bg-secondary/30">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="line-accent" />
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Leadership & <span className="text-gradient-blue">Activities</span>
          </h2>
        </motion.div>

        {/* ================= WORKSHOPS ================= */}
        <h3 className="text-2xl font-bold mt-10 mb-6 flex items-center gap-2">
          <Mic className="text-blue-500" /> Workshops & Talks
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {workshops.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ================= REVIEWERS ================= */}
        <h3 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-2">
          <BookOpenCheck className="text-green-500" /> Reviewers & Recognition
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {reviewers.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ================= RESPONSIBILITIES ================= */}
        <h3 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-2">
          <Users className="text-purple-500" /> Responsibilities & Roles
        </h3>

        <div className="space-y-4">
          {responsibilities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ================= SUPERVISION ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg"
        >
          <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
            <Award /> {supervision.title}
          </h3>
          <p className="text-sm opacity-90">{supervision.desc}</p>
        </motion.div>

      </div>
    </section>
  );
};

export default OtherActivitiesSection;