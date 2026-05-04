// components/MediaItemComponent.tsx
import React from "react";
import { MediaItem } from "@/lib/fetchInstagramData";
import Image from "next/image";
import { motion } from "motion/react";
import { FaInstagram, FaPlay, FaClone } from "react-icons/fa";

interface MediaItemProps {
  item: MediaItem;
  onClick?: (item: MediaItem) => void;
}

const MediaItemComponent: React.FC<MediaItemProps> = ({ item, onClick }) => {
  const isVideo = item.media_type === "VIDEO";
  const isCarousel = item.media_type === "CAROUSEL_ALBUM";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="w-full mb-6 break-inside-avoid"
    >
      <div 
        onClick={() => onClick?.(item)}
        className="block w-full relative group cursor-pointer" 
        aria-label={item.caption || "תמונה מהאינסטגרם"}
      >
        <div
          className="w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/10 group-hover:border-primary/60 transition-all duration-500 bg-zinc-900"
        >
          {/* Neon Glow Layer */}
          <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_50px_hsl(var(--primary)/0.2)] pointer-events-none" />
          
          {/* Indicators */}
          <div className="absolute top-4 right-4 z-30 flex gap-2">
            {isCarousel && (
              <div className="bg-black/60 backdrop-blur-md p-2 rounded-lg text-white shadow-lg">
                <FaClone className="w-4 h-4" />
              </div>
            )}
            {isVideo && (
              <div className="bg-black/60 backdrop-blur-md p-2 rounded-lg text-white shadow-lg">
                <FaPlay className="w-4 h-4" />
              </div>
            )}
          </div>

          <div className="relative overflow-hidden aspect-[4/5]">
            {isVideo ? (
               <video 
                 src={item.media_url} 
                 className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                 muted
                 loop
                 onMouseOver={(e) => (e.target as HTMLVideoElement).play()}
                 onMouseOut={(e) => (e.target as HTMLVideoElement).pause()}
               />
            ) : (
            <Image 
              src={item.media_url} 
              alt={item.caption || "תמונה מהאינסטגרם"} 
              width={400}
              height={500}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              quality={60}
              className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
            />

            )}
          </div>

          {/* Instagram Overlay */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/60 backdrop-blur-[3px]">
            <div className="bg-white/10 p-5 rounded-full border border-white/20 shadow-[0_0_30px_hsl(var(--primary)/0.4)] transform scale-50 group-hover:scale-100 transition-transform duration-500 mb-4">
              <FaInstagram className="text-white w-10 h-10" />
            </div>
            <span className="text-white font-karantina text-2xl tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              ראה פוסט
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MediaItemComponent;


