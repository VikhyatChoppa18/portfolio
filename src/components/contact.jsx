import React from 'react';
import { FaLinkedin, FaGithub, FaKaggle, FaGoogle } from 'react-icons/fa';
import picture from "../assets/profile.png"

function Contact() {
  return (
    <div className="contact-page">
            <img 
        src={picture} 
        alt="VVikhyat Choppa" 
        className="relative z-10 border border-stone-800 rounded-2xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]" height="250" width="250"
      />
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">About me and reach out to me</h2>
      
      <div className="social-links flex justify-center space-x-6 mb-8">
        <a href="https://www.linkedin.com/in/vikhyat-venkata" target="_blank" rel="noopener noreferrer" className="text-4xl text-blue-600 hover:text-blue-800">
          <FaLinkedin />
        </a>
        <a href="https://github.com/VikhyatChoppa18" target="_blank" rel="noopener noreferrer" className="text-4xl text-gray-800 hover:text-black">
          <FaGithub />
        </a>
        <a href="https://www.kaggle.com/chvenkatavikhyat" target="_blank" rel="noopener noreferrer" className="text-4xl text-blue-500 hover:text-blue-700">
          <FaKaggle />
        </a>
        <a href="mailto:venkataj280@gmail.com" className="text-4xl text-red-500 hover:text-red-700">
          <FaGoogle />
        </a>
      </div>

      <p className="text-center max-w-5xl mx-auto mb-8 text-black-800">
    I am a passionate data scientist and technology enthusiast, I like building open source software and systems. I enjoy talking about innovation in AI/ML and product development,I enjoy playing basketball &#127936; and hiking &#128507;.
    Please don't hesitate to reach out to me if you are looking for a partner for a project or discuss. You can connect  &#128237; with me on &#9757; 
    
       </p>

      <div className="text-center mb-12">
        <a 
          href="https://drive.google.com/file/d/1sc_XBoClID476BYMqjyYA3yjmasJyWUi/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-violet-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View My Resume
        </a>
      </div>

      <footer className="text-center text-gray-500 text-sm">
        Made with <span role="img" aria-label="heart">❤️</span> by Vikhyat.
      </footer>
    </div>
  );
}

export default Contact;
