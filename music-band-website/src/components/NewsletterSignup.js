import React, { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email) {
      // Add logic here to submit the email to the backend or external service
      console.log(`Submitting email: ${email}`);
      setEmail('');
    } else {
      alert('Please enter a valid email address');
    }
  };
  
  return (
    <div className="newsletter-signup">
      <h2>Sign up for our newsletter</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={handleEmailChange} 
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default NewsletterSignup;