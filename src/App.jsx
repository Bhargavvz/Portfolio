import { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Cursor from './components/Cursor';
import BackgroundAnimation from './components/BackgroundAnimation';
import Achievements from './components/Achievements';

const AppContainer = styled.div`
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 0.5s ease;
`;

function App() {
  const [showContent, setShowContent] = useState(false);

  const handleWelcomeComplete = () => {
    setShowContent(true);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Cursor />
        <BackgroundAnimation />
        <AnimatePresence mode='wait'>
          <Welcome onComplete={handleWelcomeComplete} />
          <AppContainer show={showContent}>
            <div className="app">
              <Navbar />
              <main>
                <Hero />
                <About />
                <Projects />
                <Achievements />
                <Contact />
              </main>
              <Footer />
            </div>
          </AppContainer>
        </AnimatePresence>
      </ThemeProvider>
    </Router>
  );
}

export default App;
