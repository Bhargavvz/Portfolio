import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
`;

const HeroContent = styled.div`
  max-width: 1000px;
  width: 100%;
`;

const Title = styled(motion.h1)`
  font-size: clamp(40px, 8vw, 80px);
  margin-bottom: 20px;
  color: var(--white);
`;

const Subtitle = styled(motion.h2)`
  font-size: clamp(20px, 4vw, 30px);
  color: var(--secondary);
  margin-bottom: 30px;
`;

const Description = styled(motion.p)`
  font-size: clamp(16px, 3vw, 20px);
  max-width: 600px;
  margin-bottom: 30px;
`;

const Location = styled(motion.p)`
  font-size: clamp(14px, 2vw, 18px);
  color: var(--text);
  margin-bottom: 20px;
`;

const Contact = styled(motion.div)`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
`;

const ContactLink = styled(motion.a)`
  color: var(--text);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    color: var(--secondary);
  }
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroContent>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Adepu Vaatsava Sri Bhargav
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Computer Science Student & Full Stack Developer
        </Subtitle>
        <Location
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          📍 Mamnoor, Warangal, Telangana 506166
        </Location>
        <Contact
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ContactLink href="tel:+919492909351">📱 +91 9492909351</ContactLink>
          <ContactLink href="mailto:adepuvaatsavasribhargav@gmail.com">
            ✉️ adepuvaatsavasribhargav@gmail.com
          </ContactLink>
          <ContactLink href="https://linkedin.com/in/bhargavvz" target="_blank">
            💼 linkedin.com/in/bhargavvz
          </ContactLink>
          <ContactLink href="https://github.com/bhargavvz" target="_blank">
            💻 github.com/bhargavvz
          </ContactLink>
        </Contact>
        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          A passionate Computer Science student with expertise in full-stack development,
          focusing on creating innovative solutions and contributing to meaningful projects.
        </Description>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
