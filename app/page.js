import HeroSection from './components/HeroSection';
import CompanyMarquee from './components/CompanyMarque';
import CoreServicesSection from './components/CoreServicesSection';
import ContactForm from './components/ContactForm';
import CTASection from './components/CTASection';
import TestimonialsSection from './components/TestimonialsSection';
import CompanyOverviewSection from './components/CompanyOverviewSection';
import ExperienceSection from './components/ExperienceSection';
import IndustriesSection from './components/IndustriesSection';

export default function Home() {
  return (
    <div className="min-h-screen font-main">
      <HeroSection />   
      <CompanyMarquee />
      <IndustriesSection />
      {/* <CoreServicesSection /> */}
      <ExperienceSection />
      <CompanyOverviewSection />
      <CTASection />
      <TestimonialsSection />
      <ContactForm />
    </div>
  );
}
