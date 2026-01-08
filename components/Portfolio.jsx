'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react'

const categories = ['Toate', 'Inspecții', 'Cartografiere', 'Termografie', 'Căutare-Salvare']

const projects = [
  {
    id: 1,
    title: 'Inspecție Parc Solar 50MW',
    category: 'Termografie',
    description: 'Inspecție termică completă pentru identificarea celulelor defecte și optimizarea producției.',
    image: '/portfolio/solar-inspection.jpg',
    stats: { area: '120 ha', duration: '2 zile', defects: '47 detectate' },
  },
  {
    id: 2,
    title: 'Cartografiere Șantier Rezidențial',
    category: 'Cartografiere',
    description: 'Model 3D și ortofotoplan pentru monitorizarea progresului construcției.',
    image: '/portfolio/construction-mapping.jpg',
    stats: { area: '15 ha', accuracy: '2 cm', updates: 'Lunar' },
  },
  {
    id: 3,
    title: 'Inspecție Pod Feroviar',
    category: 'Inspecții',
    description: 'Verificare structurală detaliată fără întreruperea traficului feroviar.',
    image: '/portfolio/bridge-inspection.jpg',
    stats: { length: '500m', images: '2,400+', report: '48h' },
  },
  {
    id: 4,
    title: 'Operațiune SAR Munții Făgăraș',
    category: 'Căutare-Salvare',
    description: 'Căutare persoane dispărute cu camere termice în condiții meteo dificile.',
    image: '/portfolio/search-rescue.jpg',
    stats: { area: '50 km²', time: '6h', success: 'Da' },
  },
  {
    id: 5,
    title: 'Inspecție Rețea Electrică',
    category: 'Inspecții',
    description: 'Verificare izolatori și stâlpi de înaltă tensiune pentru companie energetică.',
    image: '/portfolio/powerline-inspection.jpg',
    stats: { km: '120', poles: '340', defects: '23' },
  },
  {
    id: 6,
    title: 'Termografie Bloc Locuințe',
    category: 'Termografie',
    description: 'Audit energetic pentru identificarea pierderilor de căldură și izolație deficitară.',
    image: '/portfolio/building-thermal.jpg',
    stats: { floors: '12', issues: '15', savings: '30%' },
  },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Toate')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = activeCategory === 'Toate'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Portofoliu
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Proiecte{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
              Realizate
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explorează o selecție din proiectele noastre recente și descoperă
            cum putem transforma afacerea ta cu tehnologia dronelor.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-500 text-dark-900'
                  : 'bg-dark-800 text-gray-300 hover:bg-dark-700 hover:text-white border border-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative bg-dark-800/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-primary-500/30 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-dark-700 to-dark-800 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-dark-600/50 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                      <Play className="w-8 h-8 text-gray-500 group-hover:text-primary-400 transition-colors" />
                    </div>
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-xs font-medium text-primary-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-2 mb-2 group-hover:text-primary-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="flex gap-4 mt-4 pt-4 border-t border-gray-700/50">
                    {Object.entries(project.stats).slice(0, 3).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-sm font-semibold text-white">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors"
          >
            Solicită studii de caz detaliate
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/90 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-2xl w-full bg-dark-800 rounded-2xl overflow-hidden border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-dark-900/80 rounded-full text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image */}
              <div className="aspect-video bg-gradient-to-br from-dark-700 to-dark-900 flex items-center justify-center">
                <Play className="w-16 h-16 text-primary-400" />
              </div>

              {/* Content */}
              <div className="p-8">
                <span className="text-xs font-medium text-primary-400 uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-6">
                  {selectedProject.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 p-4 bg-dark-900/50 rounded-xl">
                  {Object.entries(selectedProject.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-xl font-bold text-primary-400">{value}</div>
                      <div className="text-sm text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-400 text-dark-900 font-semibold rounded-lg transition-colors"
                >
                  Solicită un proiect similar
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
