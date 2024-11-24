import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const WelcomeContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, var(--background) 0%, #1a1a2e 100%);
  z-index: 9999;
  overflow: hidden;
`;

const GlowingOrb = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--secondary) 0%, rgba(64, 175, 255, 0) 70%);
  opacity: 0.3;
  filter: blur(40px);
`;

const Content = styled(motion.div)`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const LogoContainer = styled(motion.div)`
  transform-style: preserve-3d;
  perspective: 1000px;
`;

const Text = styled(motion.div)`
  color: var(--white);
  font-size: clamp(24px, 5vw, 32px);
  font-weight: 300;
  text-align: center;
  letter-spacing: 2px;
  background: linear-gradient(45deg, var(--white) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ProgressBarContainer = styled(motion.div)`
  width: 200px;
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;

const ProgressBar = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, var(--secondary) 0%, #40afff 100%);
  box-shadow: 0 0 10px var(--secondary);
`;

const Welcome = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentText, setCurrentText] = useState('');
  const fullText = "Full Stack Developer";

  useEffect(() => {
    let timer;
    let index = 0;

    const typeText = () => {
      if (index <= fullText.length) {
        setCurrentText(fullText.slice(0, index));
        index++;
        setTimeout(typeText, 100);
      }
    };

    typeText();

    timer = setTimeout(() => {
      setShowWelcome(false);
      onComplete();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {showWelcome && (
        <WelcomeContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
        >
          <GlowingOrb
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <Content>
            <LogoContainer
              animate={{
                rotateX: [0, 10, 0],
                rotateY: [0, 10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Logo />
            </LogoContainer>
            <Text
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {currentText}
            </Text>
            <ProgressBarContainer>
              <ProgressBar
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
              />
            </ProgressBarContainer>
          </Content>
        </WelcomeContainer>
      )}
    </AnimatePresence>
  );
};

export default Welcome;
