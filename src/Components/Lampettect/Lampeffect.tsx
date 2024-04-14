import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import { MovingBorderDemo } from "../Button/Movingbutton";
import { useState, useEffect, useRef } from "react";

export function LampDemo() {
  const [showButton, setShowButton] = useState(false);
  const videoSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const videoSection = videoSectionRef.current;
      if (!videoSection) return;

      const videoSectionBounds = videoSection.getBoundingClientRect();
      if (window.scrollY > videoSectionBounds.bottom) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-12 bg-gradient-to-br from-[#3F3E3D] to-[#3F3E3D] py-4 bg-clip-text text-center text-4xl font-medium tracking-tight  text-transparent md:text-7xl"
        >
          Build lamps <br /> the right way
        </motion.h1>
        <div ref={videoSectionRef} className="mt-12 dark relative text-center p-7">
          {/* Video Container */}
          <div className="relative overflow-hidden">
            <video
              className="w-[40rem] h-auto"
              loop
              muted
              autoPlay
            >
              <source src="/lamp.webm" type="video/webm" />
             
              Your browser does not support the video tag.
            </video>
          </div>
          <MovingBorderDemo />
        </div>
      </LampContainer>

      {/* Mobile-only sticky button */}
      {showButton && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
        <button className="bg-orange-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded">
          Get started
        </button>
      </div>
      )}
    </>
  );
}
