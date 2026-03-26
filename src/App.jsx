import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { AuthContext } from './AuthContext.js'

function Counter() {
  const [count, setCount] = new useState(0)

  useEffect(() => {
    console.log("Counter Mounted")
    return () => {
      console.log("Counter Unmounted")
    }
  }, [])

  useEffect(() => {
    console.log("Counter Updated")
  }, [count])

  return <button onClick={() => setCount(count + 1)}>{count}</button>
}

function HomePage() {
  const [showCounter, setShowCounter] = new useState(false)
  return (
    <div>
      <button onClick={() => setShowCounter(!showCounter)}>Show counter</button>
      {showCounter && <Counter />}
    </div>
  )
}

function AboutPage() {
  const { user } = useContext(AuthContext)
  return (
    <div>
      <h1>About Page</h1>
      {user.isAuth ? (
        <p>Hello {user.name}</p>
      ) : (
        <p>Not logged in</p>
      )}
    </div>
  )
}

function LoginPage() {
  const [name, setName] = new useState("");
  const { user, login } = useContext(AuthContext)

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;
    login(name)
  }
  return (
    <div style={{ padding: '1rem' }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label style={{ marginRight: '5px' }}>
          Name
        </label>
        <input style={{ marginRight: '5px' }}
          type="text"
          placeholder='Your name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {user.isAuth && <p>Logged in successfully!</p>}
    </div>
  )
}

function Navbar() {
  const { user, logout } = useContext(AuthContext)
  return (
    <div style={{
      textDecoration: "none"
    }}>
      <nav style={{ display: "flex", gap: "1rem", margin: "1rem 1.5rem" }}>
        <Link to='/' style={{ textDecoration: 'none' }}>Home</Link>
        <Link to='/about' style={{ textDecoration: 'none' }}>About</Link>
        {!user.isAuth ? (
          <Link to='/login' style={{ textDecoration: 'none', marginLeft: 'auto' }}>Login</Link>
        ) : (
          <button onClick={logout} style={{ marginLeft: 'auto' }}>Logout</button>
        )}
      </nav>
      <hr style={{ borderWidth: '1.5px', color: 'purple' }} />
    </div >
  )
}

function App() {
  const [user, setUser] = new useState({ name: "", isAuth: false })

  function login(name) {
    setUser({ name: name, isAuth: true })
  }

  function logout() {
    setUser({ name: "", isAuth: false })
  }
  return (
    <div>
      <AuthContext.Provider value={{ user, login, logout }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </AuthContext.Provider>
    </div>
  )
}

export default App
