import {Link } from 'react-router-dom'

export function Header() {
    return  <>
    {/* Header */}

   <header className='navbar'>

    {/* Logo */}

      <div className='navbar__identity'>

      <li className='navbar__logo'>
           <article className="header__logo">
              <span className='stick stick--one'></span>
              <span className='stick stick--two'></span>
              <span className='stick stick--three'></span>
            </article>
        <Link className='logo' to="/"><kbd>EventSpark <span className='logo__reg'>&reg;</span></kbd>
        </Link>
        </li>

      </div>
    {/* Navbar */}
    <nav className='navbar__menu'>
      <li className='navbar__link'><Link className='link' to="/events">Events</Link></li>
      <li className='navbar__link'><Link className='link' to="/about">About</Link></li>
      <li className='navbar__link'><Link className='link  link--org' to="/events/new">Organize an event.</Link> </li>
      <li className='navbar__link'><Link  className='link link' to="/login">Login</Link></li> 
    </nav>
  </header>
</>
   
}