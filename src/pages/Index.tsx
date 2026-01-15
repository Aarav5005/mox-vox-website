import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import GallerySection from "@/components/GallerySection";
import PackagesSection from "@/components/PackagesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <GallerySection />
        <PackagesSection />
        <TestimonialsSection />
        <BookingSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
