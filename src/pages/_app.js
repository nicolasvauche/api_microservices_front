import Link from 'next/link'
import { useRouter } from 'next/router'
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
  return (
    <>
      <nav>
        <NavLink href='/'>Accueil</NavLink>
        <NavLink href='/login'>Connexion</NavLink>
      </nav>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
