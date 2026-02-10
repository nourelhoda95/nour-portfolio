import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Lightbulb, Rocket, Target } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Analytical thinking and innovative solutions',
    },
    {
      icon: Rocket,
      title: 'Self-Learning',
      description: 'Continuously exploring new technologies',
    },
    {
      icon: Target,
      title: 'Real Value',
      description: 'Building applications that make a difference',
    },
  ];

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
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
            About Me
          </span>
          <h2 className="text-5xl md:text-6xl mb-6" style={{ fontWeight: 700 }}>
            Building Digital Experiences
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Front-End React Developer with a strong foundation in creating 
            responsive, user-friendly web applications. I specialize in React, TypeScript, 
            and modern web technologies, with a focus on clean code and exceptional user experiences.
          </p>
        </motion.div>

        <motion.div
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 mb-12 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            My journey in web development is driven by a passion for problem-solving and 
            creating real value through technology. I believe in writing code that not only 
            works but is also maintainable, scalable, and elegant.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With a strong commitment to self-learning and staying current with industry trends, 
            I continuously expand my skill set to deliver cutting-edge solutions that exceed 
            expectations. I thrive in collaborative environments and enjoy bringing innovative 
            ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
            >
              <div className="mb-4 p-3 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl inline-block group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl mb-2" style={{ fontWeight: 600 }}>
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
