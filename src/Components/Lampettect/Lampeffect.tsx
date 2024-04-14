import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import { MovingBorderDemo } from "../Button/Movingbutton";

export function LampDemo() {
  return (
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
      <div className="mt-12  dark relative text-center p-7">
        {/* Video Container */}
        <div className="relative overflow-hidden">
          <video
            className="w-[40rem] h-auto"
            loop
            muted
            autoPlay
          >
            <source src="/lamp.webm" type="video/webm" />
            {/* Add additional <source> tags for other video formats (e.g., MP4) */}
            Your browser does not support the video tag.
          </video>
        </div>
        <MovingBorderDemo />
      </div>
    </LampContainer>
  );
}
