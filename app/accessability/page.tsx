"use client";
import { motion } from "motion/react";

const AccessibilityStatement = () => {
  return (
    <div className="min-h-screen w-full pt-44 pb-32 px-6 md:px-20 font-assistant flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl space-y-5"
      >
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold font-karantina text-glow text-primary">
            הצהרת נגישות
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            אנו ב-Ink Mind מאמינים שכל אדם זכאי לחוויית גלישה שוויונית ונוחה. 
            האתר הונגש במאמץ רב כדי להבטיח נגישות מקסימלית לכלל האוכלוסייה.
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid gap-8">
          <section className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-karantina text-primary/80">מה עשינו כדי להנגיש את האתר?</h2>
            <ul className="space-y-4 text-lg md:text-xl text-foreground/80">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-3 shrink-0" />
                <span>עמידה בתקן Web Content Accessibility Guidelines 2.0 ברמה AA.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-3 shrink-0" />
                <span>ניווט מקלדת מלא (מקש Tab) ותמיכה בתוכנות קורא מסך.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-3 shrink-0" />
                <span>תוסף נגישות ייעודי (Enable) המאפשר שינוי גדלים, ניגודיות, ופונטים.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-3 shrink-0" />
                <span>שימוש ב-HTML סמנטי ותגיות ARIA לתיאור מדויק של רכיבי האתר.</span>
              </li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-karantina text-primary/80">הסדרי נגישות בסטודיו</h2>
            <ul className="space-y-4 text-lg md:text-xl text-foreground/80">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-3 shrink-0" />
                <span>חניית נכים מסודרת בנהלי קניון שוהם מרקט.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-3 shrink-0" />
                <span>גישה נוחה ומעליות מונגשות לכל חלקי הסטודיו.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-3 shrink-0" />
                <span>צוות סבלני ומיומן למתן שירות לאנשים עם מוגבלויות.</span>
              </li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl space-y-6 ">
            <h2 className="text-3xl md:text-4xl font-bold font-karantina text-primary/80">נתקלתם בבעיה?</h2>
            <p className="text-lg md:text-xl text-foreground/70">
              אנו ממשיכים לשפר את הנגישות כל הזמן. אם מצאתם תקלה או שיש לכם הצעה לשיפור, נשמח לשמוע מכם.
            </p>
            <a 
              href="https://wa.me/+972528114746" 
              className="inline-block mt-4 px-10 py-4 bg-primary font-bold rounded-full hover:scale-105 transition-transform"
            >
              צרו קשר בוואטסאפ
            </a>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default AccessibilityStatement;

