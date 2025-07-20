import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import VideoCarousel from "./VideoCarousel.jsx"; // Import the VideoCarousel component
const Highlights = () => {
useGSAP(() => {
    gsap.to("#title", {
        opacity: 1,
        y: 0,
    }),
    gsap.to(".link", {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.25,
        
    });
}, []);


return (
<section id ="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
    <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
<h1 id="title" className="section-heading">Get the highlights </h1>
<div className="flex flex-wrap gap-5 items-end">
    <p className="link">Watch the flim  <img src="/assets/images/watch.svg" className="ml-2"/></p>
     <p className="link">Watch the event  <img src="/assets/images/right.svg" className="ml-2"/></p>
</div>

    </div>

 </div>
 <VideoCarousel />
    </section>
    )

    }
export default Highlights;
