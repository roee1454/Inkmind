"use client";
import Image from "next/image";
import { SlTarget } from "react-icons/sl";
import { LuHeartHandshake } from "react-icons/lu";
import { GiPiercingSword } from "react-icons/gi";
import { ArrowDown } from "lucide-react";
import StampIcon from "../public/Stamp.png";
import HeroImage from "../public/Hero Placeholder.jpg";
import Photo1 from "../public/photo1.jpg";
import Photo2 from "../public/photo2.jpg";
import Photo3 from "../public/photo3.jpg";
import Photo4 from "../public/photo4.jpg";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { buttonVariants } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Element, Link } from "react-scroll";
import NextLink from "next/link";
import { FlipWords } from "@/components/ui/custom/filp-words";
import ServiceCard from "@/components/ui/custom/service-card";
import Photo from "@/components/ui/custom/Photo";

export default function Home() {
  return (
    <div className="w-full min-h-full">
      <main className="h-[85vh] w-full px-6 md:px-20 py-6">
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
                <h2 className="font-semibold text-foreground">
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
                  size: "sm",
                  className: "text-xl cursor-pointer",
                })}
              >
                ראה עוד <ArrowDown className="mr-2 w-5 h-5 animate-bounce" />
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
                  ratio={24 / 16}
                  className="bg-muted w-full h-full shadow-md rounded-lg"
                >
                  <Image
                    draggable={false}
                    src={HeroImage}
                    priority
                    alt="Hero Image - Tiger Tattoo"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <motion.div
                    transition={{ ease: "easeInOut", duration: 1.2 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="w-full absolute top-[40px] right-0 md:right-[-20px] -translate-y-[50%]"
                  >
                    <Image
                      draggable={false}
                      className="w-24 md:w-52 h-24 md:h-52 rotate-12"
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
        <section className="w-full px-6 md:px-20 py-6 min-h-screen flex flex-col justify-center items-center gap-10 md:gap-20">
          <motion.div
            transition={{ ease: "easeInOut", duration: 0.1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex flex-col justify-center items-center space-y-2 text-center font-karantina"
          >
            <span className="text-primary text-2xl md:text-4xl">שירותים</span>
            <h1 className="text-3xl md:text-6xl font-bold decoration-wavy decoration-primary underline underline-offset-8">
              הסטודיו שלנו מציע
            </h1>
          </motion.div>
          <motion.div
            transition={{ ease: "easeInOut", duration: 0.3 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full grid grid-cols-1 md:grid-cols-2 md:last:col-span-2 md:last:w-full lg:grid-cols-3 justify-items-center content-center gap-16"
          >
            <ServiceCard
              title="אפיון מדויק"
              description="נביט אל תוך המוח שלכם ונכיר אתכם על מנת לחשוב לאפיין ולבחון את העיצוב שאתם באמת חושקים בו"
              icon={<SlTarget className="text-primary" size={48} />}
            />
            <ServiceCard
              title="עבודה מכל הלב"
              description="נשקיע בכם את כל הזמן שצריך על מנת שהקעקוע יצא איכותי ומושקע! ניתן גם לחלק את המפגשים לסשנים"
              icon={<LuHeartHandshake className="text-primary" size={48} />}
            />
            <ServiceCard
              title="שירותי פירסינג"
              description="אנחנו מציעים גם שירותי פירסינג עם מגוון מומחים"
              icon={<GiPiercingSword className="text-primary" size={48} />}
            />
          </motion.div>
        </section>
      </Element>
      <Element name="section3">
        <section className="w-full px-6 md:px-20 py-6 min-h-screen flex flex-col justify-center items-center gap-10 md:gap-20">
          <motion.div
            transition={{ ease: "easeInOut", duration: 0.3 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex flex-col justify-center items-center space-y-2 text-center font-karantina"
          >
            <span className="text-primary text-2xl md:text-4xl">פרויקטים</span>
            <h1 className="pb-8 text-3xl md:text-6xl font-bold decoration-wavy decoration-primary underline underline-offset-8">
              קצת לקוחות מרוצים
            </h1>
            <NextLink
              className={buttonVariants({
                size: "sm",
                className:
                  "font-bold font-karantina text-[2rem] md:text-4xl p-2 md:p-6 ",
              })}
              href="/album"
            >
              ראו עוד עבודות
            </NextLink>
          </motion.div>
          <motion.div
            transition={{ ease: "easeInOut", duration: 0.6 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center content-center gap-5 sm:gap-7 md:gap-10 lg:gap-15"
          >
            <Photo
              image={Photo1}
              media_url="https://www.instagram.com/p/CxJACpJskhm/"
            />
            <Photo
              image={Photo2}
              media_url="https://www.instagram.com/p/C6gczxcs1iE/"
            />
            <Photo
              image={Photo3}
              media_url="https://www.instagram.com/p/C3qAXL3sO78/"
            />
            <Photo
              image={Photo4}
              media_url="https://www.instagram.com/p/CdtDqT7MP8y/"
            />
          </motion.div>
        </section>
      </Element>
    </div>
  );
}
