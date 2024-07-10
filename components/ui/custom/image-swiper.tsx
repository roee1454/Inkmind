"use client";

import { AspectRatio } from "../aspect-ratio";
import Image from "next/image";
import { motion } from "framer-motion";
import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import { useState, useEffect } from "react";
import StampIcon from "../../../public/Stamp.png";

interface ImageSwiperProps {
  images: StaticImport[];
  switchTimeInSeconds: number;
}

export default function ImageSwiper({
  images,
  switchTimeInSeconds,
}: ImageSwiperProps) {
  const [currentImage, setCurrentImage] = useState<number>(0);

  useEffect(() => {
    const unsubscribe = setInterval(() => {
      if (currentImage + 1 !== images.length) {
        setCurrentImage((prevIndex) => ++prevIndex);
      } else {
        setCurrentImage(0);
      }
    }, switchTimeInSeconds * 1000);

    return () => {
      clearInterval(unsubscribe);
    };
  }, [currentImage]);

  return (
    <motion.div
      transition={{ ease: "easeInOut", duration: 0.6 }}
      initial={{ scale: 1.2, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="w-64 md:w-[100%] h-[100%] mx-auto"
    >
      {images.map((_, index) => {
        if (index === currentImage) {
          return (
            <motion.div
              transition={{ ease: "easeInOut", duration: 0.8 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={index}
            >
              <AspectRatio
                ratio={20 / 16}
                className="bg-muted w-full h-full shadow-md rounded-lg"
              >
                <Image
                  draggable={false}
                  src={images[currentImage]}
                  priority
                  alt="Hero Image - Tiger Tattoo"
                  className="w-full h-full object-cover rounded-lg"
                />
              </AspectRatio>
            </motion.div>
          );
        }
      })}
      <div className="w-full absolute top-[40px] right-0 md:right-[-20px] -translate-y-[50%]">
        <Image
          draggable={false}
          className="w-24 md:w-52 h-24 md:h-52 rotate-12"
          src={StampIcon}
          alt="חותמת - אישור"
        />
      </div>
    </motion.div>
  );
}
