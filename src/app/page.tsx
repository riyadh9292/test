"use client";
import CustomLayout from "@/layouts/CustomLayout";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const imageList = [
  "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1494783367193-149034c05e8f?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=400&h=300&fit=crop",
  "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=300&fit=crop",
  "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
];


export default function Home() {
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const conRef = useRef<HTMLDivElement>(null);

  const handleLoad=()=>{
    ScrollTrigger.refresh();
  }

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      ScrollTrigger.refresh();
    });
  
    if (conRef.current) {
      resizeObserver.observe(conRef.current);
    }
  
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <CustomLayout>
      <div ref={conRef} className="container mx-auto text-center min-h-screen">
        <h2 className="text-4xl font-bold mt-10 mb-4">Welcome to the GSAP Animated Page</h2>
        <p className="text-lg text-gray-700 mb-6">
          This page is built with Next.js and uses GSAP for animations.
        </p>
        <div
          className="bg-blue-500 text-white text-xl py-4 px-8 rounded-md shadow-md"
        >
          GSAP Animation!
        </div>
        <div className="columns-3 mt-20 pb-20">
          {imageList.map((url, index) => (
            <div
              key={index}
              ref={(el) => {
                imagesRef.current[index] = el;
              }}
              className="overflow-hidden rounded-lg shadow-lg mb-5"
            >
              <img
                src={url}
                alt={`Image ${index + 1}`}
                onLoad={handleLoad}
                className="w-full object-cover transform hover:scale-105 transition duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-between items-center gap-10 my-80">
          <li className="border border-[#e6e6e6] px-4 py-2 rounded-sm bg-orange-500 text-white font-medium text-xl">Testing Reveal footer 1</li>
          <li className="border border-[#e6e6e6] px-4 py-2 rounded-sm bg-orange-500 text-white font-medium text-xl">Testing Reveal footer 2</li>
          <li className="border border-[#e6e6e6] px-4 py-2 rounded-sm bg-orange-500 text-white font-medium text-xl">Testing Reveal footer 3</li>
          <li className="border border-[#e6e6e6] px-4 py-2 rounded-sm bg-orange-500 text-white font-medium text-xl">Testing Reveal footer 4</li>
          <li className="border border-[#e6e6e6] px-4 py-2 rounded-sm bg-orange-500 text-white font-medium text-xl">Testing Reveal footer 5</li>
          <li className="border border-[#e6e6e6] px-4 py-2 rounded-sm bg-orange-500 text-white font-medium text-xl">Testing Reveal footer 6</li>
          <li className="border border-[#e6e6e6] px-4 py-2 rounded-sm bg-orange-500 text-white font-medium text-xl">Testing Reveal footer 7</li>
          <li className="border border-[#e6e6e6] px-4 py-2 rounded-sm bg-orange-500 text-white font-medium text-xl">Testing Reveal footer 8</li>
        </div>
        <div className="columns-3 mt-20 pb-20">
          {imageList.map((url, index) => (
            <div
              key={index}
              ref={(el) => {
                imagesRef.current[index] = el;
              }}
              className="overflow-hidden rounded-lg shadow-lg mb-5"
            >
              <img
                src={url}
                alt={`Image ${index + 1}`}
                onLoad={handleLoad}
                className="w-full object-cover transform hover:scale-105 transition duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </CustomLayout>
  );
}
