import { Facebook, Linkedin, Instagram } from "lucide-react"; // Removed Anchor icon
import { motion } from "framer-motion";
import logoImg from "@/assets/logo.png"; // Importing your logo from the assets folder

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Define your social media links here
  const socialLinks = [
    { Icon: Facebook, href: "https://www.facebook.com" },
    { Icon: Linkedin, href: "https://www.linkedin.com" },
  ];

  return (
    <footer className="bg-navy-dark py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
              className="flex items-center gap-3 mb-6"
            >
              {/* LOGO IMAGE REPLACEMENT */}
              <img 
                src={logoImg} 
                alt="MARSTEC Logo" 
                className="h-12 w-auto object-contain" 
              />
              
              <div>
                <span className="font-display text-xl font-bold text-primary-foreground tracking-wider">MARSTEC</span>
                <span className="block text-[10px] text-copper tracking-[0.2em] font-medium -mt-1">SDN BHD</span>
              </div>
            </a>
            <p className="text-primary-foreground/60 max-w-md mb-6">
              Your one-stop construction and marine solution provider. Building excellence since 2003 with over 20 years
              of experience in marine engineering and construction services.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-copper transition-colors"
                >
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-display text-lg font-bold text-primary-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "home" },
                { label: "About Us", href: "about" },
                { label: "Services", href: "services" },
                { label: "Projects", href: "projects" },
                { label: "Contact", href: "contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={`#${link.href}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-primary-foreground/60 hover:text-copper transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-display text-lg font-bold text-primary-foreground mb-6">Our Services</h4>
            <ul className="space-y-3">
              {["Marine Engineering", "Steel Fabrication", "Construction", "Trading & Supply", "M&E Works"].map(
                (service) => (
                  <li key={service}>
                    <span className="text-primary-foreground/60">{service}</span>
                  </li>
                ),
              )}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-primary-foreground/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {currentYear} Marstec Sdn Bhd. All rights reserved.
            </p>
            <p className="text-primary-foreground/50 text-sm">Registration No: 202201002299 (1447996-V)</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}