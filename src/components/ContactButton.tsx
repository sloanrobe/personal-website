import React from 'react'

type ContactButtonProps = {
  label: string;
};

function ContactButton({ label }: ContactButtonProps) {
  return (
    <a href="#contact-nav-scroll" className="contact-button">
      {label}
    </a>
  )
}

export default ContactButton