import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import Loader from '../GeneralScreens/Loader';
import '../../Css/EditProfile.css';

const INVESTMENT_PLANS = [
  { value: 'starter_saver_3m', label: 'Starter Saver (3 months) — 3.0% APY' },
  { value: 'steady_growth_6m', label: 'Steady Growth (6 months) — 4.2% APY' },
  { value: 'prime_income_12m', label: 'Prime Income (12 months) — 5.0% APY' },
  { value: 'high_yield_18m', label: 'High Yield (18 months) — 5.5% APY' },
  { value: 'wealth_plus_24m', label: 'Wealth Plus (24 months) — 5.8% APY' },
  { value: 'inflation_guard', label: 'Inflation Guard (Laddered) — 4.8% blended' },
  { value: 'tax_saver', label: 'Tax Saver (Fixed) — 5.2% APY' },
  { value: 'liquid_flex', label: 'Liquid Flex (No lock) — 3.6% APY' },
  { value: 'business_boost', label: 'Business Boost (12 months) — 4.9% APY' },
  { value: 'premier_elite_36m', label: 'Premier Elite (36 months) — 6.2% APY' }
];

const EditProfile = () => {
  const { id } = useParams();
  const { config } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [balance, setBalance] = useState('');
  const [plan, setPlan] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://wells-refund.onrender.com/user/${id}`, config);
        // backend returns user object under response.data.data or flat depending on controller
        const user = response.data?.data || response.data;
        setBalance(user.balance || '0.000');
        setPlan(user.plan || 'null');
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Failed to fetch user data');
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
      const payload = { balance: normalizedBalance, plan };
      const { data } = await axios.post(`https://wells-refund.onrender.com/user/editProfile/${id}`, payload, config);
      setSuccess('Profile updated successfully');
      setBalance(normalizedBalance);
      setPlan(plan);
    } catch (error) {
      console.error('Error updating profile:', error);
      setError(error.response?.data?.error || 'Failed to update profile');
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="Inclusive-editprofile-page">
          <form onSubmit={handleSubmit}>
            {error && <div className="error_msg">{error}</div>}
            {success && <div className="success_msg">{success}</div>}

            <div className="input-wrapper">
              <input
                type="text"
                id="balance"
                placeholder="Balance (USD)"
                name="balance"
                value={balance}
                onChange={(e) => setBalance(formatUsdString(e.target.value))}
              />
              <label htmlFor="balance">Balance (USD)</label>
            </div>

            <div className="input-wrapper">
              <select
                id="plan"
                name="plan"
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
              >
                <option value="">Select investment plan</option>
                {INVESTMENT_PLANS.map((p) => (
                  <option key={p.value} value={p.value}>{p.label}</option>
                ))}
              </select>
              <label htmlFor="plan">Investment Plan</label>
            </div>

            <button type="submit" className="editprofile-btn">Save Changes</button>
          </form>
        </div>
      )}
    </>
  );
};

export default EditProfile;
