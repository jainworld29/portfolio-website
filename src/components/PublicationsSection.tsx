import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Award } from "lucide-react";

/* ================= PUBLICATIONS ================= */
const publications = [
  {
    authors:
      "Rishit Aggarwal, Shweta Jain, Anju Bhandari Gandhi, Ujjwal Lakhina, Stuti Mehla",
    title:
      "Conversational Summarization and Response Generation Using Transformer-based Language Models",
    venue:
      "2025 2nd International Conference on Computational Intelligence and Computing Applications (ICCICA)",
    location: "Samalkha, India",
    pages: "pp. 730–736",
    year: "2025",
    doi: "https://doi.org/10.1109/ICCICA67008.2025.11337320",
  },
  {
    authors:
      "Hunny, Shweta Jain, Rishit Aggarwal, Anju Bhandari Gandhi, Stuti Mehla, Jaya",
    title:
      "Bridging Data Scarcity with Meta-Learning: A Vision Transformer Approach",
    venue:
      "2025 IEEE 7th International Conference on Computing, Communication and Automation (ICCCA)",
    location: "Greater Noida, India",
    pages: "pp. 1–6",
    year: "2025",
    doi: "https://doi.org/10.1109/ICCCA66364.2025.11325578",
  },
  {
    authors:
      "Krish Arora, Rishit Aggarwal, Shweta Jain, Ujjwal Lakhina, Sandeep Dhull, Gaurav Verma",
    title:
      "A Novel Hybrid AI Framework for Career Path Recommendation Integrating SBERT Semantic Matching and TabTransformer for Structured Data",
    venue:
      "2025 IEEE 7th International Conference on Computing, Communication and Automation (ICCCA)",
    location: "Greater Noida, India",
    pages: "pp. 1–5",
    year: "2025",
    doi: "https://doi.org/10.1109/ICCCA66364.2025.11325572",
  },
  {
    authors:
      "Shweta Jain, Anju Bhandari Gandhi, Stuti Mehla, Rishit Aggarwal, Tanu Kwatra",
    title:
      "Virtual Drive: Immersive VR-Controlled Car with Real-Time Interaction and Live Video Feed",
    venue:
      "2024 International Conference on Computational Intelligence and Computing Applications (ICCICA)",
    location: "India",
    pages: "pp. 519–525",
    year: "2024",
    doi: "https://doi.org/10.1109/ICCICA60014.2024.10585050",
    award: "Best Research Paper Award",

  },
  {
    authors:
      "Rishit Aggarwal, Shweta Jain, Anju Bhandari Gandhi, Drishti Dhingra, S. C. Gupta",
    title:
      "Artificial Intelligence and Machine Learning in Women's Health: Unveiling PCOS with Image Analysis",
    venue:
      "Computational Intelligence and Mathematical Applications",
    location: "CRC Press",
    pages: "pp. 247–252",
    year: "2024",
    doi: "https://doi.org/10.1201/9781003534112-40",
    award: "Best Research Paper Award",

    
  },
  {
    authors:
      "Himanshi Jain, Shweta Jain, Anju Bhandari Gandhi, Rishit Aggarwal, S. C. Gupta",
    title:
      "Technological Marvels: Pioneering PCOS Detection through the Lens of Machine Learning and Deep Learning",
    venue:
      "Computational Intelligence and Mathematical Applications",
    location: "CRC Press",
    pages: "pp. 258–264",
    year: "2024",
    doi: "https://doi.org/10.1201/9781003534112",
    award: "Best Research Paper Award",

  },
  {
    authors:
      "Shweta Jain, Anju Bhandari Gandhi, Devendra Prasad, Stuti Mehla",
    title:
      "Quantum Chain of Things: Amalgamation of Blockchain, Internet of Things, and Quantum Computing (QCoT Era)",
    venue:
      "Futuristic Trends in Information Technology, IIP Series, Volume 3",
    location: "India",
    pages: "pp. 171–192",
    year: "2024",
    doi: "https://doi.org/10.58532/V3BBIT1P2CH2",
  },
  {
    authors:
      "Shweta Jain, Rishit Aggarwal, Anju Bhandari Gandhi",
    title:
      "Quantum Chain of Things: The Quantum Triad - Integrating Blockchain, IoT and Quantum Computing",
    venue:
      "International Conference on Computer Vision and Internet of Things (ICCVIoT)",
    location: "Coimbatore, India",
    pages: "pp. 299–304",
    year: "2023",
    doi: "https://doi.org/10.1049/icp.2023.2892",
  },
  {
    authors:
      "Shweta Jain, Anju Bhandari Gandhi, S. Singla, L. Garg, Stuti Mehla",
    title:
      "Quantum Machine Learning and Quantum Communication Networks: The 2030s and the Future",
    venue:
      "International Conference on Computational Modelling, Simulation and Optimization (ICCMSO)",
    location: "Pathum Thani, Thailand",
    pages: "pp. 59–66",
    year: "2022",
    doi: "https://doi.org/10.1109/ICCMSO58359.2022.00025",
  },
];

/* ================= COMPONENT ================= */
const PublicationsSection = () => {
  return (
    <section id="publications" className="py-24 lg:pl-28 bg-gradient-to-b from-white via-blue-50/40 to-white">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mb-4 rounded-full" />
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Publications</h2>
          <p className="text-gray-600 text-lg mb-12">
            IEEE · CRC Press · International Conferences · Award-Winning Research
          </p>
        </motion.div>

        {/* LIST */}
        <div className="space-y-6">
          {publications.map((pub, i) => (
            <motion.a
              key={i}
              href={pub.doi}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07 }}
              className="group flex gap-5 p-6 rounded-2xl 
                         bg-white/80 backdrop-blur-xl 
                         border border-gray-200 
                         shadow-sm hover:shadow-xl 
                         transition-all duration-300 cursor-pointer"
            >

              {/* ICON */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center 
                              bg-gradient-to-br from-blue-500 to-indigo-600">
                <BookOpen className="w-5 h-5 text-white" />
              </div>

              {/* CONTENT */}
              <div className="flex-1">

                {/* AUTHORS (YOUR NAME HIGHLIGHTED) */}
                <p className="text-xs text-gray-500 mb-1">
                  {pub.authors.replace(
                    "Shweta Jain",
                    "★ Shweta Jain"
                  )}
                </p>

                {/* TITLE */}
                <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600">
                  {pub.title}
                </h4>

                {/* VENUE */}
                <p className="text-sm text-gray-600">{pub.venue}</p>

                {/* META */}
                <p className="text-xs text-gray-500">
                  {pub.location} • {pub.year} • {pub.pages}
                </p>

                {/* LINK */}
                <p className="text-xs text-blue-600 mt-1">
                  View Paper →
                </p>

                {/* AWARD */}
                {pub.award && (
                  <span className="inline-flex items-center gap-1 mt-2 text-xs font-semibold 
                                   px-3 py-1 rounded-full bg-yellow-100 text-yellow-700">
                    <Award size={12} />
                    {pub.award}
                  </span>
                )}
              </div>

              <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-blue-600 mt-2" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;