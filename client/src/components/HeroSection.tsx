import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40 z-10" />
        <img 
          src="/clinic.webp" 
          alt="Modern Dental Clinic" 
          className="w-full h-full object-cover object-center opacity-60"
        />
      </div>

      <div className="container mx-auto px-4 relative z-20 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
              HSR Layout, Sector 2, Bengaluru
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight"
          >
            Crafting Your <br/>
            <span className="text-gradient">Impressive Smile</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed"
          >
            Experience world-class cosmetic dentistry with Dr. Madhulika Singh. 
            We combine advanced technology with a gentle touch to create 
            healthy, beautiful smiles that last a lifetime.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
              onClick={() => window.open("tel:9980020321")}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call to Book Appointment
            </Button>
            
            <div className="flex items-center gap-3 px-6 py-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <Calendar className="w-5 h-5 text-primary" />
              <div className="text-sm">
                <span className="block text-white font-medium">Pre-booked Appointments Only</span>
                <span className="text-white/60 text-xs">Mon-Sat: 10AM-1PM, 6PM-9PM</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
