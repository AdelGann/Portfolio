import React from 'react';
import style from "./About.module.css"
export const About = () => {
  return (
    <>
      <div className={style.aboutContainer}> {/* Added a container class */}
        <div className="content mx-auto flex justify-center text-center py-8 lg:py-10 2xl:py-24">
          <div className="bg-neutral-500 p-10 bg-opacity-10 rounded-xl shadow-xl backdrop-blur"> {/* Added bg-opacity-20 class */}
            <div className={`${style.contentInner} grid gap-10 w-auto`} > {/* Added content-inner class */}
              <div>
                <div>
                  <h2 className="text-xl sm:text-3xl font-bold" style={{fontFamily: "Fira Code"}}>About Me</h2>
                </div>
                <div className="py-5 font-light text-white">
                  <p>Fullstack developer specialized in web development and efficient systems. My skills span a range of technologies: React, TypeScript and JavaScript.
                     Designing intuitive and functional interfaces, I’m ready to take your projects to the next level.</p>
                  <p className="pt-3">I build servers with Nodejs and Express, I am proficient in creating RESTful APIs. 
                    I have experience using Python for data processing and automation, also handling Java for scalable solutions.
                    My most recent project is a data management system for an educational institution and the creation of its website</p>
                </div>
                <hr />
                <div className={style.contentImage}>
                  <img src="/profile.jfif" alt="Adel Gannem Profile" className={style.Image}/>
                </div>
                <div className='inline-flex gap-2 pt-5 w-20 justify-center'>
                  <a href="https://www.linkedin.com/in/adel-gannem/" target='_blank'> 
                    <img src="/icons/linkedin.png" alt="LinkedIn logo" />
                  </a>
                  <a href="https://github.com/AdelGann" target='_blank'> 
                    <img src="/icons/github.png" alt="Github logo" />
                  </a>
                  <a href="mailto:imadelg14@gmail.com" target='_blank'> 
                    <img src="/icons/mail.png" alt="Mail Logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


