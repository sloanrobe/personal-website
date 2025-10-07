import React from 'react'
import Swal from 'sweetalert2'

const ContactForm = () => {
  
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "38c7b6fa-52a0-476c-889b-3c9560fcbe5b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
      icon: "success",
      title: "Success!",
      html: "Your message has been received!<br>I will respond to you very soon.",
      });
    }
  };

  return (
    <section id='contact-nav-scroll' className="contact">
      {/* <div className="contact-header">
        <h2>Contact</h2>
      </div> */}
      <div className="contact-body">
        <div className='consultation-text'>
          <h2 className="consultation-heading">Ready to Win Your Sports Tech Market?</h2>
          <h3 className='consultation-subtext'>Let's define the next high-impact move.</h3>
          <div className='headshot-info'>
            <div className='headshot-frame'>
              <img className='headshot-style-benji' src="public/headshots/Benji-Sloan-headshot.jpg" alt="" />
            </div>
            <img className='benji-chat-bubble' src="public/images/Benji-chat-bubble.png" alt="" />
          {/* <p>Benji Sloan, MA, ATC</p> */}
        </div>
        </div>
        <form onSubmit={onSubmit}>
          <div className='form-content'>
            <div>
              <div className="input-box">
                <label>Full Name</label>
                <input type="text" className='field' placeholder='Enter your name' name='name' required />
              </div>
              <div className="input-box">
                <label>Email Address</label>
                <input type="email" className='field' placeholder='Enter your email' name='email' required />
              </div>
            </div>
            <div>
              <div className="input-box">
                <label>Your Message</label>
                <textarea name="message" id="" className='field mess' placeholder='Enter your message' required></textarea>
              </div>
            </div>
          </div>
          <button type='submit'>Book a Discovery Call</button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm