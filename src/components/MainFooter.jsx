import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
  faPinterest,
  faLinkedin,
  faYoutube,
  // Add other icons from FontAwesome as needed
} from '@fortawesome/free-brands-svg-icons';
import SBLEDSLogo from '../assets/Logos/SBLEDSLogo.svg';

const MainFooter = () => {
  return (
    <footer className="flex flex-col w-full shrink-0 items-center px-4 md:px-6">
      <div className="flex flex-wrap justify-between w-full items-start gap-2 sm:gap-6 py-6 border-b border-gray-400">
      <div>
          <img className="h-10 w-10" src={SBLEDSLogo} alt="SB LEDS Logo" />
          <p className="font-bold">Scotty B's LED's</p>
          <p>4455 Secor Road</p>
          <p>Toledo, Ohio</p>
          <p>Open M-F: 9:00 AM – 5:00 PM</p>
          <p>Phone: (419)481-3567</p>
        </div>

        <div className="flex flex-wrap gap-x-12 gap-y-9 mt-6 sm:justify-center">
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h5 className="font-bold mb-3">Account</h5>
            <p>Orders</p>
            <p>Track your order</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h5 className="font-bold mb-3">Professional</h5>
            <p>B2B</p>
            <p>Whole Sale</p>
            <p>Custom Business Logo</p>
            <p>Digital Sign</p>
            <h5 className="font-bold mt-5">Gift Card</h5>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h5 className="font-bold mb-3">Help</h5>
            <p>FAQ</p>
            <p>Shipping</p>
            <p>Returns</p>
            <p>Contact</p>
            <p>Refund Policy</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          </div>
          {/* Follow Us */}
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h5 className="font-bold mb-3">Follow us</h5>
            <div className="flex justify-start space-x-4">
              <FontAwesomeIcon icon={faTwitter} className="text-xl" />
              <FontAwesomeIcon icon={faInstagram} className="text-xl" />
              <FontAwesomeIcon icon={faPinterest} className="text-xl" />
              <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
              <FontAwesomeIcon icon={faYoutube} className="text-xl" />
          </div>
        </div>
      </div>

      <div className="text-center py-4 mt-4">
        <p>© 2024 Scotty B's LED's. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default MainFooter;
