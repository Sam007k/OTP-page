import { useState } from "react";

const PhoneVerification = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    const re = /^[0-9\b]+$/;
    if (element.value === "" || re.test(element.value)) {
      setOtp([...otp.map((num, idx) => (idx === index ? element.value : num))]);
    }
    // For on next Input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleKeyPress = (e, idx) => {
    // Focus on previous Input
    if (e.keyCode === 8) {
      if (e.target.previousSibling) {
        e.target.previousSibling.focus();
      }
    }
    // Use Arrow keys to move left and right
    if (e.keyCode === 37) {
      if (e.target.previousSibling) {
        e.target.previousSibling.focus();
      }
    }
    if (e.keyCode === 39) {
      if (e.target.nextSibling) {
        e.target.nextSibling.focus();
      }
    }
  };

  // Pasting data from clipboard
  const handlePasteEvent = (data) => {
    let pastedData = data.split("");
    for (let i = 0; i < pastedData.length; i++) {
      otp.fill(pastedData[i], i);
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Phone Verification</h1>
      <p>Enter the OTP you received on 89206-XXXX</p>
      <div className="word" id="word">
        {otp.map((data, idx) => {
          return (
            <input
              type="text"
              value={data}
              className="letter"
              key={idx}
              maxLength="1"
              onChange={(e) => handleChange(e.target, idx)}
              onFocus={(e) => e.target.select()}
              onKeyUp={(e) => handleKeyPress(e, idx)}
              onPaste={(e) => handlePasteEvent(e.clipboardData.getData("Text"))}
            />
          );
        })}
      </div>

      <div className="options">
        <span>Change Number</span>
        <span>Re-send OTP</span>
      </div>
      <button className="verify-btn">Verify Phone Number</button>
    </div>
  );
};

export default PhoneVerification;
