import {Link } from 'react-router-dom'

export function Footer() {
    return  <>
   <footer className="footer">
       <article className="draw__logo">
            <span className="stroke stroke--one"></span>
            <span className="stroke stroke--two"></span>
            <span className="stroke stroke--three"></span>
        </article>
        <div className='footer__hero'>
                <Link className='footer__logo' to="/">EventSpark <span className='footer__reg'>&reg;</span></Link>

                {/* <address className="footer__address">
                    <a href=''>email</a>
                    <a href=''>Github</a>
                    <a href=''>LinkedIn</a>
                </address>
                <p className='footer__text'>Project by <strong>Veronica Wambui Wanjiku </strong>done in fulfilment of ALX - Software Engineering Programme.</p>
                 */}
        </div>
    <kbd className='footer__copyright'>&copy; 2023</kbd>
   </footer>
</>
   
}