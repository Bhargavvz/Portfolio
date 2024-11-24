import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: none;
  }

  :root {
    --primary: #2A2A2A;
    --secondary: #64FFDA;
    --background: #0A192F;
    --text: #8892B0;
    --white: #E6F1FF;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: var(--background);
    color: var(--text);
    overflow-x: hidden;
    line-height: 1.6;
  }

  .app {
    position: relative;
    z-index: 1;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--white);
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }

  a {
    color: var(--secondary);
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: var(--white);
    }
  }

  section {
    padding: 100px 0;
    position: relative;
  }

  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-title {
    font-size: clamp(26px, 5vw, 32px);
    font-weight: 700;
    margin-bottom: 3rem;
    position: relative;
    
    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: -10px;
      width: 70px;
      height: 4px;
      background-color: var(--secondary);
    }
  }

  @media (max-width: 768px) {
    section {
      padding: 60px 0;
    }
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--background);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--secondary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--white);
  }
`;

export default GlobalStyles;
