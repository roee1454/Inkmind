"use client";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import StampIcon from "../public/Stamp.png";
import HeroImage from "../public/Hero Placeholder.jpeg";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <main className="h-[80vh] w-full px-6 md:px-20 py-6">
      <AnimatePresence mode="wait">
        <div className="w-full h-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-20 md:gap-5">
          <motion.div
            transition={{ ease: "easeInOut", duration: 0.3 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="w-full flex flex-col items-center md:items-start gap-5 md:gap-10  text-3xl md:text-6xl text-center md:text-start font-bold"
          >
            <span className="font-karantina flex flex-col gap-5">
              <span className="">
                <span className="text-primary">Enourmous? Minimal?</span> We Got
                Ya
              </span>
              <span>
                צוות המקעקעים שלנו יוכל לעבוד עם כל עיצוב שתבחרו{" "}
                <span className="decoration-primary decoration-wavy underline underline-offset-8">
                  בהבטחה
                </span>
                !
              </span>
            </span>
            <Button className="text-xl">
              ראה עוד <ArrowDown className="mr-1 w-5 h-5 animate-bounce" />
            </Button>
          </motion.div>
          <div className="relative w-full">
            <motion.div
              transition={{ ease: "easeInOut", duration: 0.6 }}
              initial={{ scale: 1.2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="w-64 md:w-[100%] h-[100%] mx-auto"
            >
              <AspectRatio
                ratio={12 / 9}
                className="bg-muted h-full shadow-md rounded-md"
              >
                <Image
                  draggable={false}
                  src={HeroImage}
                  priority
                  alt="Hero Image - Dor Holding Hand"
                  className="w-full h-full object-cover pointer-events-none rounded-md"
                />
              </AspectRatio>
            </motion.div>
            <motion.div
              transition={{ ease: "easeInOut", duration: 1.2 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="w-full absolute top-[40px] right-[-20px] -translate-y-[50%]"
            >
              <Image
                draggable={false}
                className="w-32 md:w-52 h-32 md:h-52 rotate-12 pointer-events-none"
                src={StampIcon}
                alt="stamp"
              />
            </motion.div>
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
}
