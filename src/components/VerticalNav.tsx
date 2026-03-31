import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  User,
  GraduationCap,
  FlaskConical,
  BookOpen,
  Briefcase,
  Award,
  Mail,
  Home,
  Code,
  BadgeCheck,
} from "lucide-react";
import { Mic } from "lucide-react";
import { Layers } from "lucide-react";
import { Image } from "lucide-react";
const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: User, label: "About", href: "#about" },
  { icon: GraduationCap, label: "Education", href: "#education" },
  { icon: FlaskConical, label: "Research", href: "#research" },
  { icon: BookOpen, label: "Publications", href: "#publications" },
  { icon: Briefcase, label: "Experience", href: "#experience" },
  { icon: Code, label: "Skills", href: "#skills" },
  { icon: Award, label: "Achievements", href: "#achievements" },

  // 🔥 ADD THIS NEW ONE

  { icon: BadgeCheck, label: "Services", href: "#services" },
  { icon: Layers, label: "Activities", href: "#activities" },

  { icon: Image, label: "Gallery", href: "#gallery" },
  { icon: Mail, label: "Contact", href: "#contact" },
];


const VerticalNav = () => {
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => ({
        id: item.href,
        el: document.querySelector(item.href),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i].el;
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActive(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      className="fixed left-0 top-0 h-full w-56 bg-white/90 backdrop-blur-xl 
                 border-r border-gray-200 shadow-lg z-50 hidden lg:flex flex-col p-4"
    >
      {/* HEADER */}
      <div className="mb-6 px-2">
        <h2 className="text-lg font-bold text-gray-900">Shweta Jain</h2>
        <p className="text-xs text-gray-500">AI & Quantum Research</p>
      </div>

      {/* NAV */}
      <div className="flex flex-col gap-2">
        {navItems.map((item) => {
          const isActive = active === item.href;

          return (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setActive(item.href)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-300
              ${
                isActive
                  ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <item.icon size={18} />
              <span className="text-sm font-semibold">{item.label}</span>
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default VerticalNav;