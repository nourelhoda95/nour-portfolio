import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  Github,
  ExternalLink,
  Code2,
  Layout,
  Sparkles,
} from "lucide-react";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<
    number | null
  >(null);

  const projects = [
    {
      title: "To-Do List Application",
      description:
        "A feature-rich task management application built with React, featuring drag-and-drop functionality, local storage persistence, and a clean, intuitive interface.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Responsive Design",
        "Local Storage",
      ],
      features: [
        "Add, edit, and delete tasks",
        "Mark tasks as complete",
        "Filter and sort functionality",
        "Responsive design",
        "Data persistence",
      ],
      highlights: [
        "Clean component architecture",
        "Optimized performance",
        "Accessibility-focused",
        "Modern UI/UX",
      ],
      github: "https://github.com/nourelhoda95/to-do-list.git",
      demo: "https://nourelhoda95.github.io/to-do-list/",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Responsive Landing Page",
      description:
        "A modern, fully responsive landing page showcasing advanced CSS techniques, animations, and mobile-first design principles.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Responsive Design",
      ],
      features: [
        "Mobile-first approach",
        "Smooth scroll animations",
        "Interactive elements",
        "Cross-browser compatibility",
        "SEO optimized",
      ],
      highlights: [
        "Pixel-perfect design",
        "Fast loading times",
        "Modern CSS Grid/Flexbox",
        "Professional aesthetics",
      ],
      github: "https://github.com/nourelhoda95/landing-page.git",
      demo: "https://nourelhoda95.github.io/landing-page/",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce application with 9+ pages including admin dashboard, featuring comprehensive product management and user authentication.",
      technologies: [
        "HTML5",
        "TypeScript",
        "React",
        "vite",
        "Tailwind CSS",
        "material-ui",
        
        
      ],
      features: [
        "Mobile-first approach",
        "Smooth scroll animations",
        "Interactive elements",
        "Cross-browser compatibility",
        "SEO optimized",
        "Responsive design",
        "Data persistence",
        "AI integration",
      
      ],
      highlights: [
        "Pixel-perfect design",
        "Fast loading times",
        "Modern CSS Grid/Flexbox",
        "Professional aesthetics",
        "Modern UI/UX",
        "AI integration",
      ],
      github: "https://github.com/nourelhoda95/e-commerce-.git",
      demo: "https://e-commerce-one-snowy.vercel.app/",
      gradient: "from-blue-500 to-cyan-500",
    },
        {
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce application with 9+ pages including admin dashboard, featuring comprehensive product management and user authentication.",
      technologies: [
        "HTML5",
        "React",
        "vite",
        "Tailwind CSS",
        "material-ui",
        
        
      ],
      features: [
        "Mobile-first approach",
        "Smooth scroll animations",
        "Interactive elements",
        "Cross-browser compatibility",
        "SEO optimized",
        "Responsive design",
        "Data persistence",
      
      
      ],
      highlights: [
        "Pixel-perfect design",
        "Fast loading times",
        "Modern CSS Grid/Flexbox",
        "Professional aesthetics",
        "Modern UI/UX",
      
      ],
      github: "https://github.com/nourelhoda95/ecommerce-task.git",
      demo: "https://ecommerce-task-h5mf.vercel.app/",
      gradient: "from-blue-500 to-cyan-500",
    },
      {
      title: "NEXUSGAMES",
      description:
        "Game browsing interface clone featuring a modern UI, advanced filtering, and seamless game exploration experience..",
      technologies: [
        "HTML5",
        "TypeScript",
        "React",
        "vite",
        "Tailwind CSS",
        "material-ui",
        
        
      ],
      features: [
        "Mobile-first approach",
        "Smooth scroll animations",
        "Interactive elements",
        "Cross-browser compatibility",
        "SEO optimized",
        "Responsive design",
        "Data persistence",
        "AI integration",
      
      ],
      highlights: [
        "Pixel-perfect design",
        "Fast loading times",
        "Modern CSS Grid/Flexbox",
        "Professional aesthetics",
        "Modern UI/UX",
        "AI integration",
      ],
      github: "https://github.com/nourelhoda95/gaming-project-react.git",
      demo: "https://gaming-project-react-6q5x.vercel.app/",
      gradient: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <section
      id="projects"
      className="py-32 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" />

      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto relative z-10"
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
          <span className="inline-block px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 backdrop-blur-sm text-pink-400 mb-4">
            Featured Work
          </span>
          <h2
            className="text-5xl md:text-6xl mb-6"
            style={{ fontWeight: 700 }}
          >
            Projects & Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my development skills through
            real-world projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.4 + index * 0.2,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glow effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500`}
              />

              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden h-full flex flex-col">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />
                </div>

                <div className="relative z-10 flex-1 flex flex-col">
                  {/* Icon */}
                  <motion.div
                    className={`mb-6 p-4 bg-gradient-to-br ${project.gradient} bg-opacity-10 rounded-2xl inline-block`}
                    animate={{
                      rotate: hoveredIndex === index ? 360 : 0,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {index === 0 ? (
                      <Code2 className="w-8 h-8" />
                    ) : (
                      <Layout className="w-8 h-8" />
                    )}
                  </motion.div>

                  {/* Title and description */}
                  <h3
                    className="text-3xl mb-4"
                    style={{ fontWeight: 700 }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-6 p-6 bg-white/5 rounded-2xl border border-white/5">
                    <h4 className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-sm flex items-start gap-2"
                        >
                          <span className="text-pink-400 mt-1">
                            •
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-10 rounded-full text-xs`}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 mt-auto pt-6 border-t border-white/10">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 group/link"
                    >
                      <Github className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                      <span>View Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 group/link"
                    >
                      <ExternalLink className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More projects CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a
            href="https://github.com/nourelhoda95"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300 group"
          >
            <Github className="w-5 h-5" />
            <span>View More on GitHub</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}