"use client";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function CustomLayout({ children }:any) {
  const titleRef = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mainContentRef = useRef(null);


  useEffect(() => {
    if (
      !containerRef.current ||
      !titleRef.current ||
      !mainContentRef.current
    ) {
      return;
    }
    const title = titleRef.current;
    const container = containerRef.current;
    const mainContent = mainContentRef.current;

    const timeout = setTimeout(() => {
      gsap.set(container, { y: "100%", force3D: true, backfaceVisibility: "hidden"});
      gsap.set(mainContent, { opacity: 1, scale: 1, force3D: true, backfaceVisibility: "hidden" });
      let tween = gsap.timeline()
      .to(mainContent, {
        opacity: 1, // Fade in
        scale: 0.99, // Grow to full size
        duration: 1, // Duration of the animation
        ease: "power3.out", // Smooth easing for a polished effect
      })
      .to(mainContent, {
        y: "-2%", // Subtle upward motion
        duration: 0.5, // Slightly faster secondary motion
        ease: "power2.inOut", // Smooth easing
      });
      // let tween = gsap.timeline()
      // .to(mainContent, {
      //   opacity: 1,
      //   y: "0%",
      //   duration: 1.2,
      //   ease: "power2.inOut",
      // })
      // .to(mainContent, {
      //   y: "-1%",
      //   duration: 1,
      //   ease: "power1.inOut",
      // });
      // let tween = gsap.timeline().to(mainContent, { opacity: 1, duration: 0.5, ease: "power4.out" });

      // let tween = gsap.to(mainContent, { y :"0.25%", duration: 1, ease: "power4.out"});


      ScrollTrigger.create({
        trigger: title,
        start: "bottom bottom",
        end: () => `+=${container.getBoundingClientRect().height}`,
        // end: () => `+=1000`,
        pin: mainContent,
        animation: tween,
        pinSpacing: false,
        scrub: 1,
        markers: false,
        // anticipatePin: 2,
        // invalidateOnRefresh: true,
        // fastScrollEnd: false,
        onEnter: () => {
          gsap.to(container, {
            y: 0,
            duration: 1,
            ease: "power4.out",
            clearProps: "transform"
          });
        },
        onLeaveBack: () => {
          gsap.to(container, {
            y: "100%",
            duration: 1,
            ease: "power4.out",
            clearProps: "transform"
          });
        },
        onUpdate: (self) => {
          if (self.progress === 1) {
            gsap.set(container, { y: 0 });
          } else if (self.progress === 0) {
            gsap.set(container, { y: "100%" });
          }
        }
        
      });
      ScrollTrigger.refresh();

      return () => {
        ScrollTrigger.killAll();
      };
    }, 500);
    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []); 

  return (
    <div className="flex flex-col ">
      <Header />
      <main ref={mainContentRef} className="flex-grow bg-gray-100 ">
        {children}
        <div ref={titleRef} className="h-[1px] opacity-0 bg-transparent flex items-center">
            <p className=" relative lg:absolute h-0 w-full bg-red-500 text-5xl font-bold text-white text-center">
                Footer Title
            </p>
        </div>
      </main>
      <footer style={{ minHeight: "100vh", transform: "translateZ(0)", willChange: "transform" }} ref={containerRef} className="lg:relative bg-black text-white h-[calc(100vh+180px)] sm:h-auto  z-[2] overflow-x-hidden overflow-y-hidden">
        <Footer />
      </footer>
    </div>
  );
}
