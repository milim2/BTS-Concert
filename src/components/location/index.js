/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">

        <iframe
         src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9922.664535111206!2d-0.2795188!3d51.5560208!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa64f9f185de8e097!2sWembley+Stadium!5e0!3m2!1sen!2sca!4v1557193442404!5m2!1sen!2sca" 
         width="100%" 
         height="500px" 
         frameBorder="0" 
         allowFullScreen></iframe>            
      
        <div className="location_tag">
        <div>Location</div>
        </div>
        </div>
    );
};

export default Location;