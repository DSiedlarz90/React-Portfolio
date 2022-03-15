import gitlogo from '../../images/github1.png';
import linkedlogo from '../../images/linkedin.jpg';
import stacklogo from '../../images/stackoverflow.png';

function Footer() {

    return(
        <div className="footer-container">
        <h1 className="footer">Created with React by David Siedlarz</h1>
        <a href="https://github.com/DSiedlarz90" target="_blank" rel='noreferrer'>
        <img 
            src= {gitlogo}
            alt="github logo"
            className="logo" />
        </a>

        <a href="https://www.linkedin.com/in/david-siedlarz-6b8a15165/" target="_blank" rel='noreferrer'>
        <img 
            src= {linkedlogo}
            alt="linkedin logo"
            className="logo" />
        </a>

        <a href="https://stackoverflow.com/users/18474879/dsiedlarz90" target="_blank" rel='noreferrer'>
        <img 
            src= {stacklogo}
            alt="stackoverflow logo"
            className="logo" />
        </a>

        </div>
    )
}

export default Footer