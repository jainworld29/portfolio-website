import { motion } from "framer-motion";
import { Mail, Linkedin, GraduationCap, MapPin, Phone, Globe } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding lg:pl-28 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="line-accent mx-auto" />

          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's <span className="text-gradient-blue">Connect</span>
          </h2>

          <p className="text-muted-foreground font-body mb-12 max-w-lg mx-auto">
            Open to industrial collaborations, research opportunities, startup partnerships, and speaking engagements.
          </p>
        </motion.div>

        {/* CONTACT GRID */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto"
        >

          {/* EMAIL */}
          <a
            href="mailto:jainshweta290204@gmail.com"
            className="flex items-center gap-4 bg-card border border-border rounded-2xl px-6 py-5 hover-lift"
          >
            <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm font-semibold text-foreground">jainshweta290204@gmail.com</p>
            </div>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/shweta-jain-a4aaa1246"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-card border border-border rounded-2xl px-6 py-5 hover-lift"
          >
            <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600">
              <Linkedin className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">LinkedIn</p>
              <p className="text-sm font-semibold text-foreground">Shweta Jain</p>
            </div>
          </a>

          {/* GOOGLE SCHOLAR */}
          <a
            href="https://scholar.google.com/citations?user=Wis703kAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-card border border-border rounded-2xl px-6 py-5 hover-lift"
          >
            <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Google Scholar</p>
              <p className="text-sm font-semibold text-foreground">View Profile</p>
            </div>
          </a>

          {/* PHONE */}
          <a
            href="tel:+918307880488"
            className="flex items-center gap-4 bg-card border border-border rounded-2xl px-6 py-5 hover-lift"
          >
            <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Phone</p>
              <p className="text-sm font-semibold text-foreground">+91-7015457296</p>
            </div>
          </a>

          {/* 🔥 SKILLIFYME (NEW - HIGHLIGHTED) */}
          <a
            href="https://www.skillifyme.co.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:col-span-2 flex items-center gap-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl px-6 py-5 shadow-lg hover:scale-[1.02] transition-all"
          >
            <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-white/20 backdrop-blur">
              <Globe className="w-5 h-5 text-white" />
            </div>

            <div className="text-left">
              <p className="text-xs opacity-80">Startup / Co-Founder</p>
              <p className="text-sm font-semibold">
                SkillifyMe — Gateway to Tech Mastery
              </p>
              <p className="text-xs opacity-80">
                Visit Company Website →
              </p>
            </div>
          </a>

        </motion.div>

        {/* LOCATION */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-2 mt-10 text-muted-foreground/50"
        >
          <MapPin size={14} />
          <span className="text-xs">India</span>
        </motion.div>

        {/* FOOTER */}
        <div className="mt-20 pt-8 border-t border-border">
          <p className="text-muted-foreground/40 text-xs">
            © {new Date().getFullYear()} Shweta Jain · Built with passion for research & innovation
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;