'use client';

import { motion } from 'framer-motion';
import { Award, Users, Target, TrendingUp } from 'lucide-react';

export default function About() {
  const achievements = [
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence in construction and design',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Highly skilled professionals with decades of experience',
    },
    {
      icon: Target,
      title: 'Client Focused',
      description: 'Your satisfaction is our top priority and measure of success',
    },
    {
      icon: TrendingUp,
      title: 'Proven Growth',
      description: 'Consistent track record of successful project delivery',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Building Excellence Since{' '}
              <span className="text-gradient">2009</span>
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                At Purpose Building Systems, we&apos;re more than just builders – we&apos;re
                partners in bringing your vision to life. With over 15 years of
                experience in the construction industry, we&apos;ve built a reputation
                for quality, reliability, and innovation.
              </p>
              <p>
                Our team of dedicated professionals combines traditional
                craftsmanship with cutting-edge technology to deliver projects that
                not only meet but exceed industry standards. From initial design to
                final walkthrough, we&apos;re committed to your complete satisfaction.
              </p>
              <p>
                We believe that every project tells a story, and we&apos;re honored to
                be part of yours. Whether it&apos;s a commercial development or your
                dream home, we approach each project with the same level of passion,
                precision, and purpose.
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">500+</div>
                <div className="text-gray-600">Projects</div>
              </div>
              <div className="w-px bg-gray-300"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-600">15+</div>
                <div className="text-gray-600">Years</div>
              </div>
              <div className="w-px bg-gray-300"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600">98%</div>
                <div className="text-gray-600">Satisfaction</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Achievements */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-4">
                  <achievement.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {achievement.title}
                </h3>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-12 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h3>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            To deliver exceptional construction services that transform communities,
            create lasting value, and build relationships founded on trust,
            integrity, and a shared commitment to excellence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
