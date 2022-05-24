import React from 'react'
import { Link ,useLocation} from 'react-router-dom'


export const Navbar = () => {
  let location=useLocation();
  
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/#">Polling Application</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/createUser"?"active":""} `} to="/createUser">Signin</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/login"?"active":""} `} to="/login">Login</Link>
        </li>
        
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/feed"?"active":""} `} to="/feed">Feed</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/createPoll"?"active":""} `} to="/createPoll">CreatePoll</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/logout"?"active":""} `} to="/logout">Logout</Link>
        </li>
        
        
        
      </ul>
      
    </div>
  </div>
</nav>
    
    </>
  )
}
