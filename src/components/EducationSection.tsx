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
      ease: "easeOut",
    },
  },
};

/* ================= COMPONENT ================= */

const EducationSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const education = [
    {
      id: 0,
      degree: "42 Yerevan – International Programming School",
      school: "Advanced Software Engineering",
      location: "Yerevan, Armenia",
      period: "2025",
      description:
        "Participated in the intensive 42 Piscine program, working on both individual and team-based projects in a highly competitive, self-directed learning environment. Developed strong problem-solving skills, algorithmic thinking, and the ability to collaborate effectively under time pressure.",
      image: "/assets/qe.jpg",
      achievements: ["C Programming Language", "Algorithms", "Teamwork"],
    },
    {
      id: 1,
      degree: "Morpho Academy",
      school: "Full Stack Development Program",
      location: "Yerevan, Armenia",
      period: "2022 – 2023",
      description:
        "Completed a 12-month intensive Full Stack Development program, gaining strong practical experience in both frontend and backend development. Successfully passed the final examination with excellent results, demonstrating solid technical knowledge and problem-solving skills.",
      image: "/assets/university.jpg",
      achievements: ["Frontend Development", "Backend Development", "RESTful APIs & Client–Server Architecture"],
    },
    {
      id: 2,
      degree: "Armenian-Indian Center for Excellence in ICT (AITC)",
      school: "JavaScript Basics Online Training",
      location: "Yerevan, Armenia",
      period: "2025 – 2025",
      description:
        "Completed an 18-hour online training program covering the fundamentals of JavaScript programming. Gained hands-on experience with core language concepts and problem-solving through practical exercises.",
      image: "/assets/university2.jpg",
      achievements: ["JavaScript Syntax & Data Types", "Variables, Operators & Control Flow", "Functions & Scope"],
    },
    {
      id: 3,
      degree: "SoloLearn",
      school: "Introduction to JavaScript",
      location: "Yerevan, Armenia",
      period: "Apr – Jul 2025",
      description:
        "Successfully completed the Introduction to JavaScript course by demonstrating both theoretical and practical understanding of core JavaScript concepts through interactive lessons and exercises.",
      image: "/assets/bdg.jpg",
      achievements: [
        "JavaScript Fundamentals & Syntax",
        "Introductory Programming Logic",
        "Functions & Basic Problem Solving",
        "Conditional Statements & Loops",
      ],
    },
  ];

  return (
    <section id="education" ref={ref} className="relative py-40 overflow-hidden">
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
          <span className="code-block mb-5 inline-block">{"// Education"}</span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold">
            Academic <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        {/* EDUCATION TIMELINE */}
        <div className="space-y-20">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.15 }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-14 items-center`}
            >
              {/* IMAGE */}
              <motion.div whileHover={{ scale: 1.04 }} className="w-full lg:w-2/5 relative group">
                <div className="absolute -inset-3 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl bg-gradient-to-r from-primary/30 to-fuchsia-500/20 blur-2xl" />
                <div className="relative rounded-3xl overflow-hidden">
                  <img src={edu.image} alt={edu.school} className="w-full h-64 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                </div>
              </motion.div>

              {/* CONTENT */}
              <motion.div whileHover={{ y: -6 }} className="w-full lg:w-3/5 glass-card p-10 rounded-3xl relative overflow-hidden">
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

                <h3 className="text-2xl font-display font-bold mb-1">{edu.degree}</h3>
                <p className="text-lg text-primary mb-5">{edu.school}</p>

                <p className="text-muted-foreground mb-7">{edu.description}</p>

                <div className="flex flex-wrap gap-2">
                  {edu.achievements.map((item, i) => (
                    <span key={i} className="flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-secondary border border-border">
                      <Award className="w-3 h-3 text-primary" />
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
