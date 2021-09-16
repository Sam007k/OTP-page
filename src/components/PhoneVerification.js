import { useState } from "react";

const PhoneVerification = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    const re = /^[0-9\b]+$/;
    if (element.value === "" || re.test(element.value)) {
      setOtp([...otp.map((num, idx) => (idx === index ? element.value : num))]);
    }
    console.log(element.key);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleKeyPress = (e, idx) => {
    if (e.keyCode === 8) {
      console.log(e.keyCode);
      if (e.target.previousSibling) {
        e.target.previousSibling.focus();
      }
    }
    if (e.keyCode === 37) {
      console.log(e.keyCode);
      if (e.target.previousSibling) {
        e.target.previousSibling.focus();
      }
    }
    if (e.keyCode === 39) {
      console.log(e.keyCode);
      if (e.target.nextSibling) {
        e.target.nextSibling.focus();
      }
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
            />
          );
        })}
      </div>

      <div className="options">
        <span>Change Number</span>
        <span>Re-send OTP</span>
      </div>
      <button className="btn">Verify Phone Number</button>
    </div>
  );
};

export default PhoneVerification;
