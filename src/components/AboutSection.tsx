import { motion } from "framer-motion";
import { Brain, Cpu, Atom, Code, Eye, Sparkles, Activity, Layers, Database } from "lucide-react";

/* ================= DATA ================= */
const interests = [
  { icon: Brain, label: "Artificial Intelligence", desc: "Core AI systems, intelligent modeling" },
  { icon: Activity, label: "Deep Learning", desc: "Neural networks, CNNs, sequence models" },
  { icon: Cpu, label: "Reinforcement Learning", desc: "Decision systems, policy optimization" },
  { icon: Sparkles, label: "Generative AI", desc: "LLMs, diffusion, RAG, transformers" },
  { icon: Code, label: "NLP & LLMs", desc: "Language models, LangChain, agents" },
  { icon: Eye, label: "Computer Vision", desc: "Image understanding, detection" },
  { icon: Layers, label: "Climate Intelligence", desc: "ENSO, SST, satellite imaging, remote sensing" },
  { icon: Atom, label: "Quantum AI", desc: "Quantum ML, hybrid intelligence" },
  { icon: Database, label: "Data Science", desc: "Data analysis, feature engineering, large-scale datasets" }
];

/* ================= ANIMATIONS ================= */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

/* ================= COMPONENT ================= */
const AboutSection = () => {
  return (
    <section id="about" className="section-padding lg:pl-28">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="line-accent" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-gradient-blue">Me</span>
          </h2>

          {/* About Text */}
          <p className="text-gray-700 font-body text-lg md:text-xl leading-relaxed max-w-3xl mb-16 tracking-wide">
            As a <span className="text-gray-900 font-semibold">co-founder</span>, I transform vision into reality, building and leading with purpose. 
            As a <span className="text-gray-900 font-semibold">trainer</span>, I share knowledge, inspire minds, and empower others to grow. 
            And as a <span className="text-gray-900 font-semibold">researcher</span>, I dive deep into complexity, creating intelligent solutions driven by curiosity and innovation.

            <br /><br />

            I believe in <span className="text-blue-600 font-semibold">never-ending learning</span>, 
            in saying <span className="text-indigo-600 font-semibold">yes to every challenge</span>, 
            and in stepping into the unknown with courage — guided by the truth that 
            <span className="text-cyan-600 font-semibold"> hard work has no alternative</span> and 
            <span className="text-pink-600 font-semibold"> giving up is never an option</span>.
          </p>
        </motion.div>

        {/* 🔥 SKILLS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {interests.map((item) => (
            <motion.div
              key={item.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="group p-8 rounded-3xl 
                         bg-white/80 backdrop-blur-xl 
                         border border-gray-200 
                         shadow-md hover:shadow-2xl 
                         transition-all duration-300"
            >

              {/* ICON */}
              <div className="w-16 h-16 rounded-2xl 
                              bg-gradient-to-br from-blue-500 to-indigo-600 
                              flex items-center justify-center mb-6 shadow-lg">
                <item.icon className="w-9 h-9 text-white" />
              </div>

              {/* TITLE */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 tracking-tight">
                {item.label}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {item.desc}
              </p>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;