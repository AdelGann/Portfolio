import React from 'react'
import SkillBar from './SubComponents/SkillBar'
import style from "./Skills.module.css"

export const Skills = () => {
  return (
    <>
    <div className={style.skillsContainer}> {/* Added a container class */}
      <div className="content mx-auto flex justify-center text-center py-8 lg:py-10 2xl:py-24">
        <div className="bg-neutral-700 p-10 bg-opacity-20 rounded-xl shadow-xl backdrop-blur"> {/* Added bg-opacity-20 class */}
          <div className={`${style.contentInner} grid gap-10`} > {/* Added content-inner class */}
            <div className={`${style.skillsContent}`}>
              <h3 className="text-2xl sm:text-2xl font-bold pb-4" style={{fontFamily: "Fira Code"}}>Skills</h3>
              <hr />   
              <div className={style.skillContainer}>
                <div className='container mx-auto'>
                  <h2 className="text-xl sm:text-xl font-bold" style={{fontFamily: "Fira Code"}}>Frontend</h2>
                  {skillsFrontend.map((skill)=>(
                    <SkillBar key={skill.name} {...skill} />
                  ))}
                </div>
                <div className='container mx-auto'>
                  <h2 className="text-xl sm:text-xl font-bold" style={{fontFamily: "Fira Code"}}>Backend</h2>
                  {skillsBackend.map((skill)=>(
                    <SkillBar key={skill.name} {...skill} />
                  ))}
                </div>
              </div>
            </div>              
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

const skillsFrontend = [
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', name: 'React.Js', experience: 65 },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg', name: 'Vue.JS', experience: 55 },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', name: 'TypeScript', experience: 50 },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', name: 'JavaScript', experience: 65 },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', name: 'TailwindCSS', experience: 70 },
];
const skillsBackend = [
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', name: 'Java', experience: 45 },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', name: 'Python', experience: 55 },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg', name: 'NodeJs', experience: 57 },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg', name: 'PostgreSQL', experience: 50 },
];
