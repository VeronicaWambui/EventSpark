
import {Link, Route, Routes } from 'react-router-dom'
import { Home } from './Components/Home'
import { EventList } from './Components/EventList'
import { Event } from './Components/Event'
import { About } from './Components/About'
import { Login } from './Components/Login'
import { NewEvent } from './Components/NewEvent'
import { NotFound } from './Components/NotFound'

function App() {
  return (
    <>
    <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/events">Events</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/login">Login</Link></li>
      
    </ul>

    </nav>
    


    <Routes>
      <Route path='/' element={<Home />}/>
    

      <Route path='/events' element={<EventList />} />
      <Route path='/events/new' element={<NewEvent />} />
      <Route path='/events/:id' element={<Event />} /> 

      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login />} />

      <Route path='*' element={<NotFound />} />

    </Routes>
    
    </>
   );
}

export default App;