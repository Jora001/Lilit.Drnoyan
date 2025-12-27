import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Quote } from "lucide-react";

const AUTO_INTERVAL = 5000;

const RecommendationsSection = () => {
  const recommendations = [
     {
      text: "As the Graphic Design Level Up Course coach at BOG, I am writing to confirm that Amalya Karapetyan attended my course on 29/07/2024 - 25/10/2024 During the course, they demonstrated exceptional responsibility and outstanding results and graduated with a certificate of excellence. I assure thatAmalya Karapetyan has mastered the basic know ledge and skills of the profession and is ready to start their career in the field.",
      author: "Shushan Tonoyan",
      role: "Coach",
      company: "Business Development Group",
      avatar: "/assets/bbdg.jpg",
    },
    {
      text: "I am delighted to write a recommendation for our amazing UI/UX Designer, Amalya. Working with Amalya is truly productive. She is not only a talented UI/UX Designer but also highly dedicated, intelligent, and creative. Her approach to any project is always responsible and meticulous—she pays attention to every detail, achieving outstanding results. Beyond her professional qualities, she stands out for her human approach as well. She brings positive energy to the team, is easy to communicate with, and is always ready to provide support. Amalya is one of those professionals whose collaboration is not only effective but also enjoyable and inspiring.",
      author: "Jora Hovsepyan",
      role: "Software Engineer",
      company: "SynapTech Agency",
      avatar: "/assets/jor.jpg",
    },
   
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % recommendations.length);
    }, AUTO_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  const current = recommendations[index];

  return (
    <section
      id="recommendations"
      className="py-32 relative overflow-hidden"
    >
      <div className="section-container relative">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="code-block mb-4 inline-block">
            {"// Testimonials"}
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold">
            What People Say <span className="gradient-text">About Me</span>
          </h2>
        </motion.div>

        {/* Animated Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: 120, opacity: 0, scale: 0.95 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: -120, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="glass-card p-10 rounded-3xl relative max-w-3xl mx-auto"
          >
            <Quote className="w-12 h-12 text-primary/30 mb-6" />

            <p className="text-muted-foreground leading-relaxed italic mb-10">
              “{current.text}”
            </p>

            <div className="flex items-center gap-5">
              <img
                src={current.avatar}
                alt={current.author}
                className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/30"
              />
              <div>
                <h4 className="font-display font-semibold">
                  {current.author}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {current.role}
                </p>
                <p className="text-sm text-primary">
                  {current.company}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RecommendationsSection;
