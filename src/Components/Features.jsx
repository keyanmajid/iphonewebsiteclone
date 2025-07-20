import { useGSAP } from '@gsap/react'
import React from 'react'
import { animatewithGSAP } from '../utils/animation'

const Features = () => {
    useGSAP(() => {
   animatewithGSAP(' #features-title',{y:0,opacity:1}),
   animatewithGSAP('.g-grow',{scale:1,opacity:1,ease:'power1'},{scrub:5.5}),
   animatewithGSAP('.g-text',{y:0,opacity:1,ease:'power2.inout',duration:1})

    }, [])
  return (
    <section className='h-full overflow-hidden common-padding bg-zinc relative'>
        <div className='screen-max-width '>
            <div className='mb-12 w-full'>
                <h1 id='features-title' className='section-heading'>explore full story</h1>
            </div>
            <div className='flex flex-col justify-center items-center overflow-hidden'>
                <div className='mt-32 mb-24 pl-24'>
                    <h2 className='text-5xl lg:text-7xl font-semibold'>IPhone</h2>
                    <h2 className='text-5xl lg:text-7xl font-semibold'>Forged In Titanium</h2>
                </div>
                <div className='flex-center flex-col sm:px-10 mb-20'>
                    <div className='relative h-[50vh]w-full flex items-center'>
                        <video playsInline id='explore-video' className='w-full h-full object-cover object-center' autoPlay muted preload='none' loop >
                            <source src='/assets/videos/explore.mp4' type='video/mp4' />
                        </video>
                    </div>

                    <div className='flex flex-col w-full relative'>
                        <div className='features-video-container'>
                            <div className='overflow-hidden flex-1 h-[50vh]' >
                              <img src='/assets/images/explore1.jpg' alt='explore' className='feature-video g-grow' />
                            </div>
                              <div className='overflow-hidden flex-1 h-[50vh]' >
                              <img src='/assets/images/explore2.jpg' alt='explore' className='feature-video g-grow' />
                            </div>
                            
                            
                        </div>

                    <div className='feature-text-container'>
                        <div className='flex flex-center'>
                            <p className='feature-text g-text'> iphone 15 pro is {' '}
<span className='text-white'>
    the first iphone to be made with a titanium frame, which is 20% lighter than the stainless steel used in previous models. this makes it easier to carry and use, while still providing the same level of durability and protection.
</span>,
using a new manufacturing process called <span className='text-white'>precision forging</span> that creates a stronger and more resilient frame. this means that the iphone 15 pro can withstand more wear and tear, while still looking sleek and stylish.
                            </p>
                        </div>
                         <div className='flex flex-center'>
                            <p className='feature-text g-text'> iphone 15 pro is {' '}
<span className='text-white'>
    the first iphone to be made with a titanium frame, which is 20% lighter than the stainless steel used in previous models. this makes it easier to carry and use, while still providing the same level of durability and protection.
</span>,
using a new manufacturing process called <span className='text-white'>precision forging</span> that creates a stronger and more resilient frame. this means that the iphone 15 pro can withstand more wear and tear, while still looking sleek and stylish.
                            </p>
                        </div>
                        </div>    

                    
                    
                    
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features