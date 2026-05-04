import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "../aspect-ratio";
import { motion } from "motion/react";
import { FaInstagram } from "react-icons/fa";

export default function Photo({ image, media_url }: any) {
  return (
    <motion.div
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-full h-full"
    >
      <Link 
        className="block w-full h-full relative group" 
        target="_blank" 
        href={media_url} 
        aria-label="קישור לתמונה מהאינסטגרם"
      >
        <AspectRatio
          ratio={16 / 12}
          className="w-full h-full rounded-xl overflow-hidden shadow-2xl border-2 border-primary/20 group-hover:border-primary/60 transition-colors duration-500"
        >
          {/* Neon Glow Layer */}
          <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_50px_rgba(var(--primary),0.2)] pointer-events-none" />
          
          <Image 
            src={image} 
            alt="תמונה מהאינסטגרם" 
            priority 
            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" 
          />

          {/* Instagram Overlay */}
          <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-[2px]">
            <div className="bg-white/10 p-4 rounded-full border border-white/20 shadow-2xl">
              <FaInstagram className="text-white w-10 h-10" />
            </div>
          </div>
        </AspectRatio>
      </Link>
    </motion.div>
  );
}
