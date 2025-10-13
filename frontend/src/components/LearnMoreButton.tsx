import React from 'react'

type LearnMoreButtonProps = {
  label: string;
};

function LearnMoreButton({ label }: LearnMoreButtonProps) {
  return (
    <a href="https://www.linkedin.com/in/benji-sloan/" target="_blank" rel="noopener noreferrer">
      <button className='learn-more' >
        {label}
      </button>
    </a>
  )
}

export default LearnMoreButton