import { Target, Eye, Users, Award } from "lucide-react";
import { motion } from "framer-motion";
import { 
  ScrollAnimation, 
  StaggerContainer, 
  StaggerItem, 
  Parallax, 
  ClipReveal,
  AnimatedText,
  Floating
} from "./ScrollAnimation";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-navy to-transparent" />
      </div>

      {/* Floating decorative elements */}
      <Floating duration={4} distance={15} className="absolute top-20 right-20 opacity-20">
        <div className="w-32 h-32 border-2 border-copper rounded-full" />
      </Floating>
      <Floating duration={5} distance={10} className="absolute bottom-40 left-10 opacity-10">
        <div className="w-24 h-24 bg-navy rounded-lg rotate-45" />
      </Floating>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollAnimation variant="reveal" className="text-center mb-16">
          <span className="text-copper font-semibold tracking-widest uppercase text-sm">
            About Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            <AnimatedText text="Building Excellence Since 2003" delay={0.2} />
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-24 h-1 bg-copper-gradient mx-auto rounded-full origin-left"
          />
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: History with Clip Reveal */}
          <ClipReveal direction="left" delay={0.2}>
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-bold text-foreground">
                Our Story
              </h3>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-muted-foreground leading-relaxed"
              >
                Founded in 2003 as Marstec Enterprise, the company has undertaken many 
                challenging projects and accumulated extensive skills and experience in 
                design and build solutions, project management services, building trades, 
                and related marine engineering works.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-muted-foreground leading-relaxed"
              >
                With over 16 years of combined marine experience, Marstec Sdn Bhd was 
                established in 2022. Today, the company takes on the role of main contractor 
                for small to medium-sized projects and provides project management services 
                to coordinate specialist trades for industrial and commercial projects.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-muted-foreground leading-relaxed"
              >
                Our objective is to provide our clients with an{" "}
                <span className="text-copper font-semibold">"I am assured"</span> experience 
                when we are chosen to execute their projects.
              </motion.p>
            </div>
          </ClipReveal>

          {/* Right: Vision & Mission with 3D rotation */}
          <StaggerContainer className="space-y-8" staggerDelay={0.2}>
            {/* Vision Card */}
            <StaggerItem>
              <motion.div 
                whileHover={{ 
                  rotateY: 5, 
                  rotateX: -5, 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-card p-8 rounded-xl shadow-md border border-border group perspective-1000"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex items-start gap-5">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 bg-navy rounded-lg flex items-center justify-center shrink-0 group-hover:bg-copper transition-colors"
                  >
                    <Eye className="w-7 h-7 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <h4 className="font-display text-xl font-bold text-foreground mb-3">
                      Our Vision
                    </h4>
                    <p className="text-muted-foreground">
                      To be a respectable building contractor delivering beyond expectation, always.
                    </p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>

            {/* Mission Card */}
            <StaggerItem>
              <motion.div 
                whileHover={{ 
                  rotateY: -5, 
                  rotateX: 5, 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-card p-8 rounded-xl shadow-md border border-border group perspective-1000"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex items-start gap-5">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 bg-navy rounded-lg flex items-center justify-center shrink-0 group-hover:bg-copper transition-colors"
                  >
                    <Target className="w-7 h-7 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <h4 className="font-display text-xl font-bold text-foreground mb-3">
                      Our Mission
                    </h4>
                    <p className="text-muted-foreground">
                      To procure projects at competitive pricing, provide safe working conditions 
                      and deliver quality work within reasonable time frame.
                    </p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>

        {/* Philosophy with reveal animation */}
        <ScrollAnimation variant="blur" delay={0.3} className="mt-20">
          <div className="bg-navy rounded-2xl p-10 md:p-14 overflow-hidden relative">
            {/* Animated background pattern */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1/2 -right-1/2 w-full h-full opacity-5"
            >
              <div className="w-full h-full border-[40px] border-copper rounded-full" />
            </motion.div>

            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground text-center mb-10 relative z-10">
              Our Project Management Philosophy
            </h3>
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10" staggerDelay={0.1}>
              {[
                { icon: "📋", text: "Create detail schedule and resources plan to meet client's project objective" },
                { icon: "💬", text: "Communicate clearly with all project stakeholders" },
                { icon: "📈", text: "Track project progress and fine tune deviations" },
                { icon: "🔍", text: "Supervise closely on quality of work done" },
                { icon: "✅", text: "Complete and commission the project on time" },
              ].map((item, index) => (
                <StaggerItem key={index}>
                  <motion.div 
                    whileHover={{ y: -10, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-center p-4 bg-primary-foreground/5 rounded-xl hover:bg-primary-foreground/10 transition-colors h-full"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", delay: 0.3 + index * 0.1 }}
                      className="text-3xl mb-3"
                    >
                      {item.icon}
                    </motion.div>
                    <p className="text-sm text-primary-foreground/80">{item.text}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScrollAnimation>

        {/* Team Highlight with parallax */}
        <Parallax speed={0.2} className="mt-16">
          <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.15}>
            <StaggerItem>
              <motion.div 
                whileHover={{ x: 10 }}
                className="bg-card p-8 rounded-xl shadow-md border border-border flex items-center gap-6"
              >
                <motion.div 
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-16 h-16 bg-copper-gradient rounded-full flex items-center justify-center shrink-0"
                >
                  <Users className="w-8 h-8 text-secondary-foreground" />
                </motion.div>
                <div>
                  <h4 className="font-display text-lg font-bold text-foreground">25+ Years Combined Experience</h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Our management team brings decades of expertise in building & marine industry
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <motion.div 
                whileHover={{ x: -10 }}
                className="bg-card p-8 rounded-xl shadow-md border border-border flex items-center gap-6"
              >
                <motion.div 
                  whileHover={{ rotate: -10, scale: 1.1 }}
                  className="w-16 h-16 bg-copper-gradient rounded-full flex items-center justify-center shrink-0"
                >
                  <Award className="w-8 h-8 text-secondary-foreground" />
                </motion.div>
                <div>
                  <h4 className="font-display text-lg font-bold text-foreground">Certified & Trained</h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Our people are equipped with accredited certification and practical knowledge
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </Parallax>
      </div>
    </section>
  );
}
