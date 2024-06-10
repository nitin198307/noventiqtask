// EmailField.js

import React, { useState, useEffect } from 'react';

const EmailField = ({ email, setEmail, setEmailValid, selectedLanguage }) => {
  const [error, setError] = useState('');

  useEffect(() => {
    if (email) {
      validateEmail(email);
    } else {
      setError('');
      setEmailValid(false);
    }
  }, [email]);

  const validateEmail = (emailValue) => {
    const publicDomains = ['gmail.com', 'outlook.com', 'yahoo.com'];
    const corporateDomains = ['noventiq.com', 'yourcorporate.com'];
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const domain = emailValue.split('@')[1];

    if (!emailPattern.test(emailValue) || publicDomains.includes(domain) || !corporateDomains.includes(domain)) {
      setError('Invalid email address');
      setEmailValid(false);
    } else {
      setError('');
      setEmailValid(true);
    }
  };

  return (
    <div>
      <div className='d-flex'>
        <span>{selectedLanguage === 'hi' ? 'ईमेल' : selectedLanguage === 'ta' ? 'மின்னஞ்சல்' : 'Email'}</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={selectedLanguage === 'hi' ? 'अपना ईमेल दर्ज करें' : selectedLanguage === 'ta' ? 'உங்கள் மின்னஞ்சலை உள்ளிடவும்' : 'Enter your email'}
        />
      </div>
     
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
}; 

export default EmailField;
