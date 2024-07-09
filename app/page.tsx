"use client";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import StampIcon from "../public/Stamp.png";
import HeroImage from "../public/Hero Placeholder.jpg";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { buttonVariants } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Element, Link } from "react-scroll";
import { CardStack } from "@/components/ui/custom/card-stack";
import { FlipWords } from "@/components/ui/custom/filp-words";

export default function Home() {
  return (
    <div className="w-full min-h-full">
      <main className="h-[80vh] w-full px-6 md:px-20 py-6">
        <AnimatePresence mode="wait">
          <div className="w-full h-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-20 md:gap-5">
            <motion.div
              transition={{ ease: "easeInOut", duration: 0.3 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full flex flex-col items-center md:items-start gap-5 md:gap-10  text-3xl md:text-6xl text-center md:text-start font-bold"
            >
              <span className="font-karantina flex flex-col gap-5">
                <h1 className="flex flex-row justify-center md:justify-start items-center space-x-2">
                  <p className="transition-all">We Got You</p>
                  <FlipWords
                    words={["Enourmous?", "Minimal?", "Outragous?"]}
                    className="text-primary dark:text-primary"
                  />{" "}
                </h1>
                <h2>
                  צוות המקעקעים שלנו יוכל לעבוד עם כל עיצוב שתבחרו{" "}
                  <span className="decoration-primary decoration-wavy underline underline-offset-8">
                    בהבטחה
                  </span>
                  !
                </h2>
              </span>
              <Link
                to="section2"
                spy
                smooth
                duration={500}
                className={buttonVariants({
                  size: "lg",
                  className: "text-xl cursor-pointer",
                })}
              >
                ראה עוד <ArrowDown className="mr-1 w-5 h-5 animate-bounce" />
              </Link>
            </motion.div>
            <div className="relative w-full">
              <motion.div
                transition={{ ease: "easeInOut", duration: 0.6 }}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-64 md:w-[100%] h-[100%] mx-auto"
              >
                <AspectRatio
                  ratio={12 / 9}
                  className="bg-muted w-full h-full shadow-md rounded-lg"
                >
                  <Image
                    draggable={false}
                    src={HeroImage}
                    priority
                    alt="Hero Image - Tiger Tattoo"
                    className="w-full h-full object-cover pointer-events-none rounded-lg"
                  />
                  <motion.div
                    transition={{ ease: "easeInOut", duration: 1.2 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="w-full absolute top-[40px] right-0 md:right-[-20px] -translate-y-[50%]"
                  >
                    <Image
                      draggable={false}
                      className="w-24 md:w-52 h-24 md:h-52 rotate-12 pointer-events-none"
                      src={StampIcon}
                      alt="חותמת - אישור"
                    />
                  </motion.div>
                </AspectRatio>
              </motion.div>
            </div>
          </div>
        </AnimatePresence>
      </main>
      <Element name="section2">
        <section className="w-full min-h-screen flex flex-col justify-center items-center gap-10 md:gap-20">
          <div className="text-3xl md:text-6xl text-center font-karantina">
            הלקוחות אומרים:
          </div>
          <CardStack
            items={[
              {
                name: "רואי",
                id: 0,
                designation: "רואי חיילי המלך",
                content:
                  "התהליך עבר ממש ממש בקלות והיחס של דור כלפייך הוא באמת מדהים, ללא ספק אחזור שוב!",
              },
              {
                name: "רואי",
                id: 1,
                designation: "רואי חיילי המלך",
                content:
                  "התהליך עבר ממש ממש בקלות והיחס של דור כלפייך הוא באמת מדהים, ללא ספק אחזור שוב!",
              },
              {
                name: "רואי",
                id: 2,
                designation: "רואי חיילי",
                content: "ללא ספק אחזור שוב!",
              },
            ]}
          />
        </section>
      </Element>
    </div>
  );
}
