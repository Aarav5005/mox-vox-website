import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-charcoal-dark">
      <div className="container-narrow mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-4 block">
            Est. Jodhpur
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-cream mb-12">
            Our Story
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-lg p-8 sm:p-12">
            <p className="font-body text-cream/85 leading-relaxed text-base sm:text-lg mb-6">
              MOX VOX began as a modest restaurant-cum-discotheque at Sardarpura 9th D Road, Jodhpur, with a small DJ setup. It featured world-class lighting, sound systems, and a dedicated dance floor. From humble beginnings, it quickly grew to accommodate around 120 diners and introduced projector screens. Over the years, MOX VOX evolved into one of Jodhpur's most recognized nightlife and dining destinations.
            </p>
            <p className="font-body text-cream/85 leading-relaxed text-base sm:text-lg mb-6">
              Today, located on the 5th Floor of Amrit Kalash, Jodhpur, MOX VOX offers a rooftop luxury fine dining experience combined with live music, professional clubbing, and curated nightlife events. The venue caters to families, private diners, corporate gatherings, birthday celebrations, kitty parties, and large-scale club nights.
            </p>
            <p className="font-body text-cream/85 leading-relaxed text-base sm:text-lg">
              With a focus on quality, hospitality, and atmosphere, MOX VOX features carefully curated vegetarian flavors, premium cocktails, and an ambiance that blends modern urban aesthetics with Rajasthani beats under the open city sky. The rooftop setting, premium sound and lighting, and thoughtfully designed spaces create a complete sensory experience.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
