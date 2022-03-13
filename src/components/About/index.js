import portrait from '../../images/me.jpg';

function About() {
    return(
        <section className='about'>
            <h2 className='about-head'>About Me</h2>
            <div className='about-me'>
                <img className='img' alt='David adjusting a sound board before a show' src={portrait} />
            </div>
            <div className='about-body'>
            <p>Hey, Welcome to my portfolio! It was created using React!
                    I am currently enrolled in UNC Chapel Hills Full Stack Web Development
                    Coding Bootcamp, and I graduate at the end of this month! It's been a long exciting
                    Journey and I cannot wait to get started in my new career!<br></br>
                    <br></br>
                    Enough with the qualifications. A little about me. I play music, love some good gaming time,
                    and absolutely love my eight, yes you read right, eight animals. I live in Wilmington, NC,
                    moved here for the beach. Play disc golf whenever the weather allows, and used to have a 227 bowling average.
                    <br></br>
                    <br></br>
                    Please have a look around and I hope you like what you see! Thank you! 
                </p>
            </div>
        </section>
    )
}

export default About;