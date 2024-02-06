import { useState } from 'react';
import img from './images/illustration-dashboard.png';


const SubscribeForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
    setIsValid(true); 
  };

  const validate = (): void => {
    const regex = /^([a-zA-Z0-9\.]+)@([a-zA-z0-9])+.([a-z]+)(.[a-z]+)?$/;
    if (regex.test(email)) {
      console.log('valid');
      setIsValid(true);
    } else {
      console.log('invalid');
      setIsValid(false);
    }
  };

  const handleSubmit = (): void => {
    if (!validateEmail(email)) {
      setIsValid(false);
    } else {
      // Handle submission logic here, such as sending a request to your server
      console.log('Email submitted:', email);
    }
  };

  const validateEmail = (email: string): boolean => {
    // Basic email validation logic, you can use a library for more comprehensive validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className="container">
      
      <div className="head">
        <div id="frs">We are launching</div>
        <div id="srs">soon!</div>
      </div>
      <div id="headd">Subscribe and get notified</div>
      <div id="input">
        <input
          type="email"
          name=""
          id="email"
          placeholder="Your email address"
          value={email}
          onChange={handleChange}
          onBlur={validate} // Call validate function when input loses focus
        />
        <div className="valid-mob">
          {isValid ? null : (
            <p id="validx">Please provide a valid email address</p>
          )}
        </div>
        <div className="notify" onClick={handleSubmit}>
          Notify Me
        </div>
      </div>
      <div className="valid">
        {!isValid && <p id="validy">Please provide a valid email address</p>}
      </div>
      <div id="bg">
        <img src={img} alt="" />
      </div>
      <div id="copy">
        <div id="logo">
          <div id="face">
            <i className="fa fa-facebook-f"></i>
          </div>
          <div id="twitter">
            <i className="fa fa-twitter"></i>
          </div>
          <div id="insta">
            <i className="fa fa-instagram"></i>
          </div>
        </div>
        <div id="right">
          &copy; Copyright Ping. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default SubscribeForm;
