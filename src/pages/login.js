import axios from 'axios'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      router.push('/')
    }
  }, [])

  const handleLogin = async e => {
    e.preventDefault()

    try {
      const response = await axios.post('http://localhost:3001/auth/login', {
        email,
        password
      })

      const { token } = response.data
      localStorage.setItem('token', token)

      if (onLoginSuccess) {
        onLoginSuccess()
      }

      router.push('/')
    } catch (err) {
      console.error('Erreur lors de la requête :', err)
      if (err.response) {
        setError(err.response.data.message || 'Identifiants invalides')
      } else {
        setError('Erreur de connexion au serveur')
      }
    }
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label>Email :</label>
          <input
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password :</label>
          <input
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
