import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Award, Users, Building2, Download, ArrowRight, Target, Shield, Sparkles, Trophy } from "lucide-react";

const About = () => {
  return (
    <Page>
      {/* Breadcrumb + Hero */}
      <Hero>
        <Crumbs>
          <Crumb to="/">Home</Crumb>
          <span>/</span>
          <span>About Us</span>
        </Crumbs>
        <HeroGrid>
          <HeroLeft>
            <Kicker>About Us</Kicker>
            <HeroTitle>
              Known for Trust,
              <br /> Honesty & Customer
              <br /> Support
            </HeroTitle>
            <HeroText>
              At Swift Claim Bank, we’re not just a financial institution — we’re your partner in progress.
              Founded with the vision to make banking more accessible, smarter, and more personal, Swift Claim Bank is
              here to empower individuals and businesses to take control of their financial future.
            </HeroText>
          </HeroLeft>
          <HeroRight src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop" alt="Team helping customers" />
        </HeroGrid>
      </Hero>

      {/* Journey */}
      <Section>
        <TwoCol>
          <ColImage src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop" alt="Our journey" />
          <ColContent>
            <SectionTitle>Our Journey</SectionTitle>
            <Lead>For Over Four Decades Our Bank</Lead>
            <Muted>
              Choice is untrammelled and when nothing prevents our being able to do what we like best
              every pleasure is to be welcomed.
            </Muted>
          </ColContent>
        </TwoCol>
      </Section>

      {/* Team Values */}
      <Section>
        <SectionTitle>Our Team</SectionTitle>
        <Lead>Passion & Professional Management</Lead>
        <Values>
          <Value>
            <ValueNum>01</ValueNum>
            <ValueTitle>Community</ValueTitle>
          </Value>
          <Value>
            <ValueNum>02</ValueNum>
            <ValueTitle>Commitment</ValueTitle>
          </Value>
          <Value>
            <ValueNum>03</ValueNum>
            <ValueTitle>Consistency</ValueTitle>
          </Value>
        </Values>
      </Section>

      {/* Mission / Vision / Core Values */}
      <Section>
        <TriGrid>
          <TriCard>
            <TriImage src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop" alt="Mission" />
            <TriBadge>M</TriBadge>
            <TriTitle>Mission</TriTitle>
          </TriCard>
          <TriCard>
            <TriImage src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop" alt="Vision" />
            <TriBadge>V</TriBadge>
            <TriTitle>Vision</TriTitle>
          </TriCard>
          <TriCard>
            <TriImage src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop" alt="Core Value" />
            <TriBadge>C</TriBadge>
            <TriTitle>Core Value</TriTitle>
          </TriCard>
        </TriGrid>
      </Section>

      {/* Mission statement */}
      <Section>
        <TwoCol>
          <ColContent>
            <SectionTitle>A Great Mission Statement</SectionTitle>
            <Muted>
              We combine the strength of traditional banking with the innovation of digital technology to deliver
              seamless, secure, and human-centered financial services. Whether you’re saving for your dreams,
              running a business, or simply managing daily expenses — Swift Claim Bank is by your side at every step.
            </Muted>
            <PrimaryButton as={Link} to="#">Read More <ArrowRight size={18} /></PrimaryButton>
          </ColContent>
          <ColImage src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop" alt="Mission" />
        </TwoCol>
      </Section>

      {/* Numbers */}
      <Section>
        <SectionTitle>Few Interesting Numbers</SectionTitle>
        <Lead>Numbers that speak about banking service.</Lead>
        <Stats>
          <Stat>
            <StatIcon><Building2 size={20} /></StatIcon>
            <StatValue>86</StatValue>
            <StatLabel>Branches around the country</StatLabel>
          </Stat>
          <Stat>
            <StatIcon><Users size={20} /></StatIcon>
            <StatValue>1.5M+</StatValue>
            <StatLabel>Customers</StatLabel>
          </Stat>
          <Stat>
            <StatIcon><Users size={20} /></StatIcon>
            <StatValue>1.6k</StatValue>
            <StatLabel>Professional employees</StatLabel>
          </Stat>
          <Stat>
            <StatIcon><Trophy size={20} /></StatIcon>
            <StatValue>45.6 Cr</StatValue>
            <StatLabel>Loans for 258 customers</StatLabel>
          </Stat>
        </Stats>
      </Section>

      {/* Awards */}
      <Section>
        <SectionTitle>Awards & Major Achievements</SectionTitle>
        <Lead>Outstanding performance and achievements.</Lead>
        <Awards>
          <AwardCard>
            <AwardImage src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop" alt="Award" />
            <AwardTitle>Bank of the Year USA</AwardTitle>
            <AwardMeta>Year: 2023-2021 • Award by: Los Vegas Business Time</AwardMeta>
          </AwardCard>
          <AwardCard>
            <AwardImage src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1600&auto=format&fit=crop" alt="Award" />
            <AwardTitle>Best Private Bank Award</AwardTitle>
            <AwardMeta>Year: 2017-2018 • Award by: Los Vegas Business Time</AwardMeta>
          </AwardCard>
          <AwardCard>
            <AwardImage src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop" alt="Award" />
            <AwardTitle>Bank of the Year USA</AwardTitle>
            <AwardMeta>Year: 2018-2019 • Award by: Los Vegas Business Time</AwardMeta>
          </AwardCard>
          <AwardCard>
            <AwardImage src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1600&auto=format&fit=crop" alt="Award" />
            <AwardTitle>Best Commercial Bank Award</AwardTitle>
            <AwardMeta>Year: 2014-2015 • Award by: Los Vegas Business Time</AwardMeta>
          </AwardCard>
        </Awards>
      </Section>

      {/* CTA */}
      <Cta>
        <CtaGrid>
          <CtaContent>
            <CtaTitle>Better Value Banking Experience</CtaTitle>
            <CtaText>
              Business it will frequently occur that pleasures have to be repudiated and annoyances accepted.
              The wise man therefore always holds these matters to this principle of selection.
            </CtaText>
            <PrimaryButton as={Link} to="#">
              <Download size={18} /> Download
            </PrimaryButton>
            <GhostLink href="#">Report for the Year 2025</GhostLink>
          </CtaContent>
          <CtaImage src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop" alt="Report" />
        </CtaGrid>
      </Cta>
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
  padding: 16px;
`;

const Crumbs = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #777;
  margin-bottom: 10px;
`;

const Crumb = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:hover { color: #111; }
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 16px;
  align-items: center;

  @media (max-width: 992px) { grid-template-columns: 1fr; }
`;

const HeroLeft = styled.div``;

const Kicker = styled.p`
  color: #6ab33e;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin: 0 0 8px;
  font-size: 12px;
`;

const HeroTitle = styled.h1`
  font-size: 42px;
  line-height: 1.1;
  margin: 0 0 10px;

  @media (max-width: 576px) { font-size: 34px; }
`;

const HeroText = styled.p`
  color: #555;
  margin: 0;
`;

const HeroRight = styled.img`
  width: 100%;
  height: 100%;
  max-height: 420px;
  object-fit: cover;
  border-radius: 16px;
`;

const Section = styled.section`
  padding: 0 16px;
`;

const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 16px;
  align-items: center;

  @media (max-width: 992px) { grid-template-columns: 1fr; }
`;

const ColImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 420px;
  object-fit: cover;
  border-radius: 16px;
`;

const ColContent = styled.div``;

const SectionTitle = styled.h2`
  font-size: 28px;
  margin: 0 0 6px;
`;

const Lead = styled.p`
  margin: 0 0 6px;
  font-weight: 700;
`;

const Muted = styled.p`
  margin: 0;
  color: #555;
`;

const Values = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const Value = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ValueNum = styled.span`
  color: #6ab33e;
  font-weight: 800;
  letter-spacing: 0.12em;
`;

const ValueTitle = styled.h4`
  margin: 0;
`;

const TriGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  @media (max-width: 992px) { grid-template-columns: 1fr; }
`;

const TriCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 14px;
`;

const TriImage = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
  display: block;
`;

const TriBadge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 36px;
  height: 36px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  background: #000;
  color: #fff;
  font-weight: 800;
`;

const TriTitle = styled.h4`
  position: absolute;
  left: 12px;
  bottom: 12px;
  margin: 0;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0,0,0,0.4);
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;

  @media (max-width: 992px) { grid-template-columns: 1fr 1fr; }
  @media (max-width: 576px) { grid-template-columns: 1fr; }
`;

const Stat = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 14px;
  padding: 16px;
  text-align: center;
`;

const StatIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: #000;
  color: #fff;
  display: grid;
  place-items: center;
  margin: 0 auto 8px;
`;

const StatValue = styled.div`
  font-size: 24px;
  font-weight: 800;
`;

const StatLabel = styled.div`
  color: #666;
`;

const Awards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;

  @media (max-width: 992px) { grid-template-columns: 1fr 1fr; }
  @media (max-width: 576px) { grid-template-columns: 1fr; }
`;

const AwardCard = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 14px;
  overflow: hidden;
`;

const AwardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const AwardTitle = styled.h4`
  margin: 10px 12px 4px;
`;

const AwardMeta = styled.p`
  margin: 0 12px 12px;
  color: #666;
  font-size: 14px;
`;

const Cta = styled.section`
  padding: 0 16px 40px;
`;

const CtaGrid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 16px;
  align-items: center;

  @media (max-width: 992px) { grid-template-columns: 1fr; }
`;

const CtaContent = styled.div``;

const CtaTitle = styled.h3`
  font-size: 28px;
  margin: 0 0 8px;
`;

const CtaText = styled.p`
  margin: 0 0 12px;
  color: #555;
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
  font-weight: 700;
`;

const GhostLink = styled.a`
  display: inline-block;
  margin-left: 14px;
  color: #111;
  text-decoration: none;
  font-weight: 700;
  border-bottom: 1px solid #111;
`;

const CtaImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 420px;
  object-fit: cover;
  border-radius: 16px;
`;

export default About;
