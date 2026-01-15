import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

interface Testimonial {
  name: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Aarav Panchal",
    quote: "MOX VOX perfectly balances great food, classy vibes, and friendly service. The ambience is modern, the music fits the mood, and the overall experience feels premium. A must-visit in Jodhpur.",
  },
  {
    name: "Darsh Sharma",
    quote: "One of the best nightlife spots in Jodhpur. Energetic music, polished service, and a crowd that keeps the vibe lively yet comfortable. Highly recommended.",
  },
  {
    name: "Himanshu Kumar",
    quote: "From ambience to food and crowd management, MOX VOX delivers an unforgettable experience. Perfect for parties, celebrations, and nightlife events.",
  },
  {
    name: "Kush Pathak",
    quote: "MOX VOX isn't just a club — it's an experience. Stunning lighting, flawless sound, creative cocktails, and a premium atmosphere that turns nights into memories.",
  },
  {
    name: "Pragya Pareek",
    quote: "A royal atmosphere with great food and rooftop views. A perfect blend of dining and nightlife in Jodhpur.",
  },
  {
    name: "Himani Vyas",
    quote: "MOX VOX offers a refined ambience with well-balanced music, attentive service, and a thoughtfully curated vegetarian menu. The overall experience feels polished, comfortable, and premium.",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-charcoal-dark">
      <div className="container-narrow mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-4 block">
            Guest Voices
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-cream mb-4">
            What Our Guests Say
          </h2>
          <p className="font-body text-cream-muted text-lg max-w-2xl mx-auto">
            Real experiences. Real vibes. One unforgettable destination.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="glass-card rounded-lg p-8 hover:border-gold/30 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex-1">
                <Quote className="w-6 h-6 text-gold/60 mb-4" />
                <p className="font-body text-cream/85 leading-relaxed text-base mb-6">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="border-t border-border pt-6">
                <p className="font-display text-lg text-gold">
                  {testimonial.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
