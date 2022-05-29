import React from 'react'
import "./about.css"
import timelineElements from "./timelineElements";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import {ReactComponent as WorkIcon} from "../../assets/clg.svg"
import {ReactComponent as schoolIcon} from "../../assets/school.svg"


function About() {
  let workIconStyles = {background: "#06D6A0"}
  let schoolIconStyles = {background: "3FC74F"}
  return (
    <section id="about">
      <h2>About me</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi culpa saepe officia enim, cupiditate harum odio hic ullam suscipit ipsa eum distinctio non odit quae a assumenda maiores doloribus libero!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo excepturi nulla, ducimus pariatur enim molestias in debitis culpa dolor impedit minima commodi perspiciatis laboriosam unde! Optio maxime id itaque. Esse!
      <VerticalTimeline>
        {
          timelineElements.map((element) => {
            let isWorkIcon = element.icon === "work";
            return (
              <VerticalTimelineElement key={element.key} date={element.date} dateClassName="date" iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}></VerticalTimelineElement>
            )
          })
        }
      </VerticalTimeline>
    </section>
  )
}

export default About