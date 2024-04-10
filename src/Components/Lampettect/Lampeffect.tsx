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
        className="mt-12 bg-gradient-to-br from-stone-300 to-stone-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight  text-transparent md:text-7xl"
      >
        Build lamps <br /> the right way
      </motion.h1>
      <div className="mt-12 dark relative text-center p-4">
       
        {/* Image Container */}
        <div className="relative">
          <img
            className="mt-4 mx-auto mb-3 rounded-sm"
            src="https://gifdb.com/images/high/nature-foggy-sunrise-in-forest-dz256ju6xg1vee9d.webp" // Example image URL
            alt="Nature" // Add alt text for accessibility
            width="640" // Specify the width
            height="360" // Specify the height
          />
        </div>
        <MovingBorderDemo />

      </div>
    </LampContainer>
  );
}
