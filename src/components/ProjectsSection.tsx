import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ScrollAnimation";

// --- IMAGE IMPORTS ---
import brake1 from "@/assets/brake-testing-system_1.png";
import dollyAtt1 from "@/assets/dolly-attachments_1.png";
import dollyAtt2 from "@/assets/dolly-attachments_2.png";
import dollyTest1 from "@/assets/dolly-testing_1.png";
import epoxy1 from "@/assets/epoxy-painting_1.png";
import epoxy2 from "@/assets/epoxy-painting_2.png";
import epoxy3 from "@/assets/epoxy-painting_3.png";
import epoxy4 from "@/assets/epoxy-painting_4.png";
import marina1 from "@/assets/marina-services_1.png";
import marina2 from "@/assets/marina-services_2.png"; 
import marina3 from "@/assets/marina-services_3.png"; 
import plat1 from "@/assets/platform-maintenance_1.png";
import plat2 from "@/assets/platform-maintenance_2.png";
import plat3 from "@/assets/platform-maintenance_3.png";
import revet1 from "@/assets/revetment-rectification_1.png";
import revet2 from "@/assets/revetment-rectification_2.png";
import revet3 from "@/assets/revetment-rectification_3.png";
import revet4 from "@/assets/revetment-rectification_4.png";
import coastal1 from "@/assets/coastal-protection_1.png";
import coastal2 from "@/assets/coastal-protection_2.png";
import coastal3 from "@/assets/coastal-protection_3.png";
import hydro1 from "@/assets/hydrographic-survey_1.png";
import hydro2 from "@/assets/hydrographic-survey_2.png";
import tgConst1 from "@/assets/tidal-gate-construction_1.png";
import tgConst2 from "@/assets/tidal-gate-construction_2.png";
import tgConst3 from "@/assets/tidal-gate-construction_3.png";
import tgConst4 from "@/assets/tidal-gate-construction_4.png";
import tgConst5 from "@/assets/tidal-gate-construction_5.png";
import tgConst6 from "@/assets/tidal-gate-construction_6.png";
import tgConst7 from "@/assets/tidal-gate-construction_7.png";
import tgExca1 from "@/assets/tidal-gate-excavation_1.png";
import tgExca2 from "@/assets/tidal-gate-excavation_2.png";
import tgExca3 from "@/assets/tidal-gate-excavation_3.png";
import tgExca4 from "@/assets/tidal-gate-excavation_4.png";
import tgExca5 from "@/assets/tidal-gate-excavation_5.png";
import tgExca6 from "@/assets/tidal-gate-excavation_6.png";
import trash1 from "@/assets/trash-screen-installation_1.png";
import elec1 from "@/assets/electrical_1.png"; 
import elec2 from "@/assets/electrical_2.png"; 
import elec3 from "@/assets/electrical_3.png"; 

const projects = [
  // AUTOMOTIVE
  { id: 1, title: "Dolly Attachments", client: "HICOM Automotive", year: "Recent", description: "Specialized dolly attachments fabrication.", image: dollyAtt1, category: "Automotive" },
  { id: 2, title: "Dolly Attachments (Setup)", client: "HICOM Automotive", year: "Recent", description: "On-site installation of dolly units.", image: dollyAtt2, category: "Automotive" },
  { id: 3, title: "Brake Testing System", client: "HICOM Automotive (Pekan)", year: "Recent", description: "Installation and commissioning of testing systems.", image: brake1, category: "Automotive" },
  { id: 4, title: "Dolly Testing", client: "Industrial Partner", year: "Recent", description: "Equipment load testing and verification.", image: dollyTest1, category: "Automotive" },
  { id: 5, title: "Platform Maintenance", client: "HICOM Automotive (Pekan)", year: "Recent", description: "Track and platform structural maintenance.", image: plat1, category: "Automotive" },
  { id: 6, title: "Platform Maintenance", client: "HICOM Automotive (Pekan)", year: "Recent", description: "Critical production line track work.", image: plat2, category: "Automotive" },
  { id: 7, title: "Platform Maintenance", client: "HICOM Automotive (Pekan)", year: "Recent", description: "Completed platform servicing.", image: plat3, category: "Automotive" },

  // INDUSTRIAL
  { id: 8, title: "Epoxy Painting Work", client: "Toll Logistics", year: "Recent", description: "Surface preparation and initial coating.", image: epoxy1, category: "Industrial" },
  { id: 9, title: "Epoxy Painting Work", client: "Toll Logistics", year: "Recent", description: "Large scale warehouse floor coating.", image: epoxy2, category: "Industrial" },
  { id: 10, title: "Epoxy Painting Work", client: "Toll Logistics", year: "Recent", description: "Industrial grade floor finishing.", image: epoxy3, category: "Industrial" },
  { id: 11, title: "Epoxy Painting Work", client: "Toll Logistics", year: "Recent", description: "Completed durable epoxy surface.", image: epoxy4, category: "Industrial" },

  // MARINE
  { id: 12, title: "Marina Services", client: "Marina Management", year: "Recent", description: "Power pedestal and marina infrastructure servicing.", image: marina1, category: "Marine" },
  { id: 13, title: "Marina Services", client: "Marina Management", year: "Recent", description: "Infrastructure maintenance and technical inspection.", image: marina2, category: "Marine" },
  { id: 14, title: "Marina Services", client: "Marina Management", year: "Recent", description: "Routine servicing of marina facilities.", image: marina3, category: "Marine" },
  { id: 15, title: "Hydrographic Survey", client: "Glenmarie Cove", year: "Recent", description: "Underwater surveying for coastal planning.", image: hydro1, category: "Marine" },
  { id: 16, title: "Hydrographic Survey", client: "Glenmarie Cove", year: "Recent", description: "Detailed mapping of waterways.", image: hydro2, category: "Marine" },

  // CIVIL & COASTAL
  { id: 17, title: "Coastal Protection", client: "Glenmarie Cove", year: "Recent", description: "Erosion prevention systems.", image: coastal1, category: "Civil & Coastal" },
  { id: 18, title: "Coastal Protection", client: "Glenmarie Cove", year: "Recent", description: "Implementation of shoreline barriers.", image: coastal2, category: "Civil & Coastal" },
  { id: 19, title: "Coastal Protection", client: "Glenmarie Cove", year: "Recent", description: "Reinforcement of coastal infrastructure.", image: coastal3, category: "Civil & Coastal" },
  { id: 20, title: "Revetment Rectification", client: "Glenmarie Cove", year: "Recent", description: "Shoreline rectification works.", image: revet1, category: "Civil & Coastal" },
  { id: 21, title: "Revetment Rectification", client: "Glenmarie Cove", year: "Recent", description: "Reinforcement of coastal walls.", image: revet2, category: "Civil & Coastal" },
  { id: 22, title: "Revetment Rectification", client: "Glenmarie Cove", year: "Recent", description: "Structural coastal maintenance.", image: revet3, category: "Civil & Coastal" },
  { id: 23, title: "Revetment Rectification", client: "Glenmarie Cove", year: "Recent", description: "Completed shoreline protection.", image: revet4, category: "Civil & Coastal" },
  { id: 24, title: "Tidal Gate Construction", client: "Glenmarie Cove", year: "2023", description: "Foundation work for tidal gate.", image: tgConst1, category: "Civil & Coastal" },
  { id: 25, title: "Tidal Gate Construction", client: "Glenmarie Cove", year: "2023", description: "Structural framework for water control.", image: tgConst2, category: "Civil & Coastal" },
  { id: 26, title: "Tidal Gate Construction", client: "Glenmarie Cove", year: "2023", description: "Installation of gate mechanisms.", image: tgConst3, category: "Civil & Coastal" },
  { id: 27, title: "Tidal Gate Construction", client: "Glenmarie Cove", year: "2023", description: "Civil engineering phase.", image: tgConst4, category: "Civil & Coastal" },
  { id: 28, title: "Tidal Gate Construction", client: "Glenmarie Cove", year: "2023", description: "Main gate structural assembly.", image: tgConst5, category: "Civil & Coastal" },
  { id: 29, title: "Tidal Gate Construction", client: "Glenmarie Cove", year: "2023", description: "Concrete reinforcement works.", image: tgConst6, category: "Civil & Coastal" },
  { id: 30, title: "Tidal Gate Construction", client: "Glenmarie Cove", year: "2023", description: "Final structural checks.", image: tgConst7, category: "Civil & Coastal" },
  { id: 31, title: "Tidal Gate Excavation", client: "Glenmarie Cove", year: "2024", description: "Trench excavation for waterways.", image: tgExca1, category: "Civil & Coastal" },
  { id: 32, title: "Tidal Gate Excavation", client: "Glenmarie Cove", year: "2024", description: "Channeling and site preparation.", image: tgExca2, category: "Civil & Coastal" },
  { id: 33, title: "Tidal Gate Excavation", client: "Glenmarie Cove", year: "2024", description: "Earthworks for water flow control.", image: tgExca3, category: "Civil & Coastal" },
  { id: 34, title: "Tidal Gate Excavation", client: "Glenmarie Cove", year: "2024", description: "Deep trenching for gate infrastructure.", image: tgExca4, category: "Civil & Coastal" },
  { id: 35, title: "Tidal Gate Excavation", client: "Glenmarie Cove", year: "2024", description: "Waterway landscaping phase.", image: tgExca5, category: "Civil & Coastal" },
  { id: 36, title: "Tidal Gate Excavation", client: "Glenmarie Cove", year: "2024", description: "Final excavation clearance.", image: tgExca6, category: "Civil & Coastal" },
  { id: 37, title: "Trash Screen Installation", client: "Glenmarie Cove", year: "2024", description: "Installation of debris screening for tidal gates.", image: trash1, category: "Civil & Coastal" },

  // M&E WORKS
  { id: 38, title: "Electrical Works", client: "Industrial Project", year: "Recent", description: "System wiring and electrical installation phase 1.", image: elec1, category: "M&E Works" },
  { id: 39, title: "Electrical Works", client: "Industrial Project", year: "Recent", description: "Circuit testing and panel configuration.", image: elec2, category: "M&E Works" },
  { id: 40, title: "Electrical Works", client: "Industrial Project", year: "Recent", description: "Final electrical commissioning and safety check.", image: elec3, category: "M&E Works" },
];

const categories = ["All", "Automotive", "Marine", "Civil & Coastal", "Industrial", "M&E Works"];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // LOGIC: If 'All', filter to show only one unique project per title. Otherwise show all in category.
  const filteredProjects = activeCategory === "All" 
    ? projects.filter((v, i, a) => a.findIndex(t => t.title === v.title) === i)
    : projects.filter((p) => p.category === activeCategory);

  const handleProjectClick = (category: string) => {
    if (activeCategory === "All") {
      setActiveCategory(category);
      window.scrollTo({ top: document.getElementById("projects")?.offsetTop ? document.getElementById("projects")!.offsetTop - 100 : 0, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollAnimation variant="reveal" className="text-center mb-12">
          <span className="text-copper font-semibold tracking-widest uppercase text-sm block">Portfolio</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">Our Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {activeCategory === "All" 
              ? "Select a project to view the full gallery of related works." 
              : `Showing all works in the ${activeCategory} category.`}
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
            {filteredProjects.map((project, index) => {
              // Count total images for this project title to show "View All" count
              const imageCount = projects.filter(p => p.title === project.title).length;
              
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  onClick={() => handleProjectClick(project.category)}
                  className={`group relative overflow-hidden rounded-2xl shadow-lg bg-card border border-border ${activeCategory === "All" ? "cursor-pointer" : ""}`}
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      animate={{ scale: hoveredProject === project.id ? 1.1 : 1 }}
                    />
                    {activeCategory === "All" && imageCount > 1 && (
                      <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-white text-navy font-bold px-4 py-2 rounded-full text-xs uppercase tracking-tighter">
                          View All {imageCount} Photos
                        </span>
                      </div>
                    )}
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
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}