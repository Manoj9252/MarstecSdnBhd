import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollAnimation } from "@/components/ScrollAnimation";

// --- IMAGE IMPORTS ---
import brake1 from "@/assets/brake-testing-system_1.png";
import dollyTest1 from "@/assets/dolly-testing_1.png";
import epoxy1 from "@/assets/epoxy-painting_1.png";
import epoxy2 from "@/assets/epoxy-painting_2.png";
import epoxy3 from "@/assets/epoxy-painting_3.png";
import epoxy4 from "@/assets/epoxy-painting_4.png";
import marina1 from "@/assets/marina-services_1.png";
import marina2 from "@/assets/marina-services_2.png";
import marina3 from "@/assets/marina-services_3.png";
import marina4 from "@/assets/marina-services_4.png";
import marina5 from "@/assets/marina-services_5.png";
import float1 from "@/assets/marine-floating-silt-curtain_1.png";
import float2 from "@/assets/marine-floating-silt-curtain_2.png";
import float3 from "@/assets/marine-floating-silt-curtain_3.png";
import float4 from "@/assets/marine-floating-silt-curtain_4.png";
import float5 from "@/assets/marine-floating-silt-curtain_5.png";
import pedestal1 from "@/assets/marine-utility-pedestals_1 .png";
import pedestal2 from "@/assets/marine-utility-pedestals_2.png";
import pedestal3 from "@/assets/marine-utility-pedestals_3.png";
import pedestal4 from "@/assets/marine-utility-pedestals_4.png";
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
import tgExca1 from "@/assets/tidal-gate-excavation_1.png";
import tgExca2 from "@/assets/tidal-gate-excavation_2.png";
import tgExca3 from "@/assets/tidal-gate-excavation_3.png";
import tgExca4 from "@/assets/tidal-gate-excavation_4.png";
import tgExca5 from "@/assets/tidal-gate-excavation_5.png";
import tgExca6 from "@/assets/tidal-gate-excavation_6.png";
import elec1 from "@/assets/electrical_1.png"; 
import elec2 from "@/assets/electrical_2.png"; 
import elec3 from "@/assets/electrical_3.png"; 

// SCDF & New Marine Imports
import scdf1 from "@/assets/scdf-pontoon_1.png";
import scdf2 from "@/assets/scdf-pontoon_2.png";
import scdf3 from "@/assets/scdf-pontoon_3.png";
import scdf4 from "@/assets/scdf-pontoon_4.png";
import scdf5 from "@/assets/scdf-pontoon_5.png";
import gangwayScdf1 from "@/assets/aluminium-gangway-scdf_1.png";
import scdfShipment1 from "@/assets/scdf-pontoon-shipment_1.png";
import pontoonSarawak1 from "@/assets/pontoon-casting-sarawak_1.png";
import pontoonSarawak2 from "@/assets/pontoon-casting-sarawak_2.png";
import modularDock1 from "@/assets/modular-floating-dock_1.png";
import modularDock2 from "@/assets/modular-floating-dock_2.png";
import modularDock3 from "@/assets/modular-floating-dock_3.png";
import coastalTumpat1 from "@/assets/coastal-reclamation-tumpat_1.png";
import coastalTumpat2 from "@/assets/coastal-reclamation-tumpat_2.png";
import coastalTumpat3 from "@/assets/coastal-reclamation-tumpat_3.png";
import slabTumpat1 from "@/assets/slab-casting-tumpat_1.png";
import slabTumpat2 from "@/assets/slab-casting-tumpat_2.png";
import slabTumpat3 from "@/assets/slab-casting-tumpat_3.png";
import steelWork1 from "@/assets/steel-structure-work_1.png";
import steelWork2 from "@/assets/steel-structure-work_2.png";
import steelWork3 from "@/assets/steel-structure-work_3.png";
import steelWork4 from "@/assets/steel-structure-work_4.png";
import jetty1 from "@/assets/fisherman-jetty-ijm-penang_1.png";

// Trash Screen Imports
import trash1 from "@/assets/trash-screen-installation_1.png";
import trash2 from "@/assets/trash-screen-installation_2.png";
import trash3 from "@/assets/trash-screen-installation_3.png";
import trash4 from "@/assets/trash-screen-installation_4.png";

const projects = [
  // AUTOMOTIVE
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
  { id: 46, title: "Marina Services", client: "Marina Management", year: "Recent", description: "Expanded marina infrastructure servicing.", image: marina4, category: "Marine" },
  { id: 47, title: "Marina Services", client: "Marina Management", year: "Recent", description: "Additional berth and power pedestal maintenance.", image: marina5, category: "Marine" },
  { id: 48, title: "Floating Silt Curtain", client: "Marina Management", year: "Recent", description: "Temporary environmental protection barrier installation.", image: float1, category: "Marine" },
  { id: 49, title: "Floating Silt Curtain", client: "Marina Management", year: "Recent", description: "Deployment of silt curtains for coastal protection.", image: float2, category: "Marine" },
  { id: 50, title: "Floating Silt Curtain", client: "Marina Management", year: "Recent", description: "Marine sediment control system installation.", image: float3, category: "Marine" },
  { id: 51, title: "Floating Silt Curtain", client: "Marina Management", year: "Recent", description: "Environmental protection for shoreline works.", image: float4, category: "Marine" },
  { id: 52, title: "Floating Silt Curtain", client: "Marina Management", year: "Recent", description: "Completed project commissioning and inspection.", image: float5, category: "Marine" },
  { id: 53, title: "Marine Utility Pedestals", client: "Marina Management", year: "Recent", description: "Electrical pedestal supply and installation.", image: pedestal1, category: "Marine" },
  { id: 54, title: "Marine Utility Pedestals", client: "Marina Management", year: "Recent", description: "Power distribution pedestal installation.", image: pedestal2, category: "Marine" },
  { id: 55, title: "Marine Utility Pedestals", client: "Marina Management", year: "Recent", description: "Commissioning of marine utilities at berth locations.", image: pedestal3, category: "Marine" },
  { id: 56, title: "Marine Utility Pedestals", client: "Marina Management", year: "Recent", description: "Final testing and handover of utility pedestals.", image: pedestal4, category: "Marine" },
  { id: 41, title: "SCDF Pontoon Installation", client: "SCDF", year: "Recent", description: "Installation and commissioning at West Coast Singapore.", image: scdf1, category: "Marine" },
  { id: 42, title: "SCDF Pontoon Installation", client: "SCDF", year: "Recent", description: "Structural marine pontoon assembly.", image: scdf2, category: "Marine" },
  { id: 43, title: "SCDF Pontoon Installation", client: "SCDF", year: "Recent", description: "Mooring system and equipment setup.", image: scdf3, category: "Marine" },
  { id: 44, title: "SCDF Pontoon Installation", client: "SCDF", year: "Recent", description: "Technical commissioning of pontoon systems.", image: scdf4, category: "Marine" },
  { id: 45, title: "SCDF Pontoon Installation", client: "SCDF", year: "Recent", description: "Final delivery at West Coast Singapore.", image: scdf5, category: "Marine" },
  { id: 57, title: "SCDF Pontoon Shipment", client: "SCDF", year: "Recent", description: "Ready and off for shipment. Large size pontoon.", image: scdfShipment1, category: "Marine" },
  { id: 63, title: "Aluminium Gangway Shipment", client: "SCDF", year: "Recent", description: "2.2m wide x 26m aluminium gangway shipment to SCDF West Coast Singapore.", image: gangwayScdf1, category: "Marine" },
  { id: 64, title: "Pontoon Casting", client: "Sarawak River Board", year: "Recent", description: "Pontoon casting for Sarawak river board, supply & install upon completion.", image: pontoonSarawak1, category: "Marine" },
  { id: 65, title: "Pontoon Casting", client: "Sarawak River Board", year: "Recent", description: "Pontoon casting for Sarawak river board, supply & install upon completion.", image: pontoonSarawak2, category: "Marine" },
  { id: 66, title: "Modular Floating Dock", client: "Pinang", year: "Recent", description: "Modular floating dock supply & installation at SG. Pinang.", image: modularDock1, category: "Marine" },
  { id: 67, title: "Modular Floating Dock", client: "Pinang", year: "Recent", description: "Modular floating dock supply & installation at SG. Pinang.", image: modularDock2, category: "Marine" },
  { id: 68, title: "Modular Floating Dock", client: "Pinang", year: "Recent", description: "Modular floating dock supply & installation at SG. Pinang.", image: modularDock3, category: "Marine" },
  { id: 58, title: "Fisherman Jetty Construction", client: "IJM Land", year: "Recent", description: "Construction of specialized fishing jetty infrastructure in Penang.", image: jetty1, category: "Marine" },

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
  { id: 31, title: "Tidal Gate Excavation", client: "Glenmarie Cove", year: "2024", description: "Trench excavation for waterways.", image: tgExca1, category: "Civil & Coastal" },
  { id: 69, title: "Coastal Reclamation", client: "Tumpat Supply Base", year: "Recent", description: "Coastal reclaim and protection at Tumpat Supply Base Kelantan.", image: coastalTumpat1, category: "Civil & Coastal" },
  { id: 70, title: "Coastal Reclamation", client: "Tumpat Supply Base", year: "Recent", description: "Coastal reclaim and protection at Tumpat Supply Base Kelantan.", image: coastalTumpat2, category: "Civil & Coastal" },
  { id: 71, title: "Coastal Reclamation", client: "Tumpat Supply Base", year: "Recent", description: "Coastal reclaim and protection at Tumpat Supply Base Kelantan.", image: coastalTumpat3, category: "Civil & Coastal" },
  { id: 72, title: "Slab Casting", client: "Tumpat Supply Base", year: "Recent", description: "Slab casting at Tumpat supply base. Kelantan.", image: slabTumpat1, category: "Civil & Coastal" },
  { id: 73, title: "Slab Casting", client: "Tumpat Supply Base", year: "Recent", description: "Slab casting at Tumpat supply base. Kelantan.", image: slabTumpat2, category: "Civil & Coastal" },
  { id: 74, title: "Slab Casting", client: "Tumpat Supply Base", year: "Recent", description: "Slab casting at Tumpat supply base. Kelantan.", image: slabTumpat3, category: "Civil & Coastal" },
  { id: 75, title: "Steel Structure Work", client: "Industrial Project", year: "Recent", description: "Steel structure fabrication and installation.", image: steelWork1, category: "Industrial" },
  { id: 76, title: "Steel Structure Work", client: "Industrial Project", year: "Recent", description: "Steel structure fabrication and installation.", image: steelWork2, category: "Industrial" },
  { id: 77, title: "Steel Structure Work", client: "Industrial Project", year: "Recent", description: "Steel structure fabrication and installation.", image: steelWork3, category: "Industrial" },
  { id: 78, title: "Steel Structure Work", client: "Industrial Project", year: "Recent", description: "Steel structure fabrication and installation.", image: steelWork4, category: "Industrial" },
  { id: 32, title: "Tidal Gate Excavation", client: "Glenmarie Cove", year: "2024", description: "Channeling and site preparation.", image: tgExca2, category: "Civil & Coastal" },
  { id: 33, title: "Tidal Gate Excavation", client: "Glenmarie Cove", year: "2024", description: "Earthworks for water flow control.", image: tgExca3, category: "Civil & Coastal" },
  { id: 34, title: "Tidal Gate Excavation", client: "Glenmarie Cove", year: "2024", description: "Deep trenching for gate infrastructure.", image: tgExca4, category: "Civil & Coastal" },
  { id: 35, title: "Tidal Gate Excavation", client: "Glenmarie Cove", year: "2024", description: "Waterway landscaping phase.", image: tgExca5, category: "Civil & Coastal" },
  { id: 36, title: "Tidal Gate Excavation", client: "Glenmarie Cove", year: "2024", description: "Final excavation clearance.", image: tgExca6, category: "Civil & Coastal" },
  { id: 59, title: "Trash Screen Installation", client: "Glenmarie Cove", year: "2024", description: "Debris screening installation for tidal gates.", image: trash1, category: "Civil & Coastal" },
  { id: 60, title: "Trash Screen Installation", client: "Glenmarie Cove", year: "2024", description: "Debris screening system setup.", image: trash2, category: "Civil & Coastal" },
  { id: 61, title: "Trash Screen Installation", client: "Glenmarie Cove", year: "2024", description: "Mechanical filtration unit assembly.", image: trash3, category: "Civil & Coastal" },
  { id: 62, title: "Trash Screen Installation", client: "Glenmarie Cove", year: "2024", description: "Completed trash screen project.", image: trash4, category: "Civil & Coastal" },

  // M&E WORKS
  { id: 38, title: "Electrical Works", client: "Industrial Project", year: "Recent", description: "System wiring and electrical installation phase 1.", image: elec1, category: "M&E Works" },
  { id: 39, title: "Electrical Works", client: "Industrial Project", year: "Recent", description: "Circuit testing and panel configuration.", image: elec2, category: "M&E Works" },
  { id: 40, title: "Electrical Works", client: "Industrial Project", year: "Recent", description: "Final electrical commissioning and safety check.", image: elec3, category: "M&E Works" },
];

const categories = ["All", "Automotive", "Marine", "Civil & Coastal", "Industrial", "M&E Works"];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects.filter((v, i, a) => a.findIndex(t => t.title === v.title) === i)
    : projects.filter((p) => p.category === activeCategory);

  const handleProjectClick = (category: string) => {
    if (activeCategory === "All") {
      setActiveCategory(category);
      window.scrollTo({ 
        top: document.getElementById("projects")?.offsetTop ? document.getElementById("projects")!.offsetTop - 100 : 0, 
        behavior: 'smooth' 
      });
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