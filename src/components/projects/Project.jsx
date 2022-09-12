import React from 'react'
import './project.css'
import { Link } from 'react-router-dom'
import { projects } from '../../constants/projects'

const Project = () => {
  return (
    <section className='projects section'>
      <div className='section-title'>
        <h2>projects</h2>
        <div className='underline'></div>
        <p className='projects-text'>
          Here are some of my recently built projects
        </p>
      </div>
      <div className='section-center project-center'>
        {projects.map((item) => {
          return (
            <Link to={item.url} className={item.class} key={item.id}>
              <article className='project'>
                <img
                  src={item.img}
                  alt='single project'
                  className='project-img'
                />
                <div className='project-info'>
                  <h4>{item.title}</h4>
                </div>
              </article>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Project
