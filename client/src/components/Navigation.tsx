import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, CalendarClock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Dr. Madhulika", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Reviews", href: "/#reviews" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    // Smooth scroll for anchor links
    if (href.startsWith("/#")) {
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else if (location !== "/") {
        // If not on home page, navigate to home then scroll
        window.location.href = href;
      }
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/95 backdrop-blur-md border-border/40 py-3 shadow-lg" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-primary/10 p-2 rounded-full border border-primary/20 group-hover:bg-primary/20 transition-colors">
            {/* Dental Icon SVG */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-6 h-6 text-primary"
            >
              <path d="M12 2C7 2 3 7 3 9c0 5.5 5 13 9 13s9-7.5 9-13c0-2-4-7-9-7z" />
              <path d="M8 9h8" />
              <path d="M8 13h8" />
            </svg>
          </div>
          <div>
            <span className="font-heading font-bold text-xl md:text-2xl tracking-tight text-white block leading-none">
              Impressive Smile
            </span>
            <span className="text-[10px] uppercase tracking-widest text-primary font-medium opacity-90">
              Dental Clinic
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
          <Button 
            variant="default" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-6"
            onClick={() => window.open("tel:9980020321")}
          >
            <Phone className="w-4 h-4 mr-2" />
            Book: 99800 20321
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-foreground hover:bg-muted/50 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-lg font-medium text-foreground py-2 border-b border-border/30 hover:text-primary hover:border-primary transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                 <Button 
                  className="w-full bg-primary text-primary-foreground"
                  onClick={() => window.open("tel:9980020321")}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-muted/30 p-3 rounded-lg">
                  <CalendarClock className="w-4 h-4 text-primary" />
                  <span>Appointment Only</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
