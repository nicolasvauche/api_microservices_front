import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import '../styles/globals.css'

function NavLink ({ href, children }) {
  const router = useRouter()
  const isActive = router.pathname === href

  return (
    <Link href={href} className={isActive ? 'active' : ''}>
      {children}
    </Link>
  )
}

function MyApp ({ Component, pageProps }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsAuthenticated(!!token)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsAuthenticated(false)
    router.push('/login')
  }

  const handleLoginSuccess = () => {
    setIsAuthenticated(true)
  }

  return (
    <>
      <nav>
        <NavLink href='/'>Accueil</NavLink>
        {!isAuthenticated && <NavLink href='/login'>Connexion</NavLink>}
        {isAuthenticated && (
          <a href='#' onClick={handleLogout}>
            Déconnexion
          </a>
        )}
      </nav>
      <Component {...pageProps} onLoginSuccess={handleLoginSuccess} />
    </>
  )
}

export default MyApp
