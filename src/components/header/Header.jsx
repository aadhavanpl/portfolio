import React from 'react'
import resume from "../../assets/resume.pdf"
import "./header.css"
// import me from "../../assets/me.png"
import { AiFillGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Aadhi</h1>

        <div className='cta'>
          <a href='#contact' className='btn'>Contact</a>
          <a href={resume} download className='btn'>Resume</a>
        </div>

        <div className='me'>
          {/* <img src={me}/> */}
        </div>
        <div className='socials'>
          <a href='https://github.com/aadhavanpl' target="_blank"><AiFillGithub /></a>
          <a href='https://www.linkedin.com/in/aadhavan-lenin/' target="_blank"><AiFillLinkedin /></a>
          <a href='https://www.instagram.com/aadhavan_lenin/' target="_blank"><AiFillInstagram /></a>
        </div>
      </div>
    </header>
  )
}

export default Header