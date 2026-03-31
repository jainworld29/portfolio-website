import { motion } from "framer-motion";
import {
  Code,
  Wrench,
  Brain,
  Cpu,
  Sparkles,
  Bot,
  MessageSquareText,
  Eye,
  Radio,
  Atom,
  BrainCircuit,
  Layers
} from "lucide-react";

/* ================= DATA ================= */
const skillGroups = [

  /* 🔹 LANGUAGES */
  {
    category: "Programming & Languages",
    icon: Code,
    color: "from-blue-500 to-indigo-600",
    skills: [
      "Python", "C/C++", "JavaScript", "SQL", "R", "Prolog", "HTML", "CSS"
    ],
  },

  /* 🔹 TOOLS */
  {
    category: "Tools & Frameworks",
    icon: Wrench,
    color: "from-cyan-500 to-blue-500",
    skills: [
      "GitHub", "Visual Studio Code", "Jupyter Lab", "Jupyter Notebook",
      "Google Colab", "MATLAB", "Arduino IDE", "Hugging Face",
      "FAISS", "ChromaDB"
    ],
  },

  /* 🔹 AI */
  {
    category: "Artificial Intelligence",
    icon: Brain,
    color: "from-indigo-500 to-purple-600",
    skills: [
      "Intelligent Systems",
      "Knowledge Representation",
      "Search Algorithms",
      "Expert Systems",
      "Decision Making Systems",
      "AI Planning & Reasoning"
    ],
  },

  /* 🔹 ML */
  {
    category: "Machine Learning",
    icon: Layers,
    color: "from-blue-600 to-indigo-500",
    skills: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Feature Engineering",
      "Model Evaluation",
      "Regression & Classification",
      "Clustering Algorithms",
      "Scikit-Learn",
      "Pandas", "NumPy"
    ],
  },

  /* 🔹 DL */
  {
    category: "Deep Learning",
    icon: Cpu,
    color: "from-indigo-500 to-purple-700",
    skills: [
      "CNN", "RNN", "LSTM", "GRU",
      "Transformers",
      "Attention Mechanisms",
      "Autoencoders",
      "Time Series Forecasting",
      "TensorFlow", "Keras", "PyTorch",
      "Deep Reinforcement Learning"
    ],
  },

  /* 🔥 GEN AI */
  {
    category: "Generative AI",
    icon: Sparkles,
    color: "from-pink-500 to-purple-600",
    skills: [
      "Large Language Models (LLMs)",
      "GPT, BERT, BART, T5",
      "Diffusion Models",
      "Prompt Engineering",
      "Few-shot / Zero-shot Learning",
      "LoRA / PEFT Fine-tuning",
      "RAG (Retrieval Augmented Generation)",
      "Vector Databases",
      "Hugging Face Transformers"
    ],
  },

  /* 🔥 AGENTIC AI */
  {
    category: "Agentic AI Systems",
    icon: Bot,
    color: "from-indigo-500 to-cyan-500",
    skills: [
      "Autonomous AI Agents",
      "LangChain Agents",
      "Multi-Agent Systems",
      "Tool Calling & Function Agents",
      "ReAct & Chain-of-Thought Reasoning",
      "Memory-Augmented Agents",
      "LLM Orchestration",
      "AI Workflow Automation"
    ],
  },

  /* 🔹 NLP */
  {
    category: "Natural Language Processing",
    icon: MessageSquareText,
    color: "from-rose-500 to-pink-500",
    skills: [
      "Text Summarization",
      "Conversational AI",
      "Semantic Search",
      "Sequence Modeling",
      "Tokenization & Embeddings"
    ],
  },

  /* 🔹 CV */
  {
    category: "Computer Vision",
    icon: Eye,
    color: "from-green-500 to-teal-500",
    skills: [
      "Image Processing",
      "Object Detection",
      "Medical Imaging",
      "Segmentation Models",
      "Feature Extraction",
      "OpenCV"
    ],
  },

  /* 🔹 IOT */
  {
    category: "Internet of Things (IoT)",
    icon: Radio,
    color: "from-yellow-400 to-orange-500",
    skills: [
      "Arduino",
      "Raspberry Pi",
      "Sensor Integration",
      "Embedded Systems",
      "Real-time Data Acquisition",
      "IoT Prototyping",
      "Edge Computing"
    ],
  },

  /* 🔹 QC */
  {
    category: "Quantum Computing",
    icon: Atom,
    color: "from-purple-500 to-pink-500",
    skills: [
      "Qubits & Quantum Gates",
      "Quantum Circuits",
      "Superposition & Entanglement",
      "Bloch Sphere",
      "Quantum Fourier Transform (QFT)",
      "Variational Algorithms (VQE, QAOA)",
      "NISQ Algorithms",
      "Quantum Simulation",
      "Quantum Optimization",
      "Quantum Error Mitigation",
      "Qiskit",
      "Hybrid Quantum-Classical Systems"
    ],
  },

  /* 🔹 QML */
  {
    category: "Quantum Machine Learning",
    icon: BrainCircuit,
    color: "from-indigo-500 to-pink-500",
    skills: [
      "Quantum Machine Learning (QML)",
      "Variational Quantum Circuits (VQC)",
      "Parameterized Quantum Circuits (PQC)",
      "Quantum Neural Networks (QNN)",
      "Quantum Kernels",
      "Quantum Feature Mapping",
      "Quantum Reinforcement Learning",
      "Quantum Grey Wolf Optimization (Q-GWO)"
    ],
  },

  /* 🔹 OTHER */
  {
    category: "Other Skills",
    icon: Layers,
    color: "from-gray-500 to-gray-700",
    skills: [
      "Research Paper Writing",
      "Technical Documentation",
      "Experiment Design",
      "Statistical Analysis",
      "Optimization Techniques"
    ],
  },
];

/* ================= ANIMATIONS ================= */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

/* ================= COMPONENT ================= */
const SkillsSection = () => {
  return (
    <section id="skills" className="py-28 lg:pl-28 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mb-5 rounded-full" />

          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Technical <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl mb-16 max-w-2xl">
            Bridging <span className="text-blue-600 font-semibold">AI</span>, 
            <span className="text-purple-600 font-semibold"> Quantum Intelligence</span>, and 
            <span className="text-cyan-600 font-semibold"> intelligent systems</span>.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {skillGroups.map((group, i) => {
            const isLast = i === skillGroups.length - 1;

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300
                ${isLast ? "md:col-span-2 md:max-w-xl md:mx-auto" : ""}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${group.color} flex items-center justify-center shadow-lg`}>
                    <group.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {group.category}
                  </h3>
                </div>

                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={itemVariants}
                      whileHover={{ scale: 1.08 }}
                      className={`px-4 py-2 rounded-full text-sm md:text-base font-medium
                                 bg-gray-100 text-gray-800
                                 hover:bg-gradient-to-r hover:${group.color}
                                 hover:text-white transition-all duration-300`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;