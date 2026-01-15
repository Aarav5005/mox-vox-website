import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToExplore = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 gradient-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/50 via-transparent to-charcoal-dark" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-wider text-cream mb-4">
            MOX <span className="text-gold">VOX</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="font-display text-xl sm:text-2xl md:text-3xl text-cream-muted tracking-widest uppercase mb-4">
            Rooftop Restaurant & Nightlife
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="font-body text-lg sm:text-xl text-cream/80 italic mb-10">
            Where food, music, and nightlife unite
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#booking"
            className="px-10 py-4 gradient-gold text-primary-foreground font-body font-medium text-sm uppercase tracking-widest rounded-sm transition-all duration-300 hover:shadow-gold hover:scale-105"
          >
            Book Now
          </a>
          <a
            href="https://www.zomato.com/jodhpur/mox-vox-the-restro-shastri-nagar"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 glass-button text-cream font-body font-medium text-sm uppercase tracking-widest rounded-sm"
          >
            Order Now
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator - fixed at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer text-center"
        onClick={scrollToExplore}
      >
        <p className="font-body text-sm text-cream-muted uppercase tracking-widest mb-3">
          Scroll to explore
        </p>
        <ChevronDown className="w-6 h-6 text-gold mx-auto animate-scroll-hint" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
