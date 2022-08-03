import React from 'react';
import { BsGithub, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/rasheeqqua">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/hasibulhossain.rasheeq">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/rasheeqqua">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;