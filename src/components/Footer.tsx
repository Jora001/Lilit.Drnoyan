import { motion } from 'framer-motion';
import { Linkedin, Mail, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/LIL19-IT", // 🔁 փոխիր քո GitHub link-ով
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/lilit-drnoyan-272a722b0/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:lilitdrnoyan30@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="py-12 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* LEFT */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="font-display font-bold text-xl inline-block mb-2"
            >
              <span className="gradient-text">&lt;Portfolio /&gt;</span>
            </a>
            <p className="text-sm text-muted-foreground">
              {currentYear} Portfolio Lilit Drnoyan — Full-Stack Developer
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* RIGHT */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} J.H. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
