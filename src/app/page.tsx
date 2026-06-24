import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ClientLogos from '@/components/sections/ClientLogos';
import Services from '@/components/sections/Services';
import CaseStudies from '@/components/sections/CaseStudies';
import PortfolioPreview from '@/components/sections/PortfolioPreview';
import ContactCTA from '@/components/sections/ContactCTA';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#020D1D] text-white">
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <ClientLogos />
        <Services />
        <CaseStudies />
        <PortfolioPreview />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
