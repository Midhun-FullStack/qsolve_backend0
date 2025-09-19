import { Link } from 'react-router-dom'

function Home() {
  const courses = [
    {
      id: 1,
      name: 'Mechanical Engineering',
      price: 'Rs. 148.00',
      bgColor: '#D9F0FF',
      buyNowColor: '#FF6B35',
      samplePagesBorder: '#d3d3d3',
    },
    {
      id: 2,
      name: 'Civil Engineering',
      price: 'Rs. 148.00',
      bgColor: '#FFF9E0',
      buyNowColor: '#4CAF50',
      samplePagesBorder: '#4CAF50',
    },
    {
      id: 3,
      name: 'Computer Science',
      price: 'Rs. 148.00',
      bgColor: '#FFE8EC',
      buyNowColor: '#3F51B5',
      samplePagesBorder: '#3F51B5',
    },
  ]

  return (
    <div className="d-flex flex-column" style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', padding: '20px' }}>
      <header className="d-flex justify-content-center mb-3 p-2 rounded" style={{ background: 'linear-gradient(90deg, #B2DFDB 0%, #FFCCBC 100%)', flexShrink: 0 }}>
        <div style={{ width: '120px', height: '120px', backgroundColor: '#e9ecef', borderRadius: '8px' }}>
          {/* Illustration placeholder */}
        </div>
      </header>
      <h2 className="text-center mb-3" style={{ color: '#000000', flexShrink: 0 }}>
        B.Tech Semester 4
      </h2>
      <div className="row g-3 flex-grow-1">
        {courses.map((course) => (
          <div key={course.id} className="col-12 col-md-4 " style={{height: '130px'}}>
            <div className="card shadow-sm h-100" style={{ backgroundColor: course.bgColor, border: 'none' }}>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title" style={{ color: '#000000' }}>
                  {course.name}
                </h5>
                <p className="card-text" style={{ color: '#000000' }}>
                  {course.price}
                </p>
                <div className="d-flex justify-content-between mt-auto">
                  <button className="btn" style={{ backgroundColor: '#FFFFFF', border: `1px solid ${course.samplePagesBorder}`, color: '#000000' }}>
                    Sample Pages
                  </button>
                  <button className="btn" style={{ backgroundColor: course.buyNowColor, color: '#FFFFFF', border: 'none' }}>
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-grid mt-4" style={{ flexShrink: 0 }}>
        <Link to="/department" className="btn btn-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #000000', color: '#000000' }}>
          View Syllabus
        </Link>
      </div>
    </div>
  )
}

export default Home
