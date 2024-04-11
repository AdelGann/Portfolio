function Navbar () {
    return(
    <header className='sticky top-0 z-[20] mx-auto flex w-full items-center justify-between'>
      <nav className="bg-gray-50 opacity-.5 p-5 flex justify-center w-full">
        <ul className="flex items-center justify-center space-x-20 sm:space-x-10 text-gray-500 text-xl sm:text-xl  font-semibold font-sans ">
          <li><a href="#About" className="hover:text-white" >//About</a></li>
          <li><a href="#Projects" className="hover:text-white" >||Projects</a></li>
          <li><a href="#Skills" className="hover:text-white" >||Skills</a></li>
          <li><a href="#Contact" className="hover:text-white">\\Contact</a></li>
          </ul>
      </nav>
      </header>
    )
  }

export default Navbar