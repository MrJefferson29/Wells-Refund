import React from "react";
import styled, { keyframes } from "styled-components";
import { Row, Col } from "react-bootstrap";
import co1 from "../../Assets/account-1.jpg";
import co2 from "../../Assets/account-2.jpg";
import co3 from "../../Assets/account-3.jpg";
import brand1 from '../../Assets/brand-1.png';
import brand2 from '../../Assets/brand-2.png';
import brand6 from '../../Assets/brand-6.png';
import brand4 from '../../Assets/brand-4.png';
import brand5 from '../../Assets/brand-5.png';
import { PiggyBank, Globe, ShieldCheck } from "lucide-react";

// 1. Define the brands and duplicate the array for a seamless loop
const brands = [brand1, brand2, brand6, brand4, brand5];
const allBrands = [...brands, ...brands]; // Duplicate to ensure continuous sliding

export default function Sc1() {
  return (
    <Styles>
      <HeroSection>
        <TextCol md="6">
          <MainHeading>Let’s Think of saving Money</MainHeading>
          <SubHeading>
            Convenient banking options for you.
          </SubHeading>
        </TextCol>
      </HeroSection>
      <FeatureSection>
        <Col md="4">
          <Card>
            <img src={co1} className="icon" alt="Efficient Delivery" />
            <h3>Savings Account</h3>
            <p>
            Open account now and earn upto 8%
            </p>
            <a href="#" className="learn-more">Learn More</a>
          </Card>
        </Col>
        <Col md="4">
          <Card>
            <img src={co2} className="icon" alt="Transparent Pricing" />
            <h3>Current Account</h3>
            <p>
            Open account now and earn upto 5%
            </p>
            <a href="#" className="learn-more">Learn More</a>
          </Card>
        </Col>
        <Col md="4">
          <Card>
            <img src={co3} className="icon" alt="Security For Pets" />
            <h3>Fixed Deposit Account</h3>
            <p>
            Open account now and earn upto 10%
            </p>
            <a href="#" className="learn-more">Learn More</a>
          </Card>
        </Col>
      </FeatureSection>
      
      {/* 2. New Logo Marquee Section */}
      <LogoMarquee>
        <LogoTrack>
          {allBrands.map((brandSrc, index) => (
            <LogoImage key={index} src={brandSrc} alt={`Brand Logo ${index + 1}`} />
          ))}
        </LogoTrack>
      </LogoMarquee>
      <div style={{margin: '20px'}}>
        <h3 style={{fontWeight: 700}}>Benefits for account holders</h3>
        <p>We help businesses and customers achieve more.</p>
      </div>
      <FeatureSection>
        <Col md="4">
          <Card>
          <PiggyBank size={80} className="icon-lucide" color="#1e40af" />
            <h3>Earn Interest up to 7%</h3>
            <p>
            Grow your savings faster with competitive interest rates — up to 7% annually on select accounts.
            </p>
          </Card>
        </Col>
        <Col md="4">
          <Card>
          <Globe size={80} className="icon-lucide" color="#1e40af" />
            <h3>International Debit Cards</h3>
            <p>
            Enjoy global access to your funds with Swiftrevenly Bank secure, widely accepted international debit cards.
            </p>
          </Card>
        </Col>
        <Col md="4">
          <Card>
          <ShieldCheck size={80} className="icon-lucide" color="#1e40af" />
            <h3>Provides Safety</h3>
            <p>
            Your security is our priority — advanced encryption and fraud protection keep your money safe 24/7.
            </p>
          </Card>
        </Col>
      </FeatureSection> 
    </Styles>
  );
}

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    /* Translate the track by half its width (which is one full set of 5 logos) */
    transform: translateX(-50%); 
  }
`;

// ----------------------------------------------------
// Styled Components for Marquee
// ----------------------------------------------------

// Container for the entire marquee strip (the viewport)
const LogoMarquee = styled.div`
  width: 100%;
  overflow: hidden; /* Hides logos outside the view */
  padding: 30px 0;
  background-color: #f7f7f7;
`;

// The inner track that holds all the logos and is animated
const LogoTrack = styled.div`
  display: flex;
  width: 200%; /* Double the width to accommodate the duplicated logos (5 * 2 = 10 items) */
  animation: ${scroll} 30s linear infinite; /* Adjust speed (30s) as needed */
  will-change: transform; /* Performance optimization */
`;

// Styling for each individual logo image
const LogoImage = styled.img`
  /* If 5 logos fill the 100% width, each should be 20%.
    This arrangement ensures 4 are visible and the next one is just sliding in. 
  */
  width: 20%; 
  
  /* On smaller screens, force 4 to be visible by making them 25% each */
  @media (max-width: 992px) {
    width: 25%; /* 100% / 4 = 25% */
  }

  flex-shrink: 0; /* Prevents logos from shrinking to fit on one line */
  height: 60px; /* Small size for the logos */
  object-fit: contain;
  filter: grayscale(100%);
  opacity: 0.6;
  padding: 0 15px;
  
  transition: opacity 0.3s, filter 0.3s;

  &:hover {
    opacity: 1;
    filter: grayscale(0%);
  }
`;


// ----------------------------------------------------
// Existing Styled Components
// ----------------------------------------------------

const Styles = styled.div`
  overflow-x: hidden;
`;

// Main Hero Section styling
const HeroSection = styled(Row)`
  background-color:rgb(15, 28, 28);
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

// Text Column styling
const TextCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  
  @media (min-width: 768px) {
    text-align: left;
  }
`;

// Main Heading
const MainHeading = styled.h1`
  color: aliceblue;
  font-weight: 900;
  font-size: 2.5rem;
  margin: 20px;

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 767px) {
    font-size: 2rem;
  }
`;

// Sub Heading
const SubHeading = styled.h1`
  color: aliceblue;
  font-weight: 700;
  font-size: 2rem;
  margin-left: 20px;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 767px) {
    font-size: 1.4rem;
  }
`;

const FeatureSection = styled(Row)`
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 0 5vh;
`;

// Card Component Styling
const Card = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 3px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .icon {
    width: 200px;
  }

  h3 {
    margin: 20px 0 10px;
    font-size: 1.4rem;
  }

  p {
    color: #666;
    font-size: 1rem;
    margin-bottom: 20px;
  }

  .learn-more {
    color: #000;
    text-decoration: none;
    font-weight: bold;
    border-bottom: 2px solid #f97316;
    padding-bottom: 2px;
  }
`;