import { motion } from "framer-motion";
import {
  FlaskConical,
  ArrowUpRight,
  Brain,
  Atom,
  Globe,
  Activity,
  Cpu,
  Sparkles,
  HeartPulse
} from "lucide-react";

/* ================= PROJECT DATA ================= */
const projects = [
  {
    title:
      "DermFoundation-XI: A Hybrid Explainable Segmentation-Guided Multimodal Transformer for Skin Cancer Diagnosis",
    org: "National Institute of Technology Delhi • Stanford AIMI Dataset",
    time: "2025",
    desc: "Developed a segmentation-guided multimodal medical transformer integrating CNN-Transformer encoders, lesion-aware attention, and Grad-CAM explainability for robust and fair skin cancer diagnosis.",
    tags: ["PyTorch", "Transformers", "CNN", "Grad-CAM", "Medical Imaging"],
    icon: FlaskConical,
  },

  {
    title:
      "INDRA-QAI: A Next-Generation Quantum-Inspired Climate Transformer with Adaptive Reinforcement Tuning for Trustworthy Weather Forecasting",
    org: "National Institute of Technology Delhi",
    time: "2025",
    desc: "Designed a quantum-inspired transformer using ERA5 and NASA IMERG data with physics-aware loss and reinforcement tuning.",
    tags: ["Transformers", "Quantum ML", "ERA5", "Remote Sensing"],
    icon: Globe,
  },

  {
    title:
      "Quantum Grey Wolf Optimization for Electric Vehicle Routing Optimization",
    org: "Quantum Research & Centre of Excellence, New Delhi",
    time: "2025",
    desc: "Developed hybrid quantum-classical optimization framework for intelligent EV routing under real-world constraints.",
    tags: ["Quantum Computing", "Optimization", "Python"],
    icon: Atom,
  },

  {
    title:
      "Deep Reinforcement Learning for Drone Delivery Optimization",
    org: "National Institute of Technology Delhi",
    time: "2025",
    desc: "Built deep reinforcement learning framework for real-time drone logistics and route optimization.",
    tags: ["Deep RL", "PyTorch", "Gym"],
    icon: Activity,
  },

  {
    title:
      "Deep Transformer for ENSO & IOD Forecasting",
    org: "National Institute of Technology Delhi",
    time: "2024–2025",
    desc: "Developed GPU-optimized transformer for multi-step ocean-climate forecasting up to 18 months ahead.",
    tags: ["Transformers", "Time Series", "Climate Modeling"],
    icon: Brain,
  },

  {
    title:
      "Conversational Artifiical Intelligence using Transformer Models",
    org: "SkillifyMe",
    time: "2024–2025",
    desc: "Built context-aware conversational system using BART and GPT-based architectures.",
    tags: ["NLP", "LLMs", "BART"],
    icon: Sparkles,
  },

  {
    title:
      "Virtual Reality-Controlled Car with Live Video Feed",
    org: "AICTE IDEA Lab",
    time: "2024",
    desc: "Designed immersive VR-based vehicle control system integrating IoT sensors and real-time navigation.",
    tags: ["IoT", "OpenCV", "Arduino"],
    icon: Cpu,
  },

  {
    title:
      "Technological Marvels: Pioneering PCOS Detection through Machine Learning and Deep Learning",
    org: "AICTE IDEA Lab",
    time: "2023–2024",
    desc: "Developed ML/DL-based diagnostic system for early PCOS detection improving prediction accuracy in women's healthcare.",
    tags: ["Machine Learning", "Deep Learning", "Scikit-learn"],
    icon: HeartPulse,
  },
];

/* ================= ANIMATIONS ================= */
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

/* ================= COMPONENT ================= */
const ResearchSection = () => {
  return (
    <section
      id="research"
      className="py-24 lg:pl-28 bg-gradient-to-b from-white via-blue-50/40 to-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-5" />

          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Research{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mb-16">
            Advancing AI, Quantum Computing, and intelligent systems through impactful research and real-world innovation.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative">

          {/* LINE */}
          <div className="absolute left-5 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-500 via-indigo-500 to-cyan-500 hidden md:block rounded-full" />

          {/* PROJECTS */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            className="space-y-12"
          >
            {projects.map((p, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ scale: 1.03 }}
                className="flex gap-6 group"
              >

                {/* ICON */}
                <div className="hidden md:flex w-14 h-14 rounded-2xl items-center justify-center 
                                bg-gradient-to-br from-blue-500 to-indigo-600 
                                shadow-lg group-hover:scale-110 transition">
                  <p.icon className="w-6 h-6 text-white" />
                </div>

                {/* CARD */}
                <div className="flex-1 p-8 rounded-3xl 
                                bg-white/80 backdrop-blur-xl 
                                border border-gray-200 
                                shadow-md hover:shadow-2xl 
                                transition-all duration-300 hover:-translate-y-1">

                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition">
                      {p.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition" />
                  </div>

                  <p className="text-sm text-gray-500 mb-3 font-medium">
                    {p.org} • {p.time}
                  </p>

                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
                    {p.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold px-3 py-1 rounded-full 
                                   bg-gradient-to-r from-blue-500 to-indigo-600 
                                   text-white shadow-sm hover:scale-105 transition"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ResearchSection;