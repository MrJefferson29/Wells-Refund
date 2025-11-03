import React, { useEffect, useState, useContext, useMemo } from "react";
import styled from "styled-components";
import { Row, Col, Container, Modal, Button } from "react-bootstrap";
import { AuthContext } from "../../Context/AuthContext";
import p1 from "../../Assets/p1.png";
import p2 from "../../Assets/p2.png";
import p3 from "../../Assets/p3.png";
import p4 from "../../Assets/p4.png";
import p5 from "../../Assets/p5.png";
import { Shield, TrendingUp, Wallet, Info, Mail, X, AlertCircle } from "lucide-react";

const PLAN_METADATA = {
  starter_saver_3m: {
    label: "Starter Saver (3 months)",
    apy: "3.0% APY",
    term: "3 months",
    liquidity: "Low (short lock-in)",
    description:
      "An entry-level fixed plan ideal for first-time savers. Short commitment and predictable returns.",
    benefits: ["Low risk", "Short commitment", "Auto-renew optional"],
  },
  steady_growth_6m: {
    label: "Steady Growth (6 months)",
    apy: "4.2% APY",
    term: "6 months",
    liquidity: "Low",
    description:
      "Balanced tenure with improved yield. Great for building savings steadily over the mid-term.",
    benefits: ["Competitive rate", "Reliable growth", "Flexible rollover"],
  },
  prime_income_12m: {
    label: "Prime Income (12 months)",
    apy: "5.0% APY",
    term: "12 months",
    liquidity: "Low",
    description:
      "A one-year plan optimized for income-focused savers seeking stability and solid returns.",
    benefits: ["Stable returns", "Annual compounding", "Great for budgeting"],
  },
  high_yield_18m: {
    label: "High Yield (18 months)",
    apy: "5.5% APY",
    term: "18 months",
    liquidity: "Low",
    description:
      "Longer duration with higher yield for savers who can commit beyond a year.",
    benefits: ["Higher APY", "Capital protection", "Auto compounding"],
  },
  wealth_plus_24m: {
    label: "Wealth Plus (24 months)",
    apy: "5.8% APY",
    term: "24 months",
    liquidity: "Very Low",
    description:
      "Two-year fixed plan for disciplined savers targeting enhanced growth with low volatility.",
    benefits: ["Enhanced yield", "Low volatility", "Goal-aligned"],
  },
  inflation_guard: {
    label: "Inflation Guard (Laddered)",
    apy: "~4.8% blended",
    term: "3–18 months ladder",
    liquidity: "Moderate (staggered maturities)",
    description:
      "Laddered approach spreads deposits across terms to manage rate risk and improve liquidity.",
    benefits: ["Rate diversification", "Periodic liquidity", "Lower reinvestment risk"],
  },
  tax_saver: {
    label: "Tax Saver (Fixed)",
    apy: "5.2% APY",
    term: "12 months",
    liquidity: "Low",
    description:
      "A compliant fixed plan with potential tax advantages depending on jurisdiction.",
    benefits: ["Potential tax perks", "Fixed return", "Simple structure"],
  },
  liquid_flex: {
    label: "Liquid Flex (No lock)",
    apy: "3.6% APY",
    term: "No lock",
    liquidity: "High",
    description:
      "Flexible savings with same-day access. Ideal for emergency funds and near-term goals.",
    benefits: ["High liquidity", "Daily access", "No penalties"],
  },
  business_boost: {
    label: "Business Boost (12 months)",
    apy: "4.9% APY",
    term: "12 months",
    liquidity: "Low",
    description:
      "Designed for SMEs to park surplus cash securely while earning predictable returns.",
    benefits: ["Predictable yield", "Great for SMEs", "Cash management"],
  },
  premier_elite_36m: {
    label: "Premier Elite (36 months)",
    apy: "6.2% APY",
    term: "36 months",
    liquidity: "Very Low",
    description:
      "Top-tier long-term plan for savers optimizing returns with maximum commitment.",
    benefits: ["Top APY", "Long-term growth", "Capital preservation"],
  },
};

function currencySymbol(code) {
  switch (code) {
    case 'EUR': return '€';
    case 'GBP': return '£';
    case 'NGN': return '₦';
    case 'GHS': return '₵';
    case 'KES': return 'KSh';
    case 'ZAR': return 'R';
    case 'INR': return '₹';
    case 'JPY': return '¥';
    case 'CNY': return '¥';
    case 'CAD': return '$';
    case 'AUD': return '$';
    case 'USD':
    default: return '$';
  }
}

function formatCurrency(amount, code = 'USD') {
  const num = Number(amount || 0);
  if (Number.isNaN(num)) return `${currencySymbol(code)}0.00`;
  try {
    return num.toLocaleString(undefined, { style: "currency", currency: code, minimumFractionDigits: 2 });
  } catch (e) {
    return `${currencySymbol(code)}${num.toFixed(2)}`;
  }
}

const Profile = () => {
  const { activeUser } = useContext(AuthContext);
  const [avatarSrc, setAvatarSrc] = useState(null);
  const images = useMemo(() => [p1, p2, p3, p4, p5], []);
  const [showInvestModal, setShowInvestModal] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [modalType, setModalType] = useState(""); // "deposit" or "withdrawal"

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setAvatarSrc(images[randomIndex]);
  }, [images]);

  // Support legacy key-based plan and new structured plan object
  const structuredPlan = activeUser?.plan && typeof activeUser.plan === 'object' ? activeUser.plan : null;
  const legacyPlanKey = !structuredPlan && activeUser?.plan && PLAN_METADATA[activeUser.plan] ? activeUser.plan : null;
  const legacyPlan = legacyPlanKey ? PLAN_METADATA[legacyPlanKey] : null;
  
  // Parse description to separate original from user notes
  const parseDescription = (description) => {
    if (!description) return { original: '', userNotes: '' };
    const notesMatch = description.match(/--- User Notes ---\n(.*)$/s);
    if (notesMatch) {
      return {
        original: description.replace(/\n\n--- User Notes ---\n.*$/, ''),
        userNotes: notesMatch[1]
      };
    }
    return { original: description, userNotes: '' };
  };
  
  const descriptionData = structuredPlan ? parseDescription(structuredPlan.description) : { original: '', userNotes: '' };
  
  const userCurrency = structuredPlan?.currency || 'USD';

  const plan = structuredPlan
    ? {
        label: structuredPlan.name || 'Custom Plan',
        apy: structuredPlan.apy || '—',
        term: structuredPlan.period || '—',
        liquidity: undefined,
        description: descriptionData.original,
        userNotes: descriptionData.userNotes,
        benefits: ["Capital preservation", "Predictable growth"],
        amount: structuredPlan.amount,
        returnAmount: structuredPlan.returnAmount,
      }
    : legacyPlan;

  // Contact support function
  const handleContactSupport = () => {
    const subject = encodeURIComponent(`${modalType === 'deposit' ? 'New Investment' : 'Withdrawal'} Request - ${activeUser?.username}`);
    const body = encodeURIComponent(`
Dear Support Team,

I would like to ${modalType === 'deposit' ? 'make a new investment' : 'process a withdrawal'} for my account.

Account Details:
- Username: ${activeUser?.username}
- Current Balance: ${formatCurrency(activeUser?.balance, userCurrency)}
- Investment Plan: ${plan ? plan.label : 'No plan selected'}
${plan ? `- APY: ${plan.apy}` : ''}
${plan ? `- Term: ${plan.term}` : ''}
${plan?.amount ? `- Investment Amount: ${currencySymbol(userCurrency)}${plan.amount}` : ''}
${plan?.returnAmount ? `- Expected Return: ${currencySymbol(userCurrency)}${plan.returnAmount}` : ''}

Please assist me with this ${modalType === 'deposit' ? 'investment' : 'withdrawal'} request.

Thank you for your assistance.

Best regards,
${activeUser?.username}
    `);
    
    const mailtoLink = `mailto:swiftclaim.help@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink, '_blank');
    setShowMessageModal(false);
  };

  return (
    <DashboardWrapper>
      <Container>
        <HeaderSection>
          <div className="user-block">
            <div className="meta">
              <h2 className="greeting">Welcome back,</h2>
              <h1 className="username">{activeUser?.username}</h1>
              <p className="subtitle">Here’s an overview of your account performance and plan.</p>
            </div>
          </div>
          <div className="quick-stats">
            <StatCard>
              <div className="icon primary"><Wallet size={20} /></div>
              <div className="stat">
                <span className="label">Current Balance</span>
                <span className="value">{formatCurrency(activeUser?.balance, userCurrency)}</span>
              </div>
            </StatCard>
            <StatCard>
              <div className="icon success"><TrendingUp size={20} /></div>
              <div className="stat">
                <span className="label">Investment Plan</span>
                <span className="value">{plan ? plan.label : 'No plan selected'}</span>
              </div>
            </StatCard>
            <StatCard>
              <div className="icon info"><Shield size={20} /></div>
              <div className="stat">
                <span className="label">Security</span>
                <span className="value">Protected & Insured</span>
              </div>
            </StatCard>
          </div>
        </HeaderSection>

        <ActionsRow>
          <ActionButton className="primary" onClick={() => setShowInvestModal(true)}>New Investment Plan</ActionButton>
          <ActionButton
            className="danger"
            onClick={() => {
              setModalType('withdrawal');
              setMessageText('For security reasons, please contact support to process all withdrawals.');
              setShowMessageModal(true);
            }}
          >
            Withdraw
          </ActionButton>
        </ActionsRow>

        <Row>
          <Col md="7">
            <Panel>
              <PanelHeader>
                <h3>Balance Overview</h3>
                <span className="tag">{userCurrency}</span>
              </PanelHeader>
              <BalanceHero>
                <div className="amount">{formatCurrency(activeUser?.balance, userCurrency)}</div>
                <p className="hint">This reflects your total available balance.</p>
              </BalanceHero>
            </Panel>
          </Col>
          <Col md="5">
            <Panel>
              <PanelHeader>
                <h3>Business Plan</h3>
                <span className="tag">Details</span>
              </PanelHeader>
              {plan ? (
                <PlanDetails>
                  <h4 className="plan-name">{plan.label}</h4>
                  <PlanMeta>
                    <div className="meta-box">
                      <span className="k">APY</span>
                      <span className="v">{plan.apy}</span>
                    </div>
                    <div className="meta-box">
                      <span className="k">Term</span>
                      <span className="v">{plan.term}</span>
                    </div>
                    {plan?.amount && (
                      <div className="meta-box">
                        <span className="k">Amount</span>
                        <span className="v">{currencySymbol(userCurrency)}{plan.amount}</span>
                      </div>
                    )}
                    {plan?.returnAmount && (
                      <div className="meta-box">
                        <span className="k">Est. Return</span>
                        <span className="v">{currencySymbol(userCurrency)}{plan.returnAmount}</span>
                      </div>
                    )}
                  </PlanMeta>
                  <p className="desc">{plan.description}</p>
                  {plan.userNotes && (
                    <div className="user-notes">
                      <h5>Notes:</h5>
                      <p className="notes-content">{plan.userNotes}</p>
                    </div>
                  )}
                  <ul className="benefits">
                    {plan.benefits.map((b) => (
                      <li key={b}><Info size={16} /> {b}</li>
                    ))}
                  </ul>
                </PlanDetails>
              ) : (
                <EmptyState>
                  <p>No investment plan selected yet. Choose a plan that fits your goals in Edit Profile.</p>
                </EmptyState>
              )}
            </Panel>
          </Col>
        </Row>
      </Container>

      {/* New Investment Modal */}
      <Modal show={showInvestModal} onHide={() => setShowInvestModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Select an Investment Plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PlanList>
            {Object.keys(PLAN_METADATA).map((key) => (
              <li key={key}>
                <div className="info">
                  <span className="name">{PLAN_METADATA[key].label}</span>
                  <span className="meta">{PLAN_METADATA[key].apy} • {PLAN_METADATA[key].term}</span>
                </div>
                <Button
                  variant="primary"
                  onClick={() => {
                    setShowInvestModal(false);
                    setModalType('deposit');
                    setMessageText('We are sorry, due to our security policy, you are required to contact customer support at this moment for any new Investments.');
                    setShowMessageModal(true);
                  }}
                >
                  Select
                </Button>
              </li>
            ))}
          </PlanList>
        </Modal.Body>
      </Modal>

      {/* Enhanced Message Modal */}
      <Modal show={showMessageModal} onHide={() => setShowMessageModal(false)} centered>
        <EnhancedModalContent>
          <ModalHeader>
            <div className="icon-wrapper">
              <AlertCircle size={24} />
            </div>
            <div className="header-content">
              <h4 className="modal-title">
                {modalType === 'deposit' ? 'Investment Request' : 'Withdrawal Request'}
              </h4>
              <p className="modal-subtitle">
                {modalType === 'deposit' ? 'New Investment Required' : 'Withdrawal Processing'}
              </p>
            </div>
            <button className="close-btn" onClick={() => setShowMessageModal(false)}>
              <X size={20} />
            </button>
          </ModalHeader>
          
          <ModalBody>
            <div className="message-content">
              <div className="main-message">
                <h5>Security Protocol Required</h5>
                <p>
                  {modalType === 'deposit' 
                    ? 'To ensure the highest level of security and compliance with our investment protocols, all new investment requests must be processed through our dedicated support team.'
                    : 'For your security and to ensure proper verification, all withdrawal requests must be processed through our dedicated support team.'
                  }
                </p>
              </div>
              
              <div className="security-notice">
                <div className="notice-icon">
                  <Shield size={20} />
                </div>
                <div className="notice-content">
                  <h6>Why Contact Support?</h6>
                  <ul>
                    <li>Enhanced security verification</li>
                    <li>Compliance with financial regulations</li>
                    <li>Personalized assistance for your account</li>
                    <li>Faster processing with dedicated support</li>
                  </ul>
                </div>
              </div>
              
              <div className="next-steps">
                <h6>Next Steps:</h6>
                <ol>
                  <li>Click "Contact Support" below</li>
                  <li>Your email will open with pre-filled details</li>
                  <li>Specify the amount you want to invest or withdraw</li>
                  <li>Our team will process your request within 24 hours</li>
                  <li>You'll receive confirmation via email</li>
                </ol>
              </div>
            </div>
          </ModalBody>
          
          <ModalFooter>
            <Button 
              variant="outline-secondary" 
              className="cancel-btn"
              onClick={() => setShowMessageModal(false)}
            >
              Cancel
            </Button>
            <Button 
              variant="primary" 
              className="contact-btn"
              onClick={handleContactSupport}
            >
              <Mail size={16} />
              Contact Support
            </Button>
          </ModalFooter>
        </EnhancedModalContent>
      </Modal>
    </DashboardWrapper>
  );
};

const DashboardWrapper = styled.div`
  background-color: #f5f6fa;
  min-height: 100vh;
  padding: 32px 0 60px;
  color: #0f172a;
`;

const HeaderSection = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 24px;
  margin-top: 60px;

  .user-block {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .avatar {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  }

  .meta .greeting {
    margin: 0;
    font-weight: 600;
    color: #475569;
    letter-spacing: 0.3px;
  }
  .meta .username {
    margin: 0;
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: #0f172a;
  }
  .meta .subtitle {
    margin: 6px 0 0;
    color: #64748b;
  }

  .quick-stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    gap: 12px;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    .quick-stats { grid-template-columns: 1fr; width: 100%; }
  }
`;

const ActionsRow = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin: 16px 0 24px;
`;

const ActionButton = styled.button`
  padding: 12px 16px;
  border-radius: 5px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #0f172a;
  font-weight: 700;
  cursor: pointer;
  transition: all .2s ease;
  box-shadow: 0 6px 16px rgba(0,0,0,0.06);

  &.primary { background: white; color:black; border: 1px solid #64748b; }
  &.danger { background: black; color: white; border: none; }

  &:hover { transform: translateY(-1px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
`;

const StatCard = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.06);

  .icon { width: 36px; height: 36px; border-radius: 50%; display:flex; align-items:center; justify-content:center; }
  .icon.primary { background: linear-gradient(135deg, rgba(102,126,234,0.25), rgba(118,75,162,0.25)); }
  .icon.success { background: linear-gradient(135deg, rgba(16,185,129,0.25), rgba(5,150,105,0.25)); }
  .icon.info { background: linear-gradient(135deg, rgba(59,130,246,0.25), rgba(14,165,233,0.25)); }

  .label { display:block; font-size: 0.8rem; color: #64748b; }
  .value { display:block; font-size: 1.05rem; font-weight: 700; color: #0f172a; }
`;

const Panel = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  margin-bottom: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.06);
`;

const PanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 18px;
  background: #f8fafc;
  border-bottom: 1px solid #e5e7eb;

  h3 { margin: 0; font-weight: 800; letter-spacing: -0.01em; color: #0f172a; }
  .tag { font-size: 0.75rem; padding: 6px 10px; border-radius: 999px; background: #eef2ff; color: #4338ca; }
`;

const BalanceHero = styled.div`
  padding: 28px 18px 24px;
  .amount { font-size: 2.2rem; font-weight: 900; letter-spacing: -0.03em; color: #0f172a; }
  .hint { margin: 8px 0 0; color: #64748b; }
`;

const PlanDetails = styled.div`
  padding: 18px;
  .plan-name { margin: 0 0 10px; font-weight: 800; letter-spacing: -0.01em; color: #0f172a; }
  .desc { color: #334155; margin: 10px 0 16px; }
  .user-notes { 
    margin: 16px 0; 
    padding: 12px; 
    background: #f8fafc; 
    border-radius: 8px; 
    border-left: 3px solid #667eea;
  }
  .user-notes h5 { 
    margin: 0 0 8px; 
    font-size: 0.9rem; 
    font-weight: 600; 
    color: #667eea; 
  }
  .notes-content { 
    margin: 0; 
    color: #475569; 
    font-size: 0.9rem; 
    line-height: 1.5; 
    white-space: pre-wrap; 
  }
  .benefits { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: 1fr; gap: 8px; }
  .benefits li { display:flex; align-items:center; gap:8px; color: #0f172a; }
`;

const PlanMeta = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 12px 0 8px;
  .meta-box { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 10px; padding: 10px; }
  .k { display:block; font-size: 0.75rem; color: #64748b; }
  .v { display:block; font-weight: 700; color: #0f172a; }

  @media (max-width: 576px) { grid-template-columns: 1fr; }
`;

const EmptyState = styled.div`
  padding: 18px;
  color: #334155;
`;

const PlanList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 12px;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    background: #ffffff;
  }

  .info { display: flex; flex-direction: column; }
  .name { font-weight: 700; color: #0f172a; }
  .meta { color: #64748b; font-size: 0.9rem; }
`;

// Enhanced Modal Styles - Matching existing design system
const EnhancedModalContent = styled.div`
  border: none;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.06);
  background: #ffffff;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px 18px;
  background: #f8fafc;
  border-bottom: 1px solid #e5e7eb;
  position: relative;

  .icon-wrapper {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(102,126,234,0.25), rgba(118,75,162,0.25));
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 4px;
    color: #667eea;
  }

  .header-content {
    flex: 1;
  }

  .modal-title {
    margin: 0 0 4px;
    font-size: 1.2rem;
    font-weight: 800;
    letter-spacing: -0.01em;
    color: #0f172a;
  }

  .modal-subtitle {
    margin: 0;
    font-size: 0.9rem;
    color: #64748b;
    font-weight: 500;
  }

  .close-btn {
    position: absolute;
    top: 16px;
    right: 18px;
    background: transparent;
    border: none;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #64748b;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: #f1f5f9;
      color: #0f172a;
      transform: scale(1.05);
    }
  }
`;

const ModalBody = styled.div`
  padding: 18px;

  .message-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .main-message {
    h5 {
      margin: 0 0 10px;
      font-size: 1.1rem;
      font-weight: 800;
      color: #0f172a;
      letter-spacing: -0.01em;
    }

    p {
      margin: 0;
      color: #334155;
      line-height: 1.5;
      font-size: 0.95rem;
    }
  }

  .security-notice {
    display: flex;
    gap: 12px;
    padding: 12px;
    background: #f8fafc;
    border-radius: 8px;
    border-left: 3px solid #667eea;

    .notice-icon {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: linear-gradient(135deg, rgba(102,126,234,0.25), rgba(118,75,162,0.25));
      display: flex;
      align-items: center;
      justify-content: center;
      color: #667eea;
      flex-shrink: 0;
    }

    .notice-content {
      flex: 1;

      h6 {
        margin: 0 0 8px;
        font-size: 0.9rem;
        font-weight: 600;
        color: #667eea;
      }

      ul {
        margin: 0;
        padding: 0;
        list-style: none;

        li {
          position: relative;
          padding-left: 16px;
          margin-bottom: 6px;
          color: #475569;
          font-size: 0.9rem;
          line-height: 1.4;

          &:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #10b981;
            font-weight: bold;
            font-size: 0.8rem;
          }
        }
      }
    }
  }

  .next-steps {
    h6 {
      margin: 0 0 12px;
      font-size: 0.9rem;
      font-weight: 600;
      color: #667eea;
    }

    ol {
      margin: 0;
      padding-left: 16px;
      color: #475569;

      li {
        margin-bottom: 6px;
        line-height: 1.4;
        font-size: 0.9rem;
      }
    }
  }
`;

const ModalFooter = styled.div`
  display: flex;
  gap: 12px;
  padding: 16px 18px;
  justify-content: flex-end;
  background: #f8fafc;
  border-top: 1px solid #e5e7eb;

  .cancel-btn {
    padding: 12px 16px;
    border: 1px solid #e5e7eb;
    background: #ffffff;
    color: #0f172a;
    font-weight: 700;
    border-radius: 5px;
    transition: all 0.2s ease;
    box-shadow: 0 6px 16px rgba(0,0,0,0.06);

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.1);
      border-color: #d1d5db;
    }
  }

  .contact-btn {
    padding: 12px 16px;
    background: black;
    border: none;
    color: white;
    font-weight: 700;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.2s ease;
    box-shadow: 0 6px 16px rgba(0,0,0,0.06);

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.1);
      background: #1f2937;
    }
  }
`;

export default Profile;
