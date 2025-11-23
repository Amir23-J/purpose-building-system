'use client';

import { motion } from 'framer-motion';
import {
  Building2,
  Home,
  Hammer,
  PencilRuler,
  Wrench,
  Sparkles,
  Shield,
  Clock,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: 'Commercial Construction',
      description:
        'From office buildings to retail spaces, we deliver projects that exceed expectations and drive business success.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Home,
      title: 'Residential Building',
      description:
        'Creating dream homes with attention to detail, quality materials, and designs that stand the test of time.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: PencilRuler,
      title: 'Design & Planning',
      description:
        'Expert architectural design and comprehensive planning services to bring your vision to life.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Hammer,
      title: 'Renovation & Remodeling',
      description:
        'Transform existing spaces with modern upgrades, structural improvements, and fresh designs.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Wrench,
      title: 'Project Management',
      description:
        'End-to-end project oversight ensuring timely delivery, budget compliance, and quality assurance.',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Sparkles,
      title: 'Custom Solutions',
      description:
        'Tailored building solutions designed specifically for your unique requirements and specifications.',
      color: 'from-pink-500 to-pink-600',
    },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: 'Premium materials and expert craftsmanship',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Projects completed within agreed timelines',
    },
    {
      icon: Sparkles,
      title: 'Modern Solutions',
      description: 'Latest technology and building techniques',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive building solutions tailored to meet your unique needs and
            exceed your expectations
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg card-hover cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <service.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Features Bar */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <feature.icon className="mx-auto mb-4" size={48} />
              <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
              <p className="text-white/90">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
