
export const testimonialSlider = [
  {
    image: '/Naveen.png',
    name: 'Naveenkumar RV',
    position: 'RPA Developer',
    message:
      '~ He has a talent for turning data into insights and creating intuitive stuff.',
  },
  {
    image: '/Samy.png',
    name: 'Mathivanan S',
    position: 'Stock Analyst',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit!',
  },
  {
    image: '/Vinesh.png',
    name: 'Vinesh Raj',
    position: 'UI/UX Designer',
    message:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit!',
  },
  {
    image: '/Prakash.png',
    name: 'Prakash G',
    position: 'Data Scientist',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit!',
  },
  {
    image: '/Masc.png',
    name: 'Hari Hara Raj V',
    position: 'UI/UX Designer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    image: '/Rujith.png',
    name: 'Sree Rujith S',
    position: 'Salesforce Dev',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    image: '/Srini.png',
    name: 'Srinivasan K',
    position: 'Automation Engineer',
    message:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    image: '/HariVicky.png',
    name: 'Hari Vignesh M',
    position: 'Technical Support',
    message:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    image: '/Parasu.png',
    name: 'Parasuraman S',
    position: 'Integrity Engineer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    image: '/Scythe.png',
    name: 'Mushamil',
    position: 'Full-Stack Dev',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
  {
    image: '/Praveen.png',
    name: 'Praveen R',
    position: 'Full-Stack Dev',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
  {
    image: '/KKb1.png',
    name: 'Kishorekumar B',
    position: 'SAP Developer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    image: '/Karthi.png',
    name: 'Karthi S',
    position: 'Business',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    image: '/sT-Hari.png',
    name: 'Sri Hari SK',
    position: 'Full-Stack Dev',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    image: '/Santosh.png',
    name: 'Santhosh Sivan',
    position: 'UI/UX DESIGNER',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    image: '/Musthaqil.png',
    name: 'Musthaqil',
    position: 'ServiceNow Dev',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    image: '/MoPraveen.png',
    name: 'Mohana Prawin E',
    position: 'Developer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    image: '/Saranya.png',
    name: 'Saranya GJ',
    position: 'Full-Stack Dev',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    image: '/Karthika.png',
    name: 'Karthika K',
    position: 'Developer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];

import {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Navigation, Pagination } from 'swiper';
import {FaQuoteLeft} from 'react-icons/fa';
import Image from 'next/image';

const TestimonialSlider = () => {
  return (
  <Swiper 
  navigation={true}
  pagination={{
    clickable:true,
  }}
  modules={[ Navigation,Pagination]}
  className='h-[400px]'
  >
    {testimonialSlider.map((person, index)=>{
      return (
        <SwiperSlide key={index}>
         <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
          <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
            <div className='felx flex-col justify-center text-center'>
              <div className='mb-2 mx-auto rounded-full'>
                <Image src={person.image} width={120} height={120} alt=''/>
              </div>
              <div className='text-lg'>
                {person.name}
              </div>
              <div className='text-[12px] uppercase font-extralight tracking-widest'>
                {person.position}
              </div>
            </div>
          </div>
          <div className='flex flex-1 flex-col justify-center before:w-[1px]
          xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
          <div className='mb-4'>
            <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0'/>
          </div>
          <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
         </div>
         </div>
        </SwiperSlide>
      );
    })}
    </Swiper>
  );
};

export default TestimonialSlider;
