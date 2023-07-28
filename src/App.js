// import { Helmet } from 'react-helmet';
import './App.css';
import FetchData from './FetchData';


function App() {
  return (
      <div className="App">
      <kbd className='App_title'>EventSpark</kbd>

      <FetchData />
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
