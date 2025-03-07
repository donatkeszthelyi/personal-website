import { Element } from 'react-scroll';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { useState, useEffect, useRef } from 'react';
import { Button } from './components/common/Button';
import { Box, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';

function App() {
  const isSmallScreen = useMediaQuery('(max-width:1100px)');

  const sections = ['home', 'about', 'skills', 'projects', 'contact'];
  const menuRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const updateActiveSection = () => {
      const viewportMid = window.innerHeight / 2;

      let newActiveSection = '';

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= viewportMid && rect.bottom >= viewportMid) {
            newActiveSection = section;
            break;
          }
        }
      }

      if (newActiveSection && newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
        window.history.pushState(null, '', `#${newActiveSection}`);
      }
    };

    window.addEventListener('scroll', updateActiveSection);
    return () => window.removeEventListener('scroll', updateActiveSection);
  }, [activeSection]);

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    window.history.pushState(null, '', `#${section}`);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        closeMenu();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  const rollOutAnimation = {
    hidden: { transform: 'translateY(-120%)' },
    visible: {
      transform: 'translateY(0)',
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  const backdropAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  return (
    <div className="overflow-hidden">
      {isSmallScreen ? (
        <>
          <div className="overflow-hidden" ref={menuRef}>
            <button
              onClick={toggleMenu}
              className="fixed top-0 z-50 bg-transparent text-white p-2 rounded overflow-hidden w-full text-right text-2xl"
            >
              ☰
            </button>
            <motion.div
              initial="hidden"
              animate={isMenuOpen ? 'visible' : 'hidden'}
              variants={rollOutAnimation}
              className="fixed left-0 w-full bg-main-gray text-white p-4 flex flex-col items-center gap-4 z-40 overflow-hidden pt-10"
            >
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    handleNavClick(section);
                    closeMenu();
                  }}
                >
                  <Button
                    variant="nav"
                    activeNav={activeSection === section}
                    className="w-[50vw]"
                  >
                    {section}
                  </Button>
                </button>
              ))}
            </motion.div>

            {isMenuOpen && (
              <motion.div
                variants={backdropAnimation}
                onClick={closeMenu}
                className=" w-full h-full fixed top-0 left-0 z-30"
              >
                <Box
                  style={{
                    position: 'absolute',
                    top: '10vh',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    zIndex: 999,
                    backdropFilter: 'blur(6px)',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    WebkitBackdropFilter: 'blur(3px)',
                  }}
                ></Box>
              </motion.div>
            )}
          </div>
          <Element name="home" id="home" className="h-screen">
            <Home />
          </Element>
          <Element name="about" id="about" className="min-h-screen h-full">
            <About />
          </Element>
          <Element name="skills" id="skills" className="h-full">
            <Skills />
          </Element>
          <Element
            name="projects"
            id="projects"
            className="min-h-screen h-full"
          >
            <Projects />
          </Element>
          <Element name="contact" id="contact" className="min-h-screen h-full">
            <Contact />
          </Element>
        </>
      ) : (
        <>
          <nav className="z-100 fixed top-0 left-[50%] translate-x-[-50%] mt-1 rounded-sm min-w-fit bg-transparent text-white p-4 flex gap-10 justify-center transition-opacity duration-300">
            {sections.map((section) => (
              <button key={section} onClick={() => handleNavClick(section)}>
                <Button variant="nav" activeNav={activeSection === section}>
                  {section}
                </Button>
              </button>
            ))}
          </nav>
          <Element name="home" id="home" className="h-screen">
            <Home />
          </Element>
          <Element name="about" id="about" className="h-screen ">
            <About />
          </Element>
          <Element name="skills" id="skills" className="h-screen">
            <Skills />
          </Element>
          <Element name="projects" id="projects" className="h-screen">
            <Projects />
          </Element>
          <Element name="contact" id="contact" className="h-screen">
            <Contact />
          </Element>
        </>
      )}
    </div>
  );
}

export default App;
