"use client"

import React, {useState} from "react";
import { Main } from "../MainComponent/Main";
import { About } from "../aboutCoponent/About";
import { Skills } from "../Skills";
import style from "./Landing.module.css" 

function LandingPage() {
  const [steps, setSteps] = useState(1)
  return (
    <section className=" px-4 sm:px-16 bg-[url('/bg.jpg')] bg-no-repeat bg-cover bg-center bg-fixed bg-blend-multiply bg-gray-700 w-full min-h-screen min-h-screen-100%">
      <div className='relative justify-center p-4'>
        <div>
          <div className="flex justify-center pt-3">
            <div className={`${style.animatedContent} inline-flex gap-6 lg:gap-16 xl:gap-20 font-semibold text-gray-200`}>
              <button className="hover:opacity-80 hover:-translate-y-1" onClick={(e) => setSteps(1)}>Home</button>
              <button className="hover:opacity-80 hover:-translate-y-1" onClick={(e) => setSteps(2)}>About</button>
              <button className="hover:opacity-80 hover:-translate-y-1" onClick={(e) => setSteps(3)}>Skills</button>
              <button className="hover:opacity-80 hover:-translate-y-1" onClick={(e) => setSteps(4)}>Projects</button>
            </div>
          </div>
          {steps === 1 && <Main/>}
          {steps === 2 && <About/>}
          {steps === 3 && <Skills/>}
        </div> 
      </div>
      
    </section>

  );
}


export { LandingPage }

