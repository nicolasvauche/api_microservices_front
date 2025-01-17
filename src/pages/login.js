import { useState } from 'react'
import { useRouter } from 'next/router'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = async e => {
    e.preventDefault()

    // Exemple d'appel API pour l'authentification
    if (email === 'test@example.com' && password === 'password') {
      localStorage.setItem('token', 'dummy-token')
      router.push('/')
    } else {
      alert('Identifiants invalides')
    }
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Login</h1>
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
