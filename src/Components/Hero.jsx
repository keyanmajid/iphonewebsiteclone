import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useEffect } from 'react';
 // Adjust the path as necessary




const Hero = () => {
    useGSAP(() => {
        gsap.to("#hero", {
            delay: 2,
            opacity: 1,
        }),
        gsap.to("#cta", {
            delay: 2,
            opacity: 1,    
            y:40,                                                                               }
    )}, []);
return (
   <section className="w-full nav-height bg-black relative">
    <div className="h-5/6 w-full flex flex-center flex-col">
    <p id="hero" className="hero-title">Iphone 15</p>
     <div className="md:w-10/12 w-9/12">
  {/* Large screen video: shown only on md and above */}
  <video  autoPlay muted loop playsInline className="hidden md:block"
  >
    <source src="/assets/videos/hero.mp4" type="video/mp4" />
  </video>

  {/* Small screen video: shown only below md */}
  <video autoPlay muted loop playsInline className="block md:hidden"
  >   <source src="/assets/videos/smallHero.mp4" type="video/mp4" />
  </video>
    </div>
</div>
<div id="cta" className="flex flex-col items-center opacity-0 traanslate-y-20">
<a href="#highlights" className="btn">Buy</a>
<p className="font-normal text-xl"> from $199/month or $999</p></div>
   </section>
)}
export default Hero;