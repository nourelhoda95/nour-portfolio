import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
      ],
    },
    {
      title: 'Technologies',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Bootstrap', level: 90 },
      ],
    },
    {
      title: 'State Management',
      skills: [
        { name: 'Redux Toolkit', level: 85 },
        { name: 'Context API', level: 90 },
        { name: 'Zustand', level: 80 },
      ],
    },
    {
      title: 'Frameworks & Tools',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'RESTful APIs', level: 85 },
        { name: 'Responsive Design', level: 95 },
        { name: 'Performance Optimization', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />
      
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
            Skills & Expertise
          </span>
          <h2 className="text-5xl md:text-6xl mb-6" style={{ fontWeight: 700 }}>
            Technical Proficiency
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set built through continuous learning and real-world projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl mb-6 text-blue-400" style={{ fontWeight: 600 }}>
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1.5,
                          delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills badges */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {[
            'Responsive Design',
            'UI/UX Best Practices',
            'Performance Optimization',
            'Clean Code',
            'Agile Methodology',
            'Problem Solving',
            'Team Collaboration',
            'Continuous Learning',
          ].map((badge, index) => (
            <motion.span
              key={badge}
              className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm hover:bg-white/10 hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.3 + index * 0.05 }}
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
