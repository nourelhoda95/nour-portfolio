import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, Code2 } from 'lucide-react';

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="experience" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />
      
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
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm text-blue-400 mb-4">
            Experience
          </span>
          <h2 className="text-5xl md:text-6xl mb-6" style={{ fontWeight: 700 }}>
            Training & Work Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional development through intensive training programs
          </p>
        </motion.div>

        <motion.div
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block" />

          <div className="relative">
            <div className="flex items-start gap-8">
              {/* Timeline dot */}
              <motion.div
                className="hidden md:flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl shadow-2xl shadow-blue-500/50 flex-shrink-0"
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
              >
                <Briefcase className="w-8 h-8" />
              </motion.div>

              {/* Content card */}
              <motion.div
                className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-3xl mb-2" style={{ fontWeight: 700 }}>
                      Front-End Developer Trainee
                    </h3>
                    <p className="text-xl text-blue-400 mb-2">
                      Software Engineer Training
                    </p>
                  </div>
                  <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 backdrop-blur-sm text-sm inline-block">
                    Sep 2024 - Feb 2025
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-muted-foreground mb-1">Duration</p>
                      <p className="text-lg">6 Months Intensive Training</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Code2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-muted-foreground mb-1">Focus Area</p>
                      <p className="text-lg">Modern Front-End Development</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white/5 rounded-2xl border border-white/5 mb-6">
                  <h4 className="text-lg mb-4" style={{ fontWeight: 600 }}>
                    Training Highlights
                  </h4>
                  <ul className="space-y-3">
                    {[
                      'Advanced React development and modern hooks',
                      'TypeScript for type-safe applications',
                      'State management with Redux Toolkit',
                      'Building responsive, accessible interfaces',
                      'RESTful API integration and data fetching',
                      'Git workflow and version control',
                      'Performance optimization techniques',
                      'Code review and best practices',
                    ].map((item) => (
                      <motion.li
                        key={item}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 1 }}
                      >
                        <span className="text-blue-400 mt-1">•</span>
                        <span className="text-muted-foreground">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
                    <p className="text-2xl mb-1" style={{ fontWeight: 700 }}>
                      10+
                    </p>
                    <p className="text-sm text-muted-foreground">Projects Completed</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
                    <p className="text-2xl mb-1" style={{ fontWeight: 700 }}>
                      500+
                    </p>
                    <p className="text-sm text-muted-foreground">Hours of Training</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Key learnings */}
        <motion.div
          className="mt-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Technical Skills',
                description: 'Mastered modern development tools and frameworks',
              },
              {
                title: 'Problem Solving',
                description: 'Enhanced debugging and analytical capabilities',
              },
              {
                title: 'Team Collaboration',
                description: 'Worked effectively in agile development teams',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl text-center hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
              >
                <h4 className="text-xl mb-2" style={{ fontWeight: 600 }}>
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
