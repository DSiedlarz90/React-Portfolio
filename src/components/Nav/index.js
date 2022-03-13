function Nav({currentPage, handlePageChange}) {
    return(
        <header className= "header">
            <h1 className="heading">David Siedlarz</h1>
                <nav>
                    <ul className="nav">
                        <li>
                            <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-item-active' : 'nav-item'}>About Me</a>
                        </li>
                        <li>
                            <a href="#projects" onClick={() => handlePageChange('Projects')} className={currentPage === 'Projects' ? 'nav-item-active' : 'nav-item'}>Projects</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-item-active' : 'nav-item'}>Contact</a>
                        </li>
                        <li>
                            <a href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-item-active' : 'nav-item'}>Resume</a>
                        </li>
                    </ul>
                </nav>
        </header>
    )
}

export default Nav; 