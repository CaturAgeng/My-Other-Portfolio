// components/Footer.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import {faCopyright} from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
  return (
    <footer className="max-w-[1108px] mx-auto w-full p-8 md:p-16 text-gray-400 text-xl">
      <div className="flex justify-center space-x-4 mb-4">
        <a href="https://www.linkedin.com/in/catur-ageng-3aaa54237?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BiOD%2B7vAhTdaaMZ9Mxy9Mig%3D%3D" aria-label='Linkedin' className='hover:opacity-75'>
          <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/CaturAgeng" aria-label='GitHub' className='hover:opacity-75'>
          <FontAwesomeIcon icon={faGithub} className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      <p className='flex justify-center items-center text-center'>
        Copyright
        <FontAwesomeIcon icon={faCopyright} className='w-6 h-6 mx-2' />
        2024 CaturDev.
      </p>
      <p className='flex justify-center items-center text-center'>
        Website ini masih dalam pengembangan dan penyempurnaan lebih lanjut.
      </p>
    </footer>
  );
};

export default Footer;
