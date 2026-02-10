import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Send,
  MapPin,
} from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [hoveredIndex, setHoveredIndex] = useState<
    number | null
  >(null);

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "nourelhodanasr188@gmail.com",
      link: "nourelhodanasr188@gmail.com",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+20 1113193068",
      link: "tel:+201113193068",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value:
        "https://www.linkedin.com/in/nour-el-hoda-nasr-16a1b0186/",
      link: "https://www.linkedin.com/in/nour-el-hoda-nasr-16a1b0186/",
      gradient: "from-blue-600 to-blue-400",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "https://github.com/nourelhoda95",
      link: "https://github.com/nourelhoda95",
      gradient: "from-gray-600 to-gray-400",
    },
  ];

  return (
    <section
      id="contact"
      className="py-32 px-6 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto relative z-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm text-purple-400 mb-4">
            Get In Touch
          </span>
          <h2
            className="text-5xl md:text-6xl mb-6"
            style={{ fontWeight: 700 }}
          >
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new projects, creative
            ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.link}
              target={
                method.link.startsWith("http")
                  ? "_blank"
                  : undefined
              }
              rel={
                method.link.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group relative block"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.4 + index * 0.1,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glow effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${method.gradient} rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500`}
              />

              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                <div className="flex items-start gap-6">
                  <motion.div
                    className={`p-4 bg-gradient-to-br ${method.gradient} rounded-xl shadow-lg`}
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                      rotate: hoveredIndex === index ? 5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <method.icon className="w-6 h-6" />
                  </motion.div>

                  <div className="flex-1">
                    <h3
                      className="text-xl mb-2"
                      style={{ fontWeight: 600 }}
                    >
                      {method.label}
                    </h3>
                    <p className="text-muted-foreground break-all">
                      {method.value}
                    </p>
                  </div>

                  <motion.div
                    animate={{
                      x: hoveredIndex === index ? 5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Send className="w-5 h-5 text-muted-foreground" />
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Card */}
        <motion.div
          className="relative max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-3xl blur-lg opacity-30" />

          <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-12 text-center">
            <motion.div
              className="inline-block p-4 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl mb-6"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <MapPin className="w-8 h-8 text-purple-400" />
            </motion.div>

            <h3
              className="text-3xl mb-4"
              style={{ fontWeight: 700 }}
            >
              Based in Egypt
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Available for remote opportunities worldwide
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">
                Full-time
              </span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">
                Part-time
              </span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">
                Contract
              </span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">
                Freelance
              </span>
            </div>
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.p
          className="text-center text-muted-foreground mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Looking forward to hearing from you! I typically
          respond within 24 hours.
        </motion.p>
      </motion.div>
    </section>
  );
}