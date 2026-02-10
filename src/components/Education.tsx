import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="education"
      className="py-32 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent pointer-events-none" />

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
            Education
          </span>
          <h2
            className="text-5xl md:text-6xl mb-6"
            style={{ fontWeight: 700 }}
          >
            Academic Background
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strong foundation in management information systems
            and business technology
          </p>
        </motion.div>

        <motion.div
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 hidden md:block" />

          <div className="relative">
            <div className="flex items-start gap-8 mb-8">
              {/* Timeline dot */}
              <motion.div
                className="hidden md:flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl shadow-2xl shadow-purple-500/50 flex-shrink-0"
                initial={{ scale: 0, rotate: -180 }}
                animate={
                  isInView ? { scale: 1, rotate: 0 } : {}
                }
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  type: "spring",
                }}
              >
                <GraduationCap className="w-8 h-8" />
              </motion.div>

              {/* Content card */}
              <motion.div
                className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3
                      className="text-3xl mb-2"
                      style={{ fontWeight: 700 }}
                    >
                      Helwan University
                    </h3>
                    <p className="text-xl text-purple-400">
                      Faculty of Commerce
                    </p>
                  </div>
                  <div className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 backdrop-blur-sm text-sm inline-block">
                    2013 - 2017
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-muted-foreground mb-1">
                        Major
                      </p>
                      <p className="text-lg">
                        Business Information Systems
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-muted-foreground mb-1">
                        GPA
                      </p>
                      <div className="flex items-center gap-3">
                        <p className="text-lg">3.37 / 4.0</p>
                        <div className="flex-1 max-w-xs h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                            initial={{ width: 0 }}
                            animate={
                              isInView ? { width: "92.5%" } : {}
                            }
                            transition={{
                              duration: 1.5,
                              delay: 1,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/5">
                  <p className="text-muted-foreground leading-relaxed">
                    Specialized in Management Information
                    Systems, combining business acumen with
                    technical expertise. Developed strong
                    analytical and problem-solving skills while
                    learning to bridge the gap between business
                    requirements and technological solutions.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Additional highlights */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {[
            { label: "Business & Tech", value: "Integration" },
            { label: "Problem Solving", value: "Skills" },
            { label: "Data Analysis", value: "Expertise" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl text-center hover:bg-white/10 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: 1.3 + index * 0.1,
              }}
            >
              <p
                className="text-3xl mb-2"
                style={{ fontWeight: 700 }}
              >
                {item.value}
              </p>
              <p className="text-muted-foreground">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}