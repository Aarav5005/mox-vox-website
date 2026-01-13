import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Instagram, Facebook } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-charcoal">
      <div className="container-narrow mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-4 block">
            Find Us
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-cream">
            Visit Us
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card rounded-lg p-8 sm:p-12 max-w-2xl mx-auto text-center"
        >
          <div className="space-y-8">
            <div className="flex flex-col items-center gap-3">
              <MapPin className="w-8 h-8 text-gold" />
              <p className="font-body text-cream text-lg">
                5th Floor, Amrit Kalash, Jodhpur, Rajasthan
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.5!2d73.024!3d26.238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c1b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sAmrit%20Kalash%2C%20Jodhpur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg mt-4"
              ></iframe>
            </div>

            <div className="flex flex-col items-center gap-3">
              <Phone className="w-8 h-8 text-gold" />
              <a
                href="tel:+919461761555"
                className="font-display text-2xl text-cream hover:text-gold transition-colors duration-300"
              >
                +91 9461761555
              </a>
            </div>

            <div className="border-t border-border pt-8">
              <p className="font-body text-sm uppercase tracking-[0.2em] text-cream-muted mb-6">
                Follow Us
              </p>
              <div className="flex justify-center gap-6">
                <a
                  href="https://instagram.com/mox_vox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cream hover:text-gold transition-colors duration-300"
                >
                  <Instagram className="w-6 h-6" />
                  <span className="font-body">@mox_vox</span>
                </a>
                <a
                  href="https://facebook.com/moxvox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cream hover:text-gold transition-colors duration-300"
                >
                  <Facebook className="w-6 h-6" />
                  <span className="font-body">MOX VOX</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
