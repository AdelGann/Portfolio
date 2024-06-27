import React from "react";
import badges from "../../badges/badges";
import style from "./Main.module.css"
export const Main = ( ) => {
    return (
        <>
        <div className={style.contentAnimated}> 
            <div className="mx-auto max-w-screen-xl text-center py-56 lg:py-48 2xl:py-72">
                <h1 className="text-3xl sm:text-7xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">Adel Gannem</h1>
                <h2 className="text-xl sm:text-3xl  ">Full-Stack Developer Junior</h2>
                <h3 className="text-xl sm:text-lg  ">React.js  ||  Vue.js</h3>   
            </div>
        </div>
        <div className={style.badgesAnimated}>
            <div className='flex justify-center'>
                {badges.wakatime}
            </div>
            <div className='block justify-center lg:m-0'>
                <div className='flex justify-center p-3'>
                    {badges.arch}
                    {badges.vsc}
                </div>
            </div>
        </div>
        
        </>
    )
}