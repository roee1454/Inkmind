"use client";
import { SlTarget } from "react-icons/sl";
import { LuHeartHandshake } from "react-icons/lu";
import { GiPiercingSword } from "react-icons/gi";
import { FaWhatsapp, FaPhone, FaWaze, FaInstagram } from "react-icons/fa";
import { ArrowDown, ArrowLeft } from "lucide-react";
import SwiperImage1 from "../public/swiper-image1.jpg";
import SwiperImage2 from "../public/swiper-image2.jpg";
import SwiperImage3 from "../public/swiper-image3.jpg";
import SwiperImage4 from "../public/swiper-image4.jpg";
import Photo1 from "../public/photo1.jpg";
import Photo2 from "../public/photo2.jpg";
import Photo3 from "../public/photo3.jpg";
import Photo4 from "../public/photo4.jpg";
import { motion, AnimatePresence } from "motion/react";
import { Element, Link } from "react-scroll";
import NextLink from "next/link";
import { FlipWords } from "@/components/ui/custom/filp-words";
import ServiceCard from "@/components/ui/custom/service-card";
import Photo from "@/components/ui/custom/Photo";
import ImageSwiper from "@/components/ui/custom/image-swiper";
import { useCallback, useState } from "react";
import ScrollProgressBar from "@/components/ui/custom/scroll-progress-bar";

const services = [
  {
    title: "אפיון מדויק",
    description: "עיצוב מותאם אישית ודיוק חסר פשרות לכל סגנון.",
    icon: <SlTarget className="text-primary" size={64} />,
  },
  {
    title: "עבודה מהלב",
    description: "יחס אישי ואווירה חברית שתגרום לכם להרגיש בבית.",
    icon: <LuHeartHandshake className="text-primary" size={64} />,
  },
  {
    title: "פירסינג מקצועי",
    description: "ייעוץ והתאמה אישית בליווי מלא עד להחלמה.",
    icon: <GiPiercingSword className="text-primary" size={64} />,
  },
];

import { ChevronLeft, ChevronRight } from "lucide-react";
import NeonWatermark from "@/components/ui/custom/neon-watermark";

// ... inside Home or where ServicesSlider is defined

function ServicesSlider() {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const current = (page % services.length + services.length) % services.length;

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      filter: "blur(10px)"
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      filter: "blur(0px)"
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      filter: "blur(10px)"
    })
  };

  return (
    <div className="relative group flex flex-col items-center">
      {/* Navigation Dots */}
      <div className="flex flex-row justify-center gap-3 mb-8">
        {services.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              const newDirection = i > current ? 1 : -1;
              setPage([i, newDirection]);
            }}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              current === i ? "w-8 bg-primary shadow-[0_0_10px_hsl(var(--primary))]" : "w-2 bg-primary/20"
            }`}
            aria-label={`עבור לשירות ${i + 1}`}
          />
        ))}
      </div>

      <div className="relative w-full flex items-center justify-center px-4 md:px-12">
        {/* Left Arrow (Floating) */}
        <button 
          onClick={() => paginate(1)}
          className="absolute left-0 md:left-6 z-30 p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-primary hover:bg-primary hover:text-white transition-all shadow-lg hover:shadow-primary/40 group/btn"
          aria-label="Previous service"
        >
          <ChevronLeft className="w-6 h-6 transition-transform group-hover/btn:-translate-x-0.5" />
        </button>

        {/* Content Area */}
        <div className="w-full overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 400, damping: 40 },
                opacity: { duration: 0.3 }
              }}
              className="w-full"
            >
              <ServiceCard
                title={services[current].title}
                description={services[current].description}
                icon={services[current].icon}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow (Floating) */}
        <button 
          onClick={() => paginate(-1)}
          className="absolute right-0 md:right-6 z-30 p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-primary hover:bg-primary hover:text-white transition-all shadow-lg hover:shadow-primary/40 group/btn"
          aria-label="Next service"
        >
          <ChevronRight className="w-6 h-6 transition-transform group-hover/btn:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
}


export default function Home() {
  return (
    <div className="w-full min-h-full overflow-x-hidden">
      <ScrollProgressBar />
      <Element
        name="section1"
        className="relative w-full px-6 md:px-20 py-20 min-h-[90vh] flex items-center justify-center overflow-hidden pt-44"
        aria-label="חלק ראשון"
      >
        <AnimatePresence mode="wait">
          <div
            className="relative z-10 w-full h-full flex flex-col justify-center items-center gap-12 lg:gap-24"
            aria-label="היכרות עם הצוות"
          >
            <motion.div
              transition={{ ease: "easeInOut", duration: 0.5 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="w-full lg:w-1/2 flex flex-col items-center gap-8 text-center lg:text-start"
              aria-label="מידע כללי על השירות"
            >
              <div className="flex flex-col gap-6">
                <h1
                  title="מילים דינמיות - אנימציה"
                  className="flex flex-row justify-center items-center space-x-4 text-7xl md:text-8xl lg:text-[9rem] rotate-3 font-bold font-karantina leading-tight"
                  aria-label="מילות מפתח מתחלפות"
                >
                  <p className="transition-all">קעקוע </p>
                  <FlipWords
                    words={["גדול?", "צבעוני?", "עדין?"].map((w) =>
                      w.split("").reverse().join("")
                    )}
                    colors={["text-primary"]}
                    className="text-glow"
                  />{" "}
                </h1>
                <h2
                  title="כותרת משנה"
                  className="max-w-3xl text-foreground/80 text-[1.5rem] text-center md:text-[2.2rem] font-assistant font-light leading-relaxed"
                  aria-label="הבטחה לעבודה עם כל עיצוב שתבחרו"
                >
                  אצלנו בסטודיו מתמחים במגוון סגנונות <br/ >
                בוא להפוך את הרעיון שלך למציאות בצורה הכי מדויקת שיש!{" "}
                </h2>
              </div>
              
              <Link
                to="section2"
                spy
                smooth
                duration={500}
                className="group hover:cursor-pointer relative font-bold font-karantina text-3xl md:text-5xl px-8 py-4 bg-primary text-white rounded-xl shadow-2xl shadow-primary/30 transition-all flex justify-center items-center gap-4 overflow-hidden"
                aria-label="ראה עוד מידע"
              >
                <span className="relative z-10">ראה עוד</span>
                <ArrowDown className="relative z-10 w-8 h-8 animate-bounce" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </motion.div>

            {/* <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-full lg:w-1/2 max-w-[600px]"
            >
              <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full" />
              <div className="relative glass dark:glass-dark p-2 rounded-2xl border-2 border-primary/20 rotate-2 hover:rotate-0 transition-transform duration-500">
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
            </motion.div> */}
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
            <span className="text-primary text-4xl font-bold md:text-4xl text-glow">
              שירותים
            </span>
            <h1 className="text-4xl md:text-6xl font-bold decoration-wavy decoration-primary animate-neon-flicker rotate-3 underline underline-offset-8">
              הסטודיו שלנו מציע
            </h1>
          </motion.div>
          <div className="w-full max-w-4xl overflow-hidden">
            <ServicesSlider />
          </div>
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
            <span className="text-primary text-4xl font-bold md:text-4xl text-glow">
              גלריית עבודות
            </span>
            <h1 className="pb-8 text-4xl md:text-6xl font-bold decoration-wavy decoration-primary animate-neon-flicker rotate-3 underline underline-offset-8">
              יום אחד אתם תהיו פה
            </h1>
            <NextLink
              className={
                "group relative font-bold font-karantina text-3xl md:text-5xl px-8 py-4 bg-primary text-white rounded-xl shadow-2xl shadow-primary/30 transition-all flex justify-center items-center gap-4 overflow-hidden"
              }
              href="/tattoos-album"
              aria-label="ראה עבודות נוספות"
            >
              <span>ראו עוד עבודות</span>
              <ArrowLeft className="w-6 h-6 transition-transform group-hover:-translate-x-2" />
              <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </NextLink>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full flex overflow-x-auto pb-8 gap-6 no-scrollbar snap-x cursor-grab active:cursor-grabbing"
            aria-label="גלריית תמונות נגללת"
          >
            {[Photo1, Photo2, Photo3, Photo4, SwiperImage1, SwiperImage2, SwiperImage3, SwiperImage4].map((img, i) => (
              <div key={i} className="min-w-[300px] md:min-w-[400px] snap-center">
                <Photo
                  image={img}
                  media_url="https://www.instagram.com/ink.mind_tattoo/"
                />
              </div>
            ))}
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
            <span className="text-primary text-4xl font-bold md:text-4xl text-glow">
              יצירת קשר
            </span>
            <h1 className="pb-8 text-3xl md:text-6xl font-bold decoration-wavy animate-neon-flicker rotate-3 decoration-primary underline underline-offset-8">
              אל תהססו ותתחילו את התהליך עכשיו
            </h1>
          </motion.div>
          <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-6 px-4">
            {/* Main Contact Card */}
            <motion.div 
              className="lg:col-span-6"
            >
              <ServiceCard
                title="סמסו לנו בוואצאפ"
                icon={<FaWhatsapp size={64} className="text-primary text-glow" />}
                description={
                  <div className="flex flex-col gap-4">
                    <p className="text-lg">זמינים לכל שאלה, ייעוץ או קביעת תור.</p>
                    <NextLink
                      className="inline-flex items-center justify-center font-bold px-8 py-4 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                      href="https://wa.me/+972553063884"
                      target="_blank"
                    >
                      דברו איתנו בוואצאפ
                    </NextLink>
                  </div>
                }
              />
            </motion.div>

            {/* Location & Secondary Cards */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <motion.div >
                <ServiceCard
                  title="ניווט"
                  icon={<FaWaze size={48} className="text-primary" />}
                  description={
                    <NextLink
                      className="text-primary font-bold hover:underline"
                      href="https://ul.waze.com/ul?ll=32.00669395%2C34.95125413&navigate=yes"
                      target="_blank"
                    >
                      סעו אלינו עכשיו!
                    </NextLink>
                  }
                />
              </motion.div>
              <motion.div 
                
                className="glass dark:glass-dark p-6 rounded-lg border-2 border-primary/20 flex items-center justify-between ink-gradient"
              >
                <NextLink className="w-full flex flex-row items-center justify-between" href="https://www.instagram.com/ink.mind_tattoo/" target="_blank">
                  <span className="flex flex-col">
                    <span className="text-xl font-bold font-karantina">עקבו אחרינו</span>
                    <span className="text-sm font-assistant opacity-70">עדכונים ופוסטים חדשים</span>
                  </span>
                  <FaInstagram size={32} className="text-primary" />
                </NextLink>
              </motion.div>
            </div>
          </div>
        </section>
      </Element>
    </div>
  );
}
