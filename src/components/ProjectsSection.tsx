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
  Github,
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
  github: string;
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
      title: "Corporate Website for Feed Manufacturing Company",
      shortDescription: "Full-Stack development",
      fullDescription:
        "Developed a modern corporate website for a feed manufacturing company specializing in aquaculture, farm animals, and pets. The project focuses on clear content structure, professional visual presentation, and user-friendly navigation to showcase the company’s products, news, and business activities.",
      cover: "/assets/apr.jpg",
      images: ["/assets/apr.jpg", "/assets/ap5.jpg"],
      tags: ["Full-Stack", "Frontend", "Backend", "Research", "Teamwork"],
      github: "https://github.com/LIL19-IT",
    },
    {
      id: 2,
      title: "Website for Beauty & Salon Equipment",
      shortDescription: "Full-Stack development",
      fullDescription:
        "Developed a modern e-commerce website for a beauty and salon equipment brand, focused on showcasing and selling professional furniture and accessories for salons, barbershops, manicure, pedicure, and massage services. The project emphasizes a clean and user-friendly interface, clear product presentation, and smooth navigation across categories. Special attention was given to visual hierarchy, responsive layout, and conversion-oriented UI elements such as product cards, call-to-action buttons, and promotional sections.",
      cover: "/assets/asu.jpg",
      images: ["/assets/as1.jpg", "/assets/as2.jpg", "/assets/as.jpg"],
      tags: ["Full-Stack", "React.js", "Node.js", "Teamwork", "E-commerce"],
      github: "https://github.com/LIL19-IT",
    },
    {
      id: 3,
      title: "Car Automotive Showcase Website",
      shortDescription: "UI/UX Design",
      fullDescription:
        "Developed a modern automotive showcase website focused on presenting featured cars with detailed visuals, pricing, and descriptions. The project emphasizes a dark, premium UI design to highlight luxury and performance vehicles while maintaining clear structure and smooth user experience. The website includes a featured cars section with interactive cards, visual focus on key models, and a dedicated “Get in Touch” section to encourage user engagement and communication. Special attention was given to visual hierarchy, responsiveness, and brand-oriented styling.",
      cover: "/assets/he1.jpg",
      images: ["/assets/he2.jpg", "/assets/he1.jpg"],
      tags: ["Frontend", "UI/UX"],
      github: "https://github.com/LIL19-IT",
    },
    {
      id: 4,
      title: "Flower Shop Website",
      shortDescription: "Full-Stack development",
      fullDescription:
        "Developed a modern and visually appealing e-commerce website for a flower shop, focused on showcasing fresh floral products and creating an emotional, user-friendly shopping experience. The design emphasizes soft colors, clean layouts, and strong visual hierarchy to highlight product collections and promotions. The website includes a featured products section with discounts, a visually engaging hero banner, an about section to communicate brand values, and clear calls-to-action to drive conversions.",
      cover: "/assets/fl2.jpg",
      images: ["/assets/fl1.jpg", "/assets/fl2.jpg", "/assets/fl.jpg"],
      tags: ["Frontend", "Backend", "Database"],
      github: "https://github.com/LIL19-IT",
    },
    {
      id: 5,
      title: "Food Categories Website",
      shortDescription: "Creative Cover & Visual Identity",
      fullDescription:
        "Developed a dynamic web application for browsing meals by categories, allowing users to explore food items such as desserts, beef, and chicken in an intuitive and visually engaging layout. The project focuses on category-based navigation, search functionality, and clear presentation of meal details. The application includes a category search feature, detailed food cards with images and descriptions, and smooth navigation between categories. Emphasis was placed on usability, responsive design, and clean UI to ensure a seamless user experience.",
      cover: "/assets/bs2.jpg",
      images: ["/assets/bs.jpg", "/assets/bs2.jpg"],
      tags: ["Frontend", "Backend"],
      github: "https://github.com/LIL19-IT",
    },
  ];

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

        {/* FIRST ROW */}
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

        {/* SECOND ROW */}
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

      <div className="relative h-[340px] overflow-hidden">
        <img
          src={project.cover}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* GITHUB */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/60 backdrop-blur hover:bg-primary transition"
        >
          <Github className="w-5 h-5 text-white" />
        </a>
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

/* ================= MODAL ================= */

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

        <p className="text-muted-foreground mb-10 max-w-3xl leading-relaxed">
          {project.fullDescription}
        </p>

        <div className="relative flex items-center justify-center">
          <button
            onClick={prev}
            className="absolute left-4 z-20 p-3 rounded-full bg-black/40 backdrop-blur"
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
                }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{
                  opacity: 0,
                  x: direction > 0 ? -140 : 140,
                  scale: 0.96,
                }}
                transition={{ duration: 0.6 }}
              />
            </AnimatePresence>
          </div>

          <button
            onClick={next}
            className="absolute right-4 z-20 p-3 rounded-full bg-black/40 backdrop-blur"
          >
            <ChevronRight />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
