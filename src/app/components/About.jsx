import React from 'react';
import aboutMsg from '../manifest/aboutMsg';

export const About = () => {
  return (
    <>
      <div className="about-container"> {/* Added a container class */}
        <div className="content mx-auto flex justify-center text-center py-56 lg:py-28 2xl:py-72">
          <div className="bg-neutral-800 p-5 bg-opacity-30 rounded-xl shadow-xl shadow-neutral-900"> {/* Added bg-opacity-20 class */}
            <div className="content-inner grid gap-10" > {/* Added content-inner class */}
              <div>
                <div>
                  <h2 className="text-xl sm:text-3xl font-bold" style={{fontFamily: "Fira Code"}}>About Me</h2>
                </div>
                <div>
                  <p className="pt-5 font-light text-white">{aboutMsg}</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-3xl font-bold " style={{fontFamily: "Fira Code"}}>Contact Me</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


