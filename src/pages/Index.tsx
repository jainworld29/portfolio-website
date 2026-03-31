import VerticalNav from "@/components/VerticalNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import ResearchSection from "@/components/ResearchSection";
import PublicationsSection from "@/components/PublicationsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ProfessionalServicesSection from "@/components/ProfessionalServicesSection";
import WorkshopReviewSection from "@/components/WorkshopReviewSection";
import OtherActivitiesSection from "@/components/OtherActivitiesSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex">

      {/* ✅ SIDEBAR */}
      <VerticalNav />

      {/* ✅ MAIN CONTENT (THIS FIXES EVERYTHING) */}
      <main className="flex-1 lg:ml-56">

        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ResearchSection />
        <PublicationsSection />
        <ExperienceSection />
        <SkillsSection />
        <AchievementsSection />
        <ProfessionalServicesSection />
        <WorkshopReviewSection />
        <OtherActivitiesSection />
        <GallerySection />
        <ContactSection />

      </main>

    </div>
  );
};

export default Index;