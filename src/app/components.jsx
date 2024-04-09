import  Card1 from './manifest/card-projects-manifest';

function LandingPage(){
    return (
      <section className="px-4 sm:px-16 bg-[url('/bg.jpg')] bg-no-repeat bg-cover bg-center bg-fixed bg-blend-multiply bg-gray-700 w-full h-full">
        <div className="mx-auto max-w-screen-xl text-center py-12 lg:py-56">
          <h1 className="text-4xl sm:text-7xl font-bold bg-gradient-to-r from-blue-600 via-red-500 to-indigo-500 bg-clip-text text-transparent ">Adel Gannem</h1>
          <h2 className="text-xl sm:text-3xl text-gradient ">Full-Stack Developer</h2>
         </div>
         <nav className="flex justify-center bg-gray-900 bg-opacity-10 mx-auto rounded-3xl text-center py-8 ">
         <ul className="flex items-center justify-center space-x-20 sm:space-x-10 text-gray-500 text-xl sm:text-xl  font-semibold font-sans ">
            <li>
              <a href="/" className="hover:text-white" style={{fontFamily: 'Fira Code'}}>//About</a>
            </li>
            <li>
              <a href="/about" className="hover:text-white" style={{fontFamily: 'Fira Code'}}>||Projects</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white" style={{fontFamily: 'Fira Code'}}>||Skills</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white" style={{fontFamily: 'Fira Code'}}>\\Contact</a>
            </li>
          </ul>
         </nav>
        </section>

    );
  }

function Card({img ,title, description, url}) {
  if(!url){
    url = "#";
  }
  return (
    <div className="m-20 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 " name="Card">
      <a href={url}>
      <img className="w-50 h-50 rounded-t-lg" src={img} alt=""/>
      <div className="p-10">
      <h5 className='mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white'>{title}</h5>
      <p className="mb-3 text-lg font-normal text-gray-700 dark:text-gray-400">{description}</p>
      </div>
      </a>
    </div>
  );
}

function About(){
  return (
    <section className="bg-gradient-to-b from-gray-700 to-gray-900 bg-center bg-fixed bg-blend-multiply w-full h-full py-24 lg:py-40 ">
        <div className='px-4 mx-auto max-w-screen-xl w-full h-full '>
          <div className="bg-gray-800 bg-center rounded-lg shadow bg-fixed bg-blend-multiply max-w-screen-xl w-full h-full mx-auto  ">
          <h2 className='m-10 pt-10 text-6xl font-semibold' style={{fontFamily: 'Fira Code'}}>About me</h2>
          <p className='m-10 pb-10 text-2xl font-normal justify-center'>Hi! I’m a passionate fullstack developer with experience in web development and efficient systems. My skills span a range of technologies, and I'm ready to take your projects to the next level. I design attractive and responsive interfaces using HTML, CSS and Tailwind CSS. I build robust servers with Nodejs and Express, and I'm proficient in creating RESTful APIs. I also have experience with Python for data processing and automation, as well as Java for scalable solutions. I’ve worked on a data management system for an educational institution in the form of a web page.</p>
          </div>
        </div>
    </section>
  );
}


function Portfolio(){
    return (
        
        <section className="bg-gray-800 bg-center bg-fixed bg-blend-multiply w-full h-full">
        <About  />
        <div className="px-4 mx-auto max-w-screen-xl py-24 lg:py-56">
          
          <h2 className="m-10 text-4xl font-semibold text-center">Portfolio</h2>
          <Card img={Card1.img} title={Card1.title} description={Card1.description} />
        </div>
        </section>
    );
}




export {LandingPage,Portfolio}
    
