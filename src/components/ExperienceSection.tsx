import {
  motion,
  useInView,
  type Variants,
} from "framer-motion";
import { useRef } from "react";
import { Calendar } from "lucide-react";

/* ================= ANIMATIONS ================= */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/* ================= COMPONENT ================= */

const CoursesSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const courses = [
    {
      id: 1,
      title: "Codritive",
      organization: "UX/UI Designer",
      period: "Aug 2025 – Present",
      logo: "/assets/codritive.jpg",
      description:
        "Joined the Codritive team as a UX/UI Designer, actively contributing to user-centered digital products. Collaborate with cross-functional teams to create intuitive, functional, and visually engaging interfaces aligned with business goals. ",
    },
    {
      id: 2,
      title: "Promark",
      organization: "Graphic Designer",
      period: "Dec 2024 – Aug 2025",
      logo: "/assets/PrpMark.jpg",
      description:
        "Worked as a Graphic Designer at ProMark, creating visually compelling marketing and branding materials. Collaborated with the team to develop consistent visual identities, deliver creative design solutions, and support promotional campaigns across digital and print platforms ",
    },
     {
      id: 3,
      title: "Business Development Group",
      organization: "Customer Support Specialist",
      period: "Jul 2023 – Oct 2024",
      logo: "/assets/bbdg.jpg",
      description:
        "Worked as a Customer Support Specialist, providing effective communication with clients, resolving inquiries, and ensuring a high level of customer satisfaction. Collaborated with internal teams to address user needs, improve service processes, and support overall business operations.",
    },
      ];

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-40 overflow-hidden"
    >
      {/* 🌌 BACKGROUND LIGHTS */}
      <motion.div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 140, 0], y: [0, -100, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[160px]"
        />
        <motion.div
          animate={{ x: [0, -160, 0], y: [0, 120, 0] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-cyan-500/10 rounded-full blur-[160px]"
        />
      </motion.div>

      <div className="section-container relative z-10">
        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center mb-28"
        >
          <span className="code-block mb-5 inline-block">
            {"// Amalya Karapetyan"}
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative max-w-5xl mx-auto">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          <div className="space-y-20">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className={`relative flex ${
                  index % 2 === 0
                    ? "justify-start"
                    : "justify-end"
                }`}
              >
                {/* TIMELINE DOT */}
                <div className="absolute left-1/2 -translate-x-1/2 top-10 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_rgba(168,85,247,0.8)] z-10" />

                {/* CARD */}
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="w-full md:w-[46%] glass-card rounded-3xl p-8 relative overflow-hidden"
                >
                  {/* Hover light */}
                  <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/15 to-transparent" />

                  {/* HEADER */}
                  <div className="flex items-center gap-4 mb-5">
                    {/* CIRCULAR LOGO */}
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-white/10 backdrop-blur ring-2 ring-primary/30 shadow-lg flex-shrink-0">
                      <img
                        src={course.logo}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold">
                        {course.title}
                      </h3>
                      <p className="text-primary text-sm font-medium">
                        {course.organization}
                      </p>
                    </div>
                  </div>

                  {/* META */}
                  <span className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4 text-primary" />
                    {course.period}
                  </span>

                  {/* DESCRIPTION */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {course.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
