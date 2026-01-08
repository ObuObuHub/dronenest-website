import './globals.css'

export const metadata = {
  title: 'DrOneNEST - Servicii Profesionale de Drone',
  description: 'Servicii profesionale de drone pentru inspecții panouri fotovoltaice, termografie industrială, inspecții infrastructură și colaborări ISU în România.',
  keywords: 'servicii drone, inspecție drone, termografie, panouri fotovoltaice, infrastructură, căutare salvare, România',
  openGraph: {
    title: 'DrOneNEST - Servicii Profesionale de Drone',
    description: 'Servicii profesionale de drone pentru inspecții, termografie și colaborări ISU în România.',
    url: 'https://dronenest.ro',
    siteName: 'DrOneNEST',
    locale: 'ro_RO',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body className="bg-dark-950 text-white antialiased">
        {children}
      </body>
    </html>
  )
}
