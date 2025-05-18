import picture from "../assets/system-1.webp"
import {hero_content} from "../constants/index"
import logo from "../assets/projects/Vikhyat.webp" 
import {DiRedis} from "react-icons/di"
import {RiReactjsLine, RiSingleQuotesL} from "react-icons/ri"
import {SiMongodb} from "react-icons/si"
import {TbBrandNextjs} from "react-icons/tb"
import { SiPython, SiR, SiTensorflow,SiPytorch,SiDjango,SiLinux,SiReact,SiMysql,SiKubernetes,SiGnubash,SiGithubactions,SiDocker,SiJavascript, } from 'react-icons/si';
import { about_text, text } from "../constants/index"
import {motion} from "framer-motion"
import { FaLinkedin, FaGithub, FaKaggle, FaGoogle } from 'react-icons/fa';
import { SiHackerrank, SiLeetcode } from 'react-icons/si';
import azure from "../assets/icons8-azure-48.svg"
import aws from "../assets/icons8-aws-48.svg"

const containerVariants = {
  hidden:{ opacity: 0, x: -100},
  visible: {
    opacity: 1,
    x: 0,
    transition:{
      duration: 0.8,
      staggerChildren: 0.5,
    }
  }

  }

  const childVariants = {
    hidden: {opacity: 0, x: -100},
    visible: {opacity: 1, x:0, transition: { duraion:0.7 }}

    
  }
const Hero = () => {
    return (
      <div className="pb-4 lg:mb-36">
        <div className="flex flex-wrap lg:flex-row-reverse">
            <div className="w-full lg:w-1/4">
            <div className="relative inline-block">
  <img 
    src={picture} 
    alt="VVikhyat Choppa" 
    className="relative z-10 border border-stone-800 rounded-2xl"
  />
  <div className="absolute inset-0 bg-purple-200 rounded-2xl -z-10"></div>
</div>
              
            </div>
            <div className="w-full lg:w-3/4">
            <motion.div initial="hidden"  animate="visible"  variants={containerVariants}className="flex flex-col item-center lg:items-start
            mt-,10">
                <motion.h2  variants={childVariants}style={{color: 'black'}}className="pb-2 text-3xl tracking-tighter
                lg:text-5xl"><br/>VVikhyat Choppa</motion.h2>
                 
                <motion.p variants = {childVariants}style={{ color: 'black',fontFamily: '"Times New Roman", Times, serif'}} className="my-2 max-w-lg py-6 text-2xl leading-relaxed tracking font-serif">
                <p>A passionate individiual about technology and analytics, there by building solutions to solve the real world challenges. An engineer &#128295; to the core who loves to build innovative tools
                and systems related to machine learning and AI &#129302;.</p>
                </motion.p>
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
        <a href="git" target="_blank" rel="noopener noreferrer" className="text-4xl text-green-600 hover:text-green-800">
          <SiHackerrank />
        </a>
        <a href="https://leetcode.com/u/VenkataVikhyatCh/" target="_blank" rel="noopener noreferrer" className="text-4xl text-[#FFA116] hover:text-[#E69500]">
          <SiLeetcode />
          </a>

      </div>
            </motion.div>
            <div className="pb-10">
            <h4  style={{color: 'black'}}className="my-10 text-center text-3xl text-blue-200">What I do?</h4>
              <h4  style={{color: 'black'}}className="my-10 text-center text-3xl">Developing tools and AI Systems.</h4>
              <motion.div  variants={childVariants}className="flex flex-wrap items-center justify-center gap-4">
                <div className="p-4">
                  <SiPython className="text-5xl text-blue-500" />
                </div>
                <div className="p-4">
                  <SiR className="text-5xl text-blue-600" />
                </div>
                <div className="p-4">
                  < SiMysql className="text-5xl text-blue-500" />
                </div>
                <div className="p-4">
        <SiJavascript className="text-5xl text-yellow-400" />
      </div>
                <div className="p-4">
                  <SiGnubash className="text-5xl text-gray-600" />
                </div>

                <div className="p-4">
                     <SiTensorflow className="text-5xl text-orange-500" />
                </div>
                <div className="p-4">
                   <SiPytorch className="text-5xl text-red-500" />
                </div>
                <div className="p-4">
                   <SiDjango className="text-5xl text-green-600" />
                </div>
                <div>                 <img src={aws}/>
                </div>
                <div>
                <img src={azure}/>
                </div>
                <div className="p-4">
                      <SiReact className="text-5xl text-blue-400" />
                </div>
                <div className="p-4">
            <img 
                src="https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png" 
                alt="FastAPI Logo" 
                className="h-10  " 
            /></div>

                  <div className="p-4">
                  <SiMongodb className="text-5xl text-cyan-500" />
                </div>
                <div className="p-4">
                </div>
                <div className="p-4">
                  <SiDocker className="text-5xl text-blue-400" />
                </div> 
                <div className="p-4">
                  <SiLinux className="text-5xl text-black-900" />
                </div>
                <div className="p-4">
                  <SiKubernetes className="text-5xl text-blue-600" />
                </div>
                <div className="p-4">
                <SiGithubactions className="text-5xl text-blue-700" />
                </div>
               
              </motion.div>
              <motion.div initial="hidden"  animate="visible"  variants={containerVariants}className="my-10 text-center text-2xl text-blue-200">
              <motion.p variants = {childVariants}style={{ color: 'black',fontFamily: '"Times New Roman", Times, serif'}} className="my-10 text-center text-2xl  text-blue-200" align="center">
                      {text}
                </motion.p>
              </motion.div>
              
            </div>

            </div>
        </div>
        <footer className="text-center text-gray-500 text-sm">
        Made with <span role="img" aria-label="heart">❤️</span> by Vikhyat.
      </footer>
      </div>

    )
}
<p style={{ color: 'black',fontFamily: '"Times New Roman", Times, serif'}} className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking font-serif">
                      {hero_content}
                </p>
export default Hero
