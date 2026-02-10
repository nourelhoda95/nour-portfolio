import { motion } from "motion/react";
import { Heart, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 border-t border-white/10 overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.h3
              className="text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4"
              style={{ fontWeight: 700 }}
              whileHover={{ scale: 1.05 }}
            >
              Nour El Hoda Nasr
            </motion.h3>
            <p className="text-muted-foreground mb-4">
              Front-End React Developer crafting exceptional
              digital experiences.
            </p>
            <div className="flex gap-3">
              <motion.a
                href="https://github.com/nourelhoda95"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/nour-el-hoda-nasr-16a1b0186/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="nourelhodanasr188@gmail.com"
                className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-lg mb-4"
              style={{ fontWeight: 600 }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                "About",
                "Skills",
                "Education",
                "Projects",
                "Experience",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(
                        item.toLowerCase(),
                      );
                      element?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-lg mb-4"
              style={{ fontWeight: 600 }}
            >
              Get In Touch
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a
                  href="mailto:nourelhodanasr188@gmail.com"
                  className="hover:text-foreground transition-colors duration-300"
                >
                  nourelhodanasr188@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+201113193068"
                  className="hover:text-foreground transition-colors duration-300"
                >
                  +20 1113193068
                </a>
              </li>
              <li className="pt-2">
                <span className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm">
                  Available for opportunities
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            © {currentYear} Nour El Hoda Nasr. Made with{" "}
            <Heart className="w-4 h-4 text-red-400 fill-red-400 inline" />{" "}
            using React & TypeScript
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <span>All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}