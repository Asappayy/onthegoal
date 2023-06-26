import React from "react";


import  otgg  from "../assets/otgg.png";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={otgg} style={{width:'30%'}} alt='sumz_logo' className='w-48 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/asappayy", "_blank")
          }
          className=' purple_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text textt'>
        Summarize <br className='max-md:hidden' />
        <span className='purple_text '>On-The-Goal</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading on-the-goal, an open-source article summarizer
        that transforms 'long' articles into clearer summaries
      </h2>
      <h4 className="text-purple-500">painstakenly created as a portfolio website, check out my cv at <span className="purple_text" style={{cursor: "pointer"}}  onClick={() =>
            window.open("https://webdevill.netlify.app", "_blank")
          }> <a>webdevill.netlify.app</a></span> </h4>
    </header>
  );
};

export default Hero;
