import { useLocation, Link } from 'react-router-dom'
import { useEffect } from 'react'
import useAppStore from '@/stores/main'

const NotFound = () => {
  const location = useLocation()
  const { language } = useAppStore()

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname)
  }, [location.pathname])

  const dict = {
    PT: { title: '404', desc: 'Ops! Página não encontrada', link: 'Voltar ao Início' },
    EN: { title: '404', desc: 'Oops! Page not found', link: 'Return to Home' },
    ES: { title: '404', desc: '¡Uy! Página no encontrada', link: 'Volver al Inicio' },
  }

  const content = dict[language] || dict.PT

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-primary">{content.title}</h1>
        <p className="text-xl text-muted-foreground mb-6">{content.desc}</p>
        <Link
          to="/"
          className="text-primary hover:text-primary/80 hover:underline transition-colors font-medium"
        >
          {content.link}
        </Link>
      </div>
    </div>
  )
}

export default NotFound
