'use client'

import { motion } from 'framer-motion'
import { Award, Users, Target, Zap, Shield, Clock, CheckCircle, Drone } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Autorizații Complete',
    description: 'Operatori certificați AACR și asigurare profesională pentru orice tip de misiune.',
  },
  {
    icon: Zap,
    title: 'Tehnologie Avansată',
    description: 'Drone profesionale DJI, camere termice FLIR și software de procesare de ultimă generație.',
  },
  {
    icon: Clock,
    title: 'Răspuns Rapid',
    description: 'Disponibilitate 24/7 pentru urgențe și livrare rapidă a rapoartelor și materialelor.',
  },
  {
    icon: Target,
    title: 'Precizie Maximă',
    description: 'Echipamente RTK pentru acuratețe centimetrică în măsurători și cartografiere.',
  },
]

const stats = [
  { value: '5+', label: 'Ani Experiență' },
  { value: '500+', label: 'Proiecte Finalizate' },
  { value: '50+', label: 'Clienți Mulțumiți' },
  { value: '10k+', label: 'Ore de Zbor' },
]

const certifications = [
  'Autorizație AACR A1/A3',
  'Autorizație Operațiuni Speciale',
  'Certificare Termografie Nivel II',
  'Asigurare Profesională 1M EUR',
]

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Despre Noi
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Experți în{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
              Tehnologie Aeriană
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            DrOneNEST este lider în servicii profesionale de drone în România,
            oferind soluții inovatoare pentru industrie, construcții și situații de urgență.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square relative rounded-2xl overflow-hidden bg-gradient-to-br from-dark-800 to-dark-900 border border-gray-800">
              {/* Drone Illustration Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative"
                >
                  <Drone className="w-32 h-32 text-primary-400/50" />
                  <div className="absolute inset-0 bg-primary-400/20 blur-3xl" />
                </motion.div>
              </div>

              {/* Grid Overlay */}
              <div className="absolute inset-0 bg-grid opacity-20" />

              {/* Stats Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark-900 to-transparent">
                <div className="grid grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-2xl font-bold text-primary-400">{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="absolute -top-4 -right-4 px-4 py-2 bg-accent-500 text-dark-900 font-semibold text-sm rounded-full shadow-lg"
            >
              Certificat AACR
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              De Ce Să Alegi DrOneNEST?
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Suntem o echipă pasionată de tehnologie și aviație, dedicată să oferim
              cele mai bune servicii de drone din România. Combinăm experiența noastră
              în domeniu cu cele mai noi echipamente pentru a livra rezultate exceptionale.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl bg-dark-800/50 border border-gray-800"
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            Certificări & Autorizații
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 bg-dark-900/50 rounded-xl"
              >
                <CheckCircle className="w-5 h-5 text-accent-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
