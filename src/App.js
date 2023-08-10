import '../src/App.css'

import { Route, Routes } from 'react-router-dom'
import { Home } from './Components/Home'
import { EventList } from './Components/EventList'
import { Event } from './Components/Event'
import { About } from './Components/About'
import { Login } from './Components/Login'
import { NewEvent } from './Components/NewEvent'
import { NotFound } from './Components/NotFound'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'
import { Register } from './Components/Register'


function App() {
  return (
    <>
    <Header />

    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/events' element={<EventList />} />
      <Route path='/events/new' element={<NewEvent />} />
      <Route path='/events/:id' element={<Event />} /> 
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    
    <Footer />
    </>
   );
}

export default App;