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
                  <p>Desarrollador Fullstack con experiencia en desarrollo web y sistemas eficientes. Mis habilidades abarcan una gama de tecnologías, y estoy listo para llevar sus proyectos al siguiente nivel. 
                    Diseño interfaces atractivas y receptivas, trabajo con tecnologías como React, TypeScript y JavaScript.</p>
                  <p className="pt-3">Construyo servidores robustos con Nodejs y Express, y soy competente en la creación de API RESTful. También tengo experiencia con Python para procesamiento de datos y automatización, así como Java para soluciones escalables. 
                    Mi proyecto mas destacado es un sistema de gestión de datos para una institución educativa en forma de página web.</p>
                </div>
                <hr />
                <div className={style.contentImage}>
                  <img src="/profile.jfif" alt="Adel Gannem Profile" className={style.Image}/>
                </div>
                <div className='inline-flex gap-2 pt-3 w-7 justify-center'>
                  <img src="/icons/linkedin.png" alt="LinkedIn logo" />
                  <img src="/icons/github.png" alt="Github logo" />
                  <img src="/icons/mail.png" alt="Mail Logo" />
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


