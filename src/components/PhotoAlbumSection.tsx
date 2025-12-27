import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AUTO_INTERVAL = 4500;

const CertificationsCarousel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  const certs = [
    { id: 1, img: "/assets/Sert1.jpg", title: "Graphic Design Level UP" },
    { id: 2, img: "/assets/Sert00.jpg", title: "Certificate of Volunteering" },
    { id: 3, img: "/assets/Sert01.jpg", title: "Participation & Contribution Certificate" },
    { id: 4, img: "/assets/Sert2.jpg", title: "UI/UX Design Certificate" },
  ];

  const perPage = 2;
  const totalPages = Math.ceil(certs.length / perPage);
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const visible = certs.slice(page * perPage, page * perPage + perPage);

  const nextPage = () => {
    setDirection(1);
    setPage((p) => (p + 1) % totalPages);
  };
  const prevPage = () => {
    setDirection(-1);
    setPage((p) => (p - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(nextPage, AUTO_INTERVAL);
    return () => clearInterval(timer);
  }, [page, paused]);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0, scale: 0.95 }),
  };

  return (
    <section
      id="certifications"
      ref={ref}
      className="py-36 relative overflow-visible bg-gradient-to-b from-indigo-900/40 via-black/30 to-black/80"
    >
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-20"
        >
          <span className="code-block inline-block mb-4">{"// Certifications"}</span>
          <h2 className="text-4xl lg:text-6xl font-display font-bold">
            Verified <span className="gradient-text">Certificates</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative rounded-[3rem] overflow-hidden border border-white/20 bg-black/20 backdrop-blur-xl p-6 shadow-[0_0_100px_-10px_rgba(99,102,241,0.5)]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {visible.map((cert) => (
                  <motion.div
                    key={cert.id}
                    whileHover={{ scale: 1.06 }}
                    className="relative rounded-[2.5rem] overflow-hidden group shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_80px_rgba(255,255,255,0.35)] transition-shadow duration-500"
                  >
                    <img
                      src={cert.img}
                      alt={cert.title}
                      className="w-full h-[380px] object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-xl lg:text-2xl font-display font-semibold text-white drop-shadow-md">
                        {cert.title}
                      </p>
                      <p className="mt-1 text-sm text-white/60"> BDG Official Certification</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Buttons */}
            <button
              onClick={prevPage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-indigo-500/20 backdrop-blur-md hover:bg-indigo-500/40 hover:scale-110 transition flex items-center justify-center shadow-lg"
            >
              <ChevronLeft className="text-white w-6 h-6" />
            </button>

            <button
              onClick={nextPage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-indigo-500/20 backdrop-blur-md hover:bg-indigo-500/40 hover:scale-110 transition flex items-center justify-center shadow-lg"
            >
              <ChevronRight className="text-white w-6 h-6" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsCarousel;
