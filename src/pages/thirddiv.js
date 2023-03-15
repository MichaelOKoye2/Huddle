import React from 'react'
import '../styles/landingpage.css';

const Thirddiv = () => {
  return (
    <div class="bottom-container">
    <div className="logo-footer"></div>
    <div class="address">

      <div class="address-row">
        <div className="location-icon"></div>
        <p>Lorem ipsum dolor sit amet, cosectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div class="address-row">
        <div className="phone-icon"></div>
        <p>+1-587-254-9856</p>
      </div>
      <div class="address-row">
        <div className="email-icon"></div>
        <a href="https://github.com/Playdirtyy/Huddle.git">
          <p>github account</p>
        </a>
      </div>

    </div>
    
    {/* <div class="social-media-icons">
      <a href="#"><img src="images/facebook.png" alt="www.facebook.com"></a>
      <a href="#"><img src="images/twitter.png" alt="www.twitter.com"></a>
      <a href="#"><img src="images/instagram.png" alt="www.instagram.com"></a>
    </div> */}

    <ul>
      <a href="#">
        <li>About Us</li>
      </a>
      <a href="#">
        <li>What We Do</li>
      </a>
      <a href="#">
        <li>FAQ</li>
      </a>
      <a href="#">
        <li>Career</li>
      </a>
      <a href="#">
        <li>Blog</li>
      </a>
      <a href="#">
        <li>Contact Us</li>
      </a>
    </ul>
    <p class="copyright">© 2019 Huddle. All rights reserved.</p>
  </div>
  );
}

export default Thirddiv;
