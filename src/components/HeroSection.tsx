import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
        px-4
        pt-28
        lg:pt-32
      "
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--border) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border) / 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />

      <div className="section-container relative z-10 w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-24">

          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="code-block inline-block mb-4 text-sm">
              {"// Welcome"}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold mb-6">
              I&apos;m <span className="gradient-text">Lilit</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-3xl text-muted-foreground font-display mb-6">
              Full-Stack Developer
            </p>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Welcome to my portfolio.
              <br />
              I build modern, scalable, and user-focused web applications.
              <br />
              Always open to collaboration and meaningful opportunities.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="/LilitDrnoyan(2).pdf"
                download
                className="px-7 py-3 rounded-lg font-display font-semibold text-primary-foreground transition-all hover:scale-105 glow-effect"
                style={{ background: "var(--gradient-primary)" }}
              >
                Download CV
              </a>

              <a
                href="#contact"
                className="px-7 py-3 rounded-lg font-display font-semibold border border-border bg-secondary/50 hover:bg-secondary transition-all hover:scale-105"
              >
                Let&apos;s Connect
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center justify-center lg:justify-start gap-6 mt-8">
              <a href="https://github.com/LIL19-IT" target="_blank" rel="noreferrer">
                <Github className="w-6 h-6 hover:text-primary transition" />
              </a>
              <a
                href="https://www.linkedin.com/in/lilit-drnoyan-272a722b0/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="w-6 h-6 hover:text-primary transition" />
              </a>
              <a href="mailto:lilitdrnoyan30@gmail.com">
                <Mail className="w-6 h-6 hover:text-primary transition" />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 w-full flex items-center justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full max-w-md lg:max-w-lg">

              <div className="glass-card p-6 rounded-2xl font-mono text-sm sm:text-base leading-relaxed shadow-xl">
                <p>
                  <span className="text-primary">const</span>{" "}
                  <span className="text-accent">developer</span> = {"{"}
                </p>
                <p className="pl-4">
                  name: <span className="text-primary">"Lilit Drnoyan"</span>,
                </p>
                <p className="pl-4">
                  role: <span className="text-primary">"Full-Stack Developer"</span>,
                </p>
                <p className="pl-4">
                  stack: [
                  <span className="text-primary">"React"</span>,{" "}
                  <span className="text-primary">"Node.js"</span>,{" "}
                  <span className="text-primary">"TypeScript"</span>,{" "}
                  <span className="text-primary">"MySQL"</span>
                  ],
                </p>
                <p className="pl-4">
                  focus: <span className="text-primary">"Clean UI & Scalable APIs"</span>
                </p>
                <p>{"};"}</p>
              </div>

              <motion.div
                className="absolute -top-6 -left-6 glass-card px-4 py-2 rounded-lg text-sm font-semibold"
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
              >
                ⚛️ React
              </motion.div>

              <motion.div
                className="absolute -bottom-6 right-6 glass-card px-4 py-2 rounded-lg text-sm font-semibold"
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
              >
                🚀 Node.js
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8 glass-card px-4 py-2 rounded-lg text-sm font-semibold"
                animate={{ x: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 6 }}
              >
                💾 SQL
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground">
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
