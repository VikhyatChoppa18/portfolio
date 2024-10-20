import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import logo from "../assets/projects/Vikhyat.webp" 
import { Link } from 'react-router-dom';


const NavigationBar = () => {
  return (
    <nav className="flex items-center justify-between py-6 px-4 text-2xl">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={140} height={300} alt="Logo" />
        </a>
      </div>
      <div className="flex items-center justify-center gap-4">
        
      </div>
      <ul className="flex justify-center space-x-4">
        <li><Link to="/portfolio/" className="hover:text-blue-500">Home</Link></li>
        <li><Link to="/projects" className="hover:text-blue-500">Projects</Link></li>
        <li><Link to="/education" className="hover:text-blue-500">Education</Link></li>
        <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;

