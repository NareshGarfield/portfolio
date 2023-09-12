import React, {useState} from "react";
import {FaHtml5, FaCss3, FaJs, FaJava, FaReact, FaPython, } from 'react-icons/fa';
import {SiNextdotjs, SiTailwindcss, SiMongodb} from 'react-icons/si';
import {TbSql} from 'react-icons/tb';
import Circles from '../../components/Circles';
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';
/* eslint-disable react/jsx-key */
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <SiTailwindcss/>,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiMongodb/>,
        ],
      },
      {
        title: 'Programming languages',
        icons: [<FaJava />, <FaPython/>, <TbSql/>],
      },
    ],
  },
  {
    title: 'certifications',
    info: [
      {
        title: 'The Web Developer Bootcamp 2023, Udemy',
        stage: 'May 2023',
      },
      // {
      //   title: 'Adobe Design Achievement Awards - Finalist',
      //   stage: '2009 - 2010',
      // },
    ],
  },
  {
    title: 'experience',
    info: [
      // {
      //   title: 'UX/UI Designer - XYZ Company',
      //   stage: '2012 - 2023',
      // },
      // {
      //   title: 'Web Developer - ABC Agency',
      //   stage: '2010 - 2012',
      // },
       {
        title: 'Intern - Neelan Oxysoft Pvt.Ltd',
        stage: 'Dec 2021 - Mar 2022',
      },
    ],
  },
  {
    title: 'implant Training',
    info: [
      // {
      //   title: 'Web Development - ABC University, LA, CA',
      //   stage: '2011',
      // },
      // {
      //   title: 'Computer Science Diploma - AV Technical Institute',
      //   stage: '2009',
      // },
      {
        title: 'MD Info-Tech Solutions, Erode',
        stage: '2020',
      },
    ],
  },
];
/* eslint-enable react/jsx-key */
const About = () => {
  const [index, setIndex]= useState(0);
  console.log(index);
  return (
  <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
    <Circles/>
    {/* <motion.div 
    variants={fadeIn('right',0.2)} 
    initial='hidden' 
    animate='show' 
    exit='hidden'
    className="hidden xl:flex absolute bottom-0 -left-[370px]">
    <Avatar />
    </motion.div> */}
    <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
      <div className="flex-1 flex flex-col justify-center">
        <div>
        <motion.h2 className="h2"
        variants={fadeIn('right',0.2)} 
        initial='hidden' 
        animate='show' 
        exit='hidden'>The web development</motion.h2> 
        <motion.p className="text-2xl"
        variants={fadeIn('right',0.4)} 
        initial='hidden' 
        animate='show' 
        exit='hidden'>is a <span className="text-accent">never-ending adventure</span>, 
        with new challenges and opportunities awaiting at every turn.</motion.p>
        </div>
      </div>
      <motion.div 
      variants={fadeIn('left',0.3)} 
      initial='hidden' 
      animate='show' 
      exit='hidden'
      className="flex flex-col w-full xl:max-w-[48%] h-[60%]">
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
          {aboutData.map((item, itemIndex)=>{
            return (
             <div key={itemIndex} className={`cursor-pointer ${index===itemIndex &&
            'text-accent after-[100%] after:bg-accent after:transition-all after:duration-300'
            } cursor-pointer capitalize xl:text-lg relative after:w-8
             after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
             onClick={()=>setIndex(itemIndex)}> 
              {item.title}
              </div>
            );
          })}
        </div>
        <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
          {aboutData[index].info.map((item,itemIndex)=>{
            return (
              <div key={itemIndex} className="flex flex-1 flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">    
                {item.icons?.map((icon)=>{
                  
                  return (/* eslint-disable react/jsx-key */
                    <div className="text-2xl hover:text-white/100">{icon}</div>
                 /* eslint-enable react/jsx-key */ )
                })}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div> 
    </div>
  </div>
  );
};

export default About;
