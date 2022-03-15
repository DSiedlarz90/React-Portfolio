function Resume() {
    return(
        <div className="resume-container">
            <h1 className="resume-head">Resume</h1>
            <div className="resume-list">
                <ul className="list-items"> <u className="underline">Front end</u>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                </ul>
                <ul className="list-items"> <u className="underline">Back end</u>
                    <li>Node</li>
                    <li>Express</li>
                    <li>SQL</li>
                    <li>PWAs</li>
                    <li>NoSQL</li>
                </ul>
            </div>
            <a className="resume-link" href="resume/Resume.DOCX" download="David Siedlarz Resume">Click to download my resume</a>
        </div>
    )
}

export default Resume;