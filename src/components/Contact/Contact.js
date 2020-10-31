import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_l6ut4le', 'template_0dt7f83', e.target, 'user_WetKRmrkokJpLRCt9Mkkq')
          .then((result) => {
            if(result){
                alert('Your Message Send Successfully')
            }
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }
  return (
  <main id="contact">
    <h1 className="lg-heading">
      Contact <span className="secondary-color">Me</span>
    </h1>
    <div className="container  mt-5">  
      <form className="inputedit" onSubmit={sendEmail} name="contactForm" id="contact" >
        <fieldset>
          <input placeholder="Your name" type="text" id="name" name="name" tabIndex="1" required autoFocus />
        </fieldset>
        <fieldset>
          <input placeholder="Your Email Address" type="email" id="email" name="email" tabIndex="2" required />
        </fieldset>
        <fieldset>
          <textarea placeholder="Type your message here...." tabIndex="5" id="message" name="message" required></textarea>
        </fieldset>
        <fieldset>
          <button type="submit" id="contact-submit">Submit</button>
        </fieldset>
      </form>
    </div>
  </main>
  );
}

export default Contact;