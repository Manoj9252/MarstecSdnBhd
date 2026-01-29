import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollAnimation, StaggerContainer, StaggerItem, Parallax, ScaleOnScroll } from "@/components/ScrollAnimation";

const projects = [
  {
    id: 1,
    title: "Glenmarie Cove Marina",
    client: "DRB-HICOM",
    year: "2024",
    description: "Fabricate, install new concrete pontoon and marine refurbishment work",
    image:
      "https://images.pexels.com/photos/799091/pexels-photo-799091.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Marina",
  },
  {
    id: 2,
    title: "LKIM Pengerang Jetty",
    client: "CLM",
    year: "2020",
    description: "Steel platform & pontoon fabrication with piling works",
    image:
      "https://images.pexels.com/photos/946262/pexels-photo-946262.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Piling",
  },
  {
    id: 3,
    title: "Steel Fabrication Works",
    client: "Various Clients",
    year: "2023",
    description: "Custom steel fabrication, welding, and HDG components",
    image:
      "https://images.pexels.com/photos/327049/pexels-photo-327049.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Fabrication",
  },
  {
    id: 4,
    title: "Floating Pontoon System",
    client: "PMM Sdn Bhd",
    year: "2018",
    description: "Concrete pontoon construction and supply for Kota Kinabalu, Sabah",
    image:
      "https://images.pexels.com/photos/799092/pexels-photo-799092.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Pontoon",
  },
];

const categories = ["All", "Marina", "Pontoon", "Piling", "Fabrication"];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 left-10 w-20 h-20 border border-copper/20 rounded-lg rotate-45"
      />
      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 right-20 w-32 h-32 border border-navy/10 rounded-full"
      />

      <div className="container mx-auto px-6">
        <ScrollAnimation variant="reveal" className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-copper font-semibold tracking-widest uppercase text-sm block"
          >
            Portfolio
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">Our Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Over 50 projects completed across Malaysia, Singapore, and beyond. From floating pontoons to complete
            marina constructions.
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 bg-copper-gradient mx-auto rounded-full mt-6"
          />
        </ScrollAnimation>

        <ScrollAnimation delay={0.2} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium text-sm uppercase tracking-wider transition-all relative overflow-hidden ${
                activeCategory === category
                  ? "bg-navy text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-copper hover:text-secondary-foreground"
              }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-navy rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {category}
            </motion.button>
          ))}
        </ScrollAnimation>

        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50, rotateY: -10 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: 10 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group relative overflow-hidden rounded-2xl shadow-lg bg-card border border-border"
                style={{ perspective: "1000px" }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredProject === project.id ? 1.15 : 1,
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/60 to-transparent"
                />

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredProject === project.id ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute top-4 left-4 right-4 h-px bg-copper/50 origin-left"
                />
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: hoveredProject === project.id ? 1 : 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="absolute top-4 bottom-4 right-4 w-px bg-copper/50 origin-top"
                />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: hoveredProject === project.id ? 0 : 10,
                      opacity: 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-3 mb-2"
                  >
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-copper text-secondary-foreground text-xs font-semibold rounded-full uppercase"
                    >
                      {project.category}
                    </motion.span>
                    <span className="text-primary-foreground/70 text-sm">{project.year}</span>
                  </motion.div>
                  <motion.h3
                    animate={{
                      y: hoveredProject === project.id ? 0 : 5,
                    }}
                    transition={{ duration: 0.3, delay: 0.05 }}
                    className="font-display text-xl font-bold text-primary-foreground mb-1"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    animate={{
                      y: hoveredProject === project.id ? 0 : 5,
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-primary-foreground/70 text-sm mb-1"
                  >
                    Client: {project.client}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: hoveredProject === project.id ? 1 : 0,
                      y: hoveredProject === project.id ? 0 : 10,
                    }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                    className="text-primary-foreground/60 text-sm"
                  >
                    {project.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <Parallax speed={0.1} className="mt-20">
          <ScaleOnScroll>
            <h3 className="font-display text-2xl font-bold text-foreground text-center mb-10">
              Key Project Milestones
            </h3>
          </ScaleOnScroll>
          <div className="relative">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-copper via-navy to-copper -translate-x-1/2 hidden md:block origin-top"
            />

            <StaggerContainer className="space-y-8" staggerDelay={0.2}>
              {[
                { year: "2012", project: "First floating jetty at Glenmarie Cove" },
                { year: "2016", project: "Singapore SCDF vessel maintenance" },
                { year: "2020", project: "LKIM Pengerang steel platform & piling" },
                { year: "2024", project: "Glenmarie Cove Marina refurbishment" },
              ].map((milestone, index) => (
                <StaggerItem key={milestone.year}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className={`flex items-center gap-6 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <motion.div
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 20px 40px -15px rgba(0,0,0,0.2)",
                        }}
                        className="bg-card p-6 rounded-xl shadow-md border border-border inline-block transition-shadow"
                      >
                        <motion.span
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                          className="font-display text-2xl font-bold text-copper"
                        >
                          {milestone.year}
                        </motion.span>
                        <p className="text-muted-foreground mt-1">{milestone.project}</p>
                      </motion.div>
                    </div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1, type: "spring", stiffness: 200 }}
                      className="w-4 h-4 bg-copper rounded-full shrink-0 relative z-10 hidden md:block"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                        className="absolute inset-0 bg-copper rounded-full"
                      />
                    </motion.div>
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </Parallax>
      </div>
    </section>
  );
}

