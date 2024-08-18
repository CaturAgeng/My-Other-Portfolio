'use client'

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import BankingApp from '@/public/images/BankingApp.png';
import WeatherApp from '@/public/images/WeatherApp.png';
import ToDoApp from '@/public/images/ToDoApp.png';
import Oceanesia from '@/public/images/Oceanesia.jpeg';
import TS from '@/public/images/TS.png';
import ReactLogo from '@/public/images/ReactLogo.png';
import Nextjs from '@/public/images/Nextjs.png';
import Python from '@/public/images/Python.png';
import Flask from '@/public/images/Flask.png';
import TailwindCSS from '@/public/images/TailwindCSS.png';
import MySQL from '@/public/images/MySQL.png';
import Supabase from '@/public/images/Supabase.png';
import WeRent from '@/public/images/WeRent.png';
import Postgresql from '@/public/images/Postgresql.png';


const MyProject = () => {
  const projects = [
    { 
      title: "Weather-App", 
      image: WeatherApp, 
      technologies: [ReactLogo, TS, TailwindCSS],
      description: "Weather-App dibangung dengan cara fetches real-time weather data dari weather API yang sudah tersedia. WeatherApp memungkinkan pengguna untuk mencari informasi mengenai kondisi cuaca di lokasi yang berbeda dan melihat detail perkiraan cuaca." 
    },
    { 
      title: "Banking-App-Backend", 
      image: BankingApp,
      technologies: [Python, Flask, MySQL],
      description: "Bank-App merupakan proyek perbankan sederhana yang dibangun dengan tujuan untuk mengelola data perbankan. Fitur yang diberikan seperti manajemen akun, transaksi, protokol keamanan dan otentikasi pengguna." 
    },
    { 
      title: "Oceanesia", 
      image: Oceanesia,
      technologies: [Python, Flask, Supabase],
      description: "Oceanesia sendiri bertujuan untuk membantu sistem pemantauan, pengendalian kebersihan dan juga dapat melaporkan kondisi laut dan pantai di suatu wilayah. Hal ini penting karena Indonesia merupakan negara maritim yang sebagian besar wilayah Indonesia berupa lautan dan masih banyak laut dan pantai di Indonesia yang kondisinya memprihatinkan. Kehadiran Oceanesia sendiri dapat memudahkan instansi terkait memetakan wilayah mana saja yang harus menjadi fokus utama dalam menjaga kebersihan laut." 
    },
    { 
      title: "ToDo-App", 
      image: ToDoApp, 
      technologies: [TS, ReactLogo, Nextjs, Supabase],
      description: "ToDo-App merupakan aplikasi sederhana yang dibangun dengan menerapkan konsep dari CRUD. ToDo-App menawarkan pengguna untuk dapat membuat daftar kegiatan yang ingin dilakukan, mengedit daftar yang telah dibuat dan menghapus daftar kegiatan yang telah selesai dilakukan." 
    },
    { 
      title: "WeRent-App", 
      image: WeRent, 
      technologies: [TS, ReactLogo, Nextjs, Postgresql],
      description: "WeRent adalah sebuah aplikasi sejenis E-Commerce yang berfokus pada jasa peminjaman pakaian. Dari tingginya kebutuhan user dalam menggunakan pakaian yang hanya digunakan dalam momen-momen tertentu, jasa peminjaman pakaian kini banyak diminati dan untuk memudahkan user dalam bertransaksi serta memilih jasa, kami merancang sebuah aplikasi yang bernama WeRent." 
    },
  ];

  return (
    <div className="max-w-[1108px] mx-auto w-full p-4 sm:p-8 md:p-16 text-gray-200" id="project">
      <h3 className="text-2xl sm:text-3xl md:text-4xl text-gray-200">My Project</h3>
      <hr className="opacity-50 my-4 w-1/2 sm:w-1/3 md:w-1/4" />
      <Carousel
        showThumbs={false}
        autoPlay
        interval={5000}
        infiniteLoop
        showStatus={false}
      >
        {projects.map((project, index) => (
          <div key={index} className="p-2 sm:p-4">
            <div className="bg-stone-800 p-4 rounded-lg shadow-lg h-full">
              <h4 className="text-lg sm:text-xl md:text-2xl mb-2">{project.title}</h4>
              <Image src={project.image} alt={project.title} className='rounded-lg mb-4' />
              <div className='flex justify-center'>
                {project.technologies.map((tech, techIndex) => (
                  <div className='flex my-2 mx-2'>
                    <Image key={techIndex} src={tech} alt='Tech Logo' className='rounded w-12 h-12 justify-center text-center' />
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg">{project.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MyProject;
