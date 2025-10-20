import React, { useState, useEffect, useContext } from 'react';
import { Navbar, Nav, Container, Button, Dropdown, Badge, Modal } from 'react-bootstrap';
import { 
  Search,
  Trophy,
  Home,
  Heart,
  Menu as MenuIcon,
  User,
  LogIn,
  UserPlus,
  Settings,
  LogOut,
  Bell,
  Calendar,
  HelpCircle,
  Shield,
  Plus,
  Info,
  Phone,
  MessageSquare,
  BarChart3,
  Building2,
  TrendingUp,
  DollarSign,
  Briefcase,
  Banknote
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import '../../Css/Navbar.css';
import { AuthContext } from '../../Context/AuthContext';
import p1 from '../../Assets/p1.png';
import p2 from '../../Assets/p2.png';
import p3 from '../../Assets/p3.png';
import p4 from '../../Assets/p4.png';
import p5 from '../../Assets/p5.png';
import avatarFallback from '../../Assets/p3.png';

// Treat only real URLs as valid photos
const isValidPhotoUrl = (value) => {
  if (!value) return false;
  if (typeof value !== 'string') return false;
  const trimmed = value.trim().toLowerCase();
  if (trimmed === 'null' || trimmed === 'undefined') return false;
  return trimmed.startsWith('http') || trimmed.startsWith('data:') || trimmed.startsWith('blob:');
};

const assetAvatars = [p1, p2, p3, p4, p5, avatarFallback];

const NavbarComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [pendingHostApps] = useState(0); // Not used in this project, keep UI consistent
  const [showDashboardModal, setShowDashboardModal] = useState(false);
  const [dashboardModalUrl, setDashboardModalUrl] = useState('');
  const [randomAvatar, setRandomAvatar] = useState(null);

  const { activeUser } = useContext(AuthContext);
  const isAuthenticated = Boolean(localStorage.getItem('authToken')) && Boolean(activeUser);
  const isAdmin = activeUser?.role === 'admin';
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Generate and persist a random avatar per user when no profile photo exists
  useEffect(() => {
    if (!isAuthenticated || !activeUser) return;

    const candidatePhoto = activeUser?.photo ?? activeUser?.profileImage;
    if (isValidPhotoUrl(candidatePhoto)) return; // real photo available

    const userKey = activeUser?._id || activeUser?.username || 'anon';
    const storageKey = `random_asset_avatar_${userKey}`;
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      setRandomAvatar(stored);
      return;
    }
    const choice = assetAvatars[Math.floor(Math.random() * assetAvatars.length)];
    localStorage.setItem(storageKey, choice);
    setRandomAvatar(choice);
  }, [isAuthenticated, activeUser]);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/');
  };

  const handleDashboardClick = (e, url) => {
    e.preventDefault();
    try {
      const w = window.open(url, '_blank', 'noopener,noreferrer');
      if (!w || w.closed || typeof w.closed === 'undefined') {
        setDashboardModalUrl(url);
        setShowDashboardModal(true);
      }
    } catch (err) {
      setDashboardModalUrl(url);
      setShowDashboardModal(true);
    }
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  };

  const renderMainActionButton = () => {
    if (!isAuthenticated) {
      return (
        <Nav.Link as={Link} to="/login" className="host-link desktop-only">
          <LogIn /> Log in
        </Nav.Link>
      );
    }

    if (isAdmin) {
      return (
        <Nav.Link as={Link} to="/users" className="host-link desktop-only">
          <Shield /> Admin Panel
        </Nav.Link>
      );
    }

    return null;
  };

  const profilePhoto = isValidPhotoUrl(activeUser?.photo ?? activeUser?.profileImage)
    ? (activeUser?.photo ?? activeUser?.profileImage)
    : randomAvatar;

  return (
    <>
      <ResponsiveNavbarWrapper>
        <Navbar 
          bg="white" 
          expand="lg" 
          className={`airbnb-navbar ${isScrolled ? 'scrolled' : ''}`} 
          fixed="top"
          style={{ height: '80px' }}
        >
          <Container fluid>
            {/* Logo */}
            <Navbar.Brand as={Link} to="/" className="navbar-brand">
              <ProfessionalLogo>
                <div className="logo-icon">
                  <TrendingUp size={15} />
                </div>
                <div className="company-name">SwiftClaim</div>
              </ProfessionalLogo>
            </Navbar.Brand>

            {/* Navigation Links */}
            <Nav className="navbar-nav me-auto">
              <Nav.Link as={Link} to="/" className="nav-link">
                <Search /> Home
              </Nav.Link>
              <Nav.Link as={Link} to="/services" className="nav-link">
                <MessageSquare /> Services
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-link">
                <Info /> About
              </Nav.Link>
              <Nav.Link as={Link} to="/news" className="nav-link">
                <Phone /> News
              </Nav.Link>
              <Nav.Link as={Link} to="/policy" className="nav-link">
                <Phone /> Refund Policy
              </Nav.Link>
            </Nav>

            {/* Right Side Menu */}
            <div className="navbar-right">
              {renderMainActionButton()}

              <div className="user-menu-container" style={{ marginRight: '13px' }}>
                {isAuthenticated ? (
                  <Dropdown align="end">
                    <Dropdown.Toggle variant="light" className="user-menu-toggle">
                      <div className="user-menu-content">
                        <MenuIcon className="menu-icon" />
                        <div className="user-avatar">
                          {profilePhoto ? (
                            <img src={profilePhoto} alt={activeUser?.username || 'User'} />
                          ) : (
                            <User />
                          )}
                        </div>
                      </div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu container={document.body} className="user-dropdown-menu">
                      <Dropdown.Item as={Link} to="/">
                        <Search /> Home
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/services">
                        <MessageSquare /> Services
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/about">
                        <Info /> About
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/news">
                        <Phone /> News
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/policy">
                        <Phone /> Refund Policy
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item onClick={handleLogout}>
                        <LogOut /> Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  <Dropdown align="end">
                    <Dropdown.Toggle variant="light" className="user-menu-toggle">
                      <div className="user-menu-content">
                        <MenuIcon className="menu-icon" />
                        <User className="user-icon" />
                      </div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu container={document.body} className="user-dropdown-menu">
                      <Dropdown.Item as={Link} to="/login">
                        <LogIn /> Sign in
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/register">
                        <UserPlus /> Sign up
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item as={Link} to="/">
                        <Search /> Home
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/services">
                        <MessageSquare /> Services
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/about">
                        <Info /> About
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/news">
                        <Phone /> News
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/policy">
                        <Phone /> Refund Policy
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                )}
              </div>
            </div>
          </Container>
        </Navbar>
      </ResponsiveNavbarWrapper>

      {/* Dashboard URL Modal */}
      <Modal show={showDashboardModal} onHide={() => setShowDashboardModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <BarChart3 style={{ marginRight: '8px' }} />
            Dashboard Access
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Your Stripe Connect dashboard couldn't be opened automatically. Please use one of these options:
          </p>
          <div style={{ marginBottom: '20px' }}>
            <Button 
              variant="primary" 
              onClick={() => window.open(dashboardModalUrl, '_blank', 'noopener,noreferrer')}
              style={{ marginRight: '10px' }}
            >
              <BarChart3 /> Try Opening Again
            </Button>
            <Button 
              variant="outline-secondary" 
              onClick={() => copyToClipboard(dashboardModalUrl)}
            >
              📋 Copy URL
            </Button>
          </div>
          <div style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '15px', 
            borderRadius: '8px',
            border: '1px solid #dee2e6'
          }}>
            <label style={{ fontWeight: '600', marginBottom: '8px', display: 'block' }}>
              Dashboard URL:
            </label>
            <input
              type="text"
              value={dashboardModalUrl}
              readOnly
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ced4da',
                borderRadius: '4px',
                backgroundColor: 'white',
                fontFamily: 'monospace',
                fontSize: '12px'
              }}
              onClick={(e) => e.target.select()}
            />
          </div>
          <div style={{ marginTop: '15px', fontSize: '14px', color: '#6c757d' }}>
            <p><strong>Note:</strong> If you continue to have issues accessing your dashboard, please:</p>
            <ul style={{ marginBottom: '0', paddingLeft: '20px' }}>
              <li>Complete your Stripe Connect account verification</li>
              <li>Ensure your bank account is properly linked</li>
              <li>Contact support if the issue persists</li>
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDashboardModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const ResponsiveNavbarWrapper = styled.div`
  .airbnb-navbar {
    background: var(--color-surface) !important;
    color: var(--color-text) !important;
    border-bottom: 1.5px solid var(--color-border);
  }

  .dashboard-link {
    color: var(--color-primary) !important;
    font-weight: 600;
    transition: all 0.3s ease;
    
    &:hover {
      color: var(--color-primary-dark) !important;
      transform: translateY(-1px);
    }
  }

  .host-link {
    .setup-required {
      font-size: 0.8rem;
      color: #666;
      cursor: help;
      border-bottom: 1px dotted #666;
      transition: color 0.3s ease;

  &:hover {
        color: #333;
      }
    }
  }

  // Modal styling
  .modal-content {
    border-radius: 12px;
    border: none;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }

  .modal-header {
    border-bottom: 1px solid #e9ecef;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    border-radius: 12px 12px 0 0;
  }

  .modal-title {
    color: #333;
    font-weight: 600;
  }

  .modal-body {
    padding: 24px;
  }

  .modal-footer {
    border-top: 1px solid #e9ecef;
    padding: 16px 24px;
  }
`;

const ProfessionalLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: scale(1.02);
  }
  
  .logo-icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, rgba(255, 56, 92, 0.1), rgba(255, 56, 92, 0.05));
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FF385C;
    transition: all 0.3s ease;
  }
  
  .company-name {
    font-family: 'Inter', 'Segoe UI', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: #FF385C;
    text-shadow: 0 1px 2px rgba(255, 56, 92, 0.1);
    transition: all 0.3s ease;
  }
  
  &:hover .logo-icon {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(255, 56, 92, 0.2);
  }
  
  &:hover .company-name {
    text-shadow: 0 2px 4px rgba(255, 56, 92, 0.2);
  }
`;

export default NavbarComponent;