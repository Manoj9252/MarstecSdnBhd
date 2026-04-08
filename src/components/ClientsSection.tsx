import { motion } from "framer-motion";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ScrollAnimation";

const companies = [
  "IJM Sdn. Bhd.",
  "Glenmarie Core Development Sdn. Bhd.",
  "DRB-HICOM Berhad",
  "HICOM Automotive Manufacturers (Malaysia) Sdn. Bhd.",
  "Antara Koh Pvt. Ltd.",
];

export function ClientsSection() {
  return (
    <section className="py-20 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-6">
        <ScrollAnimation variant="fadeUp" className="text-center mb-12">
          <span className="text-copper font-semibold tracking-widest uppercase text-xs">
            Trust & Reliability
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Companies We've Worked With
          </h2>
          <div className="w-16 h-1 bg-copper/30 mx-auto mt-4 rounded-full" />
        </ScrollAnimation>

        <StaggerContainer 
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center"
          staggerDelay={0.1}
        >
          {companies.map((company, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-card border border-border p-6 rounded-xl shadow-sm hover:shadow-md hover:border-copper/50 transition-all flex items-center justify-center min-h-[120px] text-center px-4"
              >
                <span className="font-display text-sm md:text-base font-bold text-navy/80">
                  {company}
                </span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm mt-12 italic"
        >
          & many more local and international partners...
        </motion.p>
      </div>
    </section>
  );
}