'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Sun, Thermometer, Radio, Heart, ArrowRight, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: Sun,
    title: 'Inspecție Panouri Fotovoltaice',
    description: 'Audit termic rapid pentru detectarea defectelor și optimizarea randamentului.',
    features: ['Detectare celule defecte', 'Raport termic detaliat', 'Optimizare randament', 'Acoperire rapidă'],
    price: 'de la 500 RON / MW',
    image: '/images/solar-thermal.png',
    color: 'primary',
  },
  {
    icon: Thermometer,
    title: 'Termografie Industrială',
    description: 'Identificarea pierderilor de căldură și a defectelor electrice în hale și clădiri.',
    features: ['Detectare pierderi termice', 'Inspecții instalații electrice', 'Audit energetic', 'Rapoarte profesionale'],
    price: 'de la 450 RON / obiectiv',
    image: '/images/drone-matrice.webp',
    color: 'secondary',
  },
  {
    icon: Radio,
    title: 'Inspecții Infrastructură',
    description: 'Inspecții detaliate (GSM, linii electrice) cu zoom optic 16× și telemetru laser.',
    features: ['Zoom optic 16×', 'Telemetru laser integrat', 'Acces zone periculoase', 'Imagini de înaltă rezoluție'],
    price: 'de la 750 RON / pilon',
    image: '/images/drone-matrice.webp',
    color: 'accent',
  },
  {
    icon: Heart,
    title: 'Voluntariat & Colaborări ISU',
    description: 'Suport aerian cu termoviziune pentru misiuni de căutare-salvare și situații de urgență.',
    features: ['Operare 24/7', 'Camere termice FLIR', 'Transmisie live video', 'Coordonare echipe ISU'],
    price: null,
    image: '/images/search-rescue.webp',
    color: 'primary',
  },
]

const colorClasses = {
  primary: {
    icon: 'text-primary-400',
    iconBg: 'bg-primary-500/10',
    border: 'border-primary-500/20 hover:border-primary-500/40',
    glow: 'group-hover:shadow-primary-500/10',
  },
  accent: {
    icon: 'text-accent-400',
    iconBg: 'bg-accent-500/10',
    border: 'border-accent-500/20 hover:border-accent-500/40',
    glow: 'group-hover:shadow-accent-500/10',
  },
  secondary: {
    icon: 'text-secondary-400',
    iconBg: 'bg-secondary-500/10',
    border: 'border-secondary-500/20 hover:border-secondary-500/40',
    glow: 'group-hover:shadow-secondary-500/10',
  },
}

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />

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
            Serviciile Noastre
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Soluții Complete pentru{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
              Afacerea Ta
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Oferim servicii profesionale de drone adaptate nevoilor specifice ale fiecărui client,
            cu tehnologie de ultimă generație și operatori certificați.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const colors = colorClasses[service.color]
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative rounded-2xl bg-dark-800/50 backdrop-blur-sm border ${colors.border} transition-all duration-300 hover:bg-dark-800/80 ${colors.glow} hover:shadow-2xl overflow-hidden`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-dark-800/50 to-transparent" />

                  {/* Icon Badge */}
                  <div className={`absolute top-4 left-4 p-3 rounded-xl ${colors.iconBg} backdrop-blur-sm`}>
                    <service.icon className={`w-6 h-6 ${colors.icon}`} />
                  </div>

                  {/* Price Badge */}
                  {service.price ? (
                    <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-primary-500/90 backdrop-blur-sm">
                      <span className="text-sm font-semibold text-dark-900">{service.price}</span>
                    </div>
                  ) : (
                    <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-accent-500/90 backdrop-blur-sm">
                      <span className="text-sm font-semibold text-dark-900">Voluntariat</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-5 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className={`w-4 h-4 ${colors.icon} flex-shrink-0`} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-2 ${colors.icon} font-medium hover:gap-3 transition-all text-sm`}
                  >
                    Solicită ofertă <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Nu găsești serviciul de care ai nevoie?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-dark-800 hover:bg-dark-700 text-white font-semibold rounded-lg border border-gray-700 hover:border-primary-500/50 transition-all duration-300"
          >
            Contactează-ne pentru soluții personalizate
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
