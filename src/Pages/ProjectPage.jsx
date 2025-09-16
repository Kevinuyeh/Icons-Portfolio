import React from 'react'
import Navbar from '../Components/Navbar'
import pro from '../Assets/vector.mp4'
import projectData from './Projectinput'
import { FaArrowRight } from 'react-icons/fa'
import Footer from '../Components/Footer'

function ProjectsPage() {
  return (
    <div className='w-full bg-black'>
      <Navbar />
      <h1 className="text-4xl md:text-6xl tracking-wider mx-auto text-center text-white mt-10">My Projects</h1>
      <div className="relative p-6">
        <div className="absolute bottom-0 left-0 w-full">
          <div className="h-0.5 bg-team w-12 mx-auto mb-1"></div> {/* Short line on top */}
          <div className="h-0.5 bg-team w-[200px] md:w-[400px] mx-auto mb-2"></div> {/* Long line in the middle */}
          <div className="h-0.5 bg-team w-12 mx-auto"></div> {/* Short line on bottom */}
        </div>
      </div>

      <div className="w-[300px] mx-auto mt-10">
        <video
          src={pro}
          autoPlay
          loop
          muted
          playsInline
          className="rounded-full"
        />
      </div>

      <div className='max-w-[1240px] mx-auto px-4 gap-10 grid md:grid-cols-2'>

        {projectData.map((project, id) => (
          <div key={id}>
            <div className='mt-10 bg-dark3 rounded-lg shadow-lg justify-center py-7 px-3 text-center mx-auto'>
              <img
                src={project.img}
                alt={project.name}
                className="w-[500px] mx-auto mb-3"
              />
              <p className='text-white'>{project.description}</p>
            </div>

            <h1 className="text-white font-medium text-3xl mt-3">{project.name}</h1>

            <a href={project.link} target='_blank' rel='noopener noreferrer'>
              {/* <h2 className="text-team text-bold tracking-wider text-xl flex items-center">
                View Project
                <FaArrowRight className="ml-2" />
              </h2> */}
              <div className="group flex items-center">
  <h2
    className="text-team font-bold tracking-wider text-xl flex items-center 
               transition-all duration-700 ease-in-out group-hover:tracking-[0.3em] group-hover:scale-105"
  >
    View Project
    <FaArrowRight className="ml-2 transition-transform duration-700 group-hover:translate-x-2" />
  </h2>
</div>

            </a>
          </div>

        ))}
      </div>
      <div className='mt-10'>
      <Footer/>
      </div>
    </div>
  )
}

export default ProjectsPage