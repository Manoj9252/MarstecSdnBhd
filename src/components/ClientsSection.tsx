import { motion } from "framer-motion";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ScrollAnimation";

// Import your logos from assets
import ijmLogo from "@/assets/ijm.png";
import glenmarieLogo from "@/assets/glenmarie.png";
import drbLogo from "@/assets/drb.png";
import hicomLogo from "@/assets/hicom.png";
import antaraLogo from "@/assets/antara.png";
import enermechLogo from "@/assets/enermech.png";

const companies = [
  { name: "IJM Sdn. Bhd.", logo: ijmLogo },
  { name: "Glenmarie Cove Development Sdn. Bhd.", logo: glenmarieLogo },
  { name: "DRB-HICOM Berhad", logo: drbLogo },
  { name: "HICOM Automotive Manufacturers (Malaysia) Sdn. Bhd.", logo: hicomLogo },
  { name: "Antara Koh Pvt. Ltd.", logo: antaraLogo },
  { name: "EnerMech", logo: enermechLogo },
];

export function ClientsSection() {
  return (
    <section className="py-24 bg-muted/30 border-y border-border relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-copper/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-navy/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollAnimation variant="fadeUp" className="text-center mb-16">
          <span className="text-copper font-bold tracking-[0.3em] uppercase text-[10px] sm:text-xs">
            Trust & Reliability
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy mt-3">
            Our Affiliated Companies
          </h2>
          <div className="w-20 h-1 bg-copper-gradient mx-auto mt-6 rounded-full" />
        </ScrollAnimation>

        <StaggerContainer 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-center"
          staggerDelay={0.1}
        >
          {companies.map((company, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white border border-border rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center justify-center min-h-[200px] overflow-hidden p-8"
              >
                {/* 1. CONSISTENT LOGO CONTAINER (Matches EnerMech Style) */}
                <div className="absolute inset-0 z-0 flex items-center justify-center p-10">
                  <img 
                    src={company.logo} 
                    alt="" 
                    className="max-w-full max-h-[100px] object-contain opacity-60 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110"
                  />
                </div>

                {/* 2. PREMIUM WHITE OVERLAY (85% Opacity as requested) */}
                <div className="absolute inset-0 z-10 bg-white/85 group-hover:bg-white/40 transition-colors duration-500" />

                {/* 3. REFINED TEXT BAR */}
                <div className="relative z-20 w-full mt-auto">
                  <div className="bg-navy/90 backdrop-blur-sm py-3 px-4 rounded-xl border border-white/10 shadow-lg group-hover:bg-navy transition-colors duration-300">
                    <span className={`font-display font-bold text-white text-center block leading-tight tracking-wide 
                      ${company.name.length > 30 ? 'text-xs' : 'text-sm md:text-base'}`}
                    >
                      {company.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}