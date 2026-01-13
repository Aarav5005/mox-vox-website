import { Instagram, Facebook, Phone } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Party Packages", href: "#packages" },
    { name: "Booking", href: "#booking" },
    { name: "Contact", href: "#contact" },
  ];

  const orderLinks = [
    { name: "Zomato", href: "https://www.zomato.com" },
    { name: "Swiggy Dineout", href: "https://www.swiggy.com/dineout" },
    {
      name: "WhatsApp",
      href: "https://wa.me/919461761555?text=Hi%2C%20I%20would%20like%20to%20make%20a%20reservation%20at%20MOX%20VOX",
    },
  ];

  return (
    <footer className="bg-charcoal-dark border-t border-border">
      <div className="container-narrow mx-auto section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-3xl text-cream mb-2">
              MOX <span className="text-gold">VOX</span>
            </h3>
            <p className="font-body text-sm text-cream-muted mb-4">
              Premium Rooftop Restaurant & Nightlife
            </p>
            <p className="font-body text-sm text-cream/70">
              5th Floor, Amrit Kalash, Jodhpur, Rajasthan
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-cream mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-cream-muted hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Order & Book */}
          <div>
            <h4 className="font-display text-lg text-cream mb-4">Order & Book</h4>
            <ul className="space-y-2">
              {orderLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-cream-muted hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-display text-lg text-cream mb-4">Follow Us</h4>
            <div className="space-y-3">
              <a
                href="https://instagram.com/mox_vox"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream-muted hover:text-gold transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
                <span className="font-body text-sm">@mox_vox</span>
              </a>
              <a
                href="https://facebook.com/moxvox"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream-muted hover:text-gold transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
                <span className="font-body text-sm">MOX VOX</span>
              </a>
              <a
                href="tel:+919461761555"
                className="flex items-center gap-2 text-cream-muted hover:text-gold transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
                <span className="font-body text-sm">+91 9461761555</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center">
          <p className="font-body text-sm text-cream-muted">
            © 2024 MOX VOX. Experience the finest in Jodhpur's rooftop dining and entertainment scene.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
