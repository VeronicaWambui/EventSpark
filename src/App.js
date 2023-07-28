// import { Helmet } from 'react-helmet';
import './App.css';
import React, {useState, useEffect} from 'react'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const eventFetch =async () => {
      const data = await (
        await fetch("https://eventspark-api-service.onrender.com/api/v1/event")
      ).json()

      setData(data)
      console.log(data)
    }

    eventFetch()
  }, [])

  return (
      <div className="App">
      <kbd className='App_title'>EventSpark</kbd>
    
      <div className='meta'>
        <kbd>&copy; 2023</kbd>
        <br />
        <kbd>Preliminary application deployment.</kbd>
        <br />
        <kbd>ALX software engineering programme.</kbd>
        <br />
        <kbd>Veronica Wambui Wanjiku.</kbd>
      </div>
    </div>
  );
}

export default App;
