import styled from 'styled-components';
import { motion } from 'framer-motion';

const LogoContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  cursor: pointer;
  perspective: 1000px;
`;

const LogoText = styled(motion.h1)`
  font-size: ${props => props.size || '2rem'};
  font-weight: bold;
  color: var(--white);
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  
  span {
    color: var(--secondary);
    display: inline-block;
  }
`;

const Logo = ({ size, onClick, className }) => {
  return (
    <LogoContainer
      className={className}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <LogoText
        size={size}
        initial={{ opacity: 0, rotateX: -90 }}
        animate={{ opacity: 1, rotateX: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20
        }}
      >
        Bhargav Adepu<span>.</span>
      </LogoText>
    </LogoContainer>
  );
};

export default Logo;
