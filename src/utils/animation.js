import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
 export const animatewithGSAP = (target,animationProps,scrollProps) => {
    gsap.to(target, {
        ...animationProps,
        scrollTrigger: {
            trigger: target,
            toggleActions:'restart reverse restart reverse',
            ...scrollProps,
            start:'top 85%'
        }
    })}