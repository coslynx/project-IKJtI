import React from 'react';

const Homepage = () => {
  return (
    <div>
      {/* Band bio section */}
      <section>
        <h2>Band Bio</h2>
        <p>Insert band bio here</p>
      </section>

      {/* Latest news section */}
      <section>
        <h2>Latest News</h2>
        <p>Insert latest news here</p>
      </section>

      {/* Social media links */}
      <section>
        <h2>Social Media</h2>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </section>
    </div>
  );
};

export default Homepage;