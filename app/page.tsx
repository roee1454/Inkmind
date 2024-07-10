"use client";
import { SlTarget } from "react-icons/sl";
import { LuHeartHandshake } from "react-icons/lu";
import { GiPiercingSword } from "react-icons/gi";
import { FaWhatsapp, FaPhone, FaWaze } from "react-icons/fa";
import { ArrowDown } from "lucide-react";
import SwiperImage1 from "../public/swiper-image1.jpg";
import SwiperImage2 from "../public/swiper-image2.jpg";
import SwiperImage3 from "../public/swiper-image3.jpg";
import SwiperImage4 from "../public/swiper-image4.jpg";
import Photo1 from "../public/photo1.jpg";
import Photo2 from "../public/photo2.jpg";
import Photo3 from "../public/photo3.jpg";
import Photo4 from "../public/photo4.jpg";
import { Button, buttonVariants } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Element, Link } from "react-scroll";
import NextLink from "next/link";
import { FlipWords } from "@/components/ui/custom/filp-words";
import ServiceCard from "@/components/ui/custom/service-card";
import Photo from "@/components/ui/custom/Photo";
import ImageSwiper from "@/components/ui/custom/image-swiper";

export default function Home() {
  return (
    <div className="w-full min-h-full">
      <main className="h-[90vh] w-full px-6 md:px-20 py-12">
        <AnimatePresence mode="wait">
          <div className="w-full h-full flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-20 md:gap-15 lg:gap-10">
            <motion.div
              transition={{ ease: "easeInOut", duration: 0.3 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full flex flex-col items-center lg:items-start gap-5 md:gap-10 space-y-4 md:space-y-1 text-4xl md:text-5xl lg:text-6xl text-center lg:text-start font-bold"
            >
              <span className="font-karantina flex flex-col gap-5">
                <h1
                  title="מילים דינמיות - אנימציה"
                  className="flex flex-row justify-center lg:justify-start items-center space-x-2"
                >
                  <p className="transition-all">We Got You</p>
                  <FlipWords
                    words={["Enourmous?", "Minimal?", "Outragous?"]}
                    className="text-primary dark:text-primary"
                  />{" "}
                </h1>
                <h2
                  title="כותרת משנה"
                  className="font-bold text-foreground text-[2.75rem]"
                >
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
                tabIndex={0}
                id="focusable"
                onKeyDown={(e) => {
                  if (e.key === "tab") {
                    const div = document.getElementById("focusable");
                    div?.focus();
                  }
                  if (e.key === "Enter") {
                    const div = document.getElementById("focusable")
                    div?.click();
                  }
                }}
                className={buttonVariants({
                  className:
                    "font-bold font-karantina text-[2rem] md:text-5xl p-8 lg:p-12 cursor-pointer shadow-md",
                })}
              >
                ראה עוד{" "}
                <ArrowDown className="mr-2 w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 animate-bounce" />
              </Link>
            </motion.div>
            <div className="relative w-full">
              <ImageSwiper
                images={[
                  SwiperImage1,
                  SwiperImage2,
                  SwiperImage3,
                  SwiperImage4,
                ]}
                switchTimeInSeconds={3}
              />
            </div>
          </div>
        </AnimatePresence>
      </main>
      <Element name="section2">
        <section className="w-full px-6 md:px-20 py-12 min-h-screen flex flex-col justify-center items-center gap-10 md:gap-20">
          <motion.div
            transition={{ ease: "easeInOut", duration: 0.1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex flex-col justify-center items-center space-y-2 text-center font-karantina"
          >
            <span className="text-primary text-4xl font-bold md:text-4xl">
              שירותים
            </span>
            <h1 className="text-4xl md:text-6xl font-bold decoration-wavy decoration-primary underline underline-offset-8">
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
        <section className="w-full px-6 md:px-20 py-12 min-h-screen flex flex-col justify-center items-center gap-10 md:gap-20">
          <motion.div
            transition={{ ease: "easeInOut", duration: 0.3 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex flex-col justify-center items-center space-y-2 text-center font-karantina"
          >
            <span className="text-primary text-4xl font-bold md:text-4xl">
              פרויקטים
            </span>
            <h1 className="pb-8 text-4xl md:text-6xl font-bold decoration-solid decoration-primary underline underline-offset-8">
              קצת לקוחות מרוצים
            </h1>
            <NextLink
              className={buttonVariants({
                size: 'lg',
                className:
                  "font-bold font-karantina text-5xl p-8 shadow-md",
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
      <Element name="section4">
        <section className="relative w-full px-6 md:px-20 py-6 min-h-screen flex flex-col justify-center items-center gap-10 md:gap-20">
          <motion.div
            transition={{ ease: "easeInOut", duration: 0.3 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex flex-col justify-center items-center space-y-2 text-center font-karantina"
          >
            <span className="text-primary text-4xl font-bold md:text-4xl">
              יצירת קשר
            </span>
            <h1 className="pb-8 text-3xl md:text-6xl font-bold decoration-dashed decoration-primary underline underline-offset-8">
              אל תהססו ותתחילו את התהליך עכשיו
            </h1>
          </motion.div>
          <motion.div
            transition={{ ease: "easeInOut", duration: 0.3 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full grid grid-cols-1 md:grid-cols-2 md:last:col-span-2 md:last:w-full lg:grid-cols-3 justify-items-center content-center gap-16"
          >
            <ServiceCard
              title="סמסו לנו בוואצאפ"
              icon={<FaWhatsapp size={48} className="text-primary" />}
              description={
                <NextLink
                  title="פותח את וואצאפ"
                  className="underline text-primary decoration-primary"
                  href="https://wa.me/+972528114746"
                  target="_blank"
                >
                  לחצו כאן
                </NextLink>
              }
            />
            <ServiceCard
              title="נווטו למקום בוויז"
              icon={<FaWaze size={48} className="text-primary" />}
              description={
                <NextLink
                  title="פותח את וויז - ממקם אוטומטית את הסטודיו"
                  className="underline text-primary decoration-primary"
                  href="https://ul.waze.com/ul?ll=32.00669395%2C34.95125413&navigate=yes&zoom=17&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
                  target="_blank"
                >
                  לחצו כאן
                </NextLink>
              }
            />
            <ServiceCard
              title="זמינים גם בטלפון"
              icon={<FaPhone size={48} className="text-primary" />}
              description={"טלפון אישי - 0528114746"}
            />
          </motion.div>
        </section>
      </Element>
    </div>
  );
}
