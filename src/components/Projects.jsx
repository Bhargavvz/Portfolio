import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';

const ProjectsSection = styled.section`
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
  right: -200px;
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

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  height: 100%;
  transition: all 0.3s ease;
  cursor: pointer;
  
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

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
`;

const ProjectContent = styled.div`
  padding: 20px;
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
`;

const FolderIcon = styled(FiFolder)`
  color: var(--secondary);
  font-size: 40px;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
  
  ${ProjectCard}:hover & {
    transform: translateY(-5px);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const ProjectLink = styled.a`
  color: var(--text);
  font-size: 22px;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--secondary);
    transform: translateY(-3px);
  }
`;

const ProjectTitle = styled.h3`
  color: var(--white);
  font-size: 1.5rem;
  margin-bottom: 15px;
  transition: color 0.3s ease;
  
  ${ProjectCard}:hover & {
    color: var(--secondary);
  }
`;

const ProjectDescription = styled.p`
  color: var(--text);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: auto;
`;

const TechTag = styled(motion.span)`
  color: var(--secondary);
  font-size: 0.9rem;
  padding: 6px 12px;
  border-radius: 20px;
  background: rgba(var(--secondary-rgb), 0.1);
  border: 1px solid var(--secondary);
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--secondary);
    color: var(--background);
    transform: translateY(-2px);
  }
`;

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    setProjects([
      {
        title: "Communitifx",
        description: "A community issue reporting website that enables users to report local issues like drainage leaks or street light failures. Features include interactive maps with color-coded markers and an AI chatbot for user assistance.",
        tech: ["Vite React", "Spring Boot", "PostgreSQL", "Docker"],
        githubLink: "https://github.com/Bhargavvz/Communitfx",
        liveLink: "communitifx.me",
        image: "/images/communitifx.jpg"
      },
      {
        title: "Medi Alert",
        description: "A comprehensive web application for medical shops to track medicines, monitor expiry dates, and manage stock. Includes notification system for expiry alerts and dashboard for inventory management.",
        tech: ["HTML/CSS", "Flask", "MySQL"],
        githubLink: "https://github.com/Bhargavvz/Hack-The-Verse",
        liveLink: "#",
        image: "/images/medialert.jpg"
      },
      {
        title: "Doctor-Patient Management System",
        description: "A healthcare management platform facilitating appointment booking, consultations, and medical records management. Features include patient profiles, payment integration, and role-based access control.",
        tech: ["Angular", "C#", "Microsoft SQL Server"],
        githubLink: "#",
        liveLink: "#",
        image: "/images/healthcare.jpg"
      },
      {
        title: "Portfolio Website",
        description: "A modern personal portfolio website showcasing my projects and skills. Built with React and features smooth animations, glass morphism effects, and responsive design.",
        tech: ["React", "Styled Components", "Framer Motion"],
        githubLink: "https://github.com/Bhargavvz/portfolio",
        liveLink: "https://portfolio-rho-five-45.vercel.app/",
        image: "/images/portfolio.jpg"
      },
      {
        title: "Weather App",
        description: "An interactive weather application providing real-time weather information and forecasts. Integrates with OpenWeatherMap API for accurate weather data.",
        tech: ["React", "OpenWeatherMap API", "CSS3"],
        githubLink: "https://github.com/Bhargavvz/weatherapp",
        liveLink: "#",
        image: "/images/weather.jpg"
      }
    ]);
  }, []);

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
    <ProjectsSection id="projects">
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
          Featured Projects
        </Title>
        
        <ProjectsGrid
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectContent>
                <ProjectHeader>
                  <FolderIcon />
                  <ProjectLinks>
                    {project.githubLink !== "#" && (
                      <ProjectLink
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Repository"
                      >
                        <FiGithub />
                      </ProjectLink>
                    )}
                    {project.liveLink !== "#" && (
                      <ProjectLink
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live Demo"
                      >
                        <FiExternalLink />
                      </ProjectLink>
                    )}
                  </ProjectLinks>
                </ProjectHeader>
                
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                
                <TechStack>
                  {project.tech.map((tech, techIndex) => (
                    <TechTag
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: techIndex * 0.1
                      }}
                      whileHover={{
                        y: -5,
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {tech}
                    </TechTag>
                  ))}
                </TechStack>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
