import React from 'react'
import "./courses.css"
import { FcGoogle } from "react-icons/fc"
import { SiCoursera } from "react-icons/si"

const Courses = () => {
  return (
    <section id="courses">
      <h2>Courses | Certificates</h2>
      <div className='container courses__container'>
        <div className='courses__content'>
          <div className='courses__cards'>
            <article className='courses__card'>
              <FcGoogle className='courses__icon'/>
              <h5>Introduction to Google SEO</h5>
              <small>Google</small>
              <br />
              <small>May 2022</small>
            </article>
            <article className='courses__card'>
              <SiCoursera className='courses__icon'/>
              <h5>Object Oriented Data Structures in C++</h5>
              <small>University of Illinois | Coursera</small>
              <br />
              <small>May 2022</small>
            </article>
            <article className='courses__card'>
              <FcGoogle className='courses__icon'/>
              <h5>Technical Support Fundamentals</h5>
              <small>Google</small>
              <br />
              <small>May 2022</small>
            </article>
            <article className='courses__card'>
              <FcGoogle className='courses__icon'/>
              <h5>Crash Course on Python</h5>
              <small>Google</small>
              <br />
              <small>April 2022</small>
            </article>
            <article className='courses__card'>
              <SiCoursera className='courses__icon'/>
              <h5>HTML, CSS, and Javascript for Web Developers</h5>
              <small>Coursera</small>
              <br />
              <small>Dec 2021</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Courses