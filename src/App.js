import React, { useState } from 'react'
import './App.css';
import Nav from './components/Nav/index';
import About from './components/About/index';
import Projects from './components/Projects/index';
import Contact from './components/Contact/index';
import Resume from './components/Resume/index';
import Footer from './components/Footer/index';

function App() {
  const [currentPage, setCurrentPage] = useState('About');
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />
    }
    else if (currentPage === 'Projects') {
      return <Projects />
    }
    else if (currentPage === 'Contact') {
      return <Contact />
    }
    else if (currentPage === 'Resume') {
      return <Resume />
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
      <div>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <Footer />
      </div>
  )
}

export default App;
