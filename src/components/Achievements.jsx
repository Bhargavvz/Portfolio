import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FiAward, FiExternalLink } from 'react-icons/fi';

const AchievementsSection = styled.section`
  min-height: 100vh;
  padding: 100px 2rem;
  background: linear-gradient(135deg, var(--background) 0%, #1a1a2e 100%);
  position: relative;
  overflow: hidden;
`;

const GlowingOrb = styled(motion.div)`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--secondary) 0%, rgba(64, 175, 255, 0) 70%);
  opacity: 0.1;
  filter: blur(60px);
  z-index: 1;
  left: -200px;
  top: 50%;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const Title = styled(motion.h2)`
  font-size: clamp(32px, 6vw, 42px);
  margin-bottom: 60px;
  text-align: center;
  background: linear-gradient(45deg, var(--white) 30%, var(--secondary) 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, transparent, var(--secondary), transparent);
  }
`;

const AchievementsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

const AchievementCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  height: 100%;
  transition: all 0.3s ease;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--secondary), transparent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-10px);
    border-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    
    &:before {
      transform: scaleX(1);
    }
  }
`;

const AchievementHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const AwardIcon = styled(FiAward)`
  color: var(--secondary);
  font-size: 40px;
  transition: transform 0.3s ease;
  
  ${AchievementCard}:hover & {
    transform: rotate(15deg) scale(1.1);
  }
`;

const AchievementLink = styled.a`
  color: var(--text);
  font-size: 22px;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--secondary);
    transform: translateY(-3px);
  }
`;

const AchievementTitle = styled.h3`
  color: var(--white);
  font-size: 1.5rem;
  margin-bottom: 10px;
  transition: color 0.3s ease;
  
  ${AchievementCard}:hover & {
    color: var(--secondary);
  }
`;

const AchievementPlace = styled.p`
  color: var(--secondary);
  font-size: 1rem;
  margin-bottom: 15px;
  font-style: italic;
`;

const AchievementDescription = styled.p`
  color: var(--text);
  font-size: 1rem;
  line-height: 1.6;
`;

const Achievements = () => {
  const achievements = [
    {
      title: "HackByte 2024",
      place: "2nd Runner-Up, National-Level Hackathon",
      description: "Vellore Institute of Technology, Andhra Pradesh",
      link: "https://link-to-hackbyte-details.com"
    },
    {
      title: "Hack4SDG Hackathon",
      place: "Honorable Mention for SDG 11",
      description: "IIT Hyderabad, Organized by FCCxAIESEC",
      link: "https://shorturl.at/LpVSy"
    },
    {
      title: "Specathon 2024",
      place: "Finalist, 36-Hour National-Level Hackathon",
      description: "St. Peter's Engineering College, Hyderabad",
      link: "https://shorturl.at/2TF2X"
    },
    {
      title: "Intinta Innovation",
      place: "Top 10 Selected Innovators",
      description: "Warangal District, Telangana",
      link: "https://shorturl.at/WZ30U"
    },
    {
      title: "Hackwave 2024",
      place: "Top 70 Finalists",
      description: "Sreenidhi Institute of Science and Technology, Hyderabad",
      link: "https://shorturl.at/Z1MxJ"
    },
    {
      title: "Innovatia 2024",
      place: "Top 70 Finalists",
      description: "Vasavi College of Engineering, Hyderabad",
      link: "https://link-to-innovatia-details.com"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <AchievementsSection id="achievements">
      <GlowingOrb
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <Container>
        <Title
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Achievements
        </Title>
        
        <AchievementsGrid
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <AchievementHeader>
                <AwardIcon />
                {achievement.link && (
                  <AchievementLink
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Certificate"
                  >
                    <FiExternalLink />
                  </AchievementLink>
                )}
              </AchievementHeader>
              
              <AchievementTitle>{achievement.title}</AchievementTitle>
              <AchievementPlace>{achievement.place}</AchievementPlace>
              <AchievementDescription>{achievement.description}</AchievementDescription>
            </AchievementCard>
          ))}
        </AchievementsGrid>
      </Container>
    </AchievementsSection>
  );
};

export default Achievements;
