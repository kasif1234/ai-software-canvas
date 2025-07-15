
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CompanyLogosSection from "@/components/CompanyLogosSection";
import CurrentlyReading from "@/components/CurrentlyReading";
import SkillsSection from "@/components/SkillsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
      <HeroSection />
      <CompanyLogosSection />
      <AboutSection />
      <CurrentlyReading />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
