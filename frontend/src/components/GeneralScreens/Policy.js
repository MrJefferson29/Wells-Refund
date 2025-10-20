import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ShieldCheck, Clock, CreditCard, Ban, HelpCircle, ClipboardList, ArrowRight } from "lucide-react";

const Policy = () => {
  return (
    <Page>
      <Hero>
        <Crumbs>
          <Crumb to="/">Home</Crumb>
          <span>/</span>
          <span>Refund Policy</span>
        </Crumbs>
        <HeroGrid>
          <HeroLeft>
            <Kicker>Refund Policy</Kicker>
            <HeroTitle>Fair. Transparent. Customer‑First.</HeroTitle>
            <HeroText>
              We believe refunds should be simple and fair. This policy explains when refunds apply, how they’re
              processed, and what to expect at each step.
            </HeroText>
          </HeroLeft>
          <HeroRight src="https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=1600&auto=format&fit=crop" alt="Policy" />
        </HeroGrid>
      </Hero>

      <Section>
        <Cards>
          <Card>
            <IconWrap>
              <ShieldCheck />
            </IconWrap>
            <CardTitle>Eligibility</CardTitle>
            <CardText>
              A refund may be requested for erroneous charges, duplicate payments, failed transactions, or service not
              rendered. For investment products, principal withdrawal is subject to plan-specific terms.
            </CardText>
          </Card>
          <Card>
            <IconWrap>
              <Clock />
            </IconWrap>
            <CardTitle>Timelines</CardTitle>
            <CardText>
              Approved refunds are typically initiated within 3–5 business days. Card and bank processing times may
              extend settlement to 7–10 business days depending on your provider.
            </CardText>
          </Card>
          <Card>
            <IconWrap>
              <CreditCard />
            </IconWrap>
            <CardTitle>Refund Method</CardTitle>
            <CardText>
              Refunds are returned to the original payment method whenever possible. Alternative arrangements may be
              offered where the original method cannot be used.
            </CardText>
          </Card>
        </Cards>
      </Section>

      <Section>
        <TwoCol>
          <ColContent>
            <SectionTitle>What’s Covered</SectionTitle>
            <List>
              <li>Duplicate charges and accidental overpayments</li>
              <li>Failed or partially completed transactions</li>
              <li>Unauthorized transactions after timely notice</li>
              <li>Fees incorrectly assessed due to platform error</li>
            </List>
          </ColContent>
          <ColContent>
            <SectionTitle>What’s Not Covered</SectionTitle>
            <List>
              <li>Losses due to market movement or investment performance</li>
              <li>Transactions executed as intended by the account holder</li>
              <li>Charges outside stated time limits for disputes</li>
              <li>Breaches of plan terms, KYC/AML policy, or fair‑use rules</li>
            </List>
          </ColContent>
        </TwoCol>
      </Section>

      <AltSection>
        <AltGrid>
          <AltImage src="https://images.unsplash.com/photo-1523287562758-66c7fc58967f?q=80&w=1600&auto=format&fit=crop" alt="Process" />
          <AltContent>
            <Kicker>How Refunds Work</Kicker>
            <AltTitle>Simple steps to resolution</AltTitle>
            <Timeline>
              <Step>
                <StepNum>01</StepNum>
                <StepBody>
                  Submit a request via Support with your receipt, transaction ID, and a brief description.
                </StepBody>
              </Step>
              <Step>
                <StepNum>02</StepNum>
                <StepBody>
                  Our team validates eligibility, investigates anomalies, and may request additional documentation.
                </StepBody>
              </Step>
              <Step>
                <StepNum>03</StepNum>
                <StepBody>
                  If approved, we initiate the refund and send a confirmation with reference details.
                </StepBody>
              </Step>
              <Step>
                <StepNum>04</StepNum>
                <StepBody>
                  Funds settle back to your original method per your bank/card processor’s timeline.
                </StepBody>
              </Step>
            </Timeline>
          </AltContent>
        </AltGrid>
      </AltSection>

      <Section>
        <SectionTitle>Important Notes & Tendencies</SectionTitle>
        <List>
          <li>Security holds may apply to large or unusual transactions until verification is complete.</li>
          <li>Certain promotional fees are non‑refundable once the benefit is consumed.</li>
          <li>Chargebacks initiated with your bank may delay or void platform‑level refunds.</li>
          <li>For compliance, we refund only to verified, KYC‑approved accounts.</li>
          <li>Multi‑currency refunds post in the original currency; FX fluctuations may occur.</li>
        </List>
      </Section>

      <Section>
        <SectionHeader>
          <SectionTitle>Dispute Window & Evidence</SectionTitle>
          <SectionSub>Help us help you—complete cases resolve faster.</SectionSub>
        </SectionHeader>
        <Cards>
          <Card>
            <IconWrap>
              <ClipboardList />
            </IconWrap>
            <CardTitle>Time Limits</CardTitle>
            <CardText>
              Report billing issues within 30 days of the statement date. Unauthorized activity should be reported
              immediately so we can protect your account.
            </CardText>
          </Card>
          <Card>
            <IconWrap>
              <Ban />
            </IconWrap>
            <CardTitle>Exclusions</CardTitle>
            <CardText>
              We cannot refund funds lost to third‑party scams or off‑platform transfers. Always verify recipients and
              never share one‑time passcodes.
            </CardText>
          </Card>
          <Card>
            <IconWrap>
              <HelpCircle />
            </IconWrap>
            <CardTitle>Need Assistance?</CardTitle>
            <CardText>
              Our support team is available 24/7. Start with the Help Center or contact us to open a refund request.
            </CardText>
          </Card>
        </Cards>
      </Section>

      <Cta>
        <CtaGrid>
          <CtaContent>
            <CtaTitle>We’re here to help</CtaTitle>
            <CtaText>
              If you believe a charge is incorrect, submit a ticket with your transaction reference. We’ll guide you
              through the next steps and keep you updated along the way.
            </CtaText>
            <PrimaryButton as={Link} to="/contact">
              Contact Support <ArrowRight size={18} />
            </PrimaryButton>
            <GhostLink href="#">View Refund FAQs</GhostLink>
          </CtaContent>
          <CtaImage src="https://images.unsplash.com/photo-1521790945508-bf2a36314e85?q=80&w=1600&auto=format&fit=crop" alt="Support" />
        </CtaGrid>
      </Cta>
    </Page>
  );
};

// Styles (mirrors Services/About styling)
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
  margin: 0 0 6px;
`;

const SectionSub = styled.p`
  color: #666;
  margin: 0;
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

const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: 992px) { grid-template-columns: 1fr; }
`;

const ColContent = styled.div``;

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

const Timeline = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
`;

const Step = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 14px 16px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
`;

const StepNum = styled.div`
  background: #000;
  color: #fff;
  border-radius: 8px;
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  font-weight: 800;
`;

const StepBody = styled.div``;

const List = styled.ul`
  margin: 0;
  padding-left: 18px;
  color: #555;
  line-height: 1.7;
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

export default Policy;
