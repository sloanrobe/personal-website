import React from 'react'
import Swal from 'sweetalert2'

const RENDER_API_BASE_URL = 'https://personal-website-8v3q.onrender.com';

const ContactForm = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const payload = Object.fromEntries(formData); // { name, email, message }

    try {
      const res = await fetch(`${RENDER_API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          html: 'Your message has been received!<br>I will respond to you very soon.',
        });
        event.target.reset();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: data.message || 'Something went wrong submitting your message.',
        });
      }
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: 'Network error',
        text: 'Could not reach the server. Please try again.',
      });
    }
  };

  return (
    <section id='contact-nav-scroll' className="contact">
      <div className="contact-body">
        <div className='consultation-text'>
          <h2 className="consultation-heading">Ready to Win Your Sports Tech Market?</h2>
          <h3 className='consultation-subtext'>Let's define the next high-impact move.</h3>
          <div className='headshot-info'>
            <div className='headshot-frame'>
              <img className='headshot-style-benji' src="/headshots/Benji-Sloan-headshot.jpg" alt="Benji Sloan headshot" />
            </div>
            <img className='benji-chat-bubble' src="/images/Benji-chat-bubble.png" alt="" />
          </div>
        </div>

        <form onSubmit={onSubmit}>
          <div className='form-content'>
            <div>
              <div className="input-box">
                <label>Full Name</label>
                <input
                  type="text"
                  className='field'
                  placeholder='Enter your name'
                  name='name'
                  required
                />
              </div>
              <div className="input-box">
                <label>Email Address</label>
                <input
                  type="email"
                  className='field'
                  placeholder='Enter your email'
                  name='email'
                  required
                />
              </div>
            </div>
            <div>
              <div className="input-box">
                <label>Your Message</label>
                <textarea
                  name="message"
                  className='field mess'
                  placeholder='Enter your message'
                  required
                ></textarea>
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