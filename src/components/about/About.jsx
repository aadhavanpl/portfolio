import React from 'react'
import "./about.css"
import timelineElements from "./timelineElements";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import {ReactComponent as WorkIcon} from "../../assets/clg.svg"
import {ReactComponent as SchoolIcon} from "../../assets/school.svg"
import ME from "../../assets/me.jpg"


function About() {
  let workIconStyles = {background: "#06D6A0"}
  let schoolIconStyles = {background: "#06D6A0"}
  return (
    <section id="about">
      <h2>About me</h2>
        <div className='container about__container'>
          <div className='about__me'>
            <img src={ME} />
          </div>
          <div className='about__card'>
            <p>I am a third year student persuing a bachelor's degree in Computer Science and Engineering at NIT, Calicut. </p>
          </div>
        </div>
        <VerticalTimeline>
          {
            timelineElements.map((element) => {
              let isWorkIcon = false
              if(element.icon==="work")
                isWorkIcon = true
              return (
                <VerticalTimelineElement 
                  key={element.key} 
                  date={element.date} 
                  dateClassName="date" 
                  iconStyle={workIconStyles}
                  icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}>
                  <div className='timeline_content'> 
                    <h3 className='vertical-timeline-element-title'>
                      {element.title}
                    </h3>
                    <h5 className='vertical-timeline-element-subtitle'>
                      {element.location}
                    </h5>
                    <p id="description">
                      {element.description}
                    </p>
                    </div>
                </VerticalTimelineElement>
              )
            })
          }
        </VerticalTimeline>
    </section>
  )
}

export default About