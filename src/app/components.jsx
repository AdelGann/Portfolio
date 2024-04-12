import Cards from './manifest/card-projects-manifest';
import aboutMsg from './manifest/aboutMsg';
import badges from './badges/badges';
import icons from './manifest/icons';

function LandingPage() {
  return (
    <section className="px-4 sm:px-16 bg-[url('/bg.jpg')] bg-no-repeat bg-cover bg-center bg-fixed bg-blend-multiply bg-gray-700 w-full min-h-screen min-h-screen-100%">
      <div className='relative justify-center p-6'>
        <div className="mx-auto max-w-screen-xl text-center py-64 lg:py-56 2xl:py-72">
          <h1 className="text-3xl sm:text-7xl font-bold bg-gradient-to-r from-blue-600 via-red-500 to-indigo-500 bg-clip-text text-transparent">Adel Gannem</h1>
          <h2 className="text-xl sm:text-3xl text-gradient ">Full-Stack Developer</h2>
          <h2 className="text-lg sm:text-xl text-gray-300">Trainee</h2>
        </div>
        <div className='flex justify-center '>
          {badges.wakatime}
        </div>
        <div className='block justify-center lg:m-0'>
          <div className='flex justify-center p-3'>
            {badges.arch}
            {badges.vsc}
          </div>
        </div>
      </div>
    </section>

  );
}

function Card({ img, title, description, url }) {
  if (!url) {
    url = "#";
  }
  return (
    <div className="m-20 max-w-sm bg-white border border-gray-200 rounded-lg shadow text-black" name="Card">
      <a href={url}>
        <img className="w-50 h-50 rounded-t-lg" src={img} alt="" />
        <div className="p-10">
          <h5 className='mb-2 text-3xl font-bold tracking-tight '>{title}</h5>
          <p className="mb-3 text-lg font-normal text-gray-700 dark:text-gray-400">{description}</p>
        </div>
      </a>
    </div>
  );
}

function Projects() {
  return (
    <section id='Projects' className='block pt-6 p-5'>
      <div className=' p-5 bg-white shadow-md shadow-stone-600 rounded-md'>
      <h1 className='text-2xl font-sans text-black font-semibold'>Projects</h1>
      <div className='flex flex-wrap justify-center'>
        <Card img={Cards.CardSoon.img} title={Cards.CardSoon.title} description={Cards.CardSoon.description} />
        <Card img={Cards.Card1.img} title={Cards.Card1.title} description={Cards.Card1.description} url={Cards.Card1.url}/>
        <Card img={Cards.CardSoon.img} title={Cards.CardSoon.title} description={Cards.CardSoon.description} />
      </div>
      
        
      </div>
      <hr className='bg-black' />
    </section>
  )
}
function About() {
  return (
    <section id='About' className=" bg-center bg-white bg-fixed bg-blend-multiply w-full h-full py-24 lg:py-40">
      <div className='px-4 mx-auto max-w-screen-xl w-full h-full rounded-lg'>
        <div className="text-black bg-center shadow-lg rounded-lg shadow-stone-600 bg-fixed bg-blend-multiply max-w-screen-xl w-full h-full mx-auto  ">
          <h2 className='m-10 pt-10 text-4xl font-bold' style={{ fontFamily: 'Fira Code' }}>About me</h2>
          <p className='m-3 pb-10 text-lg font-sans font-light'>{aboutMsg}</p>
        </div>
      </div>
    </section>
  );
}
function Skills() {
  return (
    <section id='Skills'>
      <div className='bg-white text-black rounded-lg shadow-stone-600 shadow-lg p-4 h-full w-full'>
        <h1 className='text-2xl font-sans font-bold flex justify-center'>My Skills</h1>
        <div className='rounded-lg flex justify-center'>
          <h2 className='text-xl font-sans font-light p-4'>Languages</h2>
        </div>
        <div className='justify-evenly flex p-4'>
          {badges.HTML}
          {badges.CSS}
          {badges.Js}
        </div>
        <div className='justify-evenly flex p-4'>
          {badges.java}
          {badges.node}
          {badges.python}
        </div>
        <div className='rounded-lg flex justify-center'>
          <h2 className='text-xl font-sans font-light p-4'>Frameworks</h2>
        </div>
        <div className=' flex justify-evenly p-4'>
          {badges.htmx}
          {badges.Tailwind}
        </div>
        <div className='justify-evenly flex p-4'>
          {badges.Express}
          {badges.react}
          {badges.nextjs}
        </div>
        <div className='rounded-lg flex justify-center'>
          <h2 className='text-xl font-sans font-light p-4'>Database</h2>
        </div>
        <div className='justify-evenly flex p-4'>
          {badges.pg}
        </div>
      </div>
    </section>
  )
}
function Contact() {
  return (
    <section id='Contact' className='text-black flex justify-center p-6 bg-white'>
      <div className='rounded-lg shadow-lg shadow-stone-300'>
        <div className='grid justify-center p-4 '>
          <h1 className='text-2xl font-sans font-semibold flex justify-center'>Contact Me!</h1> <br />
          <p className='font-sans font-extralight'>I'm so excited for work for you! i'll do my best.</p>
        </div>

        <div className='flex justify-between'>
          <div className='block justify-center p-5'>
            <a href="mailto:imadelg14@gmail.com"><img src={icons.mail} alt="Gmail" className='p-4' /></a>
          </div>
          <div className='block justify-center p-5'>
            <a href="https://www.linkedin.com/in/adel-gannem/"><img src={icons.linkedin} alt="Linkedin" className='p-4' /></a>
          </div>
          <div className='block justify-center p-5'>
            <a href="https://github.com/AdelGann"><img src={icons.github} alt="Github" className='p-4' /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
function Footer() {
  return (

    <footer className=" w-full p-4 bg-white border-t border-gray-200 shadow flex items-center justify-center">
      <div className='block justify-center'>
          <h3 className='flex justify-center font-sans text-black text-lg font-light'>This webpage was developed with:</h3>
          <div className='flex justify-center p-4'>
            {badges.nextjs}
            {badges.react}
            {badges.Tailwind}
          </div>
      </div>
    </footer>


  )
}

function Body() {
  return (

    <section className="bg-gray-50 bg-center bg-fixed bg-blend-multiply w-full border border-black">
      <About />
      <div className='rounded-md'>
        <Projects />
      </div>
      <div className="px-4 mx-auto max-w-screen-xl py-24 lg:py-56 ">
        <Skills />
      </div>
      <div className='rounded-md'>
        <Contact />
      </div>
      <Footer />
    </section>
  );
}

// <Card img={Card1.img} title={Card1.title} description={Card1.description} />

//
export { LandingPage, Body }

