import React from 'react'

type LearnMoreButtonProps = {
  label: string;
};

function LearnMoreButton({ label }: LearnMoreButtonProps) {
  return (
    <button className='learn-more' >
      {label}
    </button>
  )
}

export default LearnMoreButton