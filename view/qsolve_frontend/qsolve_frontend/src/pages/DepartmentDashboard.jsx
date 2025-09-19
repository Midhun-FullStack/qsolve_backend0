import { useState, useEffect } from 'react'

function DepartmentDashboard() {
  const [departments, setDepartments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // TODO: Fetch departments from API
    // For now, using mock data
    setTimeout(() => {
      setDepartments([
        { id: 1, name: 'Computer Science', subjects: 5 },
        { id: 2, name: 'Mathematics', subjects: 3 },
        { id: 3, name: 'Physics', subjects: 4 },
      ])
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="container mt-5">
      <h1>Department Dashboard</h1>
      <div className="row">
        {departments.map((dept) => (
          <div key={dept.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{dept.name}</h5>
                <p className="card-text">Subjects: {dept.subjects}</p>
                <button className="btn btn-primary">View Subjects</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DepartmentDashboard
