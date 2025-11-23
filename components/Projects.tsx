'use client';

import { motion } from 'framer-motion';
import { Building2, Home, Store, Factory } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      icon: Building2,
      title: 'Downtown Office Complex',
      category: 'Commercial',
      description:
        'A modern 12-story office building featuring sustainable design and smart building technology.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      stats: { size: '150,000 sq ft', duration: '18 months', year: '2023' },
    },
    {
      icon: Home,
      title: 'Luxury Residential Estate',
      category: 'Residential',
      description:
        'Custom-built estate homes with premium finishes and state-of-the-art amenities.',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
      stats: { size: '8,500 sq ft', duration: '14 months', year: '2023' },
    },
    {
      icon: Store,
      title: 'Retail Shopping Center',
      category: 'Commercial',
      description:
        'Multi-tenant retail space designed for maximum foot traffic and customer experience.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
      stats: { size: '75,000 sq ft', duration: '12 months', year: '2022' },
    },
    {
      icon: Factory,
      title: 'Industrial Warehouse',
      category: 'Industrial',
      description:
        'High-efficiency warehouse facility with advanced logistics and distribution capabilities.',
      image: 'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=800&q=80',
      stats: { size: '200,000 sq ft', duration: '16 months', year: '2022' },
    },
    {
      icon: Home,
      title: 'Modern Town Homes',
      category: 'Residential',
      description:
        'Contemporary townhome community blending urban convenience with suburban comfort.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      stats: { size: '45 Units', duration: '20 months', year: '2021' },
    },
    {
      icon: Building2,
      title: 'Tech Campus',
      category: 'Commercial',
      description:
        'Innovative workspace designed for collaboration, creativity, and cutting-edge technology.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      stats: { size: '250,000 sq ft', duration: '24 months', year: '2021' },
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successfully completed projects that showcase
            our expertise and commitment to excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center">
                    <project.icon className="text-primary-600" size={24} />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-4 py-1 bg-accent-500 text-white text-sm font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                  <div>
                    <div className="text-sm text-gray-500">Size</div>
                    <div className="font-semibold text-gray-800">
                      {project.stats.size}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Duration</div>
                    <div className="font-semibold text-gray-800">
                      {project.stats.duration}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Year</div>
                    <div className="font-semibold text-gray-800">
                      {project.stats.year}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to start your own success story?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Let&apos;s Build Together
          </a>
        </motion.div>
      </div>
    </section>
  );
}
