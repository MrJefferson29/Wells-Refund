import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight, ArrowRight, Shield, Zap, Users } from 'lucide-react';
import ba1 from '../../Assets/ba1.jpg';
import ba2 from '../../Assets/ba2.jpg';
import ba3 from '../../Assets/ba3.jpg';
import Sc1 from './Sc1';
import Testimonials from './Testimonials';

const carouselData = [
  {
    id: 1,
    image: ba1,
    title: "Smart Banking for a Fast-Moving World",
    subtitle: "At SWIFT CLAIM BANK, we're building a new kind of financial experience — digital-first, user-focused, and always secure.",
    buttonText: "Open an Account",
    buttonLink: "/register",
    icon: <Shield size={24} />,
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  },
  {
    id: 2,
    image: ba2,
    title: "Your Money, Your Control",
    subtitle: "Experience banking that adapts to your lifestyle with cutting-edge technology and personalized financial solutions.",
    buttonText: "Get Started",
    buttonLink: "/login",
    icon: <Zap size={24} />,
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
  },
  {
    id: 3,
    image: ba3,
    title: "Secure. Fast. Reliable.",
    subtitle: "Join thousands of satisfied customers who trust SWIFT CLAIM BANK for their financial needs and future growth.",
    buttonText: "Learn More",
    buttonLink: "/about",
    icon: <Users size={24} />,
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
  }
];

function CryptoPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div>
    <HeroSection>
      <SlideContainer>
        {carouselData.map((slide, index) => (
          <Slide key={slide.id} $active={index === currentSlide} $gradient={slide.gradient}>
            <SlideBackground $image={slide.image} />
            <SlideOverlay />
            
            <SlideContent $active={index === currentSlide}>
              <ContentWrapper>
                <Title>{slide.title}</Title>
                <Subtitle>{slide.subtitle}</Subtitle>
                
                <ButtonGroup>
                  <SecondaryButton as={Link} to="/about">
                    Learn More
                  </SecondaryButton>
                </ButtonGroup>
              </ContentWrapper>
            </SlideContent>
          </Slide>
        ))}
      </SlideContainer>

      <NavigationControls>
        <NavButton onClick={prevSlide} $position="left">
          <ChevronLeft size={24} />
        </NavButton>
        <NavButton onClick={nextSlide} $position="right">
          <ChevronRight size={24} />
        </NavButton>
      </NavigationControls>

      <Indicators>
        {carouselData.map((_, index) => (
          <Indicator
            key={index}
            $active={index === currentSlide}
            onClick={() => goToSlide(index)}
          />
        ))}
      </Indicators>

      <ProgressBar>
        <ProgressFill $progress={(currentSlide + 1) / carouselData.length * 100} />
      </ProgressBar>
    </HeroSection>
    <Sc1 />
    <Testimonials />
    </div>
  );
}

// Modern Styled Components
const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 70vh;
  min-height: 500px;
  max-height: 600px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
`;

const SlideContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => props.$active ? 1 : 0};
  transform: ${props => props.$active ? 'scale(1)' : 'scale(1.05)'};
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: ${props => props.$active ? 2 : 1};
`;

const SlideBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.$image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(0.4) saturate(1.2);
`;

const SlideOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 100%);
`;

const SlideContent = styled.div`
  position: relative;
  z-index: 3;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
  transform: ${props => props.$active ? 'translateY(0)' : 'translateY(30px)'};
  opacity: ${props => props.$active ? 1 : 0};
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
`;

const ContentWrapper = styled.div`
  text-align: center;
  max-width: 800px;
  width: 100%;
`;

const IconContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  margin-bottom: 32px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: white;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1) rotate(5deg);
    background: rgba(255, 255, 255, 0.2);
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 24px;
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.8rem;
    margin-bottom: 20px;
  }

  @media (max-width: 576px) {
    font-size: 2.2rem;
    margin-bottom: 16px;
  }
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 40px;
  line-height: 1.6;
  font-weight: 400;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 32px;
  }

  @media (max-width: 576px) {
    font-size: 1rem;
    margin-bottom: 28px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 18px 36px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4);
    
    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 576px) {
    padding: 16px 28px;
    font-size: 1rem;
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 18px 36px;
  background: transparent;
  color: white;
  text-decoration: none;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.6);
    transform: translateY(-2px);
  }

  @media (max-width: 576px) {
    padding: 16px 28px;
    font-size: 1rem;
  }
`;

const NavigationControls = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  z-index: 10;
  pointer-events: none;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: white;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  pointer-events: all;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => props.$position === 'left' ? 'left: 30px;' : 'right: 30px;'}

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-50%) scale(1.1);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    ${props => props.$position === 'left' ? 'left: 20px;' : 'right: 20px;'}
  }
`;

const Indicators = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 10;
`;

const Indicator = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.$active ? 'white' : 'rgba(255, 255, 255, 0.4)'};
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.8);
    transform: scale(1.2);
  }

  ${props => props.$active && `
    transform: scale(1.3);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  `}
`;

const ProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  z-index: 10;
`;

const ProgressFill = styled.div`
  height: 100%;
  width: ${props => props.$progress}%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  transition: width 0.3s ease;
`;

export default CryptoPage;