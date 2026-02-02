import { motion } from "framer-motion";
import { BadgeCheck, GraduationCap, Heart, Star } from "lucide-react";

export function AboutSection() {
  const stats = [
    { icon: <GraduationCap className="w-5 h-5" />, label: "BDS, BSc Honours", sub: "Qualifications" },
    { icon: <Star className="w-5 h-5" />, label: "10+ Years", sub: "Experience" },
    { icon: <Heart className="w-5 h-5" />, label: "Gentle Care", sub: "Patient Focus" },
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] md:aspect-square rounded-2xl overflow-hidden border border-border shadow-2xl">
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
              <img 
                src="/attached_assets/images_(19)_1770065308992.jpeg" 
                alt="Dr. Madhulika Singh" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 bg-card border border-border p-6 rounded-xl shadow-xl max-w-xs z-20">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-primary/20 rounded-full">
                  <BadgeCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Best Rated</h4>
                  <p className="text-xs text-muted-foreground">in HSR Layout</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic">"Focuses on the issue more rather than time & money."</p>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-3">Meet the Doctor</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Dr. Madhulika Singh</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Dr. Madhulika Singh is a renowned cosmetic dentist with over a decade of clinical excellence. 
              Known for her gentle demeanor and patient-centric approach, she specializes in transforming smiles 
              while ensuring maximum comfort.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              She excels in handling complex cases, from root canals to aesthetic smile designs, 
              always prioritizing the long-term dental health of her patients over quick fixes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-card/50 border border-white/5 p-4 rounded-xl hover:bg-card transition-colors">
                  <div className="mb-3 text-primary">{stat.icon}</div>
                  <div className="font-bold text-white text-sm">{stat.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
