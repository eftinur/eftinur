import React from "react";
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact_wrapper w-3/4 mx-auto py-40">
      <div>
        <h3>Let’s make something <br /> together, say hi!</h3>
        <p> <a className="underline" href="mailto:eftinur90@gmail.com">  Email: eftinur90@gmail.com</a></p>
        <p>On the internet:  
          <a href="">LinkedIn</a> 
          <a href="">Twitter</a> 
          <a href="">GitHub</a> 
        </p>
      </div>
    </div>
  );
};

export default Contact;
