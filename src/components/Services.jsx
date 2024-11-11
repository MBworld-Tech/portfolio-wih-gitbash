import React from 'react';
//icon
import {BsArrowUpRight} from 'react-icons/bs';
//motion
import {motion} from 'framer-motion';
//variants
import { fadeIn } from '../variants';


//services data
const services = [
  {
    name: 'Web Developer',
    description: 
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga maxime at voluptate quasi, aliquid unde!',
    link: 'learn more',
  },
  {
    name: 'Surveyor',
    description: 
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga maxime at voluptate quasi, aliquid unde!',
    link: 'learn more',
  },
  {
    name: 'Realtor',
    description: 
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga maxime at voluptate quasi, aliquid unde!',
    link: 'learn more',
  },
  {
    name: 'Car Dealer',
    description: 
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga maxime at voluptate quasi, aliquid unde!',
    link: 'learn more',
  },
]

const Services = () => {
  return (
  <div className='section' id='services'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row'>
        {/*text & image*/}
        <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
        className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className="h2 text-accent text-[30px] xl:mt-5 mb-3">What I Do.</h2>
          <h3 className='h3 max-w-[455px] text-[25px] mb-10'>
            i'm a freelance Front-end Developer with over 4 years of experience.
          </h3>
          <button className="btn btn-sm">See my Work</button>
        </motion.div>
        {/*services*/}
        <motion.div 
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
        className='flex-1'>
          {/*service list*/}
          <div>
            {services.map((service, index) => {
              //destructure service
              const { name, description, link } = service;
              return (
                <div className='border-b border-white/20 xl:h-[130px] h-[146px] xl:mt-5 mb-[38px] xl:mb-[20px] flex' 
                key={index}>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                      {name}
                    </h4>
                    <p className='font-secondary leading-tight'>
                      {description}
                    </p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a href="#" className="btn w-9 mb-[42px] flex justify-center items-center">
                      <BsArrowUpRight />
                    </a>
                    <a href="#" className='text-gradient text sm'>
                      {link}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </div>
  )
};

export default Services;
