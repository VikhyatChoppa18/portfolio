import { PROJECTS } from "../constants/index";
import { motion } from "framer-motion"
import project1 from "../assets/projects/project-1.webp";

const Projects = () => {
    return (
        <div className="pb-4">
            <motion.h2
                whileInView={{opacity:1, y:0 }} 
                initial={{opacity:0 , y: -100}}
                transition={{duration: 0.6}}
                className="my-20 text-center text-4xl text-gray-800">
                Projects
            </motion.h2>
            <p className="text-center max-w-2xl mx-auto mb-8 text-gray-800">
  I am passionate about building tools and applications for the web and embedded devices using, I like building API servers
  and embedded AI applications. Building tools and open source software systems. I have a broad experience in software engineering,
  backend development,DevOps and MLOps.
</p>
            <div className="flex overflow-x-auto space-x-6 p-6">
                
                {PROJECTS.map((project, index) => (
                    <motion.div 
                        key={index} 
                        className="flex-none w-80 rounded-lg  bg-gradient-to-br from-white to-[#d5c5ff]"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                           
                        </a>
                        <div className="p-4">
                            <h3 className="font-semibold text-xl mb-2 text-gray-800">{project.title}</h3>
                            <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                            <div className="mb-4">
                                {project.technologies.map((tech, index) => (
                                    <span className="mr-2 mb-2 inline-block rounded bg-white bg-opacity-50 p-1 text-xs font-medium text-gray-800" key={index}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm">
                                View on GitHub
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
            <footer className="text-center text-gray-700 text-sm mt-16">
                Made with <span role="img" aria-label="heart">❤️</span> by Vikhyat.
            </footer>
        </div>
    )
}

export default Projects;
