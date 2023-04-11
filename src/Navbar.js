import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{display:'flex', backgroundColor:'gray', height:'100px',padding:'20px'}}>
        <Link to='/'>ContactUs</Link>
        <Link to='test'>Testing</Link>
    </nav>
  )
}

export default Navbar