import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'; 
import Contact from './components/contact';
import Projects from './components/Projects';
import Hero from './components/Hero';
import Education from './components/Education';

export default function App() {
  return (
     <Router>
     <div className="overflow-x-hidden text-stone-300 antialiased">
       <div className="fixed inset-0 -z-10">
         <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
           <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]">
           </div>
         </div>
       </div>
       <div className="container mx-auto px-8 text-gray-800">
         <NavigationBar />
         <Routes>
           <Route path="/portfolio" element={<Hero />} />
           <Route path="/projects" element={<Projects />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/education" element={<Education />} />
         </Routes>
       </div>
     </div>
   </Router>
  )
}

