import logo from './logos.png';

import linkedin from './social/linkedin.png';
import instagram from './social/instagram.png';
import fackbook from './social/fackbook.png';
import gmail from './social/gmail.png';
import youtube from './social/youtube.png';

function Contact() {
    return (
    <div>
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to garuda!!
        </p>
        <a
          className="App-link"
          href="https://garuda.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          garuda.in
        </a>
        
      </header>
      <div>
        <p>Contact us on </p>
        <a hidden className='social-item'
          href="https://in.linkedin.com/in/garuda-pvt-limited-59b5772bb"
          target="_blank"
          rel="noopener noreferrer">
          <img src={linkedin}   className="social-item-img" height="50px" alt="logo" />
        </a>
        <a className='social-item'
          href="https://www.instagram.com/garuda_official"
          target="_blank"
          rel="noopener noreferrer">
          <img src={instagram}  className="social-item-img" height="50px" alt="logo" />
        </a>
        <a className='social-item'
          href="https://www.facebook.com/garuda"
          target="_blank"
          rel="noopener noreferrer">
          <img src={fackbook}   className="social-item-img" height="50px" alt="logo" />
        </a>
        <a className='social-item'
          href="mailto:garuda.official@gmail.com"
          target="_blank"
          rel="noopener noreferrer">
          <img src={gmail}   className="social-item-img" height="50px" alt="logo" />
        </a>
        <a className='social-item'
          href="https://youtube.com/@garuda_official?si=rqDB3RV2ku5Omfuj"
          target="_blank"
          rel="noopener noreferrer">
          <img src={youtube}  className="social-item-img"  height="50px" alt="logo" />
        </a>
      </div>
    </div>);
}


export default Contact;