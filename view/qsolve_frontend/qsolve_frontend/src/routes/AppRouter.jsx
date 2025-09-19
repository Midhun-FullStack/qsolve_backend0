import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Splash from '../pages/Splash'
import Landing from '../pages/Landing'
import Login from '../pages/Login'
import Registration from '../pages/Registration'
import Home from '../pages/Home'
import About from '../pages/About'
import DepartmentDashboard from '../pages/DepartmentDashboard'

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/department" element={<DepartmentDashboard />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
