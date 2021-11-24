import './contact.css'

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = (props) =>{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('portfolio', 'portfolio_template', form.current, 'user_6xzkgT38CSjnpGYm6vSVD')
          .then((result) => {
              alert('mail sent');
          }, (error) => {
              alert('error sending mail');
          });
      };
    
    return(
        <div className="contact">
            <h1>Reach me out!</h1>
        <div className="content">
            
            <div className="text">
                
                <div className="illustration">
                    <img src={props.assets.contact} alt="" />
                </div>
            </div>
            <div className="form">
            
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input className='button' type="submit" value="Send" />
            </form>
            </div>
        </div>
        </div>
    )
}
export default Contact;