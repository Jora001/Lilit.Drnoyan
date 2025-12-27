import {
  motion,
  useInView,
  type Variants,
} from "framer-motion";
import { useRef } from "react";
import {
  MapPin,
  Calendar,
  Award,
  BookOpen,
} from "lucide-react";

/* ================= ANIMATION VARIANTS ================= */

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut", // ✅ TS-safe
    },
  },
};

/* ================= COMPONENT ================= */

const EducationSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const education = [
    {
      id: 1,
      degree: "Yerevan State University",
      school: "Master of Pharmacy",
      location: "Yerevan, Armenia",
      period: "2023 – 2024",
      description:
        "Master’s degree focused on advanced pharmaceutical sciences, clinical pharmacy, and research methodologies, developing strong analytical thinking, scientific reasoning, and attention to detail.",
      image: "/assets/university.jpg",
      achievements: [
        "Clinical Pharmacy",
        "Pharmaceutical Technology",
      ],
    },
    {
      id: 2,
      degree: "Yerevan State University",
      school: "Bachelor of Pharmacy",
      location: "Yerevan, Armenia",
      period: "2019 – 2023",
      description:
        "Bachelor’s degree with a strong foundation in pharmaceutical sciences, chemistry, and healthcare practices, building problem-solving skills and a structured, detail-oriented approach to professional work.",
      image: "/assets/university2.jpg",
      achievements: [
        "Pharmaceutical Chemistry",
        "Pharmacology",
      ],
    },
    {
      id: 3,
      degree: "Business Development Group",
      school: "UX/UI Design",
      location: "Yerevan, Armenia",
      period: "Apr – Jul 2025",
      description:
        "Completed a hands-on UX/UI design program focused on creating user-centered digital experiences, covering the full design process from research and wireframing to high-fidelity UI design and prototyping.",
      image: "/assets/bdg.jpg",
      achievements: [
        "User Research & Personas",
        "Wireframing & Prototyping (Figma)",
        "UI Design Systems & Visual Design",
      ],
    },
  ];

  const courses = [
    {
      id: 1,
      title: "Graphic Design Level Up Course",
      organization: "Business Development Group",
      period: "Jul – Oct 2024",
      location: "Yerevan, Armenia",
      description:
        "Advanced course focused on visual communication, branding, and professional-level marketing design through hands-on projects.",
    },
    {
      id: 2,
      title: "Graphic Design",
      organization: "Business Development Group",
      period: "May – Jul 2024",
      location: "Yerevan, Armenia",
      description:
        "Foundational graphic design course covering typography, color theory, composition, and core design principles.",
    },
  ];

  return (
    <section
      id="education"
      ref={ref}
      className="relative py-40 overflow-hidden"
    >
      {/* 🌌 BACKGROUND LIGHT ORBS */}
      <motion.div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 120, 0], y: [0, -80, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-primary/20 rounded-full blur-[160px]"
        />
        <motion.div
          animate={{ x: [0, -140, 0], y: [0, 120, 0] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-fuchsia-500/10 rounded-full blur-[160px]"
        />
      </motion.div>

      {/* DOT PATTERN */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="section-container relative z-10">
        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center mb-28"
        >
          <span className="code-block mb-5 inline-block">
            {"// Education"}
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold">
            Academic <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        {/* EDUCATION TIMELINE */}
        <div className="space-y-20 mb-36">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.15 }}
              className={`flex flex-col ${
                index % 2 === 0
                  ? "lg:flex-row"
                  : "lg:flex-row-reverse"
              } gap-14 items-center`}
            >
              {/* IMAGE */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="w-full lg:w-2/5 relative group"
              >
                <div className="absolute -inset-3 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl bg-gradient-to-r from-primary/30 to-fuchsia-500/20 blur-2xl" />
                <div className="relative rounded-3xl overflow-hidden">
                  <img
                    src={edu.image}
                    alt={edu.school}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                </div>
              </motion.div>

              {/* CONTENT */}
              <motion.div
                whileHover={{ y: -6 }}
                className="w-full lg:w-3/5 glass-card p-10 rounded-3xl relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/10 to-transparent" />

                <div className="flex flex-wrap gap-5 mb-5 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent" />
                    {edu.location}
                  </span>
                </div>

                <h3 className="text-2xl font-display font-bold mb-1">
                  {edu.degree}
                </h3>
                <p className="text-lg text-primary mb-5">
                  {edu.school}
                </p>

                <p className="text-muted-foreground mb-7">
                  {edu.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {edu.achievements.map((item, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-secondary border border-border"
                    >
                      <Award className="w-3 h-3 text-primary" />
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* COURSES */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center mb-16"
        >
          <span className="code-block mb-4 inline-block">
            {"// Courses"}
          </span>
          <h3 className="text-3xl font-display font-bold">
            Additional <span className="gradient-text">Courses</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 max-w-5xl mx-auto">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="glass-card p-10 rounded-3xl relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/10 to-transparent" />

              <div className="flex flex-wrap gap-4 mb-5 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  {course.period}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  {course.location}
                </span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <BookOpen className="w-5 h-5 text-primary" />
                <h4 className="text-xl font-semibold">
                  {course.title}
                </h4>
              </div>

              <p className="text-sm text-primary mb-4">
                {course.organization}
              </p>

              <p className="text-muted-foreground">
                {course.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
