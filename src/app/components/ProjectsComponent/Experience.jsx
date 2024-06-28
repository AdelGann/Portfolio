import React from 'react'
import style from './Projects.module.css'
import { CardExperience } from "./SubComponents/CardExperience"
export const Experience = () => {
  return (
    <>
    <div className={style.Container}> {/* Added a container class */}
      <div className="content mx-auto flex justify-center  py-8 lg:py-10 2xl:py-24">
        <div className="bg-neutral-900 p-10 bg-opacity-40 rounded-xl shadow-xl backdrop-blur"> {/* Added bg-opacity-20 class */}
          <div className={`${style.contentInner} grid gap-5`} > {/* Added content-inner class */}
              <div>
                <div className=''>
                  <h2 className="text-xl sm:text-2xl font-bold pb-4" style={{fontFamily: "Fira Code"}}>Experience</h2>
                </div>
                 {/* Have to do a component, it does work for both (experience and projects) */}
                <div className="flex flex-wrap gap-10 justify-center">
                {experiences.map((experience) => (
                  <CardExperience key={experience.companyName} experience={experience} />
                ))}
               </div>
              </div>
                <hr />
              <div>
                <h2 className="text-xl sm:text-2xl font-bold pb-4" style={{fontFamily: "Fira Code"}}>Projects</h2>
                <div className="flex flex-wrap gap-10">
                  {projects.map((project) => (
                    <CardExperience key={project.companyName} experience={project} />
                  ))}
               </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

const experiences = [
  {
    companyLogo: '/sempiternoProfile.jfif',
    companyName: 'Sempiterno Group',
    technologies: [
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    ],
    jobTitle: 'Frontend Developer - Internship contract',
    startDate: 'May 2024',
    endDate: 'June 2024',
  },
  {
    companyLogo: '/icons/soon.png',
    companyName: 'Upcoming Project', // Placeholder company name
    jobTitle: 'Coming Soon!', // Placeholder job title
    startDate: 'Coming Soon', // Placeholder start date
    endDate: 'Coming Soon', // Placeholder end date
  },
  // ... other experience objects
];

const projects = [
  {
    companyLogo: '/icons/soon.png',
    companyName: 'Upcoming Project', // Placeholder company name
    jobTitle: 'Coming Soon!', // Placeholder job title
    startDate: 'Coming Soon', // Placeholder start date
    endDate: 'Coming Soon', // Placeholder end date
  },
  // ... other experience objects
];
