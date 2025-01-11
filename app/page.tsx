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
import { motion, AnimatePresence } from "framer-motion";
import { Button, Element, Link } from "react-scroll";
import NextLink from "next/link";
import { FlipWords } from "@/components/ui/custom/filp-words";
import ServiceCard from "@/components/ui/custom/service-card";
import Photo from "@/components/ui/custom/Photo";
import ImageSwiper from "@/components/ui/custom/image-swiper";
import ScrollProgressBar from "@/components/ui/custom/scroll-progress-bar";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  const title = `"קעקוע הוא לא רק קעקוע`;
  const p1 = `הוא מחשבה, הוא סיפור חיים, הוא יצירת אומנות`;
  const p2 = `והוא מתבצע עם תשומת לב לכל פרט קטן ודיוק חסר פשרות."`;
  return (
    <div className="w-full min-h-full">
      <ScrollProgressBar />
      <div
        className="h-[80vh] w-full px-6 md:px-20 py-6 text-center flex flex-col justify-around items-center"
        aria-label="חלק ראשי"
      >
        <div className="">
          <h1 className="text-2xl md:text-4xl font-mono text-center text-foreground">
            {title.split("").map((letter, index) => {
              return (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  {letter}
                </motion.span>
              );
            })}
          </h1>
          <p className="text-2xl md:text-4xl font-mono text-center text-foreground">
            {p1.split("").map((letter, index) => {
              return (
                <motion.span
                  key={`${index}-${letter}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: (title.length + index) * 0.05,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  {letter}
                </motion.span>
              );
            })}
          </p>
          <p className="text-2xl md:text-4xl font-mono text-center text-foreground">
            {p2.split("").map((letter, index) => {
              return (
                <motion.span
                  key={`${index}-${letter}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: (title.length + p1.length + index) * 0.05,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  {letter}
                </motion.span>
              );
            })}
          </p>
        </div>

        <motion.div transition={{ ease: "easeInOut", duration: 0.3, delay: (title.length + p1.length + p2.length) * 0.05 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex flex-row justify-center items-center gap-2">
          <Link
            className={buttonVariants({
              variant: "default",
              className:
                "w-14 h-14 text-foreground cursor-pointer font-mono font-bold rounded-full shadow-lg",
            })}
            to="section1"
            spy
            duration={500}
            smooth
            tabIndex={0}
            id="focusable"
            style={{ borderRadius: "50%" }}
          >
            <ArrowDown className="w-8 h-8 md:w-12 md:h-12 lg:w-12 lg:h-12 animate-bounce" />
          </Link>
        </motion.div>
      </div>
      <Element
        name="section1"
        className="h-screen w-full px-6 md:px-20 py-6"
        aria-label="חלק שני"
      >
        <AnimatePresence mode="wait">
          <div
            className="w-full h-full flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-20 md:gap-15 lg:gap-10"
            aria-label="היכרות עם הצוות"
          >
            <motion.div
              transition={{ ease: "easeInOut", duration: 0.3 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1}}
              className="w-full flex flex-col items-center lg:items-start gap-5 md:gap-10 space-y-4 md:space-y-1 text-4xl md:text-6xl lg:text-8xl text-center lg:text-start font-bold"
              aria-label="מידע כללי על השירות"
            >
              <span className="font-karantina flex flex-col gap-5">
                <h1
                  title="מילים דינמיות - אנימציה"
                  className="flex flex-row justify-center lg:justify-start items-center space-x-2 text-6xl md:text-6xl lg:text-8xl"
                  aria-label="מילות מפתח מתחלפות"
                >
                  <p className="transition-all">קעקוע </p>
                  <FlipWords
                    words={["גדול?", "צבעוני?", "עדין?"].map((w) =>
                      w.split("").reverse().join("")
                    )}
                    className="text-primary dark:text-primary"
                  />{" "}
                </h1>
                <h2
                  title="כותרת משנה"
                  className="font-bold text-foreground text-[2rem] md:text-[2.75rem]"
                  aria-label="הבטחה לעבודה עם כל עיצוב שתבחרו"
                >
                  אצלנו בInkmind Tattoo מתמחים במגוון סגנונות ואנחנו כאן כדי
                  להפוך את הרעיון שלך ליצירת אומנות ברמה הכי גבוהה שיש!{" "}
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
                    const div = document.getElementById("focusable");
                    div?.click();
                  }
                }}
                className={
                  "font-bold font-karantina text-[2rem] md:text-5xl px-4 py-2 focus:outline-primary text-white lg:p-6 cursor-pointer shadow-md bg-primary rounded-md flex items-center gap-2"
                }
                aria-label="ראה עוד מידע"
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
                switchTimeInSeconds={5}
                aspectRatio={26 / 20}
              />
            </div>
          </div>
        </AnimatePresence>
      </Element>
      <Element name="section2">
        <section
          className="w-full px-6 md:px-20 py-12 min-h-screen flex flex-col justify-center items-center gap-10 md:gap-20"
          aria-label="מידע על שירותים"
        >
          <motion.div
            transition={{ ease: "easeInOut", duration: 0.1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex flex-col justify-center items-center space-y-2 text-center font-karantina"
            aria-label="כותרת שירותים"
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
            className="w-full grid grid-cols-1 lg:grid-cols-3 justify-items-center content-center gap-16"
            aria-label="כרטיסי שירותים"
          >
            <ServiceCard
              title="אפיון מדויק"
              description="עיצוב והתאמה אישית לכל לקוח, תשומת לב לכל פרט ודיוק חסר פשרות עד לתוצאה המושלמת! אצלנו בסטודיו אנו מתמחים במגוון סגנונות קעקוע!"
              icon={<SlTarget className="text-primary" size={48} />}
            />
            <ServiceCard
              title="עבודה מכל הלב"
              description="יחס אישי לכל לקוח! באווירה חברית ורגועה ומאה אחוז יחס אישי שיגרום לכם להרגיש הכי בבית ובידיים הכי טובות שאפשר."
              icon={<LuHeartHandshake className="text-primary" size={48} />}
            />
            <ServiceCard
              title="שירותי פירסינג"
              description="שירות הפירסינג שלנו מבוצע מתיאום מראש והוא כולל ייעוץ מקצועי עם התאמה אישית של כל פירסינג בהתאם למבנה האוזן שלכם! וכמובן ליווי ועזרה לאורך כל הדרך גם לאחר ביצוע הפירסינג ועד להחלמה!"
              icon={<GiPiercingSword className="text-primary" size={48} />}
            />
          </motion.div>
        </section>
      </Element>
      <Element name="section3">
        <section
          className="w-full px-6 md:px-20 py-12 min-h-screen flex flex-col justify-center items-center gap-10 md:gap-20"
          aria-label="פרויקטים"
        >
          <motion.div
            transition={{ ease: "easeInOut", duration: 0.3 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex flex-col justify-center items-center space-y-2 text-center font-karantina"
            aria-label="כותרת פרויקטים"
          >
            <span className="text-primary text-4xl font-bold md:text-4xl">
              גלריית עבודות
            </span>
            <h1 className="pb-8 text-4xl md:text-6xl font-bold decoration-solid decoration-primary underline underline-offset-8">
              רוצים גם אתם להופיע כאן? גללו למטה
            </h1>
            <NextLink
              className={
                "font-bold font-karantina text-[2rem] md:text-5xl px-4 py-2 focus:outline-primary text-white lg:p-8 cursor-pointer shadow-md bg-primary rounded-md flex items-center gap-2"
              }
              href="/tattoos-album"
              aria-label="ראה עבודות נוספות"
            >
              ראו עוד עבודות
            </NextLink>
          </motion.div>
          <motion.div
            transition={{ ease: "easeInOut", duration: 0.6 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full grid grid-cols-1 lg:grid-cols-4 justify-items-center content-center gap-5 sm:gap-7 md:gap-10 lg:gap-15"
            aria-label="תמונות פרויקטים"
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
        <section
          className="relative w-full px-6 md:px-20 py-6 min-h-screen flex flex-col justify-center items-center gap-10 md:gap-20"
          aria-label="יצירת קשר"
        >
          <motion.div
            transition={{ ease: "easeInOut", duration: 0.3 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex flex-col justify-center items-center space-y-2 text-center font-karantina"
            aria-label="כותרת יצירת קשר"
          >
            <span className="text-foreground text-6xl font-bold md:text-8xl">
              יצירת קשר
            </span>
            {/* <h1 className="pb-8 text-3xl md:text-6xl font-bold decoration-dashed decoration-primary underline underline-offset-8">
              אל תהססו ותתחילו את התהליך עכשיו
            </h1> */}
          </motion.div>
          <motion.div
            transition={{ ease: "easeInOut", duration: 0.3 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full grid grid-cols-1 lg:grid-cols-2 justify-items-center content-center gap-16"
            aria-label="אפשרויות יצירת קשר"
          >
            <ServiceCard
              title="סמסו לנו בוואצאפ"
              icon={<FaWhatsapp size={48} className="text-primary" />}
              description={
                <NextLink
                  title="פותח את וואצאפ"
                  aria-label="פותח את הוואצאפ"
                  className="underline text-primary decoration-primary"
                  href="https://wa.me/+972553063884"
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
                  aria-label="פותח את וויז - ממקם אוטומטית את הסטודיו"
                  className="underline text-primary decoration-primary"
                  href="https://ul.waze.com/ul?ll=32.00669395%2C34.95125413&navigate=yes&zoom=17&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
                  target="_blank"
                >
                  לחצו כאן
                </NextLink>
              }
            />
          </motion.div>
        </section>
      </Element>
    </div>
  );
}
