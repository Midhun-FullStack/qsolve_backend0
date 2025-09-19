import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className="container text-center mt-5">
      <h1>Welcome to Q Solve</h1>
      <p>Your academic question solving platform</p>
      <div className="d-flex justify-content-center gap-3 mt-4">
        <Link to="/login" className="btn btn-primary">
          Login
        </Link>
        <Link to="/register" className="btn btn-secondary">
          Register
        </Link>
      </div>
    </div>
  )
}

export default Landing
