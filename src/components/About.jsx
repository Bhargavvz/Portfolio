import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FiBook, FiCode, FiServer, FiTool } from 'react-icons/fi';

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 80px 2rem;
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
  padding: 0 20px;
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

const ProfileSection = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
`;

const ProfileImage = styled(motion.div)`
  width: 250px;
  height: 250px;
  border-radius: 30px;
  overflow: hidden;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    inset: -5px;
    background: linear-gradient(45deg, var(--secondary), transparent, var(--secondary));
    z-index: -1;
    border-radius: 35px;
    animation: borderRotate 4s linear infinite;
  }
  
  @keyframes borderRotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
    transition: transform 0.5s ease;
    border: 4px solid rgba(255, 255, 255, 0.1);
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const SectionTitle = styled(motion.h3)`
  color: var(--white);
  font-size: 1.8rem;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  gap: 15px;
  
  svg {
    color: var(--secondary);
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 40px;
  padding: 20px 0;
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  padding: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const EducationCard = styled(Card)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 25px;
  margin-bottom: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:last-child {
    margin-bottom: 0;
  }

  h4 {
    color: var(--white);
    font-size: 1.4rem;
    margin-bottom: 10px;
  }

  p {
    color: var(--text);
    margin: 8px 0;
    font-size: 1rem;
  }

  .degree {
    color: var(--secondary);
    font-weight: 500;
  }

  .duration {
    color: var(--text);
    font-size: 0.9rem;
    opacity: 0.8;
  }
`;

const CourseworkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 20px;
`;

const CourseTag = styled(motion.div)`
  background: rgba(var(--secondary-rgb), 0.1);
  border: 1px solid var(--secondary);
  color: var(--secondary);
  padding: 10px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--secondary);
    color: var(--background);
    transform: translateY(-3px);
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const SkillCategory = styled.div`
  h4 {
    color: var(--white);
    font-size: 1.2rem;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
    
    svg {
      color: var(--secondary);
    }
  }
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillTag = styled(motion.span)`
  background: rgba(var(--secondary-rgb), 0.1);
  border: 1px solid var(--secondary);
  color: var(--text);
  padding: 8px 12px;
  border-radius: 15px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--secondary);
    color: var(--background);
    transform: translateY(-3px);
  }
`;

const About = () => {
  const education = [
    {
      school: "CMR College of Engineering & Technology",
      degree: "Bachelor of Technology in Computer Science & Engineering",
      duration: "Nov 2022 -- Sept 2026",
      location: "Hyderabad, Telangana"
    },
    {
      school: "Narayana Junior College",
      degree: "Intermediate, Non-Medical (MPC) - GPA: 89.9%",
      duration: "June 2020 -- Sept 2022",
      location: "Hyderabad, Telangana"
    }
  ];

  const coursework = [
    "Data Structures",
    "Software Engineering",
    "Operating Systems",
    "Database Management",
    "Machine Learning",
    "Computer Architecture",
    "Artificial Intelligence",
    "OOPS"
  ];

  const skills = {
    "Programming Languages": ["Python", "Java", "C", "C++", "JavaScript", "SQL"],
    "Web Development": ["Node.js", "React", "Spring Boot"],
    "Databases": ["MySQL", "PostgreSQL", "MongoDB"],
    "Tools and Frameworks": ["Docker", "Git", "GitHub"],
    "Operating Systems": ["Linux (Ubuntu)", "Windows", "MacOS"],
    "IDE/Tools": ["VS Code", "Eclipse", "IntelliJ IDEA"]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <AboutSection id="about">
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
          About Me
        </Title>

        <ProfileSection
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ProfileImage>
            <img src="/images/profile.jpg" alt="Bhargav" />
          </ProfileImage>
        </ProfileSection>

        <Grid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Education Section */}
          <div>
            <SectionTitle variants={itemVariants}>
              <FiBook /> Education
            </SectionTitle>
            {education.map((edu, index) => (
              <EducationCard
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <h4>{edu.school}</h4>
                <h5>{edu.degree}</h5>
                <p>{edu.duration}</p>
                <span>{edu.location}</span>
              </EducationCard>
            ))}
          </div>

          {/* Coursework Section */}
          <div>
            <SectionTitle variants={itemVariants}>
              <FiCode /> Relevant Coursework
            </SectionTitle>
            <CourseworkGrid>
              {coursework.map((course, index) => (
                <CourseTag
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  {course}
                </CourseTag>
              ))}
            </CourseworkGrid>
          </div>

          {/* Technical Skills Section */}
          <div>
            <SectionTitle variants={itemVariants}>
              <FiTool /> Technical Skills
            </SectionTitle>
            <SkillsGrid>
              {Object.entries(skills).map(([category, items], index) => (
                <SkillCategory key={index}>
                  <h4>
                    {category === "Programming Languages" && <FiCode />}
                    {category === "Web Development" && <FiServer />}
                    {category === "Databases" && <FiServer />}
                    {category === "Tools and Frameworks" && <FiTool />}
                    {category}
                  </h4>
                  <SkillTags>
                    {items.map((skill, skillIndex) => (
                      <SkillTag
                        key={skillIndex}
                        variants={itemVariants}
                        whileHover={{
                          y: -3,
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                      >
                        {skill}
                      </SkillTag>
                    ))}
                  </SkillTags>
                </SkillCategory>
              ))}
            </SkillsGrid>
          </div>
        </Grid>
      </Container>
    </AboutSection>
  );
};

export default About;
