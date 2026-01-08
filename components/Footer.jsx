'use client'

import { motion } from 'framer-motion'
import { Drone, Mail, Phone, MapPin, Facebook, Instagram, ArrowUp } from 'lucide-react'

const footerLinks = {
  servicii: [
    { name: 'Inspecție Panouri Fotovoltaice', href: '#services' },
    { name: 'Termografie Industrială', href: '#services' },
    { name: 'Inspecții Infrastructură', href: '#services' },
    { name: 'Voluntariat & Colaborări ISU', href: '#services' },
  ],
  companie: [
    { name: 'Despre Noi', href: '#about' },
    { name: 'Portofoliu', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
    { name: 'Carieră', href: '#' },
  ],
  legal: [
    { name: 'Termeni și Condiții', href: '#' },
    { name: 'Politica de Confidențialitate', href: '#' },
    { name: 'Politica Cookies', href: '#' },
  ],
}

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/DRONEST', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/DRONEST', label: 'Instagram' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-dark-900 border-t border-gray-800">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group mb-6">
              <div className="relative">
                <Drone className="w-8 h-8 text-primary-400" />
                <div className="absolute inset-0 bg-primary-400/30 blur-lg" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight">
                  <span className="text-white">Dron</span>
                  <span className="text-primary-400">est</span>
                </span>
                <span className="text-[10px] text-gray-500 tracking-[0.2em] uppercase">
                  Drone Profesionale
                </span>
              </div>
            </a>

            <p className="text-gray-400 mb-6 max-w-sm">
              Servicii profesionale de drone pentru inspecții industriale, cartografiere,
              termografie și operațiuni de căutare-salvare în România.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+40742123456" className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span>0742 123 456</span>
              </a>
              <a href="mailto:contact@dronenest.ro" className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span>contact@dronenest.ro</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>România</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-white font-semibold mb-4">Servicii</h3>
            <ul className="space-y-3">
              {footerLinks.servicii.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Companie</h3>
            <ul className="space-y-3">
              {footerLinks.companie.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Dronest. Toate drepturile rezervate.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:bg-dark-700 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors text-sm"
              whileHover={{ y: -2 }}
            >
              Înapoi sus
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
