import React from 'react';
import { motion } from "framer-motion";
import { EDUCATION, CERTIFICATIONS } from "../constants/index";
import { FaGraduationCap, FaUserGraduate } from 'react-icons/fa';

const Education = () => {
    return (
        <div className="pb-4">
            <motion.h2
                whileInView={{opacity:1, y:0 }} 
                initial={{opacity:0 , y: -100}}
                transition={{duration: 0.6}}
                className="my-20 text-center text-4xl"
            >
                Education and Certifications
            </motion.h2>
            
            <div className="flex justify-center items-center mb-12">
                <FaGraduationCap className="text-6xl mr-4" />
                <FaUserGraduate className="text-6xl ml-4" />
            </div>

            <div className="mb-16">
                <h3 className="text-3xl text-center mb-8">Education</h3>
                {EDUCATION.map((edu, index) => (
                    <motion.div 
                        key={index}
                        whileInView={{opacity:1, x:0}}
                        initial={{opacity: 0, x: -100}}
                        transition={{duration: 1}}
                        className="mb-12 flex flex-wrap items-start justify-center"
                    >
                        <div className="w-24 h-24 mr-6 mb-4 flex items-center justify-center">
                            <img 
                                src={edu.logo} 
                                className="max-w-full max-h-full object-contain" 
                            />
                        </div>
                        <div className="max-w-xl">
                            <h4 className="text-xl font-semibold">{edu.institution}</h4>
                            <p className="text-lg">{edu.degree}</p>
                            <p className="mb-2">{edu.year}</p>
                            <p><strong>Major:</strong> {edu.major}</p>
                            {edu.minor && <p><strong>Minor:</strong> {edu.minor}</p>}
                            <div className="mt-4">
                                <h5 className="font-semibold">Relevant Coursework:</h5>
                                <p className="text-sm">
                                    {edu.coursework.map((course, courseIndex) => (
                                        <React.Fragment key={courseIndex}>
                                            {courseIndex > 0 && <span className="mx-1">•</span>}
                                            <span>{course}</span>
                                        </React.Fragment>
                                    ))}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div>
                <h3 className="text-3xl text-center mb-8">Certifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {CERTIFICATIONS.map((cert, index) => (
                        <motion.div
                            key={index}
                            whileInView={{opacity:1, y:0}}
                            initial={{opacity: 0, y: 50}}
                            transition={{duration: 0.5}}
                            className="bg-stone-300 rounded-lg "
                        >
                            <div className="h-48 ">
                                <img 
                                    src={cert.image} 
                                    alt={cert.title} 
                                    className="w-full h-full object-cover filter brightness-110" 
                                />
                            </div>
                            <div className="p-4">
                                <h4 className="text-lg font-semibold mb-2">{cert.title}</h4>
                                <p className="text-sm text-stone-400 mb-4">{cert.issuer}</p>
                                <a 
                                    href={cert.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
                                >
                                    View Certificate
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <footer className="text-center text-gray-500 text-sm mt-12">
                Made with <span role="img" aria-label="heart">❤️</span> by Vikhyat.
            </footer>
        </div>
    )
}

export default Education;
