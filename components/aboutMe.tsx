import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import JS from '@/public/images/JS.png';
import Nodejs from '@/public/images/Nodejs.png';
import TS from '@/public/images/TS.png';
import ReactLogo from '@/public/images/ReactLogo.png';
import Nextjs from '@/public/images/Nextjs.png';
import Python from '@/public/images/Python.png';
import Flask from '@/public/images/Flask.png';
import TailwindCSS from '@/public/images/TailwindCSS.png';
import MySQL from '@/public/images/MySQL.png';
import Supabase from '@/public/images/Supabase.png';
import Git from '@/public/images/Git.png';
import Postgresql from '@/public/images/Postgresql.png';
import Vite from '@/public/images/Vite.png';

const primaryskills = [
  {name: 'Javascript', logo: JS, link: 'https://www.javascript.com/', alt:'Javascript Logo'},
  {name: 'Nodejs', logo: Nodejs, link: 'https://nodejs.org/en', alt:'NodeJs Logo'},
  {name: 'Typescript', logo: TS, link: 'https://www.typescriptlang.org/', alt:'Typescript Logo'},
  {name: 'React', logo: ReactLogo, link: 'https://react.dev/', alt:'React Logo'},
  {name: 'Nextjs', logo: Nextjs, link: 'https://nextjs.org/', alt:'Nextjs Logo'},
  {name: 'TailwindCSS', logo: TailwindCSS, link: 'https://tailwindui.com/', alt: 'TailwindCSS'},
];

const secondarySkills = [
  {name: 'Vite', logo: Vite, link: 'https://vitejs.dev/', alt: 'Vite'},
  {name: 'Python', logo: Python, link: 'https://www.python.org/', alt:'Python Logo'},
  {name: 'Flask', logo: Flask, link: 'https://flask.palletsprojects.com/en/3.0.x/', alt:'Flask Logo'},
  {name: 'MySQL', logo: MySQL, link: 'https://www.mysql.com/', alt: 'MySQL'},
  {name: 'Postgresql', logo: Postgresql, link: 'https://www.postgresql.org/', alt: 'Postgresql'},
  {name: 'Supabase', logo: Supabase, link: 'https://supabase.com/', alt: 'Supabase'},
  {name: 'Git', logo: Git, link: 'https://git-scm.com/', alt: 'Git'},
];

const AboutMe: React.FC = () => {
  return (
    <div className="max-w-[1108px] mx-auto text-gray-400 p-4 sm:p-8 md:p-16" id="about">
      <h2 className="text-gray-200 text-2xl sm:text-3xl md:text-4xl">About Me</h2>
      <hr className="opacity-50 my-4 w-1/2 sm:w-1/3 md:w-1/4" />
      <p className="text-gray-200 text-justify text-sm sm:text-base md:text-lg">
        I am a fresh graduate majoring in electrical engineering and I am a career switcher. I tried something new by starting the Full Stack Software Engineer (FSSE) program organized by RevoU. While studying in the Full Stack Software Engineer program, I learned a lot about the tools used by a Software Engineer, such as Javascript, Typescript, React, Vite, Next.js, MySQL, and Python, Flask. I am confident that I can help companies achieve their business goals more effectively with my skills and dedication. I am very interested in working in a Frontend Engineer position, where I can leverage my technical skills to create intuitive and engaging user interfaces.
      </p>
      <a 
        href="/resume.pdf"
        download='Catur_Ageng_Resume.pdf'
        className="bg-gray-200 text-gray-800 py-2 px-2 sm:py-4 sm:px-8 mt-4 inline-flex items-center hover:bg-stone-800 hover:text-white rounded transform active:scale-90 transition-transform"
        >
          <FontAwesomeIcon icon={faDownload} className="w-4 h-4 sm:w-6 sm:h-6 mr-2 sm:mr-4" /> DOWNLOAD RESUME
      </a>
      <h3 className="pt-8 pb-4 text-gray-200 text-xl sm:text-2xl">My Skills</h3>
      <hr className="opacity-50 mb-4 w-1/2 sm:w-1/3 md:w-1/4" />

      {/* Primary Skills */}
      <h4 className="text-lg sm:text-xl md:text-2xl text-gray-200">Primary Skills :</h4>
      <div className="flex flex-wrap -mx-2 sm:-mx-4 justify-center">
        {primaryskills.map((skill, index)=> (
          <div key={index} className="text-center m-4">
            <p className="font-semibold">{skill.name}</p>
            <div className="w-32 h-32 flex items-center justify-center">
              <a href={skill.link} aria-label={skill.name} target="_blank" className="hover:bg-white">
                <Image src={skill.logo} alt={skill.alt} className="cursor-pointer"/>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Secondary Skills */}
      <h4 className="text-lg sm:text-xl md:text-2xl text-gray-200 mt-8">Secondary Skills :</h4>
      <div className="flex flex-wrap -mx-2 sm:-mx-4 justify-center">
        {secondarySkills.map((skill, index) => (
          <div key={index} className="text-center m-4">
            <p className="font-semibold">{skill.name}</p>
            <div className="w-32 h-32 flex items-center justify-center">
              <a href={skill.link} aria-label={skill.name} target="_blank" className="hover:bg-white">
                <Image src={skill.logo} alt={skill.alt} className="cursor-pointer"/>
              </a>
            </div>
          </div>
        ))}
      </div>

      <br />
      <div className="flex flex-col sm:flex-row justify-center py-8 mt-4 bg-gray-200 text-sm sm:text-base md:text-lg">
        <div className="w-full sm:w-1/4 p-4 text-center">
          <span className="text-xl sm:text-2xl md:text-3xl">5</span><br />
          Projects Done
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
