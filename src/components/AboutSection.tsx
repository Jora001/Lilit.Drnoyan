import { motion, useInView, cubicBezier } from "framer-motion";
import { useRef } from "react";
import { Code2, Cpu, Sparkles } from "lucide-react";

const easeInOut = cubicBezier(0.4, 0, 0.2, 1);

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const highlights = [
    {
      icon: Code2,
      label: "Continuous Self-Development",
      description:
        "Continuously improving development skills through learning, hands-on practice, and real-world projects.",
    },
    {
      icon: Cpu,
      label: "Team Collaboration",
      description:
        "Work effectively within teams, contributing ideas and collaborating closely to build meaningful user experiences.",
    },
  ];

  return (
    <section id="about" ref={ref} className="relative py-36 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -60, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 80, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-[460px] h-[460px] bg-accent/20 rounded-full blur-3xl"
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="section-container">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: easeInOut }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 code-block mb-4 opacity-80">
            <Sparkles size={16} /> {" Lilit Drnoyan"}
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A snapshot of my background, mindset, and technical focus
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: easeInOut }}
            whileHover={{ rotateY: 6, rotateX: -6 }}
            className="relative perspective-1000"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute -inset-4 rounded-2xl border border-primary/30 animate-pulse" />

              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: easeInOut }}
              >
                <img
                  src="/assets/ldr.jpg"
                  alt="Amalya Karapetyan"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </motion.div>

              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(56,189,248,0.3)",
                    "0 0 40px rgba(56,189,248,0.6)",
                    "0 0 20px rgba(56,189,248,0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 glass-card px-6 py-4 rounded-xl text-center"
              >
                <div className="text-3xl font-display font-bold gradient-text">
Full-Stack                </div>
                <div className="text-sm text-muted-foreground">
                  Developer
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: easeInOut }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
I am Lilit, a Full-Stack Developer dedicated to crafting efficient, scalable, and intuitive web applications.
I specialize in bridging front-end and back-end development to build seamless, user-focused digital experiences.
 </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
I enjoy solving complex problems, writing clean and maintainable code, and working with modern technologies to deliver reliable solutions.
I continuously develop my skills and strive to create applications that combine performance, usability, and long-term value for both users and businesses.
  </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + index * 0.15,
                    ease: easeInOut,
                  }}
                  whileHover={{
                    y: -6,
                    boxShadow: "0 20px 40px rgba(56,189,248,0.15)",
                  }}
                  className="glass-card p-6 rounded-xl border border-white/10 hover:border-primary/40 transition-all"
                >
                  <item.icon className="w-9 h-9 text-primary mb-3" />
                  <h3 className="font-display font-semibold mb-1">
                    {item.label}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
