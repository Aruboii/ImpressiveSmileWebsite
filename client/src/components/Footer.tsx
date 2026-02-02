import { Phone, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary/10 p-2 rounded-full border border-primary/20">
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
              <span className="font-heading font-bold text-2xl text-white">Impressive Smile</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-sm">
              Dr. Madhulika Singh offers world-class dental care with a gentle touch. 
              We are dedicated to creating healthy, beautiful smiles for you and your family.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-xl text-white mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                <p className="text-muted-foreground">
                  G.R.S Complex, 24th Main Road,<br />
                  Sector-2, HSR Layout,<br />
                  Bengaluru - 560102<br />
                  <span className="text-xs text-primary/70 block mt-1">(Below Photo Express)</span>
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:9980020321" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 99800 20321
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading font-bold text-xl text-white mb-6">Clinic Hours</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <p className="text-white font-medium mb-1">Monday - Saturday</p>
                  <p className="text-muted-foreground text-sm">Morning: 10:00 AM - 1:00 PM</p>
                  <p className="text-muted-foreground text-sm">Evening: 6:00 PM - 9:00 PM</p>
                </div>
              </div>
              <div className="pl-9">
                <p className="text-white font-medium mb-1">Sunday</p>
                <p className="text-destructive/80 text-sm font-medium">Closed</p>
              </div>
              <div className="mt-6 pt-6 border-t border-border/30">
                <p className="text-primary text-sm font-medium italic">
                  * By Appointment Only
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Impressive Smile Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
