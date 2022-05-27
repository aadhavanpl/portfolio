import React from 'react'
import resume from "../../assets/resume.pdf"
import "./header.css"

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Aadhi</h1>
        <a href='#contact' className='btn'>Contact</a>
        <a href={resume} download className='btn'>Resume</a>
      </div>
    </header>
  )
}

export default Header