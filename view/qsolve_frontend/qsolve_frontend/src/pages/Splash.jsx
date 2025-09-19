import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Splash() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/landing')
    }, 3000) // Redirect to landing after 3 seconds

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center" style={{ background: 'linear-gradient(180deg, #0D47A1 0%, #1976D2 100%)' }}>
      <div className="text-center text-white">
        <h1 className="display-4 fw-bold">Q Solve</h1>
        <p className="lead">Solved University Question Papers</p>
        <div className="spinner-border text-light mt-3" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  )
}

export default Splash
