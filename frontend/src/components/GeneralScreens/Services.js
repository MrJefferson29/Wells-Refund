import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  PiggyBank,
  CreditCard,
  Shield,
  LineChart,
  Smartphone,
  ChevronRight,
  Download,
  MessageCircle,
  CheckCircle2,
  Users,
  FileText,
  Fingerprint,
  Wallet,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  const faqs = [
    {
      q: "How do I open an account with Swift Revenly Bank",
      a: "Opening an account takes under 5 minutes. Choose an account type, verify your identity with KYC, and start banking instantly.",
    },
    {
      q: "What documents are required to open an account?",
      a: "You’ll typically need a valid government ID, proof of address, and a recent photo. Requirements may vary by account type.",
    },
    {
      q: "How secure is Swift Revenly Bank",
      a: "We use bank‑grade encryption, multi‑factor authentication, and continuous fraud monitoring to keep your money and data safe.",
    },
    {
      q: "How can I contact customer support?",
      a: "Our team is available 24/7 via chat, phone, or email. Visit the Contact page to reach us anytime.",
    },
  ];

  return (
    <Page>
      {/* Hero */}
      <Hero>
        <HeroContent>
          <Kicker>Let’s Think of saving Money</Kicker>
          <HeroTitle>Convenient banking options for you.</HeroTitle>
          <HeroSub>Choose the account that fits your lifestyle and start earning today.</HeroSub>
          <HeroActions>
            <PrimaryButton as={Link} to="/register">
              Open an Account <ArrowRight size={18} />
            </PrimaryButton>
            <SecondaryButton as={Link} to="/#">
              Contact Us <MessageCircle size={18} />
            </SecondaryButton>
          </HeroActions>
        </HeroContent>
        <HeroArtwork>
          <HeroImage src="https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=1600&auto=format&fit=crop" alt="Banking on mobile" />
          <HeroBadge>
            <Shield size={18} /> Secure • Fast • Modern
          </HeroBadge>
        </HeroArtwork>
      </Hero>

      {/* Accounts */}
      <Section>
        <SectionHeader>
          <SectionTitle>Accounts that grow with you</SectionTitle>
          <ViewAll as={Link} to="/accounts">View All Accounts <ChevronRight size={16} /></ViewAll>
        </SectionHeader>
        <Cards>
          <Card>
            <IconWrap>
              <PiggyBank />
            </IconWrap>
            <CardTitle>Savings Account</CardTitle>
            <CardText>Open account now and earn upto 8%</CardText>
            <CardCta as={Link} to="#">Open now</CardCta>
          </Card>
          <Card>
            <IconWrap>
              <Wallet />
            </IconWrap>
            <CardTitle>Current Account</CardTitle>
            <CardText>Open account now and earn upto 5%</CardText>
            <CardCta as={Link} to="#">Open now</CardCta>
          </Card>
          <Card>
            <IconWrap>
              <CreditCard />
            </IconWrap>
            <CardTitle>Fixed Deposit Account</CardTitle>
            <CardText>Open account now and earn upto 10%</CardText>
            <CardCta as={Link} to="#">Open now</CardCta>
          </Card>
        </Cards>
      </Section>

      {/* Trading & Demat */}
      <AltSection>
        <AltGrid>
          <AltImage src="https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=1600&auto=format&fit=crop" alt="Trading" />
          <AltContent>
            <Kicker>Trading & Demat a/c</Kicker>
            <AltTitle>Step to Make Your Dreams Possible</AltTitle>
            <AltText>
              At Swift Claim Bank, we believe every dream deserves a plan — and every plan needs the tools to make it real.
            </AltText>
            <Benefits>
              <Benefit><CheckCircle2 /> Personalized Financial Guidance</Benefit>
              <Benefit><LineChart /> Smart Savings & Investment Tools</Benefit>
              <Benefit><CreditCard /> Accessible Loans & Credit</Benefit>
              <Benefit><Smartphone /> Seamless Digital Banking</Benefit>
            </Benefits>
          </AltContent>
        </AltGrid>
        <LogosRow>
          <LogoItem>
            <LogoText>Swift Claim Bank</LogoText>
            <LogoPill>Trading & Demat a/c</LogoPill>
          </LogoItem>
          <LogoItem>
            <LogoText>Swift Claim Bank</LogoText>
            <LogoPill>Tax Savings a/c</LogoPill>
          </LogoItem>
          <LogoItem>
            <LogoText>Swift Claim Bank</LogoText>
            <LogoPill>Gold Savings a/c</LogoPill>
          </LogoItem>
        </LogosRow>
      </AltSection>

      {/* App Promo */}
      <Promo>
        <PromoContent>
          <PromoTitle>Open Your Account in 5 Mins</PromoTitle>
          <PromoText>
            Imagine reaching your goals faster with the help of our banking tools.
            Available for Android and iOS.
          </PromoText>
          <HeroActions>
            <PrimaryButton as={Link} to="#">
              <Download size={18} /> Download
            </PrimaryButton>
            <SecondaryButton as={Link} to="#">
              Contact Us <MessageCircle size={18} />
            </SecondaryButton>
          </HeroActions>
        </PromoContent>
        <PromoArt src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop" alt="Customer using app" />
      </Promo>

      {/* Steps */}
      <Section>
        <SectionHeader>
          <SectionTitle>Your Account In Easy Steps</SectionTitle>
          <SectionSub>We show our value by serving faithfully.</SectionSub>
        </SectionHeader>
        <Steps>
          <Step>
            <StepNum>01</StepNum>
            <StepTitle>Consult With Our Experts</StepTitle>
            <StepText>Talk to our advisors and choose the right account.</StepText>
          </Step>
          <Step>
            <StepNum>02</StepNum>
            <StepTitle>Submit Required Documents</StepTitle>
            <StepText>Provide basic KYC documents securely online.</StepText>
          </Step>
          <Step>
            <StepNum>03</StepNum>
            <StepTitle>KYC Verification</StepTitle>
            <StepText>We verify your identity quickly and securely.</StepText>
          </Step>
          <Step>
            <StepNum>04</StepNum>
            <StepTitle>Start Savings for Your Future</StepTitle>
            <StepText>Activate your account and begin your journey.</StepText>
          </Step>
        </Steps>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeader>
          <SectionTitle>Questions & Answers</SectionTitle>
          <SectionSub>Find answers to all your queries about our service.</SectionSub>
        </SectionHeader>
        <FaqGrid>
          <FaqArt src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop" alt="Support" />
          <FaqList>
            {faqs.map((item, i) => (
              <FaqItem key={i} onClick={() => setActiveFaq(i)} active={activeFaq === i}>
                <FaqQ>
                  <span>{faqs.length - i}. {item.q}</span>
                  <ChevronRight size={18} />
                </FaqQ>
                {activeFaq === i && <FaqA>{item.a}</FaqA>}
              </FaqItem>
            ))}
            <FaqCtas>
              Didn’t get it? Click below to see more answers or contact us.
              <CtaRow>
                <PrimaryButton as={Link} to="#">Grab Your Deals</PrimaryButton>
                <SecondaryButton as={Link} to="#">Contact Us</SecondaryButton>
              </CtaRow>
            </FaqCtas>
          </FaqList>
        </FaqGrid>
      </Section>
    </Page>
  );
};

// Styles
const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

const Hero = styled.section`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 32px;
  align-items: center;
  min-height: 60vh;
  padding: 40px 16px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    min-height: unset;
  }
`;

const HeroContent = styled.div``;

const Kicker = styled.p`
  color: #6ab33e;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin: 0 0 8px;
  font-size: 12px;
`;

const HeroTitle = styled.h1`
  font-size: 44px;
  line-height: 1.1;
  margin: 0 0 12px;

  @media (max-width: 576px) {
    font-size: 34px;
  }
`;

const HeroSub = styled.p`
  color: #555;
  font-size: 16px;
  line-height: 1.6;
  margin: 0 0 20px;
`;

const HeroActions = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #000;
  color: #fff;
  padding: 12px 18px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover { transform: translateY(-1px); box-shadow: 0 10px 20px rgba(0,0,0,0.12); }
`;

const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #f5f5f5;
  color: #111;
  padding: 12px 18px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.2s ease;

  &:hover { background: #e9e9e9; }
`;

const HeroArtwork = styled.div`
  position: relative;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 460px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
`;

const HeroBadge = styled.div`
  position: absolute;
  right: 16px;
  bottom: 16px;
  background: #ffffff;
  border-radius: 999px;
  padding: 8px 14px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  box-shadow: 0 6px 18px rgba(0,0,0,0.12);
`;

const Section = styled.section`
  padding: 0 16px;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  margin: 0;
`;

const SectionSub = styled.p`
  color: #666;
  margin: 0;
`;

const ViewAll = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #111;
  text-decoration: none;
  font-weight: 700;
  background: #f5f5f5;
  padding: 10px 14px;
  border-radius: 10px;

  &:hover { background: #ebebeb; }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 14px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover { transform: translateY(-3px); box-shadow: 0 14px 30px rgba(0,0,0,0.08); }
`;

const IconWrap = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #000, #333);
  color: #fff;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  margin: 8px 0 0;
`;

const CardText = styled.p`
  margin: 0 0 8px;
  color: #555;
`;

const CardCta = styled(Link)`
  color: #111;
  text-decoration: none;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 6px;

  &:after { content: '›'; font-size: 18px; line-height: 1; }
`;

const AltSection = styled.section`
  padding: 0 16px;
`;

const AltGrid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 24px;
  align-items: center;

  @media (max-width: 992px) { grid-template-columns: 1fr; }
`;

const AltImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 420px;
  object-fit: cover;
  border-radius: 16px;
`;

const AltContent = styled.div``;

const AltTitle = styled.h3`
  font-size: 30px;
  margin: 8px 0 8px;
`;

const AltText = styled.p`
  color: #555;
  margin: 0 0 12px;
`;

const Benefits = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 16px;

  @media (max-width: 576px) { grid-template-columns: 1fr; }
`;

const Benefit = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
`;

const LogosRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 20px;

  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const LogoItem = styled.div`
  background: #f7f7f7;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 16px;
`;

const LogoText = styled.p`
  margin: 0 0 6px;
  font-weight: 700;
`;

const LogoPill = styled.span`
  display: inline-block;
  padding: 6px 10px;
  border-radius: 999px;
  background: #000;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
`;

const Promo = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  align-items: center;
  padding: 0 16px;

  @media (max-width: 992px) { grid-template-columns: 1fr; }
`;

const PromoContent = styled.div``;

const PromoTitle = styled.h3`
  font-size: 28px;
  margin: 0 0 8px;
`;

const PromoText = styled.p`
  color: #555;
  margin: 0 0 16px;
`;

const PromoArt = styled.img`
  width: 100%;
  height: 100%;
  max-height: 420px;
  object-fit: cover;
  border-radius: 16px;
`;

const Steps = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;

  @media (max-width: 992px) { grid-template-columns: 1fr 1fr; }
  @media (max-width: 576px) { grid-template-columns: 1fr; }
`;

const Step = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 14px;
  padding: 20px;
`;

const StepNum = styled.div`
  font-weight: 800;
  color: #6ab33e;
  font-size: 14px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const StepTitle = styled.h4`
  margin: 4px 0 6px;
`;

const StepText = styled.p`
  margin: 0;
  color: #555;
`;

const FaqGrid = styled.div`
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 16px;
  align-items: start;

  @media (max-width: 992px) { grid-template-columns: 1fr; }
`;

const FaqArt = styled.img`
  width: 100%;
  border-radius: 14px;
  object-fit: cover;
`;

const FaqList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FaqItem = styled.div`
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 14px 16px;
  background: ${(p) => (p.active ? "#f9fafb" : "#fff")};
  cursor: pointer;
`;

const FaqQ = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
`;

const FaqA = styled.p`
  margin: 8px 0 0;
  color: #555;
`;

const FaqCtas = styled.div`
  margin-top: 10px;
  padding: 14px 16px;
  background: #f7f7f7;
  border-radius: 12px;
`;

const CtaRow = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  flex-wrap: wrap;
`;

export default Services;
