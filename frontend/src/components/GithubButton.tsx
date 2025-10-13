import React from 'react'

type GithubButtonProps = {
  label: string;
};

function GithubButton({ label }: GithubButtonProps) {
  return (
    <a href="https://github.com/sloanrobe" target="_blank" rel="noopener noreferrer">
      <button className='github-button' >
        {label}
      </button>
    </a>
  )
}

export default GithubButton