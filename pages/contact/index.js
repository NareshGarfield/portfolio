import { motion } from 'framer-motion';
import Circles from '/components/Circles';
import {BsArrowRight} from 'react-icons/bs';
import {fadeIn} from '../../variants';

const Contact = () => {
  return (
  <div className='h-full bg-primary/30'>
    <Circles/>
    <div className='container mx-auto py-32 text-center xl:text-left flex 
    items-center justify-center h-full'>
      <div className='flex flex-col w-full max-w-[700px]'>
        <motion.h2 
        variants={fadeIn('up',0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='h2 text-center mb-12'>
          Let&apos;s <span className='text-accent'>Connect..</span>
        </motion.h2>
        <motion.form action='https://formspree.io/f/mjvnldwp' method='POST'
        variants={fadeIn('up',0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='flex flex-1 flex-col gap-6 w-full mx-auto'>
        <div className='flex gap-x-6 w-full'>
          <input type='text' placeholder='Name' name='name'
          className='input' required/>
          <input type='email' placeholder='Email' name='email'
          className='input' required/>
        </div>
          <input type='text' placeholder='Subject' name='subject'
          className='input' required/>
          <textarea placeholder='message' name='message'
          className='textarea' required>
          </textarea>
          <button className='btn rounded-full border border-white/50 max-w-[170px] px-8
          transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
            <span className='group-hover:-translate-y-[120%] group-hover:opacity-0
            transition-all duration-300'>
              Let&apos;s talk!
            </span>
            <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0
            group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/>
          </button>
        </motion.form>
      </div>
    </div>
  </div>
  );
};

export default Contact;
