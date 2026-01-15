import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

interface MenuItem {
  name: string;
  price: string;
}

interface MenuCategory {
  name: string;
  items: MenuItem[];
}

const menuCategories: MenuCategory[] = [
  {
    name: "Starters",
    items: [
      { name: "French Fries", price: "₹209" },
      { name: "Loaded Cheese Fries", price: "₹269" },
      { name: "Paneer 65", price: "₹279" },
      { name: "Honey Chilli Potato", price: "₹249" },
      { name: "Corn Fritters", price: "₹259" },
      { name: "Crispy Mushroom", price: "₹299" },
      { name: "Crispy Baby Corn", price: "₹299" },
      { name: "Dragon Potato", price: "₹229" },
      { name: "Spring Roll", price: "₹229" },
      { name: "Peanut Masala", price: "₹199" },
      { name: "Ring Onion", price: "₹229" },
      { name: "Paneer Pakoda", price: "₹249" },
      { name: "Assorted Pakoda", price: "₹249" },
      { name: "Crispy Veg", price: "₹269" },
      { name: "Cheese Pakoda", price: "₹299" },
      { name: "Vegetable Cutlet", price: "₹259" },
      { name: "Rice Cheese Ball", price: "₹269" },
      { name: "Cheese Corn Ball", price: "₹279" },
      { name: "Cheese Chilli Toast", price: "₹179" },
      { name: "Veg Momos", price: "₹209" },
    ],
  },
  {
    name: "Main Course",
    items: [
      { name: "Cream Cheese Pasta", price: "₹299" },
      { name: "Spaghetti Pasta", price: "₹299" },
      { name: "Arrabbiata Pasta", price: "₹269" },
      { name: "Mac N Cheese", price: "₹349" },
      { name: "Baked Lasagne", price: "₹349" },
      { name: "Paneer Steak Bowl", price: "₹299" },
      { name: "Fried Rice", price: "₹239" },
      { name: "American Chopsuey", price: "₹239" },
      { name: "Veg Manchurian (Dry/Gravy)", price: "₹229" },
      { name: "Chilli Paneer (Dry/Gravy)", price: "₹259" },
      { name: "Veg Noodles", price: "₹239" },
      { name: "Hakka Noodles", price: "₹249" },
      { name: "Garlic Chilli Noodles", price: "₹249" },
    ],
  },
  {
    name: "Soups & Salads",
    items: [
      { name: "Garden Fresh Salad", price: "₹149" },
      { name: "Cream of Tomato", price: "₹129" },
      { name: "Hot & Sour Soup", price: "₹139" },
      { name: "Manchow Soup", price: "₹139" },
    ],
  },
  {
    name: "Beverages & Shakes",
    items: [
      { name: "Virgin Mojito", price: "₹179" },
      { name: "Blue Lagoon", price: "₹189" },
      { name: "Oreo Shake", price: "₹199" },
      { name: "Cold Coffee", price: "₹169" },
    ],
  },
];

const MenuSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openCategory, setOpenCategory] = useState<string | null>("Starters");

  const toggleCategory = (categoryName: string) => {
    setOpenCategory(openCategory === categoryName ? null : categoryName);
  };

  return (
    <section id="menu" className="section-padding bg-charcoal">
      <div className="container-narrow mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-4 block">
            Culinary Excellence
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-cream">
            Our Signature Selections
          </h2>
          <div className="flex items-center justify-center gap-1 mt-2">
            <img src="/pure_veg.svg" alt="" className="h-3.5 w-3.5" />
            <span className="font-body text-sm text-cream/60">Pure Vegetarian Restaurant</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {menuCategories.map((category, index) => (
            <div
              key={category.name}
              className="border-b border-border last:border-b-0"
            >
              <button
                onClick={() => toggleCategory(category.name)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <h3 className="font-display text-2xl sm:text-3xl text-cream group-hover:text-gold transition-colors duration-300">
                  {category.name}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-gold transition-transform duration-300 ${
                    openCategory === category.name ? "rotate-180" : ""
                  }`}
                />
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openCategory === category.name ? "auto" : 0,
                  opacity: openCategory === category.name ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pb-8 grid gap-3">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={item.name}
                      className="flex justify-between items-baseline py-2 border-b border-border/30 last:border-b-0"
                    >
                      <span className="font-body text-cream/90 text-sm sm:text-base">
                        {item.name}
                      </span>
                      <span className="font-body text-gold font-medium text-sm sm:text-base ml-4 whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
        <p className="text-center font-body text-sm text-cream/60 italic mt-8">Prices are subject to change.</p>
      </div>
    </section>
  );
};

export default MenuSection;
