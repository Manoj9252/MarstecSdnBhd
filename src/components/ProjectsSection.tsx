import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollAnimation, StaggerContainer, StaggerItem, Parallax, ScaleOnScroll } from "@/components/ScrollAnimation";

// IMPORTANT: Replace the placeholder images with your actual paths like: import project1 from "@/assets/projects/your-image.jpg"
const projects = [
  {
    id: 1,
    title: "Dolly Attachments",
    client: "HICOM Automotive",
    year: "Recent",
    description: "Design and fabrication of specialized dolly attachments (2 units/pics).",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
    category: "Automotive",
  },
  {
    id: 2,
    title: "Brake Testing System Installation",
    client: "HICOM Automotive (Pekan)",
    year: "Recent",
    description: "Installation and commissioning of advanced brake testing systems.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    category: "Automotive",
  },
  {
    id: 3,
    title: "Dolly Testing with Equipment",
    client: "Industrial Partner",
    year: "Recent",
    description: "Comprehensive load and safety testing for dolly equipment.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80",
    category: "Automotive",
  },
  {
    id: 4,
    title: "Marina and Power Pedestal Services",
    client: "Marina Management",
    year: "Recent",
    description: "Technical servicing of marina infrastructure and power distribution units.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80",
    category: "Marine",
  },
  {
    id: 5,
    title: "Platform and Track Maintenance",
    client: "HICOM Automotive (Pekan)",
    year: "Recent",
    description: "Critical maintenance work for automotive production platforms and tracks.",
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80",
    category: "Automotive",
  },
  {
    id: 6,
    title: "Tidal Gate Excavation",
    client: "Glenmarie Cove",
    year: "2024",
    description: "Civil works: Excavation of trench and waterways for newly completed tidal gates.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80",
    category: "Civil & Coastal",
  },
  {
    id: 7,
    title: "New Trash Screen Installation",
    client: "Glenmarie Cove",
    year: "2024",
    description: "Installation of comprehensive trash screening systems for tidal gates.",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80",
    category: "Civil & Coastal",
  },
  {
    id: 8,
    title: "Epoxy Painting Work",
    client: "Toll Logistics, Shah Alam",
    year: "Recent",
    description: "High-durability epoxy floor coating and painting for logistics facilities.",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80",
    category: "Industrial",
  },
  {
    id: 9,
    title: "Hydrographic Survey Works",
    client: "Glenmarie Cove",
    year: "Recent",
    description: "Detailed underwater survey for revetment and coastal planning.",
    image: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?auto=format&fit=crop&q=80",
    category: "Marine",
  },
  {
    id: 10,
    title: "Coastal Protection Works",
    client: "Glenmarie Cove",
    year: "Recent",
    description: "Implementation of coastal erosion prevention and protection systems.",
    image: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&q=80",
    category: "Civil & Coastal",
  },
  {
    id: 11,
    title: "Revetment Rectification",
    client: "Glenmarie Cove",
    year: "Recent",
    description: "Specialized repairs and rectification of existing coastal revetments.",
    image: "https://images.unsplash.com/photo-1495312040526-19961adcd5a9?auto=format&fit=crop&q=80",
    category: "Civil & Coastal",
  },
  {
    id: 12,
    title: "Construction of Tidal Gate",
    client: "Glenmarie Cove",
    year: "2023",
    description: "Full-scale construction and civil engineering of modern tidal gate systems.",
    image: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80",
    category: "Civil & Coastal",
  },
  {
    id: 13,
    title: "Senangin Floating Jetty",
    client: "Glenmarie Cove Marina",
    year: "Recent",
    description: "Installation of high-grade floating concrete jetty systems.",
    image: "https://images.unsplash.com/photo-1559139225-421a9384384d?auto=format&fit=crop&q=80",
    category: "Marine",
  },
];

const categories = ["All", "Automotive", "Marine", "Civil & Coastal", "Industrial"];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollAnimation variant="reveal" className="text-center mb-12">
          <span className="text-copper font-semibold tracking-widest uppercase text-sm block">Portfolio</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">Our Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From heavy industrial automotive maintenance to complex marine and coastal engineering.
          </p>
          <div className="w-24 h-1 bg-copper-gradient mx-auto rounded-full mt-6" />
        </ScrollAnimation>

        <ScrollAnimation delay={0.2} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium text-sm uppercase tracking-wider transition-all ${
                activeCategory === category
                  ? "bg-navy text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-copper hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </ScrollAnimation>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group relative overflow-hidden rounded-2xl shadow-lg bg-card border border-border"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{ scale: hoveredProject === project.id ? 1.1 : 1 }}
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-copper/10 text-copper text-[10px] font-bold rounded-full uppercase">
                      {project.category}
                    </span>
                    <span className="text-muted-foreground text-xs">{project.year}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-medium mb-2">
                    Client: {project.client}
                  </p>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}