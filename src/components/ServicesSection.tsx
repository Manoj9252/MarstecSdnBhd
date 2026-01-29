import { Anchor, Wrench, Building2, Truck, Cog, Zap } from "lucide-react";
import { motion } from "framer-motion";
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
  AnimatedCounter,
  ClipReveal,
  Magnetic,
} from "@/components/ScrollAnimation";

const services = [
  {
    icon: Anchor,
    title: "Marine Engineering",
    description: "Floating pontoons, jetty construction, marine piling, and comprehensive maritime solutions.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Wrench,
    title: "Steel Fabrication",
    description: "Custom steel structures, gangways, brackets, handrails, and hot-dip galvanized components.",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Building2,
    title: "Construction",
    description: "Civil works, structural construction, and building trades for commercial and industrial projects.",
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: Truck,
    title: "Trading & Supply",
    description: "Equipment trading, material supply, and procurement services for construction projects.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Cog,
    title: "Mechanical Works",
    description: "Mechanical installations, equipment maintenance, and repair services.",
    color: "from-red-500 to-rose-500",
  },
  {
    icon: Zap,
    title: "Electrical Works",
    description: "Electrical installations, wiring, and M&E coordination for comprehensive solutions.",
    color: "from-yellow-500 to-orange-500",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-cream-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />

      <motion.div
        animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-20 w-40 h-40 border border-copper/20 rounded-full"
      />
      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 -right-20 w-60 h-60 border border-navy/10 rounded-full"
      />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollAnimation variant="blur" className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-copper font-semibold uppercase text-sm block"
          >
            What We Do
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive construction and marine solutions, from design to completion, ensuring quality
            delivery at every stage.
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 bg-copper-gradient mx-auto rounded-full mt-6 origin-center"
          />
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <Magnetic strength={0.1}>
                <motion.div
                  whileHover={{
                    y: -15,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  className="group bg-card p-8 rounded-xl shadow-md border border-border hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 0.1, scale: 1 }}
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-xl`}
                  />

                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-navy rounded-xl flex items-center justify-center mb-6 group-hover:bg-copper transition-colors duration-300 relative z-10"
                  >
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </motion.div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed relative z-10">{service.description}</p>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-copper-gradient origin-left"
                  />
                </motion.div>
              </Magnetic>
            </motion.div>
          ))}
        </div>

        <ClipReveal direction="bottom" delay={0.3} className="mt-20">
          <div className="bg-card rounded-2xl p-10 md:p-14 shadow-lg border border-border relative overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-copper/10 rounded-full blur-2xl"
            />

            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
              Our Facilities &amp; Equipment
            </h3>
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.15}>
              {[
                { value: "6600", unit: "sq.ft", label: "Yard & Storage" },
                { value: "3", unit: "vehicles", label: "4WD & Trucks" },
                { value: "2", unit: "units", label: "Floating Pontoons" },
                { value: "15", unit: "sets", label: "Professional Tools" },
              ].map((item) => (
                <StaggerItem key={item.label}>
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 40px -10px rgba(0,0,0,0.2)",
                    }}
                    className="text-center p-6 bg-muted rounded-xl hover:bg-muted/80 transition-colors"
                  >
                    <div className="font-display text-3xl font-bold text-navy">
                      <AnimatedCounter value={`${item.value}+`} duration={2} />
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="text-sm text-copper font-medium uppercase tracking-wider"
                    >
                      {item.unit}
                    </motion.div>
                    <div className="text-sm text-muted-foreground mt-2">{item.label}</div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ClipReveal>
      </div>
    </section>
  );
}

