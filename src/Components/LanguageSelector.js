// LanguageSelector.js

import React, { useState, useEffect } from 'react';

const languages = {
  en: { greeting: 'English!' },
  hi: { greeting: 'हिंदी!' },
  ta: { greeting: 'வணக்கம்!' } // Add more languages as needed
};

const getBrowserLanguage = () => {
  const lang = navigator.language.split('-')[0];
  const supportedLanguages = ['en', 'hi', 'ta'];
  return supportedLanguages.includes(lang) ? lang : 'en';
};

const LanguageSelector = ({ setLanguage }) => {
  const [language, setLanguageState] = useState(getBrowserLanguage());

  const changeLanguage = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    setLanguageState(selectedLanguage);
  };

  useEffect(() => {
    document.getElementById('greeting').innerText = languages[language].greeting;
  }, [language]);

  return (
    <div>
      <div className='d-flex'> 
        <span>Language</span> 
        <select value={language} onChange={changeLanguage}>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="ta">Tamil</option>
        </select>
      </div>
   
      <div id="content">
        <p id="greeting">{languages[language].greeting}</p>
      </div>
    </div>
  );
};

export default LanguageSelector;
