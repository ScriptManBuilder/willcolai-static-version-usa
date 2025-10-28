import React from 'react';
import styled, { keyframes } from 'styled-components';

interface InitialLoaderProps {
  progress: number;
}

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled.div<{ $isComplete: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: ${props => props.$isComplete ? fadeOut : 'none'} 0.5s ease-out forwards;
`;

const LoaderContent = styled.div`
  text-align: center;
  color: white;
  animation: ${pulse} 2s ease-in-out infinite;
`;

const Logo = styled.h1`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 700;
  font-size: 3rem;
  margin: 0 0 10px 0;
  letter-spacing: 2px;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Tagline = styled.p`
  font-size: 1.1rem;
  margin: 0 0 40px 0;
  opacity: 0.9;
  font-weight: 300;
  letter-spacing: 1px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const SpinnerContainer = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto 30px;
`;

const Spinner = styled.div`
  width: 100%;
  height: 100%;
  border: 4px solid rgba(255, 255, 255, 0.2);
  border-top: 4px solid white;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const ProgressBarContainer = styled.div`
  width: 300px;
  height: 6px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  overflow: hidden;
  margin: 20px auto 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 768px) {
    width: 250px;
  }
  
  @media (max-width: 480px) {
    width: 200px;
  }
`;

const ProgressBar = styled.div<{ $progress: number }>`
  width: ${props => Math.min(props.$progress, 100)}%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0.8)
  );
  background-size: 200% 100%;
  animation: ${shimmer} 2s linear infinite;
  transition: width 0.3s ease-out;
  border-radius: 10px;
`;

const ProgressText = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
  margin: 0;
  font-weight: 300;
`;

const LoadingText = styled.p`
  font-size: 1rem;
  margin: 30px 0 0 0;
  opacity: 0.7;
  font-weight: 300;
`;

const WelcomeMessage = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  max-width: 400px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  /* Анимация появления */
  animation: ${slideUp} 0.8s ease-out 0.3s both;
  
  @media (max-width: 768px) {
    max-width: 300px;
    padding: 15px;
  }
  
  @media (max-width: 480px) {
    max-width: 250px;
    padding: 12px;
  }
`;

const WelcomeTitle = styled.h3`
  font-size: 1.4rem;
  margin: 0 0 8px 0;
  font-weight: 600;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const WelcomeSubtitle = styled.p`
  font-size: 0.95rem;
  margin: 0;
  opacity: 0.85;
  font-weight: 300;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const InitialLoader: React.FC<InitialLoaderProps> = ({ progress }) => {
  const isComplete = progress >= 100;
  
  // Welcome messages in English only
  const welcomeMessages = [
    {
      title: 'Welcome to Williams AI Academy! 🎓',
      subtitle: 'Empowering the next generation of AI innovators'
    },
    {
      title: 'Welcome! �',
      subtitle: 'Your journey into AI excellence begins here'
    },
    {
      title: 'Discover AI Excellence ✨',
      subtitle: 'Innovation meets education at Williams Academy'
    },
    {
      title: 'Welcome Aboard! 🚀',
      subtitle: 'Join us in shaping tomorrow\'s technology'
    }
  ];
  
  // Выбираем сообщение на основе текущего времени (чтобы было стабильно в рамках сессии)
  const messageIndex = Math.floor(Date.now() / 10000) % welcomeMessages.length;
  const currentMessage = welcomeMessages[messageIndex];

  return (
    <LoaderContainer $isComplete={isComplete}>
      <LoaderContent>
        <Logo>WILLIAMS</Logo>
        <Tagline>AI Academy</Tagline>
        
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
        
        <ProgressBarContainer>
          <ProgressBar $progress={progress} />
        </ProgressBarContainer>
        
        <ProgressText>{Math.round(progress)}%</ProgressText>
        
        <LoadingText>
          {progress < 30 && 'Initializing...'}
          {progress >= 30 && progress < 60 && 'Loading resources...'}
          {progress >= 60 && progress < 90 && 'Almost ready...'}
          {progress >= 90 && 'Finalizing...'}
        </LoadingText>
        
        <WelcomeMessage>
          <WelcomeTitle>{currentMessage.title}</WelcomeTitle>
          <WelcomeSubtitle>{currentMessage.subtitle}</WelcomeSubtitle>
        </WelcomeMessage>
      </LoaderContent>
    </LoaderContainer>
  );
};

export default InitialLoader;
