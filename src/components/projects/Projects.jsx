import React from 'react'
import "./projects.css"
import img from "../../assets/temp.jpg"

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className='container projects__container'>
        <article style={{backgroundColor: '#F3D250'}} className='projects__item'>
          <div className='projects__img'>
            <img src={img}/>
          </div>
          <h3>item 1</h3>
          <a href="" className='btn' target="_blank">Github</a>
        </article>
        <article style={{backgroundColor: '#90CCF4'}} className='projects__item'>
          <div className='projects__img'>
            <img src={img}/>
          </div>
          <h3>item 2</h3>
          <a href="" className='btn' target="_blank">Github</a>
        </article>
        <article style={{backgroundColor: '#F78888'}} className='projects__item'>
          <div className='projects__img'>
            <img src={img}/>
          </div>
          <h3>item 3</h3>
          <a href="" className='btn' target="_blank">Github</a>
        </article>
      </div>
    </section>
  )
}

export default Projects