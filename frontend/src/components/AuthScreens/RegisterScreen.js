import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { Shield, TrendingUp, Wallet, Mail, User, Lock } from "lucide-react";

const Container = styled.div`
  background-color: #f5f6fa;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 0;
  color: #0f172a;
`;

const AuthWrapper = styled.div`
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  padding: 0 20px;
`;

const AuthCard = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.06);
`;

const AuthHeader = styled.div`
  padding: 32px 24px 24px;
  text-align: center;
  background: #f8fafc;
  border-bottom: 1px solid #e5e7eb;
`;

const CompanyLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 16px;
  
  .logo-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(102,126,234,0.25), rgba(118,75,162,0.25));
    display: flex;
    align-items: center;
    justify-content: center;
    color: #667eea;
  }
  
  .company-name {
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: #0f172a;
  }
`;

const AuthTitle = styled.h2`
  margin: 0 0 8px;
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #0f172a;
`;

const AuthSubtitle = styled.p`
  margin: 0;
  color: #64748b;
  font-size: 1rem;
`;

const AuthBody = styled.div`
  padding: 32px 24px;
`;

const TopSuggestLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 32px;
  font-size: 0.95rem;
  color: #64748b;
  
  .login-link {
    color: #667eea;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: #5a67d8;
    }
  }
`;

const ErrorMessage = styled.div`
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  padding: 12px 16px;
  margin-bottom: 20px;
  color: #dc2626;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;

  .input-icon {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: #64748b;
    z-index: 1;
  }

  input {
    width: 100%;
    padding: 16px 16px 16px 48px;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    background: #ffffff;
    color: #0f172a;
    font-size: 1rem;
    transition: all 0.2s ease;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);

    &:focus {
      border-color: #667eea;
      outline: none;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    &::placeholder {
      color: #9ca3af;
    }
  }
`;

const RegisterButton = styled.button`
  width: 100%;
  padding: 16px;
  background: black;
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 6px 16px rgba(0,0,0,0.06);
  margin-top: 8px;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    background: #1f2937;
  }

  &:active {
    transform: translateY(0);
  }
`;

const FeaturesSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid #e5e7eb;
`;

const FeatureItem = styled.div`
  text-align: center;
  
  .feature-icon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(102,126,234,0.25), rgba(118,75,162,0.25));
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 8px;
    color: #667eea;
  }
  
  .feature-text {
    font-size: 0.8rem;
    color: #64748b;
    font-weight: 500;
  }
`;

const BackgroundPattern = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.03;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 20% 80%, #667eea 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, #764ba2 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, #667eea 0%, transparent 50%);
  }
`;

const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setError("Passwords do not match");
      setTimeout(() => setError(""), 8000);
      return;
    }

    try {
      const { data } = await axios.post("https://wells-refund.onrender.com/auth/register", {
        username,
        email,
        password,
      });
      localStorage.setItem("authToken", data.token);
      setTimeout(() => navigate('/'), 1800);
    } catch (error) {
      setError(error.response?.data?.error || "Registration failed");
      setTimeout(() => setError(""), 6000);
    }
  };

  return (
    <Container>
      <BackgroundPattern />
      <AuthWrapper>
        <AuthCard>
          <AuthHeader>
            <CompanyLogo>
              <div className="logo-icon">
                <Wallet size={20} />
              </div>
              <div className="company-name">SwiftClaim</div>
            </CompanyLogo>
            <AuthTitle>Create Account</AuthTitle>
            <AuthSubtitle>Join thousands of investors building wealth</AuthSubtitle>
          </AuthHeader>
          
          <AuthBody>
            <TopSuggestLogin>
              <span>Have an account?</span>
              <a href="/login" className="login-link">Sign In</a>
            </TopSuggestLogin>
            
            <form onSubmit={registerHandler}>
              {error && (
                <ErrorMessage>
                  <Shield size={16} />
                  {error}
                </ErrorMessage>
              )}
              
              <InputWrapper>
                <User size={20} className="input-icon" />
                <input
                  type="text"
                  required
                  id="name"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </InputWrapper>
              
              <InputWrapper>
                <Mail size={20} className="input-icon" />
                <input
                  type="email"
                  required
                  id="email"
                  placeholder="E-mail"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  tabIndex={1}
                />
              </InputWrapper>
              
              <InputWrapper>
                <Lock size={20} className="input-icon" />
                <input
                  type="password"
                  required
                  id="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  tabIndex={2}
                />
              </InputWrapper>
              
              <InputWrapper>
                <Lock size={20} className="input-icon" />
                <input
                  type="password"
                  required
                  id="confirmpassword"
                  placeholder="Confirm Password"
                  value={confirmpassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </InputWrapper>

              <RegisterButton type="submit">Create Account</RegisterButton>
            </form>
            
            <FeaturesSection>
              <FeatureItem>
                <div className="feature-icon">
                  <Shield size={16} />
                </div>
                <div className="feature-text">Secure</div>
              </FeatureItem>
              <FeatureItem>
                <div className="feature-icon">
                  <TrendingUp size={16} />
                </div>
                <div className="feature-text">Profitable</div>
              </FeatureItem>
              <FeatureItem>
                <div className="feature-icon">
                  <Wallet size={16} />
                </div>
                <div className="feature-text">Reliable</div>
              </FeatureItem>
            </FeaturesSection>
          </AuthBody>
        </AuthCard>
      </AuthWrapper>
    </Container>
  );
};

export default RegisterScreen;
