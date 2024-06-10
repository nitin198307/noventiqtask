// App.js

import React, { useState } from 'react';
import EmailField from './Components/EmailField';
import PasswordField from './Components/PasswordField';
import LanguageSelector from './Components/LanguageSelector';
import './App.css';

const getBrowserLanguage = () => {
  if (navigator && navigator.language) {
    const lang = navigator.language.split('-')[0];
    const supportedLanguages = ['en', 'hi', 'ta'];
    return supportedLanguages.includes(lang) ? lang : 'en';
  }
  return 'en'; // Default to English if navigator.language is not available
};

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(getBrowserLanguage());
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [loginMessage, setLoginMessage] = useState('');

  const handleLogin = () => {
    if (emailValid && password) {
      setLoginMessage('Login successful!');
    } else {
      setLoginMessage('Please enter a valid email and password.');
    }
  };

  const isSubmitDisabled = !email || !password || !emailValid;

  return (
    <div className="App">
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" className="logo" />

      <EmailField email={email} setEmail={setEmail} setEmailValid={setEmailValid} selectedLanguage={selectedLanguage} />
      <PasswordField password={password} setPassword={setPassword} selectedLanguage={selectedLanguage} />
      <LanguageSelector setLanguage={setSelectedLanguage} />
      <button onClick={handleLogin} disabled={isSubmitDisabled}>Login</button>
      {loginMessage && <p>{loginMessage}</p>}
    </div>
  );
};

export default App; 
