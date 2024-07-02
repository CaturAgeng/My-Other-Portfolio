'use client'

import React, { useRef } from 'react';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css'

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current === null) return;

    emailjs.sendForm('service_ncn41eq', 'template_hg7k55g', form.current, 'i7SWDq_YYcSyOhmsE')
    .then((result: EmailJSResponseStatus) => {
      console.log(result.text);
      toast.success("Message Sent Successfully");
    }, (error) => {
      console.log(error.text);
      toast.error("Failed to send message, please try again.");
    });

    e.currentTarget.reset(); // Untuk me-Reset form setelah mengirimkan email
  };

  return (
    <div className="max-w-[1108px] mx-auto w-full p-16" id="contact">
      <h2 className="text-gray-200 text-2xl sm:text-3xl md:text-4xl">Contact Me</h2>
      <hr style={{ width: '200px' }} className="opacity-50 my-4" />

      <div className="space-y-4">
        <p className="flex items-center space-x-2 text-white">
          <FontAwesomeIcon icon={faLocationDot} className="w-6 h-6" />
          <span>Purbalingga, Jawa Tengah</span>
        </p>
        <p className="flex items-center space-x-2 text-white">
          <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
          <span>Email: caturageng023@gmail.com</span>
        </p>
      </div>
      <br />
      <p className='mb-2'>Let's get in touch. Send me a message:</p>

      <form ref={form} onSubmit={sendEmail} className="w-full">
        <div className='space-y-4'>
          <p>
            <input
              className="w-full bg-gray-200 py-3 px-4 text-black"
              type="text"
              placeholder="Name"
              required
              name="user_name"
            />
          </p>
          <p>
            <input
              className="w-full bg-gray-200 py-3 px-4 text-black"
              type="email"
              placeholder="Email"
              required
              name="user_email"
            />
          </p>
          <p>
            <input
              className="w-full bg-gray-200 py-3 px-4 text-black"
              type="text"
              placeholder="Subject"
              required
              name="subject"
            />
          </p>
          <p>
            <input
              className="w-full bg-gray-200 py-3 px-4 text-black"
              type="text"
              placeholder="Message"
              required
              name="message"
            />
          </p>
          <p>
            <button className="w-auto flex bg-gray-200 text-gray-800 py-3 px-3 hover:bg-stone-800 hover:text-white transform active:scale-90 transition-transform">
              <FontAwesomeIcon icon={faPaperPlane} className="w-6 h-6 mr-2"/> SEND MESSAGE
            </button>
          </p>
        </div>
      </form>
      <ToastContainer 
          position="top-center"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
      />
    </div>
  );
};

export default Contact;
