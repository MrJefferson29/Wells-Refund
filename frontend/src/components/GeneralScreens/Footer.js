import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// ------------------------------------------------------------------
// REPLACED ICONS: Only use Lucide React for consistent styling
// ------------------------------------------------------------------
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  LifeBuoy,      // Replaces HiOutlineSupport
  Banknote,
  User,          // Replaces HiOutlineUser
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      {/* Main Footer Content */}
      <MainFooter>
        <FooterGrid>
          
          {/* Support Section - Far Left */}
          <FooterColumn>
            <ColumnTitle>Support</ColumnTitle>
            <FooterList>
              <li>
                {/* Replaced AiOutlineMail and HiOutlineSupport with Lucide icons */}
                <a href="mailto:swiftclaim.help@gmail.com" style={{textDecoration: 'none', color: 'white'}}>
                  Contact Us
                </a>
              </li>
              <li>
                <FooterLink to="/#">Home Loan</FooterLink>
              </li>
              <li>
                <FooterLink to="/#">Personal Loan</FooterLink>
              </li>
              <li>
                <FooterLink to="/#">Education Loan</FooterLink>
              </li>
            </FooterList>
          </FooterColumn>

          {/* Brand Section */}
          <BrandSection>
            <BrandHeader>
              <BrandIcon>
                <Banknote />
              </BrandIcon>
              <BrandTitle>Swift Claim Bank</BrandTitle>
            </BrandHeader>
            <BrandDescription>
              Your premier destination for financial solutions and exceptional banking experience. 
              Discover a world of carefully curated financial solutions at unbeatable prices.
            </BrandDescription>
            
            {/* Contact Info - Replaced AiOutline* icons with Lucide icons */}
            <ContactInfo>
              <ContactItem>
                <Mail />
                <a href="mailto:swiftclaim.help@gmail.com" style={{textDecoration: 'none', color: 'white'}}>swiftclaim.help@gmail.com</a>
              </ContactItem>
              <ContactItem>
                <MapPin />
                <span>2028 E Ben White Blvd #240-3636, Austin, TX 78741</span>
              </ContactItem>
            </ContactInfo>
          </BrandSection>

          {/* Shop Section */}
          <FooterColumn>
            <ColumnTitle>Services</ColumnTitle>
            <FooterList>
              <li>
                <FooterLink to="/#">Our all card</FooterLink>
              </li>
              <li>
                <FooterLink to="/#">Gold Loan</FooterLink>
              </li>
              <li>
                <FooterLink to="/#">Education Loan</FooterLink>
              </li>
            </FooterList>
          </FooterColumn>

          {/* Customer Service */}
          <FooterColumn>
            <ColumnTitle>Customer Service</ColumnTitle>
            <FooterList>
              <li>
                {/* Replaced HiOutlineUser with Lucide User icon */}
                <FooterLink to="/">
                  <User />
                  My Account
                </FooterLink>
              </li>
              <li>
                <FooterLink to="/#">Personal Loan</FooterLink>
              </li>
              <li>
                <FooterLink to="/#">Education Loan</FooterLink>
              </li>
            </FooterList>
          </FooterColumn>

          {/* Stay Updated & Follow Us Section */}
          <FooterColumn>
            {/* Newsletter */}
            <NewsletterSection>
              <NewsletterTitle>Stay Updated</NewsletterTitle>
              <NewsletterDescription>
                Get the latest deals, new arrivals, and exclusive offers.
              </NewsletterDescription>
              <NewsletterForm>
                <NewsletterInput
                  type="email"
                  placeholder="Your email address"
                />
                <NewsletterButton>Subscribe</NewsletterButton>
              </NewsletterForm>
            </NewsletterSection>

            {/* Social Media (Lucide icons already used, no change needed) */}
            <SocialSection>
              <SocialTitle>Follow Us</SocialTitle>
              <SocialLinks>
                <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                  <Instagram />
                </SocialLink>
                <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                  <Facebook />
                </SocialLink>
                <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                  <Twitter />
                </SocialLink>
                <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                  <Youtube />
                </SocialLink>
              </SocialLinks>
            </SocialSection>
          </FooterColumn>
        </FooterGrid>
      </MainFooter>

      {/* Bottom Footer */}
      <BottomFooter>
        <BottomFooterContent>
          
          {/* Copyright */}
          <Copyright>
            <p>© {currentYear} Swift Claim Bank. All rights reserved.</p>
          </Copyright>

          {/* Legal Links */}
          <LegalLinks>
            <LegalLink to="/policy">Privacy Policy</LegalLink>
            <LegalLink to="/policy">Terms of Service</LegalLink>
            <LegalLink to="#">Cookie Policy</LegalLink>
          </LegalLinks>
          {/* NOTE: DeveloperCredit component was not used in the JSX, 
             but I'll keep the styled component definition below. */}
        </BottomFooterContent>
      </BottomFooter>
    </FooterContainer>
  );
};

// ------------------------------------------------------------------
// Styled Components (Unchanged as they are already a good translation)
// ------------------------------------------------------------------

const FooterContainer = styled.footer`
  background: #000000;
  border-top: 1px solid #374151;
  margin-top: auto;
  width: 100%;
  overflow: hidden;
`;

const MainFooter = styled.div`
  width: 100%;
  padding: 64px 24px;
  max-width: 100%;

  @media (min-width: 640px) {
    padding: 64px 32px;
  }

  @media (min-width: 1024px) {
    padding: 64px 48px;
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  max-width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
    gap: 48px;
  }
`;

const BrandSection = styled.div`
  @media (min-width: 1024px) {
    grid-column: span 1;
  }
`;

const BrandHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const BrandIcon = styled.div`
  width: 48px;
  height: 48px;
  background: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;

  svg {
    color: black;
    font-size: 20px;
  }
`;

const BrandTitle = styled.h3`
  font-size: 30px;
  font-weight: 300;
  color: white;
  letter-spacing: 0.05em;
  margin: 0;
`;

const BrandDescription = styled.p`
  color: #d1d5db;
  margin-bottom: 32px;
  line-height: 1.625;
  font-size: 16px;
  max-width: 384px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  color: #d1d5db;

  svg {
    width: 20px;
    height: 20px;
    margin-right: 16px;
    color: white;
  }

  span {
    font-size: 14px;
    font-weight: 500;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColumnTitle = styled.h4`
  font-size: 14px;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 24px;
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FooterLink = styled(Link)`
  color: #d1d5db;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;

  svg {
    width: 16px;
    height: 16px;
    margin-right: 12px;
  }

  &:hover {
    color: white;
  }
`;

const NewsletterSection = styled.div`
  margin-bottom: 24px;
`;

const NewsletterTitle = styled.h5`
  font-size: 14px;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 12px;
`;

const NewsletterDescription = styled.p`
  color: #d1d5db;
  font-size: 12px;
  margin-bottom: 12px;
  line-height: 1.5;
`;

const NewsletterForm = styled.div`
  display: flex;
  width: 100%;
  max-width: 384px;
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: 8px 16px;
  font-size: 14px;
  border: 1px solid #4b5563;
  border-radius: 6px 0 0 6px;
  background: #1f2937;
  color: white;
  outline: none;
  min-width: 0;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: white;
    box-shadow: 0 0 0 2px white;
  }
`;

const NewsletterButton = styled.button`
  padding: 8px 16px;
  background: white;
  color: black;
  font-size: 14px;
  border-radius: 0 6px 6px 0;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;

  &:hover {
    background: #f3f4f6;
  }
`;

const SocialSection = styled.div`
  margin-top: 24px;
`;

const SocialTitle = styled.h5`
  font-size: 14px;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 12px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 12px;
`;

const SocialLink = styled.a`
  width: 32px;
  height: 32px;
  background: #1f2937;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d1d5db;
  text-decoration: none;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    color: white;
    background: #374151;
  }
`;

const BottomFooter = styled.div`
  border-top: 1px solid #374151;
  background: #111827;
  width: 100%;
  overflow: hidden;
`;

const BottomFooterContent = styled.div`
  width: 100%;
  padding: 24px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }

  @media (min-width: 640px) {
    padding: 24px 32px;
  }

  @media (min-width: 1024px) {
    padding: 24px 48px;
  }
`;

const Copyright = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }

  p {
    color: #9ca3af;
    font-size: 12px;
    margin: 0;
  }
`;

const LegalLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  max-width: 100%;

  @media (min-width: 768px) {
    justify-content: flex-end;
    gap: 32px;
  }
`;

const LegalLink = styled(Link)`
  color: #9ca3af;
  text-decoration: none;
  font-size: 12px;
  font-weight: 500;
  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: white;
  }
`;

export default Footer;