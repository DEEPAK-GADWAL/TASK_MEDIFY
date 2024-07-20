import React, { useState } from 'react';
import styles from './PhoneNumberCode.module.css';

function PhoneNumberCode() {
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+1'); 

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  return (
    <div className={styles.phoneInputContainer}>
      <select className={styles.countryCode} value={countryCode} onChange={handleCountryCodeChange}>
        <option value="+1">+1 (US)</option>
        <option value="+44">+44 (UK)</option>
        <option value="+91">+91 (India)</option>
        <option value="+61">+61 (Australia)</option>
      </select>
      <input
        type="tel"
        className={styles.phoneInput}
        placeholder="Phone Number"
        value={phone}
        onChange={handlePhoneChange}
      />
    </div>
  );
}

export default PhoneNumberCode;
