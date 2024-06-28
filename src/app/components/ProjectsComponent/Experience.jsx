import React from 'react'
import style from './Projects.module.css'
export const Experience = () => {
  return (
    <>
    <div className={style.Container}> {/* Added a container class */}
      <div className="content mx-auto flex justify-center text-center py-8 lg:py-10 2xl:py-24">
        <div className="bg-neutral-900 p-10 bg-opacity-40 rounded-xl shadow-xl backdrop-blur"> {/* Added bg-opacity-20 class */}
          <div className={`${style.contentInner} grid gap-10`} > {/* Added content-inner class */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold pb-4" style={{fontFamily: "Fira Code"}}>Experience</h2>
                <div>

                </div>
              </div>
                <hr />
              <div>
                <h2 className="text-xl sm:text-2xl font-bold pb-4" style={{fontFamily: "Fira Code"}}>Projects</h2>
                <div className='flex justify-center'>
                  <h3 className='text-sm sm:text-lg font-bold pb-4'>Soon...</h3>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
