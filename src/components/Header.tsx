import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; 
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/logo.png";

const navItems = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Services", href: "services" },
  { label: "Projects", href: "projects" },
  { label: "Contact", href: "contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? "bg-navy-dark shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
          className="flex items-center gap-2 sm:gap-3 group"
          whileHover={{ scale: 1.02 }}
        >
          {/* Responsive logo height */}
          <img 
            src={logoImg} 
            alt="MARSTEC Logo" 
            className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-110" 
          />
          
          <div className="flex flex-col">
            <span className="font-display text-lg sm:text-xl font-bold text-primary-foreground tracking-wider leading-tight">MARSTEC</span>
            <span className="text-[8px] sm:text-[10px] text-copper tracking-[0.2em] font-medium">SDN BHD</span>
          </div>
        </motion.a>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={`#${item.href}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              whileHover={{ y: -2 }}
              className="text-sm font-medium text-primary-foreground/80 hover:text-copper transition-colors uppercase tracking-widest relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-copper transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </nav>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="hidden lg:block"
        >
          <Button variant="hero" size="default" onClick={() => scrollToSection("contact")}>
            Get Quote
          </Button>
        </motion.div>

        {/* Mobile Toggle - Z-index higher to stay on top of the menu */}
        <button
          className="lg:hidden text-primary-foreground p-2 z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-0 z-40 bg-navy-dark flex flex-col justify-center items-center overflow-hidden"
          >
            <nav className="flex flex-col gap-10 text-center">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={`#${item.href}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="text-3xl font-display font-bold text-primary-foreground hover:text-copper uppercase tracking-[0.2em] transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="px-10"
              >
                <Button variant="hero" size="xl" className="w-full text-lg py-6" onClick={() => scrollToSection("contact")}>
                  Get Quote
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}