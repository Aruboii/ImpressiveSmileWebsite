import { useFaqs } from "@/hooks/use-content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

// Fallback FAQs
const defaultFaqs = [
  {
    question: "How do I book an appointment?",
    answer: "Dr. Madhulika Singh accepts pre-booked appointments only. You can call us directly at 99800 20321 to schedule your visit. We are available Monday through Saturday."
  },
  {
    question: "Do you treat children?",
    answer: "Yes! Dr. Madhulika is excellent with children and specializes in pediatric dental care, ensuring a gentle and fear-free experience for young patients."
  },
  {
    question: "What are your clinic timings?",
    answer: "We are open Monday to Saturday. Morning hours are 10:00 AM - 1:00 PM, and evening hours are 6:00 PM - 9:00 PM. We are closed on Sundays."
  },
  {
    question: "Do you offer cosmetic dentistry?",
    answer: "Absolutely. We specialize in smile designs, teeth whitening, veneers, and aesthetic fillings to help you achieve the perfect smile."
  },
  {
    question: "Is root canal treatment painful?",
    answer: "Modern root canal treatments are virtually painless with local anesthesia. Dr. Madhulika uses advanced techniques to ensure maximum comfort during the procedure."
  }
];

export function FaqSection() {
  const { data: faqs } = useFaqs();
  const displayFaqs = faqs && faqs.length > 0 ? faqs : defaultFaqs;

  return (
    <section id="faq" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-3">Common Questions</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Patient FAQs</h3>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {displayFaqs.map((faq, idx) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`} 
                className="border border-border/50 bg-card/30 rounded-lg px-4 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-white hover:text-primary transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
