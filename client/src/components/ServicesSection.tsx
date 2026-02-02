import { motion } from "framer-motion";
import { Smile, Activity, Zap, ShieldCheck, HeartPulse, Sparkles } from "lucide-react";
import { useServices } from "@/hooks/use-content";

// Map icon strings to Lucide components
const iconMap: Record<string, React.ReactNode> = {
  smile: <Smile className="w-8 h-8" />,
  activity: <Activity className="w-8 h-8" />,
  zap: <Zap className="w-8 h-8" />,
  shield: <ShieldCheck className="w-8 h-8" />,
  heart: <HeartPulse className="w-8 h-8" />,
  sparkles: <Sparkles className="w-8 h-8" />,
};

// Fallback services if API is empty or loading
const defaultServices = [
  { title: "Smile Design", description: "Custom cosmetic makeovers to give you the perfect smile you deserve.", icon: "smile" },
  { title: "Root Canal", description: "Painless advanced RCT procedures to save infected teeth.", icon: "activity" },
  { title: "Dental Implants", description: "Permanent, natural-looking replacements for missing teeth.", icon: "shield" },
  { title: "Teeth Whitening", description: "Professional bleaching for a brighter, whiter smile in one session.", icon: "sparkles" },
  { title: "Braces & Aligners", description: "Correct misalignments with modern orthodontic solutions.", icon: "zap" },
  { title: "Pediatric Dentistry", description: "Gentle, friendly dental care specialized for children.", icon: "heart" },
];

export function ServicesSection() {
  const { data: services } = useServices();
  const displayServices = services && services.length > 0 ? services : defaultServices;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-sm font-bold tracking-widest uppercase mb-3"
          >
            Our Expertise
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-6"
          >
            Comprehensive Dental Care
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            We offer a full range of dental treatments using the latest technology and techniques.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {displayServices.map((service, idx) => (
            <motion.div 
              key={idx}
              variants={item}
              className="group bg-card border border-border p-8 rounded-2xl hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
              
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                {iconMap[service.icon] || <Activity />}
              </div>
              
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
