import cryptoquotes from '../../images/cryptoquotes.jpg'
import personalityTest from '../../images/personalityTest.jpg'
const Portfolio = () => {

     return (
        <section className="project-container">
        <div>
            <h3 className="project-head">Current Work</h3>
        </div>
        <div className="work">
        <article>
            <div>
                <p className="link-head">CryptoQuotes</p>
                <p className="link-desc">HTML/CSS/JS/API's/TailwindCSS</p>
            </div>
            <a href="https://krissmith7.github.io/cryptoquotes/">
            <img className="projectimg" src={cryptoquotes} alt="homepage of cryptoquotes web app"/>
            </a>
        </article>
        <article>
            <div>
                <p className="link-head">Personality Test</p>
                <p className="link-desc">Node/Javascript/Express/Mysql2</p>
            </div>
            <a href="https://hidden-plains-33333.herokuapp.com/">
            <img className="projectimg" src={personalityTest} alt="Screenshot of a test question"/>
            </a>
        </article>
        </div>
        </section>
        );
    };
    

export default Portfolio;