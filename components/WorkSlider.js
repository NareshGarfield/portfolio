import {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import {BsArrowRight} from 'react-icons/bs';
import Image from 'next/image';
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'Housing Rental',
          path: '/Houserentals.jpg',
          link: 'https://housing-rental-ndt.vercel.app/',
        },
        {
          title: 'Netflix-Clone',
          path: '/thumb4.jpg',
          link: 'https://netflix-clone-ndt.vercel.app/',
        },
        {
          title: 'Spotify-Clone',
          path: '/spotify-1.webp',
          link: 'https://spotify-clone-ndt.vercel.app/',
        },
        {
          title: 'Hanashi',
          path: '/chatting.jpg',
          link: 'https://hanashi-ndt.vercel.app/',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
  <Swiper 
  spaceBetween={10}
  pagination={{
    clickable:true,
  }}
  modules={[ Pagination]}
  className='h-[280px] sm:h-[480px]'
  >
    {workSlider.slides.map((slide, index)=>{
      return (
        <SwiperSlide key={index}>
          <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
            {slide.images.map((image, index)=> {
              return (
              <div className='relative rounded-lg overflow-hidden flex 
              items-center justify-center group'key={index}>
                <div className='flex items-center justify-center relative overflow-hidden group'>
                
                  <Image src={image.path} width={500} height={300} alt=''/>
                  <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0
                  group-hover:opacity-80 transition-all duration-700'>
                  </div>
        
                  <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20
                  transition-all duration-400 text-[13px] tracking-[0.2em]  '><div className='text-lg font-semibold '>
                    <a key={index} href={image.link} target='_blank'>
                    {image.title}</a>
                    </div>
                           
                    <div className='flex items-center gap-x-2'>                     
                        <div className='delay-100'><a key={index} href={image.link} target='_blank'>
                          Live </a>
                          </div>
                           
                        <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                        <a key={index} href={image.link} target='_blank'>
                          Project </a>
                          </div>
                           
                        <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all 
                        duration-300 delay-200'>
                          <a key={index} href={image.link} target='_blank'>
                          <BsArrowRight/></a>
                     </div>
                   </div>
                  </div>
                </div>
              </div>
            );
            })}
            </div>
        </SwiperSlide>
      );
    })}
    </Swiper>
  );
};

export default WorkSlider;
