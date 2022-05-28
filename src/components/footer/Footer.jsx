import React from 'react'
import "./footer.css"
import { AiFillGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>AADHI</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#courses'>Courses</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://github.com/aadhavanpl' target="_blank"><AiFillGithub /></a>
        <a href='https://www.linkedin.com/in/aadhavan-lenin/' target="_blank"><AiFillLinkedin /></a>
        <a href='https://www.instagram.com/aadhavan_lenin/' target="_blank"><AiFillInstagram /></a>
      </div>

      <div className='footer__copyright'>
        <small>Inspired by Egator Tutorials</small>
      </div>
    </footer>
  )
}

export default Footer