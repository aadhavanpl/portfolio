import React from 'react'
import "./nav.css"
import { AiFillHome } from "react-icons/ai"
import { RiUser3Fill } from "react-icons/ri"
import { RiTodoFill } from "react-icons/ri"
import { AiFillPhone } from "react-icons/ai"
import { GrCertificate } from "react-icons/gr"

const Nav = () => {
  return (
    <nav>
      <a href='#'><AiFillHome/></a>
      <a href='#about'><RiUser3Fill/></a>
      <a href='#projects'><RiTodoFill/></a>
      <a href='#courses'><GrCertificate/></a>
      <a href='#contact'><AiFillPhone/></a>
    </nav>
  )
}

export default Nav