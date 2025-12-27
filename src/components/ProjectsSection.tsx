import {
  motion,
  AnimatePresence,
  useInView,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* ================= TYPES ================= */

type Project = {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  cover: string;
  images: string[];
  tags: string[];
};

/* ================= MAIN SECTION ================= */

const ProjectsSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const [activeProject, setActiveProject] =
    useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "FlexPay – Payment App",
      shortDescription: "UX/UI Design Case Study",
      fullDescription:
        "FlexPay is a mobile financial app designed to simplify everyday payment experiences by combining intuitive usability with clean, modern visual design.\n\nIn this project, I focused on creating a user-centered interface that enables users to quickly and confidently manage their finances — from sending money and tracking transactions to reviewing payment history. Starting with UX research and user flow mapping, I identified key pain points users face in existing payment apps, such as unclear navigation, cluttered interfaces, and lack of visual clarity in transaction feedback.\n\nUsing these insights, I crafted clear user flows, low- and high-fidelity wireframes, and a polished UI. Emphasis was placed on smooth interactions, consistent visual language, and readability of financial data. The result is a cohesive design system with thoughtfully structured screens that guide users through essential tasks with minimal effort.",
      cover: "/assets/apr.jpg",
      images: [
        "/assets/apr.jpg",
        "/assets/s1.jpg",
        "/assets/s2.jpg",
        "/assets/s3.jpg",
        "/assets/s4.jpg",
        "/assets/ap2.jpg",
        "/assets/ap3.jpg",
        "/assets/a4.jpg",
      ],
      tags: [
        "UX Research",
        "User Flow",
        "Wireframing",
        "Prototyping",
        "UI Design",
      ],
    },
    {
      id: 2,
      title: "LUXOR | Branding",
      shortDescription: "Brand Identity Design",
      fullDescription:
        "LUXOR is a branding project focused on creating a strong, modern, and recognizable brand identity through a cohesive visual system. The goal of the project was to develop a brand that feels confident, elegant, and timeless while remaining adaptable across different platforms and use cases. \n\n The design process involved shaping the brand’s visual language from the ground up, including logo design, color palette, typography, and graphic elements. Special attention was given to consistency and balance, ensuring that every component works together to communicate the brand’s personality clearly and effectively.\n\nThis project demonstrates a strategic approach to branding, where visual aesthetics are aligned with brand values and market positioning. The resulting identity is flexible and scalable, suitable for both digital and physical applications such as marketing materials, packaging, and brand collateral.  \n\n LUXOR highlights skills in brand thinking, visual identity systems, and creating meaningful, memorable brand experiences.",
      cover: "/assets/erk1.jpg",
      images: [
        "/assets/Lux1.jpg",
        "/assets/Lux2.jpg",
                "/assets/Lux3.jpg",
        "/assets/Lux4.jpg",
        "/assets/Lux5.jpg",
        "/assets/Lux6.jpg",

      ],
      tags: ["Brand Identity Design", "Logo Design","Visual Identity Systems"],
    },
    {
      id: 3,
      title: "Motoshop Website",
      shortDescription: "UI/UX Design",
      fullDescription:
        "Motoshop Armenia — Website Design Project \n\nI collaborated with the Codritive team on the design and development of the Motoshop Armenia website.\n\nMy role in the project was UI/UX Designer. I focused on understanding the client’s business goals and user needs, conducting UX research, analyzing user behavior, and reviewing competitor solutions to create the most effective design possible.\n\nThroughout the design process, I prioritized: creating an intuitive and user-friendly experience delivering a clean, modern, and visually appealing interface aligning design decisions with business and conversion goals My objective was to deliver a high-quality, user-centered design that meets client expectations and adds real value to the product.",
      cover: "/assets/Mot.jpg",
      images: [
        "/assets/mot1.jpg",
        "/assets/mot2.jpg",
        "/assets/mot3.jpg",
        "/assets/mot4.jpg",
        "/assets/mot5.jpg",
        "/assets/mot6.jpg",
        "/assets/mot7.jpg",
        "/assets/mot8.jpg",
        "/assets/mot9.jpg",
        "/assets/mot10.jpg",
      ],
      tags: ["UI/UX Design", "Research","Layout & Grid Systems"],
    },
{
      id: 4,
      title: "BLOK BARBERSHOP",
      shortDescription: "BRANDING",
      fullDescription:
        "BLOK Barbershop Branding — Visual Identity & Brand Design \n\nBLOK Barbershop Branding is a comprehensive visual identity project created to define a strong, contemporary brand presence for a modern barbershop concept. This project focuses on translating the brand’s personality — bold, refined, and approachable — into a cohesive design language that resonates with both urban culture and professional craftsmanship.\n\nThe process began with research into competitive and cultural context to understand what makes a barbershop brand stand out. Based on this insight, a distinctive logo was developed that combines geometric structure with sharp, confident aesthetics, reflecting precision and style.\n\nThe branding system expands beyond the logo to include a consistent use of typography, color palette, and supporting graphic elements that reinforce the brand’s character across all touchpoints — from signage and business cards to packaging and digital assets.\n\nBy maintaining visual harmony and purposeful contrast, this branding enhances both the user’s perception and emotional connection to the brand. BLOK Barbershop Branding demonstrates a strategic approach to visual storytelling and identity design that is both memorable and adaptable to real-world applications.",
      cover: "/assets/Black.jpg",
      images: [
        "/assets/blo.jpg",
        "/assets/blo1.jpg",
        "/assets/blo2.jpg",
        "/assets/blo3.jpg",
        "/assets/blo4.jpg",
        "/assets/blo5.jpg",
       
      ],
      tags: ["Brand Identity Design", "Logo Design","Graphic Design"],
    },
{
      id: 5,
      title: "Book Cover Design",
      shortDescription: "Creative Cover & Visual Identity",
      fullDescription:
        "Book Cover Design Creative Cover & Visual Identity\n\n packaging and digital assets.\n\nThis Book Cover Design project explores visual storytelling through thoughtful typographic choices, imagery, and composition that encapsulate the essence of the book’s subject matter. The goal was to craft a cover that not only attracts attention but also conveys the tone, mood, and thematic elements of the content in a visually compelling way.\n\nThe process began with analyzing the book’s core message and target audience, identifying key visual metaphors, and developing creative concepts that reflect both the narrative and emotional context. Through iterative sketching and design refinement, a distinctive visual language was established using harmonious color palettes, balanced typography, and striking visual hierarchy.\n\nThe process began with analyzing the book’s core message and target audience, identifying key visual metaphors, and developing creative concepts that reflect both the narrative and emotional context. Through iterative sketching and design refinement, a distinctive visual language was established using harmonious color palettes, balanced typography, and striking visual hierarchy.",
      cover: "/assets/Book.jpg",
      images: [
        "/assets/b1.jpg",
        "/assets/b2.jpg",
        "/assets/b3.jpg",
        "/assets/b4.jpg",
        
       
      ],
      tags: ["Book Cover & Layout Design", "Typography","Visual Composition"],
    },
{
      id: 6,
      title: "Modern Simplicity",
      shortDescription: "Minimalist Design Exploration",
      fullDescription:
        "Modern Simplicity — Minimalist Design Exploration\n\nModern Simplicity is a creative design project rooted in the philosophy of minimalist aesthetics, where clarity and purpose drive every visual decision. This project focuses on stripping away the unnecessary to highlight essential elements, resulting in a visual language that is clean, balanced, and timeless.\n\nModern Simplicity is a creative design project rooted in the philosophy of minimalist aesthetics, where clarity and purpose drive every visual decision. This project focuses on stripping away the unnecessary to highlight essential elements, resulting in a visual language that is clean, balanced, and timeless.\n\nThe design process began with a deep understanding of the project’s intent — to communicate ideas without distraction. By carefully considering composition, whitespace, typography, and color, a cohesive style emerged that balances simplicity with distinctive personality. Each element was thoughtfully placed to create harmony and enhance visual clarity, ensuring that every design piece feels intentional and refined.\n\nThis work highlights the power of minimal design: how thoughtful use of space, structure, and subtle details can deliver impactful visual communication without visual clutter. Modern Simplicity showcases the ability to use simplicity not as a limitation but as a strength — creating designs that are elegant, functional, and memorable.",
      cover: "/assets/sun.jpg",
      images: [
        "/assets/sun0.jpg",
        "/assets/sun1.jpg",
        "/assets/sun2.jpg",
        "/assets/sun3.jpg",
                "/assets/sun4.jpg",

        
       
      ],
      tags: ["Minimalist Visual Design", "Typography ","Composition & Layout"],
    },


    {
      id: 7,
      title: "Ma Jolie” Gin Packaging Design",
      shortDescription: "Brand & Packaging Concept",
      fullDescription:
        "“Ma Jolie” Gin Packaging Design — Brand & Packaging Concept\n\n“Ma Jolie” Gin Packaging Design — Brand & Packaging Concept\n\n“Ma Jolie” Gin Packaging Design is a creative branding and packaging project developed to craft a striking and refined visual identity for a premium gin product. The concept focuses on designing a packaging system that reflects the sophistication and artisanal quality of the spirit while ensuring strong shelf presence and visual impact.\n\nThis project highlights skills in brand identity development, visual hierarchy, label design, and packaging execution — showcasing how design can elevate product perception and contribute to brand storytelling.",
      cover: "/assets/jol.jpg",
      images: [
        "/assets/jol1.jpg",
        "/assets/jol2.jpg",
        "/assets/jol3.jpg",
        "/assets/jol4.jpg",
                "/assets/jol5.jpg",
        "/assets/jol6.jpg",

        
       
      ],
      tags: ["Brand Identity Design", " Label Design","Product Visual Identity"],
    },


    {
      id: 8,
      title: "Poster Design",
      shortDescription: "Project Description (Professional, English)",
      fullDescription:
        "Poster Design — Project Description (Professional, English)\n\nThis Poster Design project explores the art of visual communication through striking, meaningful layout and graphic expression. Posters are a foundational graphic design medium that combines typography, imagery, color, and composition to deliver a clear message in a single glance, capturing attention and conveying ideas instantly.\n\nThis Poster Design project explores the art of visual communication through striking, meaningful layout and graphic expression. Posters are a foundational graphic design medium that combines typography, imagery, color, and composition to deliver a clear message in a single glance, capturing attention and conveying ideas instantly.\n\nIn this project, I focused on distilling complex information and creative concepts into bold visual elements, balancing hierarchy and whitespace to guide the viewer’s eye and enhance readability. The design process involved careful consideration of type scale, visual contrast, color harmony, and symbolic imagery to craft posters that are not only visually compelling but also conceptually strong.",
      cover: "/assets/pos.jpg",
      images: [
        "/assets/pos1.jpg",
        "/assets/pos2.jpg",
        "/assets/pos3.jpg",
        "/assets/pos4.jpg",
      

        
       
      ],
      tags: ["Graphic Design", "Visual Communication","Typography & Hierarchy"],
    },
  ];

  /* SPLIT PROJECTS */
  const featuredProjects = projects.slice(0, 2);
  const otherProjects = projects.slice(2);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-40 overflow-hidden"
    >
      <div className="section-container relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-28"
        >
          <span className="code-block mb-4 inline-block">
            {"// Projects"}
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold">
            Visual <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* FIRST ROW — 2 CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-28">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isInView={isInView}
              delay={index * 0.15}
              onOpen={() => setActiveProject(project)}
            />
          ))}
        </div>

        {/* SECOND ROW — 3 CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {otherProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isInView={isInView}
              delay={index * 0.1}
              onOpen={() => setActiveProject(project)}
            />
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;

/* ================= PROJECT CARD ================= */

const ProjectCard = ({
  project,
  onOpen,
  isInView,
  delay,
}: {
  project: Project;
  onOpen: () => void;
  isInView: boolean;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.7, delay }}
    whileHover={{ y: -10 }}
    onClick={onOpen}
    className="cursor-pointer group"
  >
    <div className="relative rounded-3xl overflow-hidden glass-card border border-border/40 group-hover:border-primary/60 transition-all">
      <div className="h-[340px] overflow-hidden">
        <img
          src={project.cover}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-8">
        <h3 className="font-display font-bold text-xl mb-3">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-5">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs bg-secondary border"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

/* ================= MODAL + AUTO CAROUSEL ================= */

const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % project.images.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [project.images.length]);

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDirection(1);
    setIndex((i) => (i + 1) % project.images.length);
  };

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDirection(-1);
    setIndex(
      (i) => (i - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.35 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-background rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto p-12"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-secondary hover:bg-primary/20 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-3xl font-display font-bold mb-6">
          {project.title}
        </h3>

        <p className="text-muted-foreground mb-10 max-w-3xl whitespace-pre-line leading-relaxed">
          {project.fullDescription}
        </p>

        {/* CAROUSEL */}
        <div className="relative flex items-center justify-center">
          <button
            onClick={prev}
            className="absolute left-4 z-20 p-3 rounded-full bg-black/40 backdrop-blur hover:scale-110 transition"
          >
            <ChevronLeft />
          </button>

          <div className="w-full max-w-4xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={project.images[index]}
                src={project.images[index]}
                className="w-full h-[480px] object-contain rounded-2xl bg-black/40"
                initial={{
                  opacity: 0,
                  x: direction > 0 ? 140 : -140,
                  scale: 0.96,
                  filter: "blur(6px)",
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  x: direction > 0 ? -140 : 140,
                  scale: 0.96,
                  filter: "blur(6px)",
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </div>

          <button
            onClick={next}
            className="absolute right-4 z-20 p-3 rounded-full bg-black/40 backdrop-blur hover:scale-110 transition"
          >
            <ChevronRight />
          </button>
        </div>

        {/* DOTS */}
        <div className="mt-6 flex justify-center gap-3">
          {project.images.map((_, i) => (
            <motion.span
              key={i}
              layout
              className={`h-2.5 rounded-full ${
                i === index ? "bg-primary w-8" : "bg-muted w-2.5"
              }`}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
