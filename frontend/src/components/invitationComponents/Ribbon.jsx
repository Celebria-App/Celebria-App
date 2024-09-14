import React from 'react'

const Ribbon = () => {
  return (
    <section>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 120"
    className="w-full h-auto opacity-60"
  >

    <path
      fill="url(#grad1)"
      fillOpacity="1"
      d="M0,40L40,50C80,60,160,80,240,75C320,70,400,50,480,52C560,55,640,70,720,75C800,80,880,70,960,60C1040,50,1120,30,1200,25C1280,20,1360,40,1400,50L1440,60L1440,120L1400,120C1360,120,1280,120,1200,120C1120,120,1040,120,960,120C880,120,800,120,720,120C640,120,560,120,480,120C400,120,320,120,240,120C160,120,80,120,40,120L0,120Z"
    ></path>
     <path
      fill="url(#grad2)"
      fillOpacity="1"
      d="M0,60L60,55C120,50,240,40,360,35C480,30,600,30,720,40C840,50,960,60,1080,65C1200,70,1320,70,1380,60L1440,50L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
    ></path>

    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: "#f48fb1", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#ec407a", stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: "#ec407a", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#880e4f", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
  </svg>
    </section>
  )
}

export default Ribbon