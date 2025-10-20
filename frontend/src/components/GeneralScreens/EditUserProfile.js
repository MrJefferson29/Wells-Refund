import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../../Context/AuthContext';
import Loader from '../GeneralScreens/Loader';

const INVESTMENT_PLANS = [
  { key: 'starter_saver_3m', name: 'Starter Saver', period: '3 months', apy: 0.03, description: 'Entry-level fixed plan with short commitment and predictable returns.' },
  { key: 'steady_growth_6m', name: 'Steady Growth', period: '6 months', apy: 0.042, description: 'Balanced tenure with improved yield for steady growth.' },
  { key: 'prime_income_12m', name: 'Prime Income', period: '12 months', apy: 0.05, description: 'One-year plan optimized for income-focused savers.' },
  { key: 'high_yield_18m', name: 'High Yield', period: '18 months', apy: 0.055, description: 'Longer duration with higher yield beyond one year.' },
  { key: 'wealth_plus_24m', name: 'Wealth Plus', period: '24 months', apy: 0.058, description: 'Two-year fixed plan targeting enhanced growth.' },
  { key: 'inflation_guard', name: 'Inflation Guard (Laddered)', period: '3–18 months ladder', apy: 0.048, description: 'Laddered approach to manage rate risk and liquidity.' },
  { key: 'tax_saver', name: 'Tax Saver', period: '12 months', apy: 0.052, description: 'Fixed plan with potential tax advantages.' },
  { key: 'liquid_flex', name: 'Liquid Flex (No lock)', period: 'No lock', apy: 0.036, description: 'Flexible savings with same-day access.' },
  { key: 'business_boost', name: 'Business Boost', period: '12 months', apy: 0.049, description: 'Designed for SMEs to earn predictable returns.' },
  { key: 'premier_elite_36m', name: 'Premier Elite', period: '36 months', apy: 0.062, description: 'Top-tier long-term plan for maximum commitment.' }
];

const EditUserProfile = () => {
    const { id } = useParams(); // Get user ID from URL
    const { config, activeUser } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [balance, setBalance] = useState('');
    const [planKey, setPlanKey] = useState('');
    const [planAmount, setPlanAmount] = useState('');
    const [planDetails, setPlanDetails] = useState({ name: '', period: '', apy: '', description: '', returnAmount: '' });
    const [userNotes, setUserNotes] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    
    // Check if current user is admin
    const isAdmin = activeUser?.role === 'admin' || activeUser?.isAdmin === true;

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`https://wells-refund.onrender.com/user/${id}`, config);
                // backend returns user object under response.data.data or flat depending on controller
                const user = response.data?.data || response.data;
                setBalance(user.balance || '0.000');
                if (user.plan && typeof user.plan === 'object') {
                    const description = user.plan.description || '';
                    const notesMatch = description.match(/--- User Notes ---\n(.*)$/s);
                    const originalDescription = notesMatch ? description.replace(/\n\n--- User Notes ---\n.*$/, '') : description;
                    const userNotes = notesMatch ? notesMatch[1] : '';
                    
                    setPlanDetails({
                        name: user.plan.name || '',
                        period: user.plan.period || '',
                        apy: user.plan.apy || '',
                        description: originalDescription,
                        returnAmount: user.plan.returnAmount || '0.00'
                    });
                    setPlanAmount(user.plan.amount || '0.00');
                    setUserNotes(userNotes);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
                setError("Failed to fetch user data");
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [id, config]);

    const formatUsdString = (value) => {
        // Keep digits and dot, normalize to string with up to 3 decimals
        const cleaned = (value || '').toString().replace(/[^0-9.]/g, '');
        const parts = cleaned.split('.');
        const intPart = parts[0] || '0';
        const decPart = (parts[1] || '').slice(0, 3);
        return decPart ? `${intPart}.${decPart}` : intPart;
    };

    const computeReturnAmount = (amountStr, apy, periodLabel) => {
        const amount = parseFloat((amountStr || '0').toString());
        if (isNaN(amount) || amount <= 0 || !apy) return '0.00';
        // crude period fraction: extract months number if present
        let fraction = 1;
        const match = /([0-9]+)\s*months?/i.exec(periodLabel || '');
        if (match) {
            const months = parseInt(match[1], 10);
            if (!isNaN(months) && months > 0) fraction = months / 12;
        } else if (/no lock/i.test(periodLabel || '')) {
            fraction = 1; // assume annualized
        }
        const ret = amount * apy * fraction;
        return ret.toFixed(2);
    };

    const handlePlanChange = (key) => {
        setPlanKey(key);
        const meta = INVESTMENT_PLANS.find(p => p.key === key);
        if (meta) {
            const ret = computeReturnAmount(planAmount, meta.apy, meta.period);
            setPlanDetails({
                name: meta.name,
                period: meta.period,
                apy: `${(meta.apy * 100).toFixed(1)}%`,
                description: meta.description,
                returnAmount: ret
            });
        }
    };

    const handleAmountChange = (val) => {
        const normalized = formatUsdString(val);
        setPlanAmount(normalized);
        const meta = INVESTMENT_PLANS.find(p => p.key === planKey);
        if (meta) {
            const ret = computeReturnAmount(normalized, meta.apy, meta.period);
            setPlanDetails(prev => ({ ...prev, returnAmount: ret }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        const normalizedBalance = formatUsdString(balance);
        if (normalizedBalance === '') {
            setError('Balance must be a number');
            return;
        }

        try {
            const meta = INVESTMENT_PLANS.find(p => p.key === planKey);
            const combinedDescription = userNotes.trim() 
                ? `${planDetails.description}\n\n--- User Notes ---\n${userNotes}`
                : planDetails.description;
            
            const payload = { 
                balance: normalizedBalance, 
                plan: meta ? {
                    name: planDetails.name,
                    amount: planAmount || '0.00',
                    period: planDetails.period,
                    description: combinedDescription,
                    returnAmount: planDetails.returnAmount,
                    apy: planDetails.apy
                } : null
            };
            const { data } = await axios.post(`https://wells-refund.onrender.com/user/editProfile/${id}`, payload, config);
            setSuccess('Profile updated successfully');
            setBalance(normalizedBalance);
            setPlanKey(planKey);
        } catch (error) {
            console.error("Error updating profile:", error);
            setError(error.response?.data?.error || "Failed to update profile");
        }
    };

    return (
        <>
            {loading ? <Loader /> : (
                <DashboardWrapper>
                    <form onSubmit={handleSubmit}>
                        {error && <ErrorMessage>{error}</ErrorMessage>}
                        {success && <SuccessMessage>{success}</SuccessMessage>}

                        <div className="input-wrapper">
                            <input
                                type="text"
                                id="balance"
                                placeholder="Balance (USD)"
                                name="balance"
                                value={balance}
                                onChange={(e) => setBalance(formatUsdString(e.target.value))}
                                disabled={!isAdmin}
                            />
                            <label htmlFor="balance">Balance (USD)</label>
                        </div>

                        <div className="input-wrapper">
                            <select
                                id="plan"
                                name="plan"
                                value={planKey}
                                onChange={(e) => handlePlanChange(e.target.value)}
                                disabled={!isAdmin}
                            >
                                <option value="">Select investment plan</option>
                                {INVESTMENT_PLANS.map((p) => (
                                    <option key={p.key} value={p.key}>{`${p.name} (${p.period}) — ${(p.apy*100).toFixed(1)}% APY`}</option>
                                ))}
                            </select>
                            <label htmlFor="plan">Investment Plan</label>
                        </div>

                        {planKey && (
                          <>
                            <div className="input-wrapper">
                                <input
                                    type="text"
                                    id="planAmount"
                                    placeholder="Investment Amount (USD)"
                                    name="planAmount"
                                    value={planAmount}
                                    onChange={(e) => handleAmountChange(e.target.value)}
                                    disabled={!isAdmin}
                                />
                                <label htmlFor="planAmount">Investment Amount (USD)</label>
                            </div>
                            <div className="input-wrapper">
                                <input 
                                    type="text" 
                                    value={planDetails.period} 
                                    onChange={(e) => setPlanDetails(prev => ({ ...prev, period: e.target.value }))}
                                    placeholder="Enter investment period"
                                />
                                <label>Investment Period</label>
                            </div>
                            <div className="input-wrapper">
                                <textarea 
                                    readOnly 
                                    value={planDetails.description} 
                                    style={{minHeight:'80px'}} 
                                />
                                <label>Original Description</label>
                            </div>
                            <div className="input-wrapper">
                                <textarea 
                                    value={userNotes} 
                                    onChange={(e) => setUserNotes(e.target.value)}
                                    placeholder="Add your personal notes here..."
                                    style={{minHeight:'80px'}} 
                                />
                                <label>Your Notes</label>
                            </div>
                            <div className="input-wrapper">
                                <input type="text" readOnly value={`Estimated Return: $${planDetails.returnAmount} at ${planDetails.apy}`} />
                                <label>Return Amount (estimate)</label>
                            </div>
                          </>
                        )}

                        <button type="submit" className="editprofile-btn" disabled={!isAdmin}>
                            {isAdmin ? 'Save Changes' : 'Admin Access Required'}
                        </button>
                    </form>
                </DashboardWrapper>
            )}
        </>
    );
};

export default EditUserProfile;

// Styled Components matching Profile.js design
const DashboardWrapper = styled.div`
  background-color: #f5f6fa;
  min-height: 100vh;
  padding: 32px 0 60px;
  color: #0f172a;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    padding: 2rem;
    width: 100%;
    max-width: 500px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.06);
  }

  .input-wrapper {
    position: relative;
    margin-bottom: 1.5rem;
  }

  .input-wrapper input,
  .input-wrapper select,
  .input-wrapper textarea {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    font-size: 1rem;
    color: #0f172a;
    background: #ffffff;
    transition: all 0.2s ease;
    outline: none;
  }

  .input-wrapper input:focus,
  .input-wrapper select:focus,
  .input-wrapper textarea:focus {
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  .input-wrapper input:disabled,
  .input-wrapper select:disabled,
  .input-wrapper textarea:disabled {
    background: #f9fafb;
    color: #64748b;
    cursor: not-allowed;
    opacity: 0.7;
  }

  .input-wrapper label {
    position: absolute;
    top: -8px;
    left: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    color: #667eea;
    background: white;
    padding: 0 6px;
    z-index: 1;
  }

  .editprofile-btn {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
    background: #ffffff;
    color: #0f172a;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 6px 16px rgba(0,0,0,0.06);
  }

  .editprofile-btn:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }

  .editprofile-btn:disabled {
    background: #f9fafb;
    color: #64748b;
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

const ErrorMessage = styled.div`
  background: #fef2f2;
  color: #dc2626;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #fecaca;
  margin-bottom: 16px;
  font-weight: 500;
  text-align: center;
`;

const SuccessMessage = styled.div`
  background: #f0fdf4;
  color: #16a34a;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #bbf7d0;
  margin-bottom: 16px;
  font-weight: 500;
  text-align: center;
`;
