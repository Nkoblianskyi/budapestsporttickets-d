import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import HeroSection from '@/components/home/hero-section'
import HowItWorksSection from '@/components/home/how-it-works-section'
import EventsPreviewSection from '@/components/home/events-preview-section'
import AboutSection from '@/components/home/about-section'
import PartnersSection from '@/components/home/partners-section'
import FaqSection from '@/components/home/faq-section'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <EventsPreviewSection />
        <AboutSection />
        <PartnersSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  )
}
