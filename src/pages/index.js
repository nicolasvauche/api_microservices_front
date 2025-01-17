import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  /* useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setIsAuthenticated(true)
    } else {
      router.push('/login')
    }
  }, [])

  if (!isAuthenticated) {
    return null
  } */

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Mes tâches</h1>
      <ul>
        <li>Tâche 1</li>
        <li>Tâche 2</li>
        <li>Tâche 3</li>
      </ul>
    </div>
  )
}

export default Home
