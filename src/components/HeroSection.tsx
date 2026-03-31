import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Mail, GraduationCap, ExternalLink } from "lucide-react";
import Hero3DScene from "./Hero3DScene";
import profileImg from "@/assets/shweta-profile.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      {/* Floating blobs */}
      <div className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl animate-float-delayed" />

      {/* 3D Scene */}
      <Hero3DScene />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 lg:pl-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="flex-shrink-0"
        >
          <div className="relative group">

            {/* Strong Glow */}
            <div className="absolute inset-0 rounded-full blur-2xl opacity-60 scale-110 group-hover:opacity-80 transition duration-500"
                 style={{ background: "var(--gradient-blue)" }} />

            {/* Bigger Image */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] rounded-full overflow-hidden border-4 border-card card-shadow">
              <img src={profileImg} alt="Shweta Jain" className="w-full h-full object-cover" />
            </div>

            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
              className="absolute -bottom-3 -right-3 w-16 h-16 rounded-2xl flex items-center justify-center card-shadow"
              style={{ background: "var(--gradient-blue)" }}
            >
              <GraduationCap className="w-7 h-7 text-primary-foreground" />
            </motion.div>

          </div>
        </motion.div>

        {/* TEXT SECTION */}
        <div className="text-center lg:text-left">

          {/* NAME */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 leading-[0.95]"
          >
            Shweta
            <br />
            <span className="text-gradient-blue">Jain</span>
          </motion.h1>

          {/* ROLE */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-muted-foreground font-body text-lg md:text-xl max-w-xl mb-2"
          >
            Artificial Intelligence & Quantum Computing Researcher
          </motion.p>

          {/* SECOND LINE */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="text-muted-foreground font-body text-lg md:text-xl max-w-xl mb-4"
          >
            Co-Founder @ SkillifyMe
          </motion.p>

          {/* 🔥 FIXED QUOTE (VISIBLE + PREMIUM) */}
          <motion.p
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="text-sm md:text-base max-w-xl mb-8 font-body font-semibold leading-relaxed tracking-wide
                      text-gray-900 bg-white/85 backdrop-blur-xl px-6 py-4 rounded-2xl 
                      shadow-2xl border border-white/50 hover:shadow-blue-200/40 transition-all duration-300"
          >
            I engineer INTELLIGENCE — from 
            <span className="text-blue-600 font-bold"> Artificial Intelligence models</span>  to 
            <span className="text-indigo-600 font-bold"> real-world impact</span>.
          </motion.p>

          {/* SOCIAL + BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-3 justify-center lg:justify-start"
          >

            <a href="https://www.linkedin.com/in/shweta-jain-a4aaa1246" target="_blank"
               className="w-12 h-12 rounded-xl bg-card card-shadow flex items-center justify-center text-muted-foreground hover:text-primary hover-lift">
              <Linkedin size={18} />
            </a>

            <a href="mailto:jainshweta290204@gmail.com"
               className="w-12 h-12 rounded-xl bg-card card-shadow flex items-center justify-center text-muted-foreground hover:text-primary hover-lift">
              <Mail size={18} />
            </a>

            <a href="https://scholar.google.com/citations?user=Wis703kAAAAJ&hl=en" target="_blank"
               className="w-12 h-12 rounded-xl bg-card card-shadow flex items-center justify-center text-muted-foreground hover:text-primary hover-lift">
              <GraduationCap size={18} />
            </a>

            <a href="#contact"
               className="ml-2 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-body font-semibold text-primary-foreground hover-lift"
               style={{ background: "var(--gradient-blue)" }}>
              Get in Touch
              <ExternalLink size={14} />
            </a>

          </motion.div>

        </div>
      </div>

      {/* SCROLL ICON */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown className="text-primary" size={20} />
        </motion.div>
      </motion.div>

    </section>
  );
};

export default HeroSection;