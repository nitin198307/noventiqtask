// PasswordField.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const PasswordField = ({ password, setPassword, selectedLanguage }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{ position: 'relative' }}>
      <div className='d-flex'>
        <span>{selectedLanguage === 'hi' ? 'पासवर्ड' : selectedLanguage === 'ta' ? 'கடவுச்சொல்' : 'Password'}</span>
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={selectedLanguage === 'hi' ? 'अपना पासवर्ड दर्ज करें' : selectedLanguage === 'ta' ? 'உங்கள் கடவுச்சொல்லை உள்ளிடவும்' : 'Enter your password'}
          style={{ paddingRight: '40px' }}
        />
      </div>
   
      <span
        onClick={() => setShowPassword(!showPassword)}
        style={{ 
          position: 'absolute', 
          right: '10px', 
          top: '50%', 
          transform: 'translateY(-50%)', 
          cursor: 'pointer' 
        }} 
      >
        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
      </span>
    </div>
  );
};

export default PasswordField;
